import type {Metadata} from "next";
import {SiteShell} from "@/components/site-shell";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true
  }
};

export default function ArLayout({children}: {children: React.ReactNode}) {
  return <SiteShell locale="ar">{children}</SiteShell>;
}
