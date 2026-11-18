import type { NextConfig } from "next";

// GitHub Pages へ静的に書き出す（KORIN_JEWELRY_SPEC.md「公開と費用」）。
// プロジェクトサイトは /korin.official-site/ の下に置かれるので、書き出し時に NEXT_PUBLIC_BASE_PATH で渡す
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true }, // 画像の最適化サーバーは静的公開では使えない
};

export default nextConfig;
