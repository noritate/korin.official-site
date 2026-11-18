/*
  外部の窓口とリンク。空文字の窓口は画面に出さない（KORIN_JEWELRY_SPEC.md「相談の導線」）。
  ここに個人の電話番号・住所は書かない。決済リンク（BASE・Stripe）はサイトに常設せず、相談の後に個別に案内する。
*/
export interface SiteConfig {
  name: string;
  url: string;
  email: string;
  line: { addFriendUrl: string; basicId: string };
  instagramUrl: string;
  tiktokUrl: string;
  whatsAppNumber: string;
  weChatId: string;
  /** 特定商取引法に基づく表記（KORIN_JEWELRY_SPEC.md）。空文字の住所・電話番号は「請求があれば遅滞なく開示」の文を出す */
  legal: {
    /** 販売業者（日本語ページ用・登記の商号） */
    sellerJa: string;
    /** 販売業者（日本語以外のページ用・英文表記） */
    sellerIntl: string;
    /** 運営統括責任者の氏名（役職は辞書の legal.representativeTitle） */
    representativeName: string;
    address: string;
    phone: string;
    email: string;
  };
}

export const SITE: SiteConfig = {
  name: "KŌRIN Jewelry",
  /** 本番の公開URL（canonical・sitemap・OGP に使う） */
  url: "https://koimari-official.github.io/korin.official-site",
  email: "korin.jewelry@gmail.com",
  line: {
    /** 友だち追加URL（オーナー確定 2026-11-14。QEQGMgv・VvPOVdyD は使わない） */
    addFriendUrl: "https://lin.ee/VvPOVdyD",
    /** ベーシックID（@から始まる）。仕様書の本文を入れた状態でトークを開くのに使う */
    basicId: "@180jbmko",
  },
  instagramUrl: "https://www.instagram.com/korin_jewelry/",
  tiktokUrl: "https://www.tiktok.com/@korin.jewelry",
  /** 国際電話の形式・数字だけ（例 819012345678）。未設定なら出さない */
  whatsAppNumber: "",
  /** 未設定なら出さない */
  weChatId: "",
  legal: {
    // 販売事業者は法人（株式会社NORI&TATE）
    sellerJa: "株式会社ＮＯＲＩ＆ＴＡＴＥ",
    sellerIntl: "NORI&TATE Co., Ltd.",
    representativeName: "吉田 光輝",
    /** 公開用の住所が決まったら入れる。空のあいだは「請求があれば遅滞なく開示」 */
    address: "",
    /** 公開用の電話番号が決まったら入れる。空のあいだは「請求があれば遅滞なく開示」 */
    phone: "",
    /** 公開用のメール。相談窓口と同じアドレス */
    email: "korin.jewelry@gmail.com",
  },
};
