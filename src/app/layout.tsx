import "./globals.css";
import { Manrope, Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/common/StickyMobileCTA";
import FloatingChat from "@/components/common/FloatingChat";
import { ToastProvider } from "@/components/common/Toast";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} min-h-screen flex flex-col bg-background text-ink`}
      >
        <ToastProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          {/* Desktop only – delayed attention */}
          <FloatingChat delay={4000} />

          {/* Mobile only – conversion focused */}
          <StickyMobileCTA />
        </ToastProvider>
      </body>
    </html>
  );
}
