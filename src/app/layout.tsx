import type {Metadata} from "next";
import {LiveChatWidget} from "@/components/live-chat-widget";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAT FREEZING",
  description: "Dubai fat freezing clinic with free consultation",
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
