import type { Metadata } from "next";
import { LOCALES, LOCALE_SHORT_LABEL } from "@/lib/i18n/config";
import { LocaleRedirect } from "./locale-redirect";

// 静的公開ではサーバーで振り分けられないので、ブラウザの言語を見て画面内で /{lang}/ へ移る。
// 移れない環境（JavaScript 無効・検索エンジン）向けに、全言語へのリンクを本文に置く
export const metadata: Metadata = {
  title: "KŌRIN Jewelry",
  robots: { index: false, follow: true },
};

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-ink text-ecru-text">
      <LocaleRedirect />
      <p className="font-display text-lead tracking-wordmark">KŌRIN Jewelry</p>
      <nav className="flex gap-6 font-ui text-caption tracking-label">
        {LOCALES.map((l) => (
          <a key={l} href={`./${l}/`} className="fade-quiet hover:text-gold">
            {LOCALE_SHORT_LABEL[l]}
          </a>
        ))}
      </nav>
    </main>
  );
}
