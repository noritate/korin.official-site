import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <SiteHeader lang={lang} dict={dict} path="" variant="top" />
      <HomePage lang={lang} dict={dict} />
      <SiteFooter lang={lang} dict={dict} withNav />
      <StickyCta lang={lang} dict={dict} />
      <JsonLd lang={lang} dict={dict} />
    </>
  );
}
