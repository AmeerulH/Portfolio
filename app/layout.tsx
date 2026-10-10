import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ameerul Hady", template: "%s | Ameerul Hady" },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ameerulh.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive includeDrafts={false} />
        <Analytics />
      </body>
    </html>
  );
}
