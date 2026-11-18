/*
  シミュレーターの選択を LocalStorage に保存・復元する。
  その人の下書きなので端末内保存でよい（KORIN_JEWELRY_SPEC.md「シミュレーターの項目」）。
  読み込んだ値は1項目ずつ確かめ、版が違う・壊れているデータは捨てて初期値に戻す。
  LocalStorage が使えない（プライベートブラウズ等）ときも画面は動くよう、例外は握って null を返す。
*/
import {
  ATTIRES,
  BODY_TYPES,
  BRACELET_LENGTHS,
  CATEGORIES,
  CHAIN_LENGTHS,
  COLOR_STONES,
  CUT_SHAPES,
  DEFAULT_STATE,
  DIAMOND_SIZES,
  METALS,
  PEARL_SHAPES,
  PEARL_TYPES,
  PEARL_SIZES,
  PIERCE_PLACEMENTS,
  RING_SIZES,
  SIMULATOR_STATE_VERSION,
  SKIN_TONES,
  type IssuedSpec,
  type SimulatorState,
  type StoneSelection,
} from "./types";

const STATE_KEY = "korin.atelier.state";
const SPECS_KEY = "korin.atelier.specs";
const MAX_SPECS = 20;

function isOneOf<T extends string>(list: readonly T[], value: unknown): value is T {
  return typeof value === "string" && (list as readonly string[]).includes(value);
}

function parseStone(value: unknown): StoneSelection | null {
  if (!value || typeof value !== "object") return null;
  const s = value as Record<string, unknown>;
  if (s.kind === "diamond" && isOneOf(CUT_SHAPES, s.shape) && isOneOf(DIAMOND_SIZES, s.size)) {
    return { kind: "diamond", shape: s.shape, size: s.size };
  }
  if (s.kind === "colorStone" && isOneOf(COLOR_STONES, s.colorStone) && isOneOf(CUT_SHAPES, s.shape)) {
    return { kind: "colorStone", colorStone: s.colorStone, shape: s.shape };
  }
  if (s.kind === "pearl" && isOneOf(PEARL_TYPES, s.pearl) && isOneOf(PEARL_SHAPES, s.shape) && isOneOf(PEARL_SIZES, s.size)) {
    return { kind: "pearl", pearl: s.pearl, shape: s.shape, size: s.size };
  }
  return null;
}

/** 保存データを確かめて SimulatorState に戻す。1つでも合わなければ null */
export function parseState(value: unknown): SimulatorState | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;
  const stone = parseStone(v.stone);
  const f = v.fit && typeof v.fit === "object" ? (v.fit as Record<string, unknown>) : null;
  const fit =
    f && isOneOf(RING_SIZES, f.ringSize) && isOneOf(CHAIN_LENGTHS, f.chainCm) && isOneOf(BRACELET_LENGTHS, f.braceletCm)
      ? { ringSize: f.ringSize, chainCm: f.chainCm, braceletCm: f.braceletCm }
      : null;
  if (
    v.version !== SIMULATOR_STATE_VERSION ||
    !stone ||
    !isOneOf(CATEGORIES, v.category) ||
    !isOneOf(PIERCE_PLACEMENTS, v.piercePlacement) ||
    !isOneOf(METALS, v.metal) ||
    !fit ||
    !(v.bodyType === null || isOneOf(BODY_TYPES, v.bodyType)) ||
    !(v.skinTone === null || isOneOf(SKIN_TONES, v.skinTone)) ||
    !(v.attire === null || isOneOf(ATTIRES, v.attire)) ||
    typeof v.updatedAt !== "string"
  ) {
    return null;
  }
  return {
    version: SIMULATOR_STATE_VERSION,
    category: v.category,
    piercePlacement: v.piercePlacement,
    stone,
    metal: v.metal,
    fit,
    bodyType: v.bodyType,
    skinTone: v.skinTone,
    attire: v.attire,
    updatedAt: v.updatedAt,
  };
}

export function createInitialState(now: Date = new Date()): SimulatorState {
  return { ...DEFAULT_STATE, updatedAt: now.toISOString() };
}

function readJson(key: string): unknown {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/** 戻り値 false：保存できなかった（容量・プライベートブラウズ等）。画面で「保存できない」と伝えるのに使う */
function writeJson(key: string, value: unknown): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function loadState(): SimulatorState | null {
  return parseState(readJson(STATE_KEY));
}

export function saveState(state: SimulatorState): boolean {
  return writeJson(STATE_KEY, state);
}

export function clearState(): void {
  try {
    window.localStorage.removeItem(STATE_KEY);
  } catch {
    // 消せなくても画面側で初期値に戻すので問題ない
  }
}

export function loadIssuedSpecs(): IssuedSpec[] {
  const raw = readJson(SPECS_KEY);
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((item): IssuedSpec[] => {
    if (!item || typeof item !== "object") return [];
    const { id, issuedAt, state } = item as Record<string, unknown>;
    const parsed = parseState(state);
    return typeof id === "string" && typeof issuedAt === "string" && parsed ? [{ id, issuedAt, state: parsed }] : [];
  });
}

/** 発行した仕様書を新しい順に残す（最大20件） */
export function saveIssuedSpec(spec: IssuedSpec): boolean {
  const others = loadIssuedSpecs().filter((s) => s.id !== spec.id);
  return writeJson(SPECS_KEY, [spec, ...others].slice(0, MAX_SPECS));
}
