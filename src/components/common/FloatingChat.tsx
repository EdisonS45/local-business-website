"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site.config";
import { ctaConfig } from "@/config/cta.config";
import { useToast } from "./Toast";

export default function FloatingChat() {
  const { showToast } = useToast();
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup after a 3-second delay to catch the eye
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = ctaConfig?.defaultWhatsAppMessage || "Hello, I would like to enquire about a land survey.";
    showToast("Opening WhatsApp...");
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. The Nudge Popup */}
      {showPopup && (
        <div className="mb-3 animate-bounce bg-white px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 relative max-w-[200px]">
          <p className="text-[11px] font-bold text-slate-800 leading-tight">
            Need a Quick Quote? <br/>
            <span className="text-emerald-600">Chat with Vishnu now!</span>
          </p>
          {/* Triangle Pointer */}
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
          
          {/* Close X for the popup */}
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute -top-1 -right-1 bg-slate-200 text-slate-500 rounded-full w-4 h-4 text-[8px] flex items-center justify-center hover:bg-slate-300"
          >
            ✕
          </button>
        </div>
      )}

      {/* 2. The WhatsApp Button */}
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="
          hidden md:flex
          h-14 w-14
          items-center justify-center
          rounded-full
          bg-emerald-600 text-white
          shadow-xl
          transition-all
          hover:scale-110 hover:bg-emerald-700
          active:scale-95
          relative
        "
      >
        {/* Pulse Effect Background */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></span>
        
        <svg 
          className="h-7 w-7 fill-current relative z-10" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
}