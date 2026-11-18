/*
  相談の窓口を言語で出し分け、仕様書の本文を入れた状態で開くリンクを作る（KORIN_JEWELRY_SPEC.md「相談の導線」）。
  URL・ID が未設定の窓口は返さない。
*/
import { SITE } from "@/config/site";
import { fill } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export type ContactChannel = "line" | "instagram" | "email" | "whatsApp" | "weChat";

const ORDER: Record<Locale, ContactChannel[]> = {
  ja: ["line", "instagram", "email"],
  "zh-TW": ["line", "email", "whatsApp"],
  en: ["email", "whatsApp", "instagram"],
  ko: ["email", "whatsApp", "instagram"],
  "zh-CN": ["weChat", "email"],
};

export interface ContactAction {
  channel: ContactChannel;
  label: string;
  /** 開くリンク。WeChat はリンクで本文を渡せないので null（ID を表示して本文をコピーしてもらう） */
  href: string | null;
  /** 画面に添える説明（WeChat の手順など） */
  note?: string;
}

function isConfigured(channel: ContactChannel): boolean {
  switch (channel) {
    case "line":
      return SITE.line.basicId !== "" || SITE.line.addFriendUrl !== "";
    case "instagram":
      return SITE.instagramUrl !== "";
    case "email":
      return SITE.email !== "";
    case "whatsApp":
      return SITE.whatsAppNumber !== "";
    case "weChat":
      return SITE.weChatId !== "";
  }
}

/** LINE：ベーシックIDがあれば本文入りでトークを開く（line.me/R/oaMessage）。無ければ友だち追加URL */
function lineHref(text: string): string {
  if (SITE.line.basicId) {
    return `https://line.me/R/oaMessage/${encodeURIComponent(SITE.line.basicId)}/?${encodeURIComponent(text)}`;
  }
  return SITE.line.addFriendUrl;
}

export function contactActions(locale: Locale, dict: Pick<Dictionary, "contact">, specId: string, text: string): ContactAction[] {
  const c = dict.contact;
  return ORDER[locale].filter(isConfigured).map((channel): ContactAction => {
    switch (channel) {
      case "line":
        return { channel, label: c.viaLine, href: lineHref(text) };
      case "instagram":
        // Instagram の DM はリンクで本文を渡せない。プロフィールを開き、コピーした本文を貼ってもらう
        return { channel, label: c.viaInstagram, href: SITE.instagramUrl };
      case "email": {
        const subject = encodeURIComponent(fill(c.emailSubject, { id: specId }));
        return { channel, label: c.viaEmail, href: `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(text)}` };
      }
      case "whatsApp":
        return { channel, label: c.viaWhatsApp, href: `https://wa.me/${SITE.whatsAppNumber}?text=${encodeURIComponent(text)}` };
      case "weChat":
        return { channel, label: c.viaWeChat, href: null, note: fill(c.weChatInstruction, { id: SITE.weChatId }) };
    }
  });
}

/** ヘッダー・ヒーローの相談ボタン。その言語で最初に使える窓口（日本語・繁体字はLINE、他はメール等）。無ければページ内の問い合わせへ */
export function consultCta(locale: Locale, dict: Dictionary): { label: string; href: string } {
  const first = contactActions(locale, dict, "", "").find((a) => a.href !== null);
  if (!first) return { label: dict.top.nav.contact, href: "#contact" };
  if (first.channel === "line") return { label: first.label, href: SITE.line.addFriendUrl };
  if (first.channel === "email") return { label: first.label, href: `mailto:${SITE.email}` };
  return { label: first.label, href: first.href as string };
}
