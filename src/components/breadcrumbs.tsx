import Link from "next/link";
import {getDictionary, type Locale} from "@/lib/i18n";

export type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({locale, items}: {locale: Locale; items: Crumb[]}) {
  const t = getDictionary(locale);
  const homeHref = "/";

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <Link href={homeHref}>{t.breadcrumbs.home}</Link>
        </li>
        {items.map((item) => (
          <li key={item.href}>
            <span className="crumb-sep">/</span>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
