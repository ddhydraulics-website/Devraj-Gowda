import React from "react";
import { CheckCircle2, Factory, Hammer, Wrench, Shield, Users, ArrowRight } from "lucide-react";
import { BusinessInfo } from "../config/businessInfo";

interface AboutSectionProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            About DD ENTERPRISES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Reliable Hydraulic Engineering &amp; Machinery Manufacturing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Established in 2019 in Navi Mumbai, Maharashtra, DD ENTERPRISES has grown into a trusted partner for manufacturing durable hydraulic machines, high-efficiency power packs, and specialized machine repair services.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workshop Image & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="DD Enterprises Workshop and Hydraulic Machinery Manufacturing in Navi Mumbai"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono font-semibold text-blue-300">
                  NAVI MUMBAI WORKSHOP
                </span>
                <p className="text-base font-bold">
                  Quality Machining, Cylinder Honing &amp; Hydraulic Assembly
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                  2019
                </span>
                <span className="text-xs text-slate-500 font-medium">Year Established</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">Hydro Tested</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                  250+ T
                </span>
                <span className="text-xs text-slate-500 font-medium">Custom Capacity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>DD ENTERPRISES</strong>, we specialize in solving real-world industrial challenges. Whether you require a high-speed automatic paper plate making machine, a commercial chapati/bhakri flattening press, or a heavy-tonnage customized hydraulic press for metal or rubber components, our machines are designed for reliable daily operation.
              </p>
              <p>
                Our workshop in Navi Mumbai is equipped with fabrication facilities, cylinder honing tools, manifold machining capability, and pressure-testing equipment. We strictly adhere to accurate engineering specifications without exaggerated claims, ensuring every client receives equipment that performs consistently.
              </p>
            </div>

            {/* What Sets Us Apart Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200/90">
                <Factory className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">In-House Manufacturing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Direct manufacturer pricing and full quality control over every component.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200/90">
                <Hammer className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Custom Engineering</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Machines built to match your specific stroke, daylight, and tonnage needs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200/90">
                <Wrench className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Complete Repair Backup</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Quick turnaround for leaking cylinders, faulty pumps, and oil overhauls.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200/90">
                <Shield className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Rigorous Pressure Testing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">100% full-load hydraulic testing before machine dispatch.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-slate-900 hover:bg-blue-700 transition"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
