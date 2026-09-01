export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  location: string;
  state: string;
  country: string;
  workshopAddress: string;
  workingHours: string;
  establishedYear: number;
  googleMapEmbedUrl: string;
  googleBusinessProfileUrl: string;
}

export const defaultBusinessInfo: BusinessInfo = {
  name: "DD ENTERPRISES",
  tagline: "Hydraulic Machine Manufacturer & Repair Service",
  phone: "+91 98200 00000",
  phoneRaw: "+919820000000",
  whatsapp: "+91 98200 00000",
  whatsappRaw: "919820000000",
  email: "info@ddenterprises.co.in",
  location: "Navi Mumbai",
  state: "Maharashtra",
  country: "India",
  workshopAddress: "MIDC Industrial Area, Navi Mumbai, Maharashtra, India - 400705",
  workingHours: "Mon - Sat: 9:00 AM - 7:30 PM (Emergency breakdown on call)",
  establishedYear: 2019,
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.45781329272!2d72.93424424754794!3d19.07609055419812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleBusinessProfileUrl: "#",
};

const STORAGE_KEY = "dd_enterprises_business_info";

export const getStoredBusinessInfo = (): BusinessInfo => {
  if (typeof window === "undefined") return defaultBusinessInfo;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultBusinessInfo, ...JSON.parse(saved) };
    }
  } catch (err) {
    console.warn("Could not read stored business info:", err);
  }
  return defaultBusinessInfo;
};

export const saveBusinessInfo = (info: BusinessInfo): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch (err) {
    console.warn("Could not save business info:", err);
  }
};

export const generateWhatsAppLink = (phoneRaw: string, message: string): string => {
  const cleanPhone = phoneRaw.replace(/\D/g, "");
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
};
