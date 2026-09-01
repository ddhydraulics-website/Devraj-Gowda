import React from "react";
import { Wrench, Phone, Mail, MapPin, MessageSquare, Cog, ShieldCheck } from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: (topic?: string) => void;
  onOpenConfigModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenConfigModal,
}) => {
  const currentYear = new Date().getFullYear();

  const productsList = [
    { name: "Hydraulic Paper Plate Machine", href: "#products" },
    { name: "Hydraulic Chapati Making Machine", href: "#products" },
    { name: "Hydraulic Bhakri Making Machine", href: "#products" },
    { name: "Customized Hydraulic Machines (SPM)", href: "#products" },
    { name: "Hydraulic Power Pack Manufacturing", href: "#products" },
    { name: "Hydraulic Cylinders & Components", href: "#products" },
  ];

  const servicesList = [
    { name: "Hydraulic Machine Manufacturing", href: "#services" },
    { name: "Hydraulic Machine Repair Service", href: "#services" },
    { name: "Hydraulic Machine Maintenance", href: "#services" },
    { name: "Hydraulic Cylinder & System Repair", href: "#services" },
    { name: "Emergency Breakdown Support", href: "#services" },
    { name: "Custom Hydraulic Retrofitting", href: "#services" },
  ];

  const areasList = [
    "Navi Mumbai (Rabale, Mahape, Pawane, Turbhe)",
    "Mumbai Suburban & City Industrial Belts",
    "Thane, Dombivli & Kalyan MIDC",
    "Taloja & Panvel Industrial Area",
    "Pune, Nashik & Maharashtra State"
  ];

  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    "Hello DD ENTERPRISES, I am visiting your website footer and would like to enquire."
  );

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight font-sans">
                {businessInfo.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Established in 2019 in Navi Mumbai, DD ENTERPRISES manufactures durable hydraulic machinery, commercial food presses, and provides reliable repair and maintenance services across Maharashtra.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{businessInfo.workshopAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-white font-bold font-mono">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white">
                  {businessInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Machinery Products
            </h4>
            <ul className="space-y-2">
              {productsList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={() => onOpenQuoteModal(item.name)}
                    className="hover:text-blue-400 transition block text-[11px]"
                  >
                    • {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Repair &amp; Services
            </h4>
            <ul className="space-y-2">
              {servicesList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={() => onOpenQuoteModal(item.name)}
                    className="hover:text-blue-400 transition block text-[11px]"
                  >
                    • {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Key Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Coverage
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {areasList.map((area, idx) => (
                <li key={idx} className="leading-snug">
                  ✓ {area}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConfigModal}
                className="text-[11px] text-slate-500 hover:text-slate-300 flex items-center space-x-1"
              >
                <Cog className="w-3.5 h-3.5" />
                <span>Configure Business Details</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {currentYear} <strong>{businessInfo.name}</strong>. All Rights Reserved. Established 2019, Navi Mumbai, Maharashtra, India.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-slate-400">About</a>
            <a href="#products" className="hover:text-slate-400">Products</a>
            <a href="#services" className="hover:text-slate-400">Services</a>
            <a href="#contact" className="hover:text-slate-400">Contact</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
