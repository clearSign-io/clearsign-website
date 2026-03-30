import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClearSign — Agent-Powered Signage Permitting",
  description:
    "ClearSign handles multi-jurisdiction signage permitting for franchise operators and sign companies. Jurisdiction research, compliance checks, and permit packets — delivered fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
