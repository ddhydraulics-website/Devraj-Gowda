import React, { useState } from "react";
import { galleryData } from "../data/galleryData";
import { GalleryItem } from "../types";
import { ZoomIn, Camera, Layers } from "lucide-react";

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "machines", label: "Machine Photos" },
    { id: "hydraulic-systems", label: "Hydraulic Systems" },
    { id: "manufacturing", label: "Machine Manufacturing" },
    { id: "testing", label: "Testing & Assembly" },
    { id: "repair", label: "Repair Work" },
    { id: "finished", label: "Finished Machines" },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Visual Proof of Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
            Workshop &amp; Machinery Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Real photos showing machine manufacturing, hydraulic power pack assembly, cylinder honing, pressure testing, and finished presses built for client factories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-slate-900 text-white font-bold shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 text-xs font-bold flex items-center space-x-1.5 shadow-md">
                    <ZoomIn className="w-4 h-4 text-blue-700" />
                    <span>View Details</span>
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.specsSummary && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
                    {item.specsSummary}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
