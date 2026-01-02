import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/common/StickyMobileCTA";
import { ToastProvider } from "@/components/common/Toast";
import { seoConfig } from "@/config/seo.config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </ToastProvider>
      </body>
    </html>
  );
}
