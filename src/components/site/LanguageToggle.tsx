"use client";

import {useState, useTransition} from "react";
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import type {Locale} from "@/lib/i18n";
import {LANG_COOKIE} from "@/lib/i18n/constants";

export function LanguageToggle({currentLang}: {currentLang: Locale}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [optimisticLang, setOptimisticLang] = useState<Locale>(currentLang);
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const queryString = searchParams?.toString();
  const currentUrl = queryString ? `${pathname}?${queryString}` : pathname;

  const switchLanguage = (nextLang: Locale) => {
    if (nextLang === currentLang) return;

    setOptimisticLang(nextLang);

    startTransition(async () => {
      try {
        await fetch("/api/lang", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({lang: nextLang})
        });
      } catch {
        document.cookie = `${LANG_COOKIE}=${nextLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
      }

      try {
        window.localStorage.setItem(LANG_COOKIE, nextLang);
      } catch {
        // Ignore localStorage write errors.
      }

      document.documentElement.lang = nextLang;
      document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
      router.replace(currentUrl);
      router.refresh();
    });
  };

  return (
    <div aria-label="Language" className="lang-toggle" role="group">
      <button
        aria-pressed={optimisticLang === "en"}
        className="lang-option"
        disabled={pending}
        onClick={() => switchLanguage("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-pressed={optimisticLang === "ar"}
        className="lang-option"
        disabled={pending}
        onClick={() => switchLanguage("ar")}
        type="button"
      >
        AR
      </button>
    </div>
  );
}
