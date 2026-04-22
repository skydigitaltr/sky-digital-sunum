import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKY DIGITAL | Teklif Sunumu",
  description:
    "Kurumsal web sitesi, e-ticaret ve sosyal medya danışmanlığı için SKY DIGITAL teklif sunum sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
