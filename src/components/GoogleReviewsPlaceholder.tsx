import React from "react";
import { Star, MessageSquare, ExternalLink, ShieldCheck, MapPin } from "lucide-react";
import { BusinessInfo } from "../config/businessInfo";

interface GoogleReviewsPlaceholderProps {
  businessInfo: BusinessInfo;
  onOpenConfigModal: () => void;
}

export const GoogleReviewsPlaceholder: React.FC<GoogleReviewsPlaceholderProps> = ({
  businessInfo,
  onOpenConfigModal,
}) => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                Google Business Profile
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
              Google Verified Business Profile &amp; Location
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              DD ENTERPRISES is registered in Navi Mumbai, Maharashtra. Visit our workshop or review our location on Google Maps for machine trials and consultations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-2xs"
            >
              <MapPin className="w-4 h-4" />
              <span>View Workshop Map</span>
            </a>

            <button
              onClick={onOpenConfigModal}
              className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition"
            >
              Edit Profile URL
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
