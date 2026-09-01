import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Send, ArrowUp } from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface FloatingActionsProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    "Hello DD ENTERPRISES, I am browsing your website and have an inquiry regarding hydraulic machines / repair services."
  );

  return (
    <>
      {/* Desktop & Mobile Floating Action Bar on Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition animate-in fade-in zoom-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Action Pill */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl hover:shadow-emerald-600/30 transition-transform active:scale-95 group"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-sans">WhatsApp Inquiry</span>
        </a>

        {/* Floating Quick Call Button */}
        <a
          id="floating-phone-btn"
          href={`tel:${businessInfo.phoneRaw}`}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs shadow-xl hover:shadow-blue-700/30 transition-transform active:scale-95 group"
          title="Call DD ENTERPRISES"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-sans">Call {businessInfo.phone}</span>
        </a>
      </div>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${businessInfo.phoneRaw}`}
          className="flex-1 py-2.5 px-2 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-4 h-4 text-blue-400" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 py-2.5 px-2 rounded-lg bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
        >
          <Send className="w-4 h-4" />
          <span>Quote</span>
        </button>
      </div>
    </>
  );
};
