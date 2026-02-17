import Link from "next/link";

type Crumb = {
  href: string;
  label: string;
};

export function Breadcrumbs({items}: {items: Crumb[]}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs seo-breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index > 0 ? <span className="crumb-sep">/</span> : null}
            {index === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
