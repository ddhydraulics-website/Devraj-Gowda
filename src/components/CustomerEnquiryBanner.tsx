import React from "react";
import { Phone, MessageSquare, Send, ShieldAlert, ArrowRight } from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface CustomerEnquiryBannerProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
}

export const CustomerEnquiryBanner: React.FC<CustomerEnquiryBannerProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    "Hello DD ENTERPRISES, I would like to get an immediate quote for hydraulic machinery / repair service."
  );

  return (
    <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white py-12 sm:py-16 border-y border-blue-800 relative overflow-hidden">
      
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-center lg:text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>DIRECT FACTORY RESPONSE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans text-white">
              Ready to Upgrade or Repair Your Hydraulic Equipment?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect directly with our engineering team in Navi Mumbai. We provide free preliminary technical consultation, honest advice, and custom quotes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Get a Custom Quote</span>
            </button>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="px-5 py-3.5 rounded-lg bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold transition flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call: {businessInfo.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition flex items-center space-x-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
