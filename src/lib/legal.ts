/*
  特定商取引法に基づく表記の行を組み立てる（KORIN_JEWELRY_SPEC.md「特定商取引法に基づく表記」）。
  販売業者・責任者・連絡先は site.ts、それ以外の文は辞書から取る。住所・電話番号が空なら「請求があれば開示」の文にする。
*/
import { SITE } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import { LEGAL_ROWS, type Dictionary, type LegalRow } from "@/lib/i18n/types";

export function legalRows(dict: Dictionary, locale: Locale): [label: string, value: string][] {
  const { legal } = SITE;
  const orDisclose = (value: string) => value.trim() || dict.legal.disclosedOnRequest;
  const value: Record<LegalRow, string> = {
    seller: locale === "ja" ? legal.sellerJa : legal.sellerIntl,
    representative: `${dict.legal.representativeTitle} ${legal.representativeName}`,
    address: orDisclose(legal.address),
    phone: orDisclose(legal.phone),
    email: orDisclose(legal.email),
    ...dict.legal.values,
  };
  return LEGAL_ROWS.map((row) => [dict.legal.labels[row], value[row]]);
}
