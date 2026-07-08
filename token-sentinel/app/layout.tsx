import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Token Sentinel",
  description: "Whale alerts, exchange flows, burns, and token intelligence for any token.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
