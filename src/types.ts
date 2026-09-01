export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  specs: ProductSpecification[];
  features: string[];
  applications: string[];
  imageUrl: string;
  imageAlt: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  detailedDescription: string;
  capabilities: string[];
  coverage: string;
  turnaroundTime: string;
  iconName: string;
  imageUrl?: string;
  isEmergency?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "machines" | "hydraulic-systems" | "manufacturing" | "testing" | "repair" | "finished";
  categoryLabel: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  specsSummary?: string;
}

export interface ServiceArea {
  name: string;
  district: string;
  highlightedAreas: string[];
  responseTime: string;
  isPrimary?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
