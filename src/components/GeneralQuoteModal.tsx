import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface GeneralQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessInfo;
  prefillRequirement?: string;
}

export const GeneralQuoteModal: React.FC<GeneralQuoteModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
  prefillRequirement,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("Hydraulic Paper Plate Making Machine");
  const [location, setLocation] = useState("Navi Mumbai");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillRequirement) {
      setRequirement(prefillRequirement);
    }
  }, [prefillRequirement]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const whatsappDirectUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    `Hello DD ENTERPRISES, I am ${name || "Client"} (${phone}). Requirement: ${requirement}. Details: ${details || "Standard quote requested"}. Location: ${location}.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-300 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
              Direct Factory Quotation
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-sans mt-0.5">
              Request Machinery / Repair Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Thank you, <strong>{name}</strong>. Our engineering manager will contact you on <strong>{phone}</strong> shortly.
              </p>

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                  Your Name / Company *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Sharma / Precision Works"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Navi Mumbai, Thane"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                  Requirement / Machine Selected
                </label>
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-medium text-blue-900 bg-blue-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                  Specific Details / Tonnage / Notes
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. Plate diameter, production volume, or machine breakdown issue..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                </button>
              </div>

              <div className="pt-1 text-center">
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="text-xs text-blue-700 hover:underline font-mono font-semibold"
                >
                  Or call directly: {businessInfo.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
