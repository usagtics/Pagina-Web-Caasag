import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/layout/Header";
import { Footer } from "@/shared/layout/Footer";
import { siteConfig } from "@/shared/config/site";
import { ScrollToTop } from "@/features/components/home/ScrollToTop";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className={`${geist.variable} antialiased`}>
        <Header />
        <main className="pt-[130px]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
