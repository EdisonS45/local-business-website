// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { seoConfig } from "@/config/seo.config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";

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
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
