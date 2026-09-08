import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});
const outfit = Outfit({ subsets: ["latin-ext"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Virágh Niki — Esztétikai tetoválás | Budapest",
  description:
    "Permanent make-up és esztétikai tetoválás Budapesten. Mikroblading, powder brows, ajak-permán. Természetes szépség, precíz vonal.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`${fraunces.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
