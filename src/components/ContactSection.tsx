import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface ContactSectionProps {
  businessInfo: BusinessInfo;
  onOpenConfigModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  businessInfo,
  onOpenConfigModal,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Hydraulic Paper Plate Making Machine",
    location: "Navi Mumbai",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const whatsappDirectUrl = generateWhatsAppLink(
    businessInfo.whatsappRaw,
    `Hello DD ENTERPRISES, I am ${formData.name || "a client"} from ${formData.location || "Maharashtra"}. I am enquiring regarding: ${formData.serviceType}. Message: ${formData.message || "Please call me back."}`
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Get in Touch with DD ENTERPRISES
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Reach out for machine pricing, technical drawings, cylinder overhauls, or immediate hydraulic breakdown assistance in Navi Mumbai, Mumbai, Thane, and Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Workshop Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5">
              <h3 className="text-base font-extrabold text-slate-900 font-sans tracking-tight">
                Workshop &amp; Office Details
              </h3>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                    Phone / Breakdown Hotline
                  </span>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-700"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Direct engineering &amp; repair dispatch
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                    WhatsApp Inquiries
                  </span>
                  <a
                    href={generateWhatsAppLink(businessInfo.whatsappRaw, "Hello DD ENTERPRISES")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline"
                  >
                    {businessInfo.whatsapp} (Chat Now)
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Instant catalog &amp; quotation sharing
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-700"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                    Manufacturing Workshop
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {businessInfo.workshopAddress}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                    Working Hours
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {businessInfo.workingHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-60 shadow-xs">
              <iframe
                title="DD ENTERPRISES Location Navi Mumbai"
                src={businessInfo.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Lead Generation Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight">
                  Send a Detailed Business Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your machinery or repair specifications. We will respond within 2 to 4 hours with detailed pricing.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 text-center animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">Thank You! Your Enquiry Has Been Received</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Our technical manager will review your requirement ({formData.serviceType}) and call you on {formData.phone}.
                  </p>

                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1.5 shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Enquiry on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel / Industrial Works"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Mobile Number (Call / WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Factory / Workshop Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Rabale MIDC, Thane, Pune"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Product / Service Interest */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Product or Service Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      <option>Hydraulic Paper Plate Making Machine</option>
                      <option>Hydraulic Chapati Making Machine</option>
                      <option>Hydraulic Bhakri Making Machine</option>
                      <option>Customized Hydraulic Machine (SPM)</option>
                      <option>Hydraulic Power Pack Unit Manufacturing</option>
                      <option>Hydraulic Machine Repair &amp; Troubleshooting</option>
                      <option>Hydraulic Cylinder Honing &amp; Seal Replacement</option>
                      <option>Preventive Machine Maintenance Contract</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Requirements &amp; Technical Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify tonnage, plate sizes, cycle rate, or describe any hydraulic breakdown symptoms..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request for Quotation</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 No spam. Direct technical engineering response from Navi Mumbai workshop.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
