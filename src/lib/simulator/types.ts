/*
  シミュレーターの全項目（KORIN_JEWELRY_SPEC.md「シミュレーターの項目」）。
  選択肢は as const の配列を正本にし、型はそこから作る（選択肢を足すと型も辞書の必須キーも自動で増える）。
*/

export const CATEGORIES = ["ring", "pendant", "necklace", "pierce", "bracelet"] as const;
export type Category = (typeof CATEGORIES)[number];

/** ピアスの位置（カテゴリーがピアスのときだけ使う） */
export const PIERCE_PLACEMENTS = ["ear", "nose", "navel"] as const;
export type PiercePlacement = (typeof PIERCE_PLACEMENTS)[number];

export const STONE_KINDS = ["diamond", "pearl", "colorStone"] as const;
export type StoneKind = (typeof STONE_KINDS)[number];

// オーナー確定 2026-11-14：アコヤ・白蝶（ホワイト／ゴールド）・黒蝶・バロックの4種。白蝶は色で2択
export const PEARL_TYPES = ["akoya", "southSeaWhite", "southSeaGold", "tahitianBlack", "baroque"] as const;
export type PearlType = (typeof PEARL_TYPES)[number];

// オーナー確定 2026-11-14：5種
export const COLOR_STONES = ["blueSapphire", "pinkSapphire", "ruby", "emerald", "tanzanite"] as const;
export type ColorStone = (typeof COLOR_STONES)[number];

/** 合成ダイヤモンド・カラーストーンのカット */
export const CUT_SHAPES = [
  "round",
  "oval",
  "pear",
  "emerald",
  "marquise",
  "radiant",
  "cushion",
  "elongatedCushion",
  "princess",
  "asscher",
] as const;
export type CutShape = (typeof CUT_SHAPES)[number];

/** 真珠の形 */
export const PEARL_SHAPES = ["pearlRound", "pearlDrop", "pearlBaroque"] as const;
export type PearlShape = (typeof PEARL_SHAPES)[number];

/** 大きさ：合成ダイヤモンドはカラット、真珠は直径（mm）。"consult" は相談して決める。カラーストーンは相談の中で決める */
export const DIAMOND_SIZES = ["0.30", "0.50", "0.70", "1.00", "1.50", "2.00", "consult"] as const;
export type DiamondSize = (typeof DIAMOND_SIZES)[number];
export const PEARL_SIZES = ["7.0", "7.5", "8.0", "8.5", "9.0", "consult"] as const;
export type PearlSize = (typeof PEARL_SIZES)[number];

/** サイズ等（アイテムごとに1つだけ使う）。"unspecified" は指定なし */
export const RING_SIZES = ["unspecified", "7", "9", "11", "13", "15", "17"] as const;
export type RingSize = (typeof RING_SIZES)[number];
export const CHAIN_LENGTHS = ["unspecified", "40", "45", "50"] as const;
export type ChainLength = (typeof CHAIN_LENGTHS)[number];
export const BRACELET_LENGTHS = ["unspecified", "16", "17", "18", "19"] as const;
export type BraceletLength = (typeof BRACELET_LENGTHS)[number];

export interface FitSelection {
  ringSize: RingSize;
  chainCm: ChainLength;
  braceletCm: BraceletLength;
}

/** アイテムで入力するサイズの項目（ピアスは無し） */
export function fitFieldFor(category: Category): keyof FitSelection | null {
  switch (category) {
    case "ring":
      return "ringSize";
    case "pendant":
    case "necklace":
      return "chainCm";
    case "bracelet":
      return "braceletCm";
    case "pierce":
      return null;
  }
}

/** 石の選択：種類によって選べる形が変わるので、組み合わせを型で縛る */
export type StoneSelection =
  | { kind: "diamond"; shape: CutShape; size: DiamondSize }
  | { kind: "colorStone"; colorStone: ColorStone; shape: CutShape }
  | { kind: "pearl"; pearl: PearlType; shape: PearlShape; size: PearlSize };

/** 地金：プラチナは純度を書かない（表記の決まり）。SV925は扱いなし */
export const METALS = ["platinum", "k18Yellow", "k18Pink", "k18White", "k14Yellow", "k14Pink", "k14White"] as const;
export type Metal = (typeof METALS)[number];

export const BODY_TYPES = ["slender", "natural", "curvy"] as const;
export type BodyType = (typeof BODY_TYPES)[number];

export const SKIN_TONES = ["fair", "olive", "deep"] as const;
export type SkinTone = (typeof SKIN_TONES)[number];

export const ATTIRES = [
  "gym",
  "sweat",
  "yogaPilates",
  "tankTop",
  "sleeveless",
  "wedding",
  "party",
  "nightDress",
  "suit",
  "morning",
] as const;
export type Attire = (typeof ATTIRES)[number];

/** 保存データの版。項目の形を変えたら上げる（古いデータは読み込まずに初期値へ） */
export const SIMULATOR_STATE_VERSION = 2 as const;

export interface SimulatorState {
  version: typeof SIMULATOR_STATE_VERSION;
  category: Category;
  /** カテゴリーがピアスのときだけ意味を持つ。他のカテゴリーでも値は保持して、戻ったときに復元する */
  piercePlacement: PiercePlacement;
  stone: StoneSelection;
  metal: Metal;
  fit: FitSelection;
  /** 着用イメージ（任意）。null は指定なし */
  bodyType: BodyType | null;
  skinTone: SkinTone | null;
  attire: Attire | null;
  /** 最後に変えた時刻（ISO 8601） */
  updatedAt: string;
}

/** 発行した仕様書（相談に引き継ぐ単位） */
export interface IssuedSpec {
  id: string; // KORIN-2026-XXXX
  issuedAt: string; // ISO 8601
  state: SimulatorState;
}

export const DEFAULT_STATE: Omit<SimulatorState, "updatedAt"> = {
  version: SIMULATOR_STATE_VERSION,
  category: "ring",
  piercePlacement: "ear",
  stone: { kind: "diamond", shape: "round", size: "1.00" },
  metal: "platinum",
  fit: { ringSize: "unspecified", chainCm: "unspecified", braceletCm: "unspecified" },
  bodyType: null,
  skinTone: null,
  attire: null,
};

/** 石の種類を切り替えたときの既定の選択（形は種類ごとに選べるものが違う） */
export function defaultStoneFor(kind: StoneKind): StoneSelection {
  switch (kind) {
    case "diamond":
      return { kind: "diamond", shape: "round", size: "1.00" };
    case "colorStone":
      return { kind: "colorStone", colorStone: "blueSapphire", shape: "oval" };
    case "pearl":
      return { kind: "pearl", pearl: "akoya", shape: "pearlRound", size: "8.0" };
  }
}

/** 選んでいる石の種類で選べる形 */
export function shapesFor(kind: StoneKind): readonly (CutShape | PearlShape)[] {
  return kind === "pearl" ? PEARL_SHAPES : CUT_SHAPES;
}
