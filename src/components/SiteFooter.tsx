import Link from "next/link";
import { SITE } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function SiteFooter({ lang, dict, withNav }: { lang: Locale; dict: Dictionary; withNav: boolean }) {
  const base = `/${lang}/`;
  const nav = dict.top.nav;
  const seller = lang === "ja" ? SITE.legal.sellerJa : SITE.legal.sellerIntl;
  return (
    <footer className="site-footer">
      {withNav && (
        <div className="footer-nav">
          <Link href="#about">{nav.about}</Link>
          <Link href="#stones">{nav.stones}</Link>
          <Link href="#collection">{nav.collection}</Link>
          <Link href={`${base}atelier/`}>{dict.nav.atelier}</Link>
          <Link href="#flow">{nav.flow}</Link>
          <Link href="#faq">{nav.faq}</Link>
          <Link href="#contact">{nav.contact}</Link>
        </div>
      )}
      <p>
        <Link href={base}>{dict.meta.siteName}</Link>｜{seller}
      </p>
      <p>
        <Link href={`${base}care/`}>{dict.top.footer.care}</Link>　｜　<Link href={`${base}legal/`}>{dict.top.footer.legal}</Link>
      </p>
      <p>{dict.brand.disclosure}</p>
      <p>© 2026 NORI&amp;TATE Co., Ltd.</p>
    </footer>
  );
}
