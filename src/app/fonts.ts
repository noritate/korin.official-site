import { Cormorant_Garamond, Inter, Noto_Serif_JP } from "next/font/google";

// 韓国語・中国語の明朝は端末の明朝を使う（globals.css の html:lang）。Google の CJK フォントは書き出し時の取り込みが失敗したため
// 書き出し時にフォントを取り込んで自前で配信する（外部への読み込みを出さない）
export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const notoSerifJp = Noto_Serif_JP({
  weight: ["300", "400", "500"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  preload: false, // 日本語は字数が多いので先読みしない
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = [cormorant, notoSerifJp, inter].map((f) => f.variable).join(" ");
