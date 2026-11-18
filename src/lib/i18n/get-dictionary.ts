import type { Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en";
import ja from "./dictionaries/ja";
import ko from "./dictionaries/ko";
import zhCN from "./dictionaries/zh-CN";
import zhTW from "./dictionaries/zh-TW";

// 静的書き出しなので、全言語を書き出し時に読み込む（ページごとに使う言語の辞書だけが HTML に入る）
const DICTIONARIES: Record<Locale, Dictionary> = {
  ja,
  en,
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  ko,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** "{id}" のような差し込みを置き換える */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
