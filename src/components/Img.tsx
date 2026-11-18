import { asset } from "@/lib/assets";

/** 静的書き出し用の画像。幅・高さを必ず渡して、読み込み中に画面が動かないようにする */
export function Img({ src, alt, width, height, eager = false }: { src: string; alt: string; width: number; height: number; eager?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset(src)} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} decoding="async" />;
}
