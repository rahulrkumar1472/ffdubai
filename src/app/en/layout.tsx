import {SiteShell} from "@/components/site-shell";

export default function EnLayout({children}: {children: React.ReactNode}) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
