import { SITE } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/** 検索・AI検索向けの構造化データ（Organization と FAQPage）。表記の決まりは辞書に従う */
export function JsonLd({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "KŌRIN Jewelry",
      alternateName: ["コーリン", "コウリン", "こうりん", "こーりん", "光輪", "KORIN Jewelry", "コーリンジュエリー"],
      url: `${SITE.url}/${lang}/`,
      email: SITE.email,
      description: dict.meta.description,
      parentOrganization: { "@type": "Organization", name: SITE.legal.sellerIntl },
      sameAs: [SITE.instagramUrl, SITE.tiktokUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: dict.top.faq.items.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }} />;
}
