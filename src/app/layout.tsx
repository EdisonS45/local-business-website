import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/common/StickyMobileCTA";
import FloatingChat from "@/components/common/FloatingChat";
import { ToastProvider } from "@/components/common/Toast";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${inter.variable} min-h-screen flex flex-col bg-[#FDFDFD] text-[#1A1A1A] antialiased`}>
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          
          {/* Hide FloatingChat on mobile (hidden class) */}
          <div className="hidden md:block">
            <FloatingChat />
          </div>
          
          <StickyMobileCTA />
        </ToastProvider>
      </body>
    </html>
  );
}