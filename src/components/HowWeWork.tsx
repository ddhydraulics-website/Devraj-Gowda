import React from "react";
import { MessageSquareText, FileSpreadsheet, Cog, ShieldCheck, Truck, Wrench } from "lucide-react";

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquareText,
      title: "Requirement Assessment",
      description: "We discuss your required machine tonnage, plate size, production speed, or the specific symptoms of your broken hydraulic system."
    },
    {
      number: "02",
      icon: FileSpreadsheet,
      title: "Technical Design & Quote",
      description: "You receive an accurate proposal with detailed mechanical specifications, hydraulic power rating, delivery timeline, and transparent pricing."
    },
    {
      number: "03",
      icon: Cog,
      title: "Fabrication & Machining",
      description: "Our Navi Mumbai workshop undertakes heavy frame fabrication, manifold block machining, honed cylinder fitment, and electrical wiring."
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "100% Load & Hydro Testing",
      description: "Every press and repaired cylinder undergoes full-load pressure testing, cycle testing, and zero-leakage inspection prior to signoff."
    },
    {
      number: "05",
      icon: Truck,
      title: "Delivery & Installation",
      description: "We deliver the machine to your factory across Maharashtra, assist with site positioning, hydraulic oil filling, and electrical connection."
    },
    {
      number: "06",
      icon: Wrench,
      title: "Ongoing Maintenance Support",
      description: "Long-term support with scheduled preventive maintenance, spare seals, valve replacements, and on-call breakdown assistance."
    }
  ];

  return (
    <section id="how-we-work" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Our Proven Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            How We Execute Manufacturing &amp; Repairs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            A step-by-step engineering approach ensuring quality, durability, and on-time commissioning for your factory.
          </p>
        </div>

        {/* 6 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                id={`how-we-work-step-${index}`}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-700 flex items-center justify-center shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-sans tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
