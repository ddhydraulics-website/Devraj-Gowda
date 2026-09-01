import React from "react";
import { 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Settings2, 
  Clock, 
  CheckCircle,
  Factory,
  Layers,
  Sparkles
} from "lucide-react";
import { BusinessInfo } from "../config/businessInfo";

interface WhyChooseUsProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  const points = [
    {
      icon: Settings2,
      title: "Customized Machine Manufacturing",
      description: "We do not push one-size-fits-all machinery. We design stroke, platen size, cycle speed, and tonnage capacity around your exact product specifications and factory throughput."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Hydraulic Systems",
      description: "Built with premium hydraulic manifolds, high-grade hard chrome rods, standard Cetop directional valves, and precision cold-drawn seamless honed tubes for leak-free operation."
    },
    {
      icon: Clock,
      title: "Quick Repair & Service Turnaround",
      description: "We understand that downtime costs money. Our technicians respond quickly for on-site troubleshooting across Navi Mumbai, Mumbai, and Thane industrial belts."
    },
    {
      icon: Wrench,
      title: "Practical Engineering Support",
      description: "Direct access to experienced hydraulic technicians and fabricators — from electrical control logic to cylinder pressure tuning and seal replacements."
    },
    {
      icon: MapPin,
      title: "Navi Mumbai Workshop Advantage",
      description: "Based in Navi Mumbai since 2019, allowing fast dispatch of technicians, rapid cylinder pick-up/drop-off, and direct factory visits by clients."
    },
    {
      icon: Factory,
      title: "Factory Acceptance Pressure Testing",
      description: "Every machine and repaired cylinder is 100% hydro-pressure tested to rated capacity in our workshop before dispatch to guarantee zero bypass and zero gland leakage."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            The DD ENTERPRISES Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Why Industrial Clients Rely On DD ENTERPRISES
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Transparent engineering, robust structural fabrication, and dedicated after-sales repair support for manufacturing units across Maharashtra.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                id={`why-choose-card-${index}`}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/30 hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center space-x-1.5 text-xs text-blue-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
