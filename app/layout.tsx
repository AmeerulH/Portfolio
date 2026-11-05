import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SanityLive } from "@/sanity/lib/live";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TabBar } from "@/components/tab-bar";
import "./globals.css";

const grotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "optional" });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico?v=a1", sizes: "16x16 32x32 48x48 64x64" },
      { url: "/icon.svg?v=a1", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=a1",
  },
  title: { default: "Ameerul Hady", template: "%s | Ameerul Hady" },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ameerulh.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <TabBar />
        <SanityLive includeDrafts={false} />
        <Analytics />
      </body>
    </html>
  );
}
