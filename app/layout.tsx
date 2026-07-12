import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fetchwave – Download Videos & Audio",
  description: "Download videos and audio from YouTube, Instagram, TikTok, and 1000+ platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
