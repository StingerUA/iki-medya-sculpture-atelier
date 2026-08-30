import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İki Medya 3D Sculpture Store",
  description:
    "Büyük format 3D baskı heykeller, özel üretim ve seçili modellerde AR önizleme.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
