import type {Metadata} from "next";
import {LiveChatWidget} from "@/components/live-chat-widget";
import {getLangDirection, getServerLang} from "@/lib/i18n/lang";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const lang = getServerLang();

  return {
    metadataBase: new URL("https://fatfreezing.ae"),
    title: {
      default: "FAT FREEZING | Dubai's Weight Loss Centre",
      template: "%s | FAT FREEZING"
    },
    description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning and realistic expectations.",
    openGraph: {
      type: "website",
      title: "FAT FREEZING | Dubai's Weight Loss Centre",
      description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning.",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "Fat Freezing Dubai"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "FAT FREEZING | Dubai's Weight Loss Centre",
      description: "Fat Freezing Dubai (Cryolipolysis) from AED 489 with consultation-first planning.",
      images: ["/og.jpg"]
    },
    robots: lang === "ar" ? {index: false, follow: true} : {index: true, follow: true},
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    }
  };
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  const lang = getServerLang();

  return (
    <html dir={getLangDirection(lang)} lang={lang}>
      <body>
        {children}
        <LiveChatWidget />
      </body>
    </html>
  );
}
