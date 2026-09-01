import React from "react";
import { serviceAreasData } from "../data/serviceAreasData";
import { MapPin, Clock, CheckCircle2, Phone, Send } from "lucide-react";
import { BusinessInfo } from "../config/businessInfo";

interface ServiceAreaSectionProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: (areaName?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Industrial Reach &amp; Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Service Areas Across Navi Mumbai &amp; Maharashtra
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Headquartered in Navi Mumbai, we offer prompt on-site machine repair visits, breakdown call-outs, and delivery of newly built machinery across all major industrial estates.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreasData.map((area, index) => (
            <div
              key={index}
              id={`service-area-card-${index}`}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                area.isPrimary
                  ? "bg-slate-50 border-blue-300 hover:shadow-lg"
                  : "bg-white border-slate-200 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-700" />
                    <h3 className="text-base font-bold text-slate-900 font-sans">
                      {area.name}
                    </h3>
                  </div>
                  {area.isPrimary && (
                    <span className="text-[10px] font-mono font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Core Hub
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-slate-500 mb-3">
                  {area.district}
                </p>

                {/* Sub-areas list */}
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {area.highlightedAreas.map((sub, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 font-mono text-[11px] text-blue-700 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{area.responseTime}</span>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(`Service in ${area.name}`)}
                  className="text-xs font-bold text-slate-900 hover:text-blue-700 transition"
                >
                  Book Visit →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Industrial Transport & Delivery Note */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold">Pan-Maharashtra &amp; Outstation Machinery Supply</h4>
              <p className="text-xs text-slate-300">
                We safely crate, dispatch, and commission hydraulic presses to Pune, Nashik, Aurangabad, Kolhapur, and industrial plants throughout India.
              </p>
            </div>
          </div>

          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition"
          >
            Call Dispatch Team
          </a>
        </div>

      </div>
    </section>
  );
};
