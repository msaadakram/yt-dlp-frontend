import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YT-DLP Frontend - Download Videos & Audio",
  description: "Download videos, audio, and thumbnails from YouTube and 1000+ platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
