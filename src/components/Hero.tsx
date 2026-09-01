import React from "react";
import { 
  Phone, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  Cpu, 
  ArrowRight 
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface HeroProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onSelectProduct,
}) => {
  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    "Hello DD ENTERPRISES, I am looking for a hydraulic machine or repair service in Navi Mumbai / Mumbai / Thane. Please share details."
  );

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Engineering Grid Texture */}
      <div 
        className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ESTABLISHED 2019 • NAVI MUMBAI WORKSHOP</span>
            </div>

            {/* Exact Main Heading Requested */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-tight">
              Hydraulic Machine Manufacturer &amp; Repair Service in Navi Mumbai
            </h1>

            {/* Exact Supporting Text Requested */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              DD ENTERPRISES is an established business founded in 2019, providing manufacturing, repair, and maintenance for hydraulic machines and practical engineering solutions across Navi Mumbai, Mumbai, Thane, and wider Maharashtra.
            </p>

            {/* Key Quality Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Paper Plate, Chapati &amp; Bhakri Presses</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Custom SPM Presses up to 250+ Ton</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Cylinder Honing &amp; Power Pack Overhaul</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Rapid On-Site Breakdown Support</span>
              </div>
            </div>

            {/* Primary High-Converting Call-to-Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* 1. Get a Quote */}
              <button
                id="hero-get-quote-btn"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/30 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>

              {/* 2. Call Now */}
              <a
                id="hero-call-btn"
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition active:scale-98"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Now</span>
              </a>

              {/* 3. WhatsApp Us */}
              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/20 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Industrial Location Footer Line */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Workshop &amp; Service Team located in <strong>Navi Mumbai, Maharashtra</strong></span>
            </div>

          </div>

          {/* Right Column: Hero Machinery Graphic & Quick Technical Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/80 shadow-2xl backdrop-blur-xs p-5 space-y-4">
              
              {/* Header inside machine preview box */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs">
                <div className="flex items-center space-x-2 font-mono text-blue-400 font-semibold">
                  <Wrench className="w-4 h-4" />
                  <span>DD ENTERPRISES • MACHINE WORKSHOP</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] font-mono">
                  ISO Quality Standard
                </span>
              </div>

              {/* Featured Visual */}
              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Hydraulic Machine Manufacturing and Testing at DD Enterprises Navi Mumbai"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase">
                    FEATURED FABRICATION
                  </span>
                  <p className="text-sm font-bold text-white">
                    Hydraulic Paper Plate &amp; SPM Machinery
                  </p>
                  <p className="text-xs text-slate-300">
                    High pressure manifold blocks &amp; precision-honed cylinders
                  </p>
                </div>
              </div>

              {/* Quick Spec Ribbon */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div 
                  onClick={() => onSelectProduct("hydraulic-paper-plate-machine")}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 cursor-pointer hover:border-blue-500 hover:bg-blue-950/40 transition"
                >
                  <span className="block font-bold text-white text-xs">Paper Plate</span>
                  <span className="text-[10px] text-slate-400">5-15 Ton</span>
                </div>

                <div 
                  onClick={() => onSelectProduct("hydraulic-chapati-making-machine")}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 cursor-pointer hover:border-blue-500 hover:bg-blue-950/40 transition"
                >
                  <span className="block font-bold text-white text-xs">Chapati/Bhakri</span>
                  <span className="text-[10px] text-slate-400">Teflon Press</span>
                </div>

                <div 
                  onClick={() => onSelectProduct("customized-hydraulic-machines-spm")}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 cursor-pointer hover:border-blue-500 hover:bg-blue-950/40 transition"
                >
                  <span className="block font-bold text-white text-xs">Custom SPM</span>
                  <span className="text-[10px] text-slate-400">Up to 250+ T</span>
                </div>
              </div>

              {/* Quick direct breakdown emergency line */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/60">
                <span className="flex items-center space-x-1 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Hydraulic Breakdown Hotline</span>
                </span>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="text-blue-400 hover:underline font-mono font-bold"
                >
                  {businessInfo.phone}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
