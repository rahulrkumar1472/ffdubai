import {SiteShell} from "@/components/site-shell";

export default function ArLayout({children}: {children: React.ReactNode}) {
  return <SiteShell locale="ar">{children}</SiteShell>;
}
