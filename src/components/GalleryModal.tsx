import React from "react";
import { GalleryItem } from "../types";
import { X, Wrench, ShieldCheck } from "lucide-react";

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenQuoteModal: (title: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-300 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-sans mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image & Description */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {item.description}
            </p>

            {item.specsSummary && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
                <span className="font-bold text-blue-700">Specifications: </span>
                {item.specsSummary}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(`Gallery Item: ${item.title}`);
            }}
            className="px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs"
          >
            Enquire About This Machine / System
          </button>
        </div>

      </div>

    </div>
  );
};
