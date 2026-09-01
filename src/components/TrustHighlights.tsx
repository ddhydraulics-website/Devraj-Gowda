import React from "react";
import { Calendar, Wrench, ShieldCheck, MapPin } from "lucide-react";

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Established 2019",
      description: "6+ years of specialized hydraulic engineering and proven track record across Maharashtra.",
      badge: "Industry Experience"
    },
    {
      icon: Wrench,
      title: "Custom Machine Solutions",
      description: "Customized hydraulic presses, tonnage calculations, and bespoke fabrication for unique products.",
      badge: "Built-To-Order"
    },
    {
      icon: ShieldCheck,
      title: "Machine Repair & Maintenance",
      description: "Fast-turnaround cylinder honing, power pack overhauls, seal replacement, and on-site troubleshooting.",
      badge: "Full Workshop Backup"
    },
    {
      icon: MapPin,
      title: "Navi Mumbai Based",
      description: "Conveniently located for rapid service across Navi Mumbai, Mumbai, Thane, and regional industrial hubs.",
      badge: "Strategic Location"
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`trust-highlight-${index}`}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-700 flex items-center justify-center shadow-xs group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-blue-700 flex items-center space-x-1">
                  <span>DD ENTERPRISES Assurance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
