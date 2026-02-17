import type {Metadata} from "next";
import {LiveChatWidget} from "@/components/live-chat-widget";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fatfreezing.ae"),
  title: {
    default: "FAT FREEZING | Dubai's Weight Loss Centre",
    template: "%s | FAT FREEZING"
  },
  description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning and realistic expectations.",
  alternates: {
    canonical: "https://fatfreezing.ae/"
  },
  openGraph: {
    type: "website",
    title: "FAT FREEZING | Dubai's Weight Loss Centre",
    description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning.",
    url: "https://fatfreezing.ae/"
  },
  twitter: {
    card: "summary_large_image",
    title: "FAT FREEZING | Dubai's Weight Loss Centre",
    description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning."
  },
  icons: {
    icon: "/images/stock/doctor-measuring-woman-waist.jpg"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
        <LiveChatWidget />
      </body>
    </html>
  );
}
