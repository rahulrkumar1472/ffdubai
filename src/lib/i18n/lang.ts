import {cookies} from "next/headers";
import type {Locale} from "@/lib/i18n";
import {LANG_COOKIE} from "@/lib/i18n/constants";

export const DEFAULT_LANG: Locale = "en";

export function normalizeLang(value?: string | null): Locale {
  return value === "ar" ? "ar" : "en";
}

export function getServerLang(): Locale {
  const cookieStore = cookies();
  return normalizeLang(cookieStore.get(LANG_COOKIE)?.value);
}

export function getLangDirection(lang: Locale) {
  return lang === "ar" ? "rtl" : "ltr";
}
