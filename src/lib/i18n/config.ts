/** 対応言語（KORIN_JEWELRY_SPEC.md「ページ構成」）。URL は /{locale}/ */
export const LOCALES = ["ja", "en", "zh-TW", "zh-CN", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ja";

/** ヘッダーの切り替えに出す短い表記 */
export const LOCALE_SHORT_LABEL: Record<Locale, string> = {
  ja: "JA",
  en: "EN",
  "zh-TW": "繁",
  "zh-CN": "简",
  ko: "KO",
};

/** <html lang> と hreflang に使う値 */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  "zh-TW": "zh-Hant-TW",
  "zh-CN": "zh-Hans-CN",
  ko: "ko",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** ブラウザの言語設定から一番近い対応言語を選ぶ（トップの / から移るときに使う） */
export function matchLocale(languages: readonly string[]): Locale {
  for (const raw of languages) {
    const lang = raw.toLowerCase();
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("ko")) return "ko";
    if (lang === "zh-tw" || lang === "zh-hk" || lang === "zh-mo" || lang.startsWith("zh-hant")) return "zh-TW";
    if (lang.startsWith("zh")) return "zh-CN";
    if (lang.startsWith("en")) return "en";
  }
  return DEFAULT_LOCALE;
}
