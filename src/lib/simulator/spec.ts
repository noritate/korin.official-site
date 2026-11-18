/*
  仕様書（Bespoke Spec）：ID の発行と、選んでいる言語での本文。
  ID は KORIN-{西暦}-{4桁}。4桁は紛らわしい文字（0 O 1 I L）を除いた英数字で、乱数から作る。
*/
import { fill } from "@/lib/i18n/get-dictionary";
import type { AtelierDict } from "@/lib/i18n/types";
import { fitFieldFor, type IssuedSpec, type SimulatorState } from "./types";

const ID_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // 0 O 1 I L を除く
const ID_LENGTH = 4;
export const SPEC_ID_PATTERN = /^KORIN-\d{4}-[2-9A-HJKMNP-Z]{4}$/;

function randomIndexes(count: number, max: number): number[] {
  const bytes = new Uint8Array(count);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b % max);
}

/** 新しい仕様書ID。taken に入っている ID とは重ならないようにする（この端末で発行した分） */
export function createSpecId(now: Date = new Date(), taken: ReadonlySet<string> = new Set()): string {
  for (let attempt = 0; attempt < 50; attempt++) {
    const code = randomIndexes(ID_LENGTH, ID_ALPHABET.length)
      .map((i) => ID_ALPHABET[i])
      .join("");
    const id = `KORIN-${now.getFullYear()}-${code}`;
    if (!taken.has(id)) return id;
  }
  throw new Error("仕様書IDを作れませんでした（同じIDが続きました）");
}

export function issueSpec(state: SimulatorState, taken: ReadonlySet<string>, now: Date = new Date()): IssuedSpec {
  return { id: createSpecId(now, taken), issuedAt: now.toISOString(), state };
}

/** 大きさの表示（"consult" は相談の文言、それ以外は単位を付ける） */
export function stoneSizeText(state: SimulatorState, dict: AtelierDict): string | null {
  const s = state.stone;
  if (s.kind === "colorStone") return null;
  if (s.size === "consult") return dict.atelierUi.fit.consult;
  return s.kind === "diamond" ? `${s.size} ct` : `${s.size} mm`;
}

/** サイズ等の表示。このアイテムで使う項目だけ。指定なしは null */
export function fitText(state: SimulatorState, dict: AtelierDict): [label: string, value: string] | null {
  const field = fitFieldFor(state.category);
  if (!field) return null;
  const value = state.fit[field];
  if (value === "unspecified") return null;
  if (field === "ringSize") return [dict.atelierUi.labels.ringSize, fill(dict.atelierUi.fit.ringSize, { n: value })];
  return [field === "chainCm" ? dict.atelierUi.labels.chainLength : dict.atelierUi.labels.braceletLength, `${value} cm`];
}

/** 仕様書の項目（ラベルと値）。ピアスのときだけ位置を、石の種類によって真珠・カラーストーンの種類を出し分け、指定なしの項目は出さない */
export function specLines(state: SimulatorState, dict: AtelierDict): [label: string, value: string][] {
  const { sections } = dict.atelier;
  const o = dict.options;
  const lines: [string, string][] = [[sections.category, o.category[state.category]]];
  if (state.category === "pierce") lines.push([sections.piercePlacement, o.piercePlacement[state.piercePlacement]]);
  lines.push([sections.stoneKind, o.stoneKind[state.stone.kind]]);
  if (state.stone.kind === "pearl") lines.push([sections.pearl, o.pearl[state.stone.pearl]]);
  if (state.stone.kind === "colorStone") lines.push([sections.colorStone, o.colorStone[state.stone.colorStone]]);
  lines.push([sections.shape, o.shape[state.stone.shape]]);
  const size = stoneSizeText(state, dict);
  if (size) lines.push([dict.atelierUi.labels.size, size]);
  lines.push([sections.metal, o.metal[state.metal]]);
  const fit = fitText(state, dict);
  if (fit) lines.push(fit);
  if (state.bodyType) lines.push([sections.bodyType, o.bodyType[state.bodyType]]);
  if (state.skinTone) lines.push([sections.skinTone, o.skinTone[state.skinTone]]);
  if (state.attire) lines.push([sections.attire, o.attire[state.attire]]);
  return lines;
}

/** 相談に貼る仕様書の本文（LINE・メール・WhatsApp・WeChat で同じ文） */
export function specText(spec: IssuedSpec, dict: AtelierDict, locale: string): string {
  const date = new Date(spec.issuedAt).toLocaleDateString(locale);
  return [
    dict.spec.heading,
    `${dict.spec.idLabel}: ${spec.id}`,
    `${dict.spec.issuedLabel}: ${date}`,
    "",
    ...specLines(spec.state, dict).map(([label, value]) => `${label}: ${value}`),
    "",
    dict.spec.closing,
    dict.brand.disclosure,
  ].join("\n");
}
