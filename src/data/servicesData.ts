import { ServiceItem } from "../types";

export const servicesData: ServiceItem[] = [
  {
    id: "hydraulic-machine-manufacturing",
    title: "Hydraulic Machine Manufacturing",
    category: "Manufacturing",
    summary: "Custom design and build of hydraulic presses, paper plate machines, chapati presses, and special purpose machinery.",
    detailedDescription: "From initial concept sketches to full turnkey commissioning, DD ENTERPRISES engineers complete hydraulic machines customized to client requirements. We handle frame fabrication, stress relieving, CNC machining of platens, hydraulic circuit engineering, electrical wiring, and pressure load testing at our Navi Mumbai workshop.",
    capabilities: [
      "Complete CAD design and tonnage force calculations",
      "Heavy structural fabrication and precision surface machining",
      "Custom hydraulic power pack and valve manifold integration",
      "Control panel integration (relay logic, digital timers, or PLC automation)",
      "Pre-dispatch load testing and operator training"
    ],
    coverage: "Navi Mumbai, Mumbai, Thane, Pune, and Pan-Maharashtra",
    turnaroundTime: "2 to 4 weeks depending on machine tonnage & customization",
    iconName: "Cog",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hydraulic-machine-repair-service",
    title: "Hydraulic Machine Repair Service",
    category: "Repair & Breakdown",
    summary: "Fast-response on-site troubleshooting and workshop repair for all types of industrial hydraulic machinery.",
    detailedDescription: "When your production line halts due to a hydraulic breakdown, our field technicians provide rapid diagnosis and repair. We resolve loss of hydraulic pressure, slow cylinder movement, overheating hydraulic oil, oil leaks, abnormal pump cavitation noise, and faulty solenoid direction valves.",
    capabilities: [
      "On-site hydraulic troubleshooting in industrial MIDC zones",
      "Pressure testing, pump flow checks, and relief valve calibration",
      "Replacement of worn directional valves, check valves, and filters",
      "Rewiring of hydraulic limit switches, pressure switches, and timers",
      "Emergency breakdown on-call support for critical production plants"
    ],
    coverage: "Rapid dispatch across Navi Mumbai (Rabale, Mahape, Pawane, Turbhe, Taloja), Mumbai & Thane",
    turnaroundTime: "Same day / 24-48 hours emergency response",
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    isEmergency: true
  },
  {
    id: "hydraulic-machine-maintenance",
    title: "Hydraulic Machine Maintenance",
    category: "Preventive Maintenance",
    summary: "Scheduled preventive maintenance programs and periodic health checks to prevent costly factory downtime.",
    detailedDescription: "Routine maintenance is critical for hydraulic longevity. Our comprehensive service contracts include hydraulic oil quality testing, filter element replacement, accumulator nitrogen charging, cylinder alignment checks, tie-rod torque verification, and hose wear inspections.",
    capabilities: [
      "Hydraulic fluid contamination testing and tank reservoir flushing",
      "Suction strainer, return line, and breather filter replacement",
      "Platen parallelism measurement and mechanical wear inspection",
      "Operating temperature logging and heat exchanger cleaning",
      "Preventive maintenance checklist reports for factory audits"
    ],
    coverage: "Navi Mumbai, Mumbai & Thane Industrial Estates",
    turnaroundTime: "Scheduled monthly / quarterly visits",
    iconName: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hydraulic-cylinder-system-repair",
    title: "Hydraulic Cylinder & System Repair",
    category: "Cylinder Overhaul",
    summary: "Complete refurbishment of leaking or scored cylinders, rod re-chroming, tube re-honing, and seal upgrades.",
    detailedDescription: "We specialize in repairing heavy hydraulic cylinders that suffer from internal bypass or external gland leakage. Our workshop conducts cylinder disassembly, barrel inside diameter measurement, honing to remove scratches, hard chrome plating and grinding of scored rods, and installation of durable seal packages.",
    capabilities: [
      "Hydraulic cylinder teardown and dimensional inspection",
      "Tube honing to restore surface Ra values",
      "Piston rod straightening, grinding, and hard chrome replating",
      "Custom replacement piston and gland machining",
      "Hydrostatic pressure testing at 100% capacity to verify zero leakage"
    ],
    coverage: "Pickup & delivery available across Navi Mumbai, Mumbai & Thane",
    turnaroundTime: "2 to 5 working days depending on chrome plating requirements",
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hydraulic-power-pack-service",
    title: "Hydraulic Power Pack Service",
    category: "Power Unit Service",
    summary: "Diagnosis, rebuilding, and performance upgrades for hydraulic power pack units and manifold assemblies.",
    detailedDescription: "Our team overhauls faulty power units to restore original operating pressure and flow rates. We service hydraulic pumps, lap leaking spool valves, clean or rebuild manifold blocks, repair motor couplings, and install efficient oil cooling heat exchangers.",
    capabilities: [
      "Pump efficiency testing and internal cartridge rebuilding",
      "Manifold block ultrasonic cleaning and resealing",
      "System de-aeration, oil level gauge, and temperature switch repair",
      "Retrofitting energy-saving proportional valves or VFD drives",
      "Complete power pack bench testing before recommissioning"
    ],
    coverage: "Workshop and on-site servicing across Maharashtra",
    turnaroundTime: "1 to 3 days for standard overhauls",
    iconName: "Gauge",
    imageUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "customized-hydraulic-solutions",
    title: "Customized Hydraulic Solutions & Retrofitting",
    category: "Engineering & Retrofit",
    summary: "Upgrading obsolete hydraulic machinery with modern controls, increased tonnage, or safety enhancements.",
    detailedDescription: "Transform aging mechanical or older manual hydraulic presses into modern, safe, high-speed machines. DD ENTERPRISES provides hydraulic circuit redesign, higher-pressure pump retrofits, safety light curtain integration, and custom tooling/die adaptation.",
    capabilities: [
      "Converting manual lever machines to automatic push-button cycles",
      "Upgrading hydraulic circuits for faster cycle times and lower heat generation",
      "Safety guarding and CE/OSHA compliant dual-hand tie-down controls",
      "Custom platen heating plate fabrication and temperature automation",
      "On-site plant integration and operator training"
    ],
    coverage: "All Maharashtra Industrial Corridors",
    turnaroundTime: "Project specific (Consultation within 24 hours)",
    iconName: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
  }
];
