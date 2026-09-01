import React, { useState } from "react";
import { servicesData } from "../data/servicesData";
import { ServiceItem } from "../types";
import { 
  Wrench, 
  Cog, 
  ShieldCheck, 
  Activity, 
  Gauge, 
  Cpu, 
  Phone, 
  Clock, 
  MapPin, 
  ArrowRight,
  Info,
  AlertTriangle
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface ServicesSectionProps {
  businessInfo: BusinessInfo;
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  businessInfo,
  onSelectService,
  onOpenQuoteModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cog":
        return <Cog className="w-6 h-6 text-blue-700" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-blue-700" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-blue-700" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-blue-700" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-700" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Complete Industrial Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Hydraulic Repair, Maintenance &amp; Manufacturing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From emergency machine breakdown troubleshooting to preventive maintenance contracts and turnkey machine fabrication across Navi Mumbai, Mumbai, and Thane.
          </p>
        </div>

        {/* Emergency Breakdown Callout Strip */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Facing an Urgent Hydraulic Breakdown in Your Factory?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our technicians provide on-site diagnosis and repair across Rabale, Mahape, Pawane, Turbhe, Taloja, and Thane MIDC zones.
              </p>
            </div>
          </div>

          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="shrink-0 inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Hotline: {businessInfo.phone}</span>
          </a>
        </div>

        {/* Services Grid (All 6 core services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.isEmergency ? (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      On-Call Dispatch
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {service.category}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {service.summary}
                </p>

                {/* Key Capabilities List */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-[11px] text-slate-600">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Response / Turnaround info */}
                <div className="mt-4 flex items-center space-x-1 text-[11px] text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{service.turnaroundTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2 px-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition flex items-center justify-center space-x-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Read Details</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold transition flex items-center justify-center space-x-1 shadow-2xs"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
