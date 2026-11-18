import Link from "next/link";
import { consultCta } from "@/lib/contact";
import { LOCALES, LOCALE_HTML_LANG, LOCALE_SHORT_LABEL, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/** path：いま見ているページの言語の後ろの部分（"" / "atelier/" / "care/" / "legal/"）。言語の切り替えで同じページへ移る */
export function SiteHeader({ lang, dict, path, variant }: { lang: Locale; dict: Dictionary; path: string; variant: "top" | "sub" }) {
  const base = `/${lang}/`;
  const cta = consultCta(lang, dict);
  const nav = dict.top.nav;
  const isExternal = cta.href.startsWith("http") || cta.href.startsWith("mailto:");
  return (
    <header className="site-header">
      <div className="site-header-in">
        <Link className="wordmark" href={base}>
          KŌRIN<small>JEWELRY</small>
        </Link>
        {variant === "top" ? (
          <nav className="main-nav" aria-label="Main">
            <Link href="#about">{nav.about}</Link>
            <Link href="#stones">{nav.stones}</Link>
            <Link href="#collection">{nav.collection}</Link>
            <Link href="#flow">{nav.flow}</Link>
            <Link href="#care">{nav.care}</Link>
            <Link href="#faq">{nav.faq}</Link>
          </nav>
        ) : (
          <Link className="back-link" href={base}>
            {dict.atelierUi.back}
          </Link>
        )}
        <div className="header-right">
          <div className="lang" aria-label={dict.nav.language}>
            {LOCALES.map((l) => (
              <Link key={l} href={`/${l}/${path}`} hrefLang={LOCALE_HTML_LANG[l]} lang={LOCALE_HTML_LANG[l]} aria-current={l === lang ? "true" : undefined}>
                {LOCALE_SHORT_LABEL[l]}
              </Link>
            ))}
          </div>
          <a className="btn solid" href={cta.href} {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}>
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
