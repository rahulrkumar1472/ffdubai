import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAT FREEZING",
  description: "Dubai fat freezing clinic with free consultation"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
