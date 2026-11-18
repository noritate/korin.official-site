import { describe, expect, it } from "vitest";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LOCALES } from "@/lib/i18n/config";
import { contactActions } from "@/lib/contact";
import { SITE } from "@/config/site";
import { legalRows } from "@/lib/legal";
import { LEGAL_ROWS } from "@/lib/i18n/types";
import { createSpecId, issueSpec, SPEC_ID_PATTERN, specLines, specText } from "./spec";
import { createInitialState, parseState } from "./storage";
import { defaultStoneFor, shapesFor, type SimulatorState } from "./types";

const now = new Date("2026-11-14T10:00:00+09:00");

describe("保存データの読み込み", () => {
  it("初期値はそのまま読み戻せる", () => {
    const state = createInitialState(now);
    expect(parseState(JSON.parse(JSON.stringify(state)))).toEqual(state);
  });

  it("版が違う・項目が壊れているデータは捨てる", () => {
    const state = createInitialState(now);
    expect(parseState({ ...state, version: 0 })).toBeNull();
    expect(parseState({ ...state, metal: "sv925" })).toBeNull();
    expect(parseState({ ...state, stone: { kind: "pearl", pearl: "akoya", shape: "round" } })).toBeNull(); // 真珠にカットの形は不可
    expect(parseState("壊れたデータ")).toBeNull();
  });

  it("石の種類ごとに選べる形が決まっている", () => {
    expect(shapesFor("pearl")).toContain(defaultStoneFor("pearl").shape);
    expect(shapesFor("diamond")).toContain(defaultStoneFor("diamond").shape);
    expect(shapesFor("colorStone")).toContain(defaultStoneFor("colorStone").shape);
  });
});

describe("仕様書", () => {
  it("ID は KORIN-西暦-4桁で、紛らわしい文字を含まない", () => {
    for (let i = 0; i < 200; i++) {
      const id = createSpecId(now);
      expect(id).toMatch(SPEC_ID_PATTERN);
      expect(id.slice(11)).not.toMatch(/[01OIL]/);
    }
  });

  it("この端末で発行済みの ID とは重ならない", () => {
    const taken = new Set(Array.from({ length: 300 }, () => createSpecId(now)));
    expect(taken.has(createSpecId(now, taken))).toBe(false);
  });

  it("ピアスのときだけ位置を、真珠のときだけ真珠の種類を出す", () => {
    const dict = getDictionary("ja");
    const ring = createInitialState(now);
    expect(specLines(ring, dict).map(([l]) => l)).not.toContain(dict.atelier.sections.piercePlacement);
    const pierce: SimulatorState = { ...ring, category: "pierce", stone: defaultStoneFor("pearl") };
    const labels = specLines(pierce, dict).map(([l]) => l);
    expect(labels).toContain(dict.atelier.sections.piercePlacement);
    expect(labels).toContain(dict.atelier.sections.pearl);
  });

  it("本文の最後に合成ダイヤモンドの注記が付く（全言語）", () => {
    const spec = issueSpec(createInitialState(now), new Set(), now);
    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      expect(specText(spec, dict, locale).endsWith(dict.brand.disclosure)).toBe(true);
    }
  });
});

describe("表記の決まり（全言語の辞書）", () => {
  const all = (value: unknown): string[] =>
    typeof value === "string" ? [value] : value && typeof value === "object" ? Object.values(value).flatMap(all) : [];

  it.each(LOCALES)("%s：禁止の表現を含まない", (locale) => {
    const text = all(getDictionary(locale)).join("\n");
    expect(text).not.toMatch(/lab-grown/i);
    expect(text).not.toMatch(/ダイヤ(?!モンド)/);
    expect(text).not.toMatch(/本物|サステナブル|エコ|Made in Japan|日本の職人|国内検品|国内アトリエ|最高峰|No\.1|24時間/);
    expect(text).not.toMatch(/Pt950|Pt900|SV925/);
    // 価格を載せない。オーナー採用のキャッチコピー（home.heroTagline の「1000万円の輝き」）だけは例外
    const { home, ...rest } = getDictionary(locale);
    const withoutTagline = [...all(rest), home.enterAtelier].join("\n");
    expect(withoutTagline).not.toMatch(/[¥￥]\s?\d|\d\s?(円|万|元|원|圓)/);
  });
});

describe("特定商取引法に基づく表記", () => {
  it.each(LOCALES)("%s：全行がそろい、空の住所・電話番号は「請求があれば開示」になる", (locale) => {
    const dict = getDictionary(locale);
    const rows = legalRows(dict, locale);
    expect(rows).toHaveLength(LEGAL_ROWS.length);
    for (const [label, value] of rows) {
      expect(label.trim()).not.toBe("");
      expect(value.trim()).not.toBe("");
    }
    const value = Object.fromEntries(rows);
    if (!SITE.legal.address) expect(value[dict.legal.labels.address]).toBe(dict.legal.disclosedOnRequest);
    if (!SITE.legal.phone) expect(value[dict.legal.labels.phone]).toBe(dict.legal.disclosedOnRequest);
    expect(value[dict.legal.labels.seller]).toBe(locale === "ja" ? SITE.legal.sellerJa : SITE.legal.sellerIntl);
  });
});

describe("相談の窓口", () => {
  it("日本語は公式LINEが最初で、仕様書の本文を入れて開く", () => {
    const dict = getDictionary("ja");
    const [first] = contactActions("ja", dict, "KORIN-2026-ABCD", "本文");
    expect(first.channel).toBe("line");
    expect(first.href).toContain(encodeURIComponent("本文"));
  });

  it("公式LINEは確定したID・URLを使う", () => {
    const [first] = contactActions("ja", getDictionary("ja"), "KORIN-2026-ABCD", "本文");
    expect(first.href).toContain("/oaMessage/%40180jbmko/");
    expect(SITE.line.addFriendUrl).toBe("https://lin.ee/VvPOVdyD");
  });

  it("未設定の窓口（WhatsApp・WeChat）は出さない", () => {
    for (const locale of LOCALES) {
      const channels = contactActions(locale, getDictionary(locale), "KORIN-2026-ABCD", "x").map((a) => a.channel);
      expect(channels).not.toContain("whatsApp");
      expect(channels).not.toContain("weChat");
      expect(channels.length).toBeGreaterThan(0);
    }
  });
});
