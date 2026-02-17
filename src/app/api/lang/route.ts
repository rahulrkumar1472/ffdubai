import {NextResponse} from "next/server";
import {LANG_COOKIE} from "@/lib/i18n/constants";
import {normalizeLang} from "@/lib/i18n/lang";

type LanguagePayload = {
  lang?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as LanguagePayload;
  const lang = normalizeLang(payload.lang);

  const response = NextResponse.json({ok: true, lang});
  response.cookies.set({
    name: LANG_COOKIE,
    value: lang,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  return response;
}
