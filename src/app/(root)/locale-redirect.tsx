"use client";

import { useEffect } from "react";
import { matchLocale } from "@/lib/i18n/config";

/** ブラウザの言語設定に合う /{lang}/ へ移る（履歴に "/" を残さない） */
export function LocaleRedirect() {
  useEffect(() => {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    window.location.replace(`./${matchLocale(languages)}/`);
  }, []);
  return null;
}
