import type {
  Attire,
  BodyType,
  Category,
  ColorStone,
  CutShape,
  Metal,
  PearlShape,
  PearlType,
  PiercePlacement,
  SkinTone,
  StoneKind,
} from "@/lib/simulator/types";

/** ライフタイム・ケアの項目（表示順） */
export const CARE_ITEMS = ["handover", "initialDefect", "basicCare", "resizing", "repair"] as const;
export type CareItem = (typeof CARE_ITEMS)[number];

/** 特定商取引法に基づく表記の行（表示順） */
export const LEGAL_ROWS = [
  "seller",
  "representative",
  "address",
  "phone",
  "email",
  "price",
  "extraCosts",
  "payment",
  "paymentTiming",
  "delivery",
  "returns",
] as const;
export type LegalRow = (typeof LEGAL_ROWS)[number];

/**
 * 辞書の形。全言語がこの形を満たさないと型エラーになる（訳の抜けを書き出し前に止める）。
 * 選択肢の名前は Record<選択肢, string> なので、シミュレーターに選択肢を足すと全言語の訳が必須になる。
 * 表記の決まり（KORIN_JEWELRY_SPEC.md）：合成ダイヤモンドは正式名称、英語は laboratory-grown、価格は書かない。
 */
export interface Dictionary {
  meta: {
    siteName: string;
    title: string;
    description: string;
  };
  nav: {
    atelier: string;
    consult: string;
    language: string;
    home: string;
  };
  brand: {
    /** ブランドの定義文（検索・AI検索で実体を固定する一文） */
    definition: string;
    /** 当店のダイヤモンドの注記（サイトの全ページと仕様書の最後に出す） */
    disclosure: string;
    /** 無料の表現はこれだけ */
    freeConsultation: string;
  };
  home: {
    heroTagline: string;
    enterAtelier: string;
  };
  atelier: {
    title: string;
    lead: string;
    previewLabel: string;
    specIdLabel: string;
    sections: {
      category: string;
      piercePlacement: string;
      stoneKind: string;
      pearl: string;
      colorStone: string;
      shape: string;
      metal: string;
      bodyType: string;
      skinTone: string;
      attire: string;
    };
    /** {time} を保存時刻に置き換える */
    savedAt: string;
    notSavedYet: string;
    issueSpec: string;
    copySpec: string;
    copied: string;
    reset: string;
  };
  contact: {
    heading: string;
    viaLine: string;
    viaInstagram: string;
    viaEmail: string;
    viaWhatsApp: string;
    viaWeChat: string;
    /** {id} を WeChat ID に置き換える */
    weChatInstruction: string;
    /** メールの件名。{id} を仕様書IDに置き換える */
    emailSubject: string;
  };
  spec: {
    heading: string;
    idLabel: string;
    issuedLabel: string;
    /** 仕様書の最後に添える一文（相談の依頼） */
    closing: string;
  };
  /** TOPページの文言（Muse のデザインモック 2026-11-16 の内容を5言語に） */
  top: TopContent;
  /** アトリエの画面の文言（ステップの見出し・補足・サマリー） */
  atelierUi: AtelierUi;
  /** 保証・アフターケア（KŌRIN ライフタイム・ケア）。オーナー確定 2026-11-14 */
  care: {
    title: string;
    lead: string;
    items: Record<CareItem, { heading: string; body: string }>;
  };
  /** 特定商取引法に基づく表記。販売業者名・責任者名・連絡先は site.ts の値を使う */
  legal: {
    title: string;
    labels: Record<LegalRow, string>;
    /** 責任者名の前に付ける役職 */
    representativeTitle: string;
    /** 住所・電話番号を出さないときの文 */
    disclosedOnRequest: string;
    values: Record<"price" | "extraCosts" | "payment" | "paymentTiming" | "delivery" | "returns", string>;
  };
  options: {
    category: Record<Category, string>;
    piercePlacement: Record<PiercePlacement, string>;
    stoneKind: Record<StoneKind, string>;
    pearl: Record<PearlType, string>;
    colorStone: Record<ColorStone, string>;
    shape: Record<CutShape | PearlShape, string>;
    metal: Record<Metal, string>;
    bodyType: Record<BodyType, string>;
    skinTone: Record<SkinTone, string>;
    attire: Record<Attire, string>;
  };
}

/** TOPページの文言 */
export interface TopContent {
  nav: { about: string; stones: string; collection: string; flow: string; care: string; faq: string; contact: string };
  hero: { define: string; ctaAtelier: string };
  strip: { title: string; body: string }[];
  about: { title: string; lead: string; cards: { title: string; body: string }[]; sceneAlt: string; sceneNote: string };
  stones: {
    title: string;
    lead: string;
    cards: Record<StoneKind, { title: string; body: string; items: string[] }>;
    ctaAtelier: string;
  };
  diamond: {
    title: string;
    lead: string;
    headNatural: string;
    headLab: string;
    rows: { label: string; natural: string; lab: string }[];
    distinguishLabel: string;
    distinguishBody: string;
    honest: string;
    methods: { title: string; body: string }[];
    note: string;
  };
  collection: { title: string; lead: string; items: { title: string; body: string; alt: string }[]; note: string; visualAlt: string };
  shapes: { title: string; lead: string; note: string; altTemplate: string; items: Record<CutShape, string> };
  flow: { title: string; lead: string; steps: { title: string; body: string }[] };
  atelierBanner: { title: string; body: string; button: string };
  care: { title: string; lead: string; more: string };
  faq: { title: string; items: { question: string; answer: string }[] };
  contact: { title: string; lead: string; mailLabel: string };
  operator: {
    title: string;
    labels: Record<"brand" | "operator" | "representative" | "base" | "business" | "contact", string>;
    values: Record<"brand" | "base" | "business" | "contact", string>;
  };
  footer: { legal: string; care: string };
}

/** アトリエの画面の文言 */
export interface AtelierUi {
  labels: { size: string; ringSize: string; chainLength: string; braceletLength: string };
  steps: Record<"item" | "stone" | "metal" | "fit" | "wear", { title: string; hint: string }>;
  stonePanel: Record<StoneKind, string>;
  sub: { cut: string; size: string; type: string; placement: string };
  metalNote: string;
  fitNone: string;
  /** 指定なし・相談して決める・リングサイズの表記（{n} に番号） */
  fit: { unspecified: string; consult: string; ringSize: string };
  summaryAria: string;
  priceNote: string;
  /** {id} に仕様書ID */
  idNote: string;
  notIssued: string;
  staleNote: string;
  afterNote: { label: string; body: string };
  previewCaption: string;
  storageUnavailable: string;
  back: string;
}

/** 仕様書・アトリエの画面だけが使う辞書の部分（アトリエのページには全部ではなくこれだけを渡す） */
export type AtelierDict = Pick<Dictionary, "atelier" | "atelierUi" | "options" | "spec" | "brand" | "contact">;
