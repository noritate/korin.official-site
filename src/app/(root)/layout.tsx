import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";
import "../globals.css";
import "../site.css";

// "/" だけのルートレイアウト（言語のページは [lang]/layout.tsx が別のルートレイアウトを持つ）
export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
