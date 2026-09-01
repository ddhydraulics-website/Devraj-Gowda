import { ServiceArea } from "../types";

export const serviceAreasData: ServiceArea[] = [
  {
    name: "Navi Mumbai (Core Hub)",
    district: "Thane / Raigad District",
    highlightedAreas: [
      "Rabale MIDC & TTC Industrial Area",
      "Mahape Industrial Area & Millennium Business Park",
      "Pawane MIDC & Turbhe Industrial Corridor",
      "Taloja MIDC & Panvel Industrial Zone",
      "Nerul, Vashi, Airoli & Koparkhairane"
    ],
    responseTime: "Rapid 2-4 Hours On-Site Dispatch",
    isPrimary: true
  },
  {
    name: "Mumbai Industrial Zones",
    district: "Mumbai Suburban & City",
    highlightedAreas: [
      "Andheri & MIDC Marol Industrial Estate",
      "Kanjurmarg & Bhandup Industrial Area",
      "Kurla, Sakinaka & Chandivali Belt",
      "Goregaon, Malad & Kandivali West"
    ],
    responseTime: "Same Day / Within 24 Hours",
    isPrimary: true
  },
  {
    name: "Thane & Beyond",
    district: "Thane District",
    highlightedAreas: [
      "Wagle Industrial Estate, Thane",
      "Ghodbunder Road Industrial Clusters",
      "Dombivli MIDC (Phase 1 & Phase 2)",
      "Kalyan, Bhiwandi Logistics & Manufacturing Corridor"
    ],
    responseTime: "Same Day / Within 24 Hours",
    isPrimary: true
  },
  {
    name: "Panvel & Raigad Industrial Belt",
    district: "Raigad District",
    highlightedAreas: [
      "Panvel Industrial Nodes",
      "Rasayani & Patalganga MIDC",
      "Khopoli & Pen Industrial Belt",
      "Roha Industrial Area"
    ],
    responseTime: "Within 24 Hours Scheduled Visit",
    isPrimary: false
  },
  {
    name: "Pune & Wider Maharashtra",
    district: "Maharashtra State",
    highlightedAreas: [
      "Pune (Bhosari, Chakan, Talegaon, Pimpri-Chinchwad)",
      "Nashik (Ambad, Satpur MIDC)",
      "Aurangabad (Waluj, Shendra MIDC)",
      "Kolhapur, Satara, Ahmednagar & Solapur"
    ],
    responseTime: "Scheduled Dispatch & Turnkey Delivery",
    isPrimary: false
  }
];
