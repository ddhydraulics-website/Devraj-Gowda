import React from "react";
import { ProductItem } from "../types";
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Send, 
  MessageSquare, 
  Phone, 
  ShieldCheck,
  Zap
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface ProductModalProps {
  product: ProductItem | null;
  businessInfo: BusinessInfo;
  onClose: () => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  businessInfo,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!product) return null;

  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    `Hello DD ENTERPRISES, I am interested in technical details and quotation for: ${product.name}.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-300 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans mt-0.5">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Main Hero in Modal */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-blue-700">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <div className="pt-1 flex items-center space-x-2 text-xs text-slate-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Factory Pressure Tested in Navi Mumbai</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase font-mono tracking-wider border-b border-slate-200 pb-2 mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-slate-900 font-bold font-mono text-right ml-2">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase font-mono tracking-wider border-b border-slate-200 pb-2 mb-3">
              Engineering Features &amp; Construction
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary Industrial Applications */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase font-mono tracking-wider border-b border-slate-200 pb-2 mb-3">
              Suitable Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>{businessInfo.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(product.name);
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Price Quote</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
