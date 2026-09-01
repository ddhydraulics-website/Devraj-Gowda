import React, { useState } from "react";
import { Sliders, Calculator, Send, MessageSquare, Check, Layers, Cpu } from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface MachineConfiguratorProps {
  businessInfo: BusinessInfo;
  onOpenQuoteModal: (customRequest?: string) => void;
}

export const MachineConfigurator: React.FC<MachineConfiguratorProps> = ({
  businessInfo,
  onOpenQuoteModal,
}) => {
  const [machineType, setMachineType] = useState<string>("Paper Plate Machine");
  const [tonnage, setTonnage] = useState<string>("10 Ton");
  const [operationType, setOperationType] = useState<string>("Semi-Automatic");
  const [dieCount, setDieCount] = useState<string>("Double Die");
  const [customNotes, setCustomNotes] = useState<string>("");

  const handleGenerateQuote = () => {
    const summary = `Configured Requirement: ${machineType} (${tonnage}, ${operationType}, ${dieCount}). Notes: ${customNotes || "Standard"}`;
    onOpenQuoteModal(summary);
  };

  const handleWhatsAppQuote = () => {
    const summary = `Hello DD ENTERPRISES, I configured a requirement on your website:\n• Machine: ${machineType}\n• Capacity: ${tonnage}\n• Operation: ${operationType}\n• Die/Setup: ${dieCount}\n• Additional notes: ${customNotes || "None"}\nPlease send technical specs and quotation.`;
    const url = generateWhatsAppLink(businessInfo.whatsappRaw, summary);
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-200/80 px-3 py-1 rounded-full">
            Interactive Tool
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Hydraulic Machine Specification Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Select your preferred machine parameters below to instantly generate a customized technical inquiry.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Select Machine Type */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Machine Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                "Paper Plate Machine",
                "Chapati Making Machine",
                "Bhakri Making Machine",
                "Custom SPM Press"
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setMachineType(type)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    machineType === type
                      ? "border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-600/20"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="block">{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Tonnage Capacity */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Required Tonnage Capacity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {["5 Ton", "10 Ton", "25 Ton", "50 to 250+ Ton"].map((ton) => (
                <button
                  key={ton}
                  type="button"
                  onClick={() => setTonnage(ton)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                    tonnage === ton
                      ? "border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-600/20"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {ton}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Operation & Die setup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Operating Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Manual Lever", "Semi-Automatic", "Fully Automatic PLC"].map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => setOperationType(op)}
                    className={`p-2.5 rounded-lg border text-[11px] font-semibold text-center transition-all ${
                      operationType === op
                        ? "border-blue-600 bg-blue-50 text-blue-900 ring-1 ring-blue-600"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Tooling / Die Configuration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Single Die", "Double Die", "4-Die / Custom Mould"].map((die) => (
                  <button
                    key={die}
                    type="button"
                    onClick={() => setDieCount(die)}
                    className={`p-2.5 rounded-lg border text-[11px] font-semibold text-center transition-all ${
                      dieCount === die
                        ? "border-blue-600 bg-blue-50 text-blue-900 ring-1 ring-blue-600"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {die}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 4: Specific Dimensions or Remarks */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
              5. Custom Notes or Dimensions (Optional)
            </label>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="e.g. Platen size 600x600 mm, 3-Phase power, food grade platens..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Summary Box & Actions */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                Configured Summary
              </span>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {machineType} • {tonnage} • {operationType} • {dieCount}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quote on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleGenerateQuote}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Specs</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
