import React, { useState } from "react";
import { productsData } from "../data/productsData";
import { ProductItem } from "../types";
import { 
  ArrowRight, 
  Check, 
  Info, 
  MessageSquare, 
  Send, 
  Layers,
  Sparkles
} from "lucide-react";
import { BusinessInfo, generateWhatsAppLink } from "../config/businessInfo";

interface ProductsSectionProps {
  businessInfo: BusinessInfo;
  onSelectProduct: (product: ProductItem) => void;
  onOpenQuoteModal: (preselectedProduct?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  businessInfo,
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Packaging Machinery", "Commercial Food Equipment", "Custom Industrial Presses", "Hydraulic Systems", "Components & Spares"];

  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Our Manufacturing Range
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-sans">
              High Performance Hydraulic Machinery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Precision fabricated at our Navi Mumbai facility with heavy-duty structural steel, premium hydraulic power packs, and certified safety interlocks.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition self-start md:self-auto shrink-0 shadow-2xs"
          >
            <Send className="w-4 h-4" />
            <span>Custom Machine Enquiry</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-xs font-bold"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productWhatsAppUrl = generateWhatsAppLink(
              businessInfo.whatsappRaw,
              `Hello DD ENTERPRISES, I would like to get specifications and price quote for ${product.name}.`
            );

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-mono font-medium backdrop-blur-xs">
                      {product.category}
                    </span>
                    {product.isPopular && (
                      <span className="px-2 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        <span>High Demand</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights Specs (Top 3) */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-xs">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="font-semibold text-slate-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 px-3 rounded-lg border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition flex items-center justify-center space-x-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Specifications</span>
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(product.name)}
                      className="w-full py-2.5 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold transition flex items-center justify-center space-x-1 shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Quote</span>
                    </button>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href={productWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center space-x-1.5 transition border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chat on WhatsApp for Pricing</span>
                  </a>

                </div>

              </div>
            );
          })}
        </div>

        {/* Customization Callout banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              Require a Custom Tonnage or Specific Daylight Hydraulic Press?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              We design and build bespoke Special Purpose Machines (SPM), multi-cylinder presses, and automation logic tailored to your exact factory drawings.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal("Customized Hydraulic Machine (SPM)")}
            className="shrink-0 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
