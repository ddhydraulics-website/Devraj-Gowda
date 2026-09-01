import React, { useState } from "react";
import { getStoredBusinessInfo, BusinessInfo } from "./config/businessInfo";
import { ProductItem, ServiceItem, GalleryItem } from "./types";

// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustHighlights } from "./components/TrustHighlights";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ProductModal } from "./components/ProductModal";
import { ServicesSection } from "./components/ServicesSection";
import { ServiceDetailModal } from "./components/ServiceDetailModal";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GallerySection } from "./components/GallerySection";
import { GalleryModal } from "./components/GalleryModal";
import { HowWeWork } from "./components/HowWeWork";
import { CustomerEnquiryBanner } from "./components/CustomerEnquiryBanner";
import { MachineConfigurator } from "./components/MachineConfigurator";
import { ServiceAreaSection } from "./components/ServiceAreaSection";
import { FAQSection } from "./components/FAQSection";
import { GoogleReviewsPlaceholder } from "./components/GoogleReviewsPlaceholder";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { GeneralQuoteModal } from "./components/GeneralQuoteModal";
import { BusinessInfoModal } from "./components/BusinessInfoModal";
import { productsData } from "./data/productsData";

export const App: React.FC = () => {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(getStoredBusinessInfo());

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string>("");
  const [configModalOpen, setConfigModalOpen] = useState(false);

  const handleOpenQuoteModal = (topic?: string) => {
    setQuotePrefill(topic || "General Hydraulic Machine Inquiry");
    setQuoteModalOpen(true);
  };

  const handleSelectProductById = (productId: string) => {
    const found = productsData.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    } else {
      handleOpenQuoteModal(productId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        businessInfo={businessInfo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenConfigModal={() => setConfigModalOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          businessInfo={businessInfo}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onSelectProduct={handleSelectProductById}
        />

        {/* 4 Trust Highlights Strip */}
        <TrustHighlights />

        {/* About DD ENTERPRISES Section */}
        <AboutSection
          businessInfo={businessInfo}
          onOpenQuoteModal={() => handleOpenQuoteModal("Custom Machine Manufacturing")}
        />

        {/* Products Showcase Section */}
        <ProductsSection
          businessInfo={businessInfo}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuoteModal={(productName) => handleOpenQuoteModal(productName)}
        />

        {/* Complete Services Section */}
        <ServicesSection
          businessInfo={businessInfo}
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteModal={(serviceName) => handleOpenQuoteModal(serviceName)}
        />

        {/* Interactive Specification Configurator Tool */}
        <MachineConfigurator
          businessInfo={businessInfo}
          onOpenQuoteModal={(customRequest) => handleOpenQuoteModal(customRequest)}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs
          businessInfo={businessInfo}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Gallery Section */}
        <GallerySection
          onSelectImage={(item) => setSelectedGalleryItem(item)}
        />

        {/* How We Work Process Section */}
        <HowWeWork />

        {/* Mid-Page Conversion Enquiry Banner */}
        <CustomerEnquiryBanner
          businessInfo={businessInfo}
          onOpenQuoteModal={() => handleOpenQuoteModal("Urgent Technical Quotation")}
        />

        {/* Service Areas & Coverage Section */}
        <ServiceAreaSection
          businessInfo={businessInfo}
          onOpenQuoteModal={(areaName) => handleOpenQuoteModal(areaName)}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Google Business & Reviews Info Box */}
        <GoogleReviewsPlaceholder
          businessInfo={businessInfo}
          onOpenConfigModal={() => setConfigModalOpen(true)}
        />

        {/* Contact & Lead Form Section with Map */}
        <ContactSection
          businessInfo={businessInfo}
          onOpenConfigModal={() => setConfigModalOpen(true)}
        />
      </main>

      {/* 3. Footer */}
      <Footer
        businessInfo={businessInfo}
        onOpenQuoteModal={(topic) => handleOpenQuoteModal(topic)}
        onOpenConfigModal={() => setConfigModalOpen(true)}
      />

      {/* 4. Floating Conversion Actions (WhatsApp & Call Buttons) */}
      <FloatingActions
        businessInfo={businessInfo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 5. Modals & Overlays */}
      <ProductModal
        product={selectedProduct}
        businessInfo={businessInfo}
        onClose={() => setSelectedProduct(null)}
        onOpenQuoteModal={(prodName) => handleOpenQuoteModal(prodName)}
      />

      <ServiceDetailModal
        service={selectedService}
        businessInfo={businessInfo}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={(servName) => handleOpenQuoteModal(servName)}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onOpenQuoteModal={(itemTitle) => handleOpenQuoteModal(itemTitle)}
      />

      <GeneralQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        businessInfo={businessInfo}
        prefillRequirement={quotePrefill}
      />

      <BusinessInfoModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        businessInfo={businessInfo}
        onUpdateInfo={(newInfo) => setBusinessInfo(newInfo)}
      />

    </div>
  );
};

export default App;
