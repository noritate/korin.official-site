import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CARE_ITEMS } from "@/lib/i18n/types";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: `${dict.care.title}｜${dict.meta.siteName}`, description: dict.care.lead, alternates: { canonical: `/${lang}/care/` } };
}

// 保証・アフターケア（KŌRIN ライフタイム・ケア）。文言は辞書の care（オーナー確定 2026-11-14）
export default async function CarePage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <SiteHeader lang={lang} dict={dict} path="care/" variant="sub" />
      <main className="doc">
        <h1>{dict.care.title}</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          {dict.care.lead}
        </p>
        {CARE_ITEMS.map((key) => (
          <section className="care-item" key={key}>
            <h2>{dict.care.items[key].heading}</h2>
            <p>{dict.care.items[key].body}</p>
          </section>
        ))}
      </main>
      <SiteFooter lang={lang} dict={dict} withNav={false} />
    </>
  );
}
