"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {locales} from "@/lib/i18n";

function buildLocalePath(pathname: string, targetLocale: "en" | "ar") {
  const segments = pathname.split("/").filter(Boolean);

  if (!segments.length) {
    return `/${targetLocale}`;
  }

  const first = segments[0];

  if (locales.includes(first as "en" | "ar")) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}/${segments.join("/")}`;
}

export function LanguageToggle({currentLocale}: {currentLocale: "en" | "ar"}) {
  const pathname = usePathname() || `/${currentLocale}`;

  const enPath = buildLocalePath(pathname, "en");
  const arPath = buildLocalePath(pathname, "ar");

  return (
    <div aria-label="Language" className="lang-toggle" role="group">
      <Link aria-current={currentLocale === "en" ? "page" : undefined} className="lang-option" href={enPath}>
        EN
      </Link>
      <Link aria-current={currentLocale === "ar" ? "page" : undefined} className="lang-option" href={arPath}>
        AR
      </Link>
    </div>
  );
}
