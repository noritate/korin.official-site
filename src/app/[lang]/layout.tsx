import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SITE } from "@/config/site";
import { fontVariables } from "@/app/fonts";
import { LOCALES, LOCALE_HTML_LANG, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "../globals.css";
import "../site.css";

// 言語ごとのルートレイアウト（<html lang> を言語で変えるため、言語ごとに持つ）
export const dynamicParams = false;

export function generateStaticParams(): { lang: Locale }[] {
  return LOCALES.map((lang) => ({ lang }));
}

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(`${SITE.url}/`),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_HTML_LANG[l], `/${l}/`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
      type: "website",
      images: [{ url: `${SITE.url}/images/ogp.jpg`, width: 1920, height: 1080 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE.url}/images/ogp.jpg`] },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={LOCALE_HTML_LANG[lang]} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
