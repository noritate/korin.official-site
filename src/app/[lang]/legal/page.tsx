import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { legalRows } from "@/lib/legal";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: `${dict.legal.title}｜${dict.meta.siteName}`, alternates: { canonical: `/${lang}/legal/` } };
}

// 特定商取引法に基づく表記。販売業者・責任者・連絡先は site.ts、それ以外の文は辞書の legal
export default async function LegalPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <SiteHeader lang={lang} dict={dict} path="legal/" variant="sub" />
      <main className="doc">
        <h1>{dict.legal.title}</h1>
        <dl>
          {legalRows(dict, lang).map(([label, value]) => (
            <div key={label} style={{ display: "contents" }}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </main>
      <SiteFooter lang={lang} dict={dict} withNav={false} />
    </>
  );
}
