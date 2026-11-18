/** public/ の画像のURL。GitHub Pages の basePath（/korin.official-site）を付ける（next/image は使わない） */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
