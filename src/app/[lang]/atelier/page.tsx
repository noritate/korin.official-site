import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Atelier } from "@/components/Atelier";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: `${dict.atelier.title}｜${dict.meta.siteName}`, description: dict.atelier.lead, alternates: { canonical: `/${lang}/atelier/` } };
}

// アトリエ（仕様シミュレーター）。画面の中身は client の Atelier。ここでは見出しと枠だけ
export default async function AtelierPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { atelier, atelierUi, options, spec, brand, contact } = dict;
  return (
    <>
      <SiteHeader lang={lang} dict={dict} path="atelier/" variant="sub" />
      <main>
        <div className="wrap-wide">
          <div className="page-head">
            <p className="eyebrow">ATELIER — SIMULATOR</p>
            <h1>{dict.atelier.title}</h1>
            <p className="lead">{dict.atelier.lead}</p>
            <div className="rule" />
          </div>
          <Atelier lang={lang} dict={{ atelier, atelierUi, options, spec, brand, contact }} />
        </div>
      </main>
      <SiteFooter lang={lang} dict={dict} withNav={false} />
    </>
  );
}
