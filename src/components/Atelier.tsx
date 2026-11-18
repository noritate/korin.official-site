"use client";

/*
  アトリエ（シミュレーター）。左：プレビューと選択内容のサマリー、右：ステップごとの選択。
  選択は端末内（LocalStorage）に自動保存し、再読み込みで戻す。仕様書は「仕様書を作成」で発行し、
  その本文を入れた状態で相談の窓口を開く。価格はここには出さない。
*/
import { useCallback, useEffect, useRef, useState } from "react";
import { Img } from "@/components/Img";
import { contactActions } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/config";
import { fill } from "@/lib/i18n/get-dictionary";
import type { AtelierDict } from "@/lib/i18n/types";
import { issueSpec, specLines, specText } from "@/lib/simulator/spec";
import { clearState, createInitialState, loadIssuedSpecs, loadState, saveIssuedSpec, saveState } from "@/lib/simulator/storage";
import {
  ATTIRES,
  BODY_TYPES,
  BRACELET_LENGTHS,
  CATEGORIES,
  CHAIN_LENGTHS,
  COLOR_STONES,
  CUT_SHAPES,
  DIAMOND_SIZES,
  METALS,
  PEARL_SHAPES,
  PEARL_SIZES,
  PEARL_TYPES,
  PIERCE_PLACEMENTS,
  RING_SIZES,
  SKIN_TONES,
  STONE_KINDS,
  defaultStoneFor,
  fitFieldFor,
  type CutShape,
  type FitSelection,
  type IssuedSpec,
  type SimulatorState,
  type StoneKind,
  type StoneSelection,
} from "@/lib/simulator/types";

const PREVIEW: Record<SimulatorState["category"], string> = {
  ring: "col_solitaire",
  pendant: "col_pendant",
  necklace: "col_pendant",
  pierce: "col_studs",
  bracelet: "col_tennis",
};
const TAB_CAPTION: Record<StoneKind, string> = { diamond: "LABORATORY-GROWN", pearl: "PEARL", colorStone: "COLORED" };
// 見本の色（平らな色）
const PEARL_DOT: Record<(typeof PEARL_TYPES)[number], string> = {
  akoya: "#ece6d6",
  southSeaWhite: "#e4e5ea",
  southSeaGold: "#e6cf93",
  tahitianBlack: "#2c2f3a",
  baroque: "#d9ceb4",
};
const COLOR_DOT: Record<(typeof COLOR_STONES)[number], string> = {
  blueSapphire: "#2f57b0",
  pinkSapphire: "#d9779f",
  ruby: "#b3202f",
  emerald: "#18895a",
  tanzanite: "#6a54b3",
};
const METAL_DOT: Record<(typeof METALS)[number], string> = {
  platinum: "#d5d8dd",
  k18Yellow: "#e6c46a",
  k18Pink: "#e0b0a0",
  k18White: "#dcdde0",
  k14Yellow: "#d4ae57",
  k14Pink: "#d29f8f",
  k14White: "#cfd1d5",
};
const SHAPE_IMAGE = (shape: CutShape): string => `/images/shape_${shape === "elongatedCushion" ? "elongated_cushion" : shape}.jpg`;

/** 内容が同じか（更新時刻は比べない） */
function sameContent(a: SimulatorState, b: SimulatorState): boolean {
  return JSON.stringify({ ...a, updatedAt: "" }) === JSON.stringify({ ...b, updatedAt: "" });
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" className="chip" aria-pressed={on} onClick={onClick}>
      {children}
    </button>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="dot" style={{ background: color }} aria-hidden="true" />;
}

export function Atelier({ lang, dict }: { lang: Locale; dict: AtelierDict }) {
  const ui = dict.atelierUi;
  const o = dict.options;
  const [state, setState] = useState<SimulatorState>(() => createInitialState());
  const [issued, setIssued] = useState<IssuedSpec | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [storageOk, setStorageOk] = useState(true);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);
  // 石の種類を切り替えて戻ったとき、前の選択に戻す
  const stoneMemo = useRef<Partial<Record<StoneKind, StoneSelection>>>({});

  useEffect(() => {
    // 保存データの復元は表示の後（書き出した HTML と最初の描画を一致させるため）
    const stored = loadState();
    if (stored) {
      setState(stored);
      stoneMemo.current[stored.stone.kind] = stored.stone;
    }
    setIssued(loadIssuedSpecs()[0] ?? null);
    setReady(true);
  }, []);

  const update = useCallback((patch: Partial<SimulatorState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch, updatedAt: new Date().toISOString() };
      const ok = saveState(next);
      setStorageOk(ok);
      if (ok) setSavedAt(next.updatedAt);
      return next;
    });
  }, []);

  const setStone = (stone: StoneSelection) => {
    stoneMemo.current[stone.kind] = stone;
    update({ stone });
  };
  const switchKind = (kind: StoneKind) => {
    if (kind !== state.stone.kind) setStone(stoneMemo.current[kind] ?? defaultStoneFor(kind));
  };
  const setFit = (patch: Partial<FitSelection>) => update({ fit: { ...state.fit, ...patch } });

  const stale = issued !== null && !sameContent(issued.state, state);
  const rows = specLines(state, dict);
  const fitField = fitFieldFor(state.category);
  const stone = state.stone;

  const issue = () => {
    const taken = new Set(loadIssuedSpecs().map((s) => s.id));
    const spec = issueSpec(state, taken);
    saveIssuedSpec(spec);
    setIssued(spec);
    setCopied(false);
  };
  const reset = () => {
    clearState();
    stoneMemo.current = {};
    setState(createInitialState());
    setSavedAt(null);
  };
  const body = issued ? specText(issued, dict, lang) : "";
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  const actions = issued && !stale ? contactActions(lang, dict, issued.id, body) : [];
  const time = savedAt ? new Date(savedAt).toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" }) : "";

  return (
    <div className="layout">
      <aside className="side">
        <div className="preview">
          <Img src={`/images/${PREVIEW[state.category]}.jpg`} alt={o.category[state.category]} width={640} height={640} eager />
          <p className="cap">{ui.previewCaption}</p>
        </div>

        <div className="summary" aria-label={ui.summaryAria}>
          <div className="spec-id">
            <span className="lbl">{dict.atelier.specIdLabel}</span>
            <span className="num">{issued ? issued.id : ui.notIssued}</span>
          </div>
          <dl>
            {rows.map(([label, value]) => (
              <div className="row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="small">{ui.priceNote}</p>

          <div className="cta-col">
            <button type="button" className={issued && !stale ? "btn" : "btn solid"} onClick={issue}>
              {dict.atelier.issueSpec}
            </button>
            {issued && !stale && (
              <>
                {actions.map((a) =>
                  a.href ? (
                    <a key={a.channel} className="btn solid" href={a.href} {...(a.channel === "email" ? {} : { target: "_blank", rel: "noopener" })}>
                      {a.label}
                    </a>
                  ) : (
                    <p key={a.channel} className="small">
                      {a.label}：{a.note}
                    </p>
                  ),
                )}
                <button type="button" className="btn" onClick={copy}>
                  {copied ? dict.atelier.copied : dict.atelier.copySpec}
                </button>
              </>
            )}
          </div>
          {stale && <p className="small stale">{ui.staleNote}</p>}
          {issued && !stale && <p className="small">{fill(ui.idNote, { id: issued.id })}</p>}
          <p className="small" aria-live="polite">
            {!storageOk ? ui.storageUnavailable : ready && savedAt ? fill(dict.atelier.savedAt, { time }) : dict.atelier.notSavedYet}
          </p>
        </div>
      </aside>

      <div>
        {/* 01 アイテム */}
        <div className="step">
          <div className="step-head">
            <span className="no">01</span>
            <h2>{ui.steps.item.title}</h2>
            <span className="hint">{ui.steps.item.hint}</span>
          </div>
          <div className="chips">
            {CATEGORIES.map((c) => (
              <Chip key={c} on={state.category === c} onClick={() => update({ category: c })}>
                {o.category[c]}
              </Chip>
            ))}
          </div>
          {state.category === "pierce" && (
            <>
              <p className="sub-label">{ui.sub.placement}</p>
              <div className="chips">
                {PIERCE_PLACEMENTS.map((p) => (
                  <Chip key={p} on={state.piercePlacement === p} onClick={() => update({ piercePlacement: p })}>
                    {o.piercePlacement[p]}
                  </Chip>
                ))}
              </div>
            </>
          )}
        </div>

        {/* 02 石 */}
        <div className="step">
          <div className="step-head">
            <span className="no">02</span>
            <h2>{ui.steps.stone.title}</h2>
            <span className="hint">{ui.steps.stone.hint}</span>
          </div>
          <div className="tabs" role="tablist">
            {STONE_KINDS.map((kind) => (
              <button key={kind} type="button" role="tab" aria-selected={stone.kind === kind} onClick={() => switchKind(kind)}>
                <small>{TAB_CAPTION[kind]}</small>
                {o.stoneKind[kind]}
              </button>
            ))}
          </div>
          <p className="panel-note">{ui.stonePanel[stone.kind]}</p>

          {stone.kind === "pearl" && (
            <>
              <p className="sub-label">{ui.sub.type}</p>
              <div className="chips">
                {PEARL_TYPES.map((p) => (
                  <Chip key={p} on={stone.pearl === p} onClick={() => setStone({ ...stone, pearl: p })}>
                    <Dot color={PEARL_DOT[p]} />
                    {o.pearl[p]}
                  </Chip>
                ))}
              </div>
              <p className="sub-label">{ui.sub.cut}</p>
              <div className="chips">
                {PEARL_SHAPES.map((s) => (
                  <Chip key={s} on={stone.shape === s} onClick={() => setStone({ ...stone, shape: s })}>
                    {o.shape[s]}
                  </Chip>
                ))}
              </div>
              <p className="sub-label">{ui.sub.size}</p>
              <div className="chips">
                {PEARL_SIZES.map((s) => (
                  <Chip key={s} on={stone.size === s} onClick={() => setStone({ ...stone, size: s })}>
                    {s === "consult" ? ui.fit.consult : `${s} mm`}
                  </Chip>
                ))}
              </div>
            </>
          )}

          {stone.kind === "colorStone" && (
            <>
              <p className="sub-label">{ui.sub.type}</p>
              <div className="chips">
                {COLOR_STONES.map((c) => (
                  <Chip key={c} on={stone.colorStone === c} onClick={() => setStone({ ...stone, colorStone: c })}>
                    <Dot color={COLOR_DOT[c]} />
                    {o.colorStone[c]}
                  </Chip>
                ))}
              </div>
            </>
          )}

          {stone.kind !== "pearl" && (
            <>
              <p className="sub-label">{ui.sub.cut}</p>
              <div className="chips">
                {CUT_SHAPES.map((s) => (
                  <Chip key={s} on={stone.shape === s} onClick={() => setStone({ ...stone, shape: s })}>
                    <Img src={SHAPE_IMAGE(s)} alt="" width={34} height={34} />
                    {o.shape[s]}
                  </Chip>
                ))}
              </div>
            </>
          )}

          {stone.kind === "diamond" && (
            <>
              <p className="sub-label">{ui.sub.size}</p>
              <div className="chips">
                {DIAMOND_SIZES.map((s) => (
                  <Chip key={s} on={stone.size === s} onClick={() => setStone({ ...stone, size: s })}>
                    {s === "consult" ? ui.fit.consult : `${s} ct`}
                  </Chip>
                ))}
              </div>
            </>
          )}
        </div>

        {/* 03 地金 */}
        <div className="step">
          <div className="step-head">
            <span className="no">03</span>
            <h2>{ui.steps.metal.title}</h2>
            <span className="hint">{ui.steps.metal.hint}</span>
          </div>
          <div className="chips">
            {METALS.map((m) => (
              <Chip key={m} on={state.metal === m} onClick={() => update({ metal: m })}>
                <Dot color={METAL_DOT[m]} />
                {o.metal[m]}
              </Chip>
            ))}
          </div>
          <p className="panel-note" style={{ marginTop: "1rem" }}>
            {ui.metalNote}
          </p>
        </div>

        {/* 04 サイズ等 */}
        <div className="step">
          <div className="step-head">
            <span className="no">04</span>
            <h2>{ui.steps.fit.title}</h2>
            <span className="hint">{ui.steps.fit.hint}</span>
          </div>
          {fitField === null && <p className="panel-note">{ui.fitNone}</p>}
          {fitField === "ringSize" && (
            <>
              <p className="sub-label">{ui.labels.ringSize}</p>
              <div className="chips">
                {RING_SIZES.map((v) => (
                  <Chip key={v} on={state.fit.ringSize === v} onClick={() => setFit({ ringSize: v })}>
                    {v === "unspecified" ? ui.fit.unspecified : fill(ui.fit.ringSize, { n: v })}
                  </Chip>
                ))}
              </div>
            </>
          )}
          {fitField === "chainCm" && (
            <>
              <p className="sub-label">{ui.labels.chainLength}</p>
              <div className="chips">
                {CHAIN_LENGTHS.map((v) => (
                  <Chip key={v} on={state.fit.chainCm === v} onClick={() => setFit({ chainCm: v })}>
                    {v === "unspecified" ? ui.fit.unspecified : `${v} cm`}
                  </Chip>
                ))}
              </div>
            </>
          )}
          {fitField === "braceletCm" && (
            <>
              <p className="sub-label">{ui.labels.braceletLength}</p>
              <div className="chips">
                {BRACELET_LENGTHS.map((v) => (
                  <Chip key={v} on={state.fit.braceletCm === v} onClick={() => setFit({ braceletCm: v })}>
                    {v === "unspecified" ? ui.fit.unspecified : `${v} cm`}
                  </Chip>
                ))}
              </div>
            </>
          )}
        </div>

        {/* 05 着用イメージ（任意） */}
        <div className="step">
          <div className="step-head">
            <span className="no">05</span>
            <h2>{ui.steps.wear.title}</h2>
            <span className="hint">{ui.steps.wear.hint}</span>
          </div>
          <p className="sub-label">{dict.atelier.sections.bodyType}</p>
          <div className="chips">
            <Chip on={state.bodyType === null} onClick={() => update({ bodyType: null })}>
              {ui.fit.unspecified}
            </Chip>
            {BODY_TYPES.map((v) => (
              <Chip key={v} on={state.bodyType === v} onClick={() => update({ bodyType: v })}>
                {o.bodyType[v]}
              </Chip>
            ))}
          </div>
          <p className="sub-label">{dict.atelier.sections.skinTone}</p>
          <div className="chips">
            <Chip on={state.skinTone === null} onClick={() => update({ skinTone: null })}>
              {ui.fit.unspecified}
            </Chip>
            {SKIN_TONES.map((v) => (
              <Chip key={v} on={state.skinTone === v} onClick={() => update({ skinTone: v })}>
                {o.skinTone[v]}
              </Chip>
            ))}
          </div>
          <p className="sub-label">{dict.atelier.sections.attire}</p>
          <div className="chips">
            <Chip on={state.attire === null} onClick={() => update({ attire: null })}>
              {ui.fit.unspecified}
            </Chip>
            {ATTIRES.map((v) => (
              <Chip key={v} on={state.attire === v} onClick={() => update({ attire: v })}>
                {o.attire[v]}
              </Chip>
            ))}
          </div>
        </div>

        <div className="after-note">
          <b>{ui.afterNote.label}</b>：{ui.afterNote.body}
        </div>
        <p style={{ marginTop: "1.25rem", textAlign: "center" }}>
          <button type="button" className="btn" onClick={reset}>
            {dict.atelier.reset}
          </button>
        </p>
      </div>
    </div>
  );
}
