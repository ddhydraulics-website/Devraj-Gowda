import React from "react";
import { ServiceItem } from "../types";
import { 
  X, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Send, 
  MessageSquare, 
  Phone, 
  Wrench,
  ShieldCheck 
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  businessInfo: BusinessInfo;
  onClose: () => void;
  onOpenQuoteModal: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  businessInfo,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!service) return null;

  const whatsappUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    `Hello DD ENTERPRISES, I need assistance with: ${service.title}. Please provide guidance and engineer availability.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-300 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
              {service.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans mt-0.5">
              {service.title}
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

        {/* Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase font-mono tracking-wider">
              Scope of Service &amp; Methodology
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Capabilities List */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase font-mono tracking-wider border-b border-slate-200 pb-2 mb-3">
              Capabilities &amp; Deliverables
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround & Service Coverage Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-blue-900 mb-1">
                <Clock className="w-4 h-4 text-blue-700" />
                <span>RESPONSE &amp; TURNAROUND</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                {service.turnaroundTime}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-900 mb-1">
                <MapPin className="w-4 h-4 text-slate-700" />
                <span>COVERAGE AREA</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                {service.coverage}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call Technician</span>
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
                onOpenQuoteModal(service.title);
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Book / Request Service</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
