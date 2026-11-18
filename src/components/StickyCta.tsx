import Link from "next/link";
import { consultCta } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/** スマホだけ、画面の下に相談とアトリエのボタンを常に出す */
export function StickyCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const cta = consultCta(lang, dict);
  const external = cta.href.startsWith("http") || cta.href.startsWith("mailto:");
  return (
    <div className="sticky-cta">
      <a className="btn solid" href={cta.href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
        {cta.label}
      </a>
      <Link className="btn" href={`/${lang}/atelier/`}>
        {dict.nav.atelier}
      </Link>
    </div>
  );
}
