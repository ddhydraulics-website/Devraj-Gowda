import { ProductItem } from "../types";

export const productsData: ProductItem[] = [
  {
    id: "hydraulic-paper-plate-machine",
    name: "Hydraulic Paper Plate Making Machine",
    category: "Packaging Machinery",
    tagline: "High-speed, multi-die hydraulic press for paper plates, thalis, and food bowls.",
    description: "Engineered for continuous production of paper plates, donation bowls, breakfast thalis, and laminated food trays. Built with precision-guided steel platens, energy-efficient hydraulic manifolds, and adjustable heat & pressure controls.",
    specs: [
      { label: "Tonnage Capacity", value: "5 Ton to 15 Ton (Customizable)" },
      { label: "Die Configurations", value: "Single Die / Double Die / 4-Die" },
      { label: "Production Output", value: "2,000 to 8,000 pcs / hour" },
      { label: "Paper GSM Range", value: "80 GSM to 500 GSM" },
      { label: "Plate Size Range", value: "4 inch to 16 inch diameter" },
      { label: "Power Supply", value: "220V Single Phase / 415V 3-Phase" },
      { label: "Hydraulic Pressure", value: "140 to 180 Bar max" },
      { label: "Control System", value: "Automatic timer / relay / PLC logic" }
    ],
    features: [
      "Rigid fabricated steel frame with minimum deflection under continuous load",
      "Hardened chrome-plated piston rod for long seal life and low maintenance",
      "Digital PID temperature controllers for top and bottom platen heating",
      "Auto feeding, pressing, and pneumatic ejection system support",
      "Compact footprint suited for micro-enterprises and large production units"
    ],
    applications: [
      "Paper buffet plates and dinner thalis",
      "Biodegradable sal leaf & areca nut plates",
      "Laminated paper breakfast trays & snack bowls",
      "Silver foil paper dona and containers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hydraulic Paper Plate Making Machine Manufacturing in Navi Mumbai Workshop",
    isPopular: true
  },
  {
    id: "hydraulic-chapati-making-machine",
    name: "Hydraulic Chapati Making Machine",
    category: "Commercial Food Equipment",
    tagline: "Heavy-duty hydraulic pressing press for commercial kitchens, mess halls, and caterers.",
    description: "Designed for commercial industrial food production, central kitchens, hostels, and catering services. Ensures uniform dough thickness, smooth round shapes, and optional dual-sided contact roasting with precise hydraulic dwell time.",
    specs: [
      { label: "Pressing Capacity", value: "3 Ton to 8 Ton" },
      { label: "Production Output", value: "800 to 2,000 chapatis / hour" },
      { label: "Chapati Diameter", value: "4 inch to 10 inch adjustable" },
      { label: "Thickness Range", value: "1.0 mm to 3.5 mm precision" },
      { label: "Heating Platens", value: "Non-stick Food Grade Coated Aluminum" },
      { label: "Electric Rating", value: "3 kW to 6 kW (Heater + Hydraulic motor)" },
      { label: "Operation Grade", value: "Semi-Automatic & Fully Automatic" }
    ],
    features: [
      "Food-grade stainless steel (SS 304) contact surfaces and sanitary guarding",
      "Consistent diameter and thickness control without dough tearing",
      "Integrated timer for automatic cylinder return and pressure holding",
      "Low power consumption hydraulic unit with quiet gear pump",
      "Easy cleanup and washdown-safe mechanical construction"
    ],
    applications: [
      "Industrial factory canteens and corporate cafeterias",
      "Hostels, universities, and commercial catering companies",
      "Ready-to-eat chapati packaging enterprises",
      "Hotels, restaurants, and cloud kitchen networks"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hydraulic Chapati Press Machine Assembly at DD Enterprises",
    isPopular: true
  },
  {
    id: "hydraulic-bhakri-making-machine",
    name: "Hydraulic Bhakri Making Machine",
    category: "Commercial Food Equipment",
    tagline: "Specialized high-pressure hydraulic dough flattener for jowar, bajra, and rice bhakris.",
    description: "Specially engineered for Maharashtrian and regional flatbreads (Jowar, Bajra, Nachni, and Rice Bhakri). Traditional coarse grain dough requires specific pressure profiles and specialized non-stick heating plates to prevent edge cracking.",
    specs: [
      { label: "Hydraulic Tonnage", value: "5 Ton to 12 Ton high-density press" },
      { label: "Plate Diameter", value: "Up to 12 inch diameter" },
      { label: "Production Capacity", value: "500 to 1,200 bhakris / hour" },
      { label: "Platen Surface", value: "Heavy-duty Teflon / Food-Grade Alloy" },
      { label: "Motor Power", value: "2 HP to 5 HP hydraulic power pack" },
      { label: "Operating Mode", value: "Push button / Foot switch control" }
    ],
    features: [
      "Heavy pressing stroke designed specifically for non-glutinous grain dough",
      "Adjustable dwell-time timer for perfect gluten-free dough bonding",
      "Precision heat regulation preventing stickiness or dough over-baking",
      "Rugged frame resisting vibration during rapid production cycles",
      "Simple maintenance access with easily replaceable heating elements"
    ],
    applications: [
      "Regional Maharashtrian restaurants and Bhakri kendras",
      "Highway dhabas, cloud kitchens, and mess halls",
      "Agrotourism centers and traditional food packaging hubs",
      "Institutional canteens across Mumbai, Thane, and Maharashtra"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hydraulic Bhakri Pressing Machine Manufacturing in Workshop",
    isPopular: false
  },
  {
    id: "customized-hydraulic-machines-spm",
    name: "Customized Hydraulic Machines (SPM)",
    category: "Custom Industrial Presses",
    tagline: "Tailor-made Special Purpose Machines designed to client drawings and tonnage requirements.",
    description: "DD ENTERPRISES manufactures custom Special Purpose Hydraulic Machines (SPM) tailored for metal forming, stamping, punching, rubber molding, deep drawing, and composite component pressing across engineering industries in Maharashtra.",
    specs: [
      { label: "Capacity Range", value: "5 Ton to 250+ Ton" },
      { label: "Frame Structures", value: "C-Frame / H-Frame / 4-Pillar (Column)" },
      { label: "Stroke Length", value: "100 mm to 1,200 mm custom" },
      { label: "Daylight Opening", value: "Engineered to client mould specifications" },
      { label: "Control Panels", value: "Manual Lever / Solenoid / PLC touch screen" },
      { label: "Hydraulic Circuit", value: "Proportional / Servo-hydraulic options" }
    ],
    features: [
      "Finite Element Analysis (FEA) verified frame fabrication for minimal deflection",
      "Custom manifold blocks ensuring zero external piping leak points",
      "Dual emergency stops, safety light curtains, and safety interlocking",
      "Variable pressing speed (rapid advance, slow pressing, fast retract)",
      "Turnkey manufacturing with full factory acceptance testing (FAT) before dispatch"
    ],
    applications: [
      "Sheet metal deep drawing, punching, and blanking",
      "Rubber and composite compression moulding",
      "Automotive bush pressing and bearing assembly",
      "Industrial briquetting, baling, and compaction"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Customized Special Purpose Hydraulic Machine Built in Navi Mumbai",
    isPopular: true
  },
  {
    id: "hydraulic-power-pack-manufacturing",
    name: "Hydraulic Power Pack Units",
    category: "Hydraulic Systems",
    tagline: "Custom power packs engineered with premium pumps, manifolds, and tank capacities.",
    description: "We manufacture custom hydraulic power units (HPU) engineered for smooth fluid delivery, optimal oil cooling, and long operational life. Built using reputed brand pumps (vane, gear, piston), standard Cetop valves, and precision reservoirs.",
    specs: [
      { label: "Tank Capacity", value: "20 Litres to 500+ Litres" },
      { label: "Operating Pressure", value: "70 Bar to 350 Bar" },
      { label: "Pump Types", value: "Gear Pump / Vane Pump / Axial Piston Pump" },
      { label: "Electric Motors", value: "1 HP to 40 HP (3-phase / 1-phase)" },
      { label: "Valve Standard", value: "CETOP 3 / CETOP 5 modular directional valves" },
      { label: "Accessories", value: "Level indicator, suction strainer, return line filter, breather" }
    ],
    features: [
      "Baffled internal reservoir preventing aeration and fluid cavitation",
      "CNC machined manifold blocks eliminating cumbersome piping joints",
      "Air or water oil-cooler integration for heavy continuous duty cycles",
      "Pressure gauge with isolator valve for easy monitoring and tuning",
      "Factory hydro-tested and calibrated before dispatch"
    ],
    applications: [
      "Hydraulic presses, lifts, and dock levelers",
      "Industrial machine tools, broaching, and bending machinery",
      "Plastic processing machinery and rubber moulding presses",
      "Scrap balers and compaction equipment"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Custom Hydraulic Power Pack Unit Assembled in Navi Mumbai",
    isPopular: false
  },
  {
    id: "hydraulic-cylinders-components",
    name: "Hydraulic Cylinders & Components",
    category: "Components & Spares",
    tagline: "Heavy-duty tie-rod, welded, and mill-type hydraulic cylinders with precision honing.",
    description: "Precision manufacturing of double-acting and single-acting hydraulic cylinders for OEM machinery and replacement markets. Fabricated with micro-honed cold-drawn ST52 tubes, induction hardened chrome rods, and premium polyurethane/PTFE seal kits.",
    specs: [
      { label: "Bore Diameters", value: "40 mm to 300 mm" },
      { label: "Stroke Lengths", value: "Up to 2,500 mm" },
      { label: "Working Pressure", value: "Up to 300 Bar (4350 PSI)" },
      { label: "Piston Rods", value: "EN8 / EN9 / Hard Chrome Plated (25-30 Micron)" },
      { label: "Cylinder Tubes", value: "Cold Drawn Seamless ST52 Honed Tubes (Ra < 0.4)" },
      { label: "Mounting Options", value: "Flange, Clevis, Trunnion, Foot, Eye-end" }
    ],
    features: [
      "100% hydro-pressure tested to 1.5x working pressure before delivery",
      "High-pressure poly-seal and Hallite/Parker seal compatible grooves",
      "Cushioning valves at both stroke ends for shock-free deceleration",
      "Custom replacement fabrication as per old sample cylinder or drawings",
      "Rapid turnaround for Navi Mumbai, Mumbai, and Thane factories"
    ],
    applications: [
      "Industrial hydraulic presses and compaction rams",
      "Material handling cranes, stackers, and scissor lifts",
      "Construction and earthmoving equipment attachment cylinders",
      "Special machine tool actuating cylinders"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Precision Hydraulic Cylinders and Honed Tubes DD Enterprises",
    isPopular: false
  }
];
