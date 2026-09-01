import React, { useState } from "react";
import { 
  Phone, 
  MessageSquare, 
  Wrench, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Send,
  Cog,
  ShieldCheck
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface NavbarProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
  onOpenConfigModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenConfigModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    "Hello DD ENTERPRISES, I would like to enquire about your hydraulic machines and repair services."
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      
      {/* Top Utility Bar (Industrial info) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Workshop: {businessInfo.location}, {businessInfo.state} (Estd. {businessInfo.establishedYear})</span>
            </span>
            <span className="flex items-center space-x-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{businessInfo.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-blue-400 font-mono text-[11px] font-semibold tracking-wide">
              NAVI MUMBAI • MUMBAI • THANE • MAHARASHTRA
            </span>
            <button
              onClick={onOpenConfigModal}
              className="text-slate-400 hover:text-white transition flex items-center space-x-1 text-[11px]"
              title="Configure Contact Info"
            >
              <Cog className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-800 transition-colors">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight font-sans">
                  {businessInfo.name}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono uppercase">
                  Est. 2019
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-tight">
                Hydraulic Machine Manufacturer &amp; Repair Specialist
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-blue-700 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Phone Link */}
            <a
              id="nav-call-btn"
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition border border-slate-300/80"
              title="Call DD ENTERPRISES"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>{businessInfo.phone}</span>
            </a>

            {/* WhatsApp Link */}
            <a
              id="nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Request Quote Modal Trigger */}
            <button
              id="nav-quote-modal-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition shadow-2xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200"
              title="Call now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-slate-100 border border-slate-300"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call {businessInfo.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-600"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-700 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigModal();
              }}
              className="text-[11px] text-slate-500 hover:text-slate-800 inline-flex items-center space-x-1"
            >
              <Cog className="w-3 h-3" />
              <span>Configure Business Details</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
