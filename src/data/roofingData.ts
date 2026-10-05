import luxuryRoofImg from '@/src/assets/images/dfw_luxury_roof_1791240372435.jpg';
import commercialTpoImg from '@/src/assets/images/commercial_tpo_roof_1791240382851.jpg';
import metalRoofImg from '@/src/assets/images/standing_seam_metal_1791240393357.jpg';
import hailInspectImg from '@/src/assets/images/hail_damage_inspect_1791240405201.jpg';

export const COMPANY_INFO = {
  name: "James Kate Roofing & Restoration",
  shortName: "James Kate Roofing",
  domain: "dallasftworthroofer.com",
  tagline: "North Texas Roofing Engineered for Severe Hail & Sun",
  phone: "(972) 284-1655",
  phoneRaw: "tel:9722841655",
  directPhone: "(972) 400-4707",
  emergencyPhone: "(972) 284-1655",
  email: "estimates@dallasftworthroofer.com",
  founded: 2008,
  yearsInBusiness: 18,
  roofsCompleted: "10,000+",
  bbbRating: "A+",
  googleRating: 4.9,
  googleReviewCount: 487,
  headquarters: {
    address: "400 S 2nd St",
    city: "Mansfield",
    state: "TX",
    zip: "76063",
    description: "Main Headquarters & Material Dispatch Hub"
  },
  branches: [
    { city: "Dallas", address: "1401 Elm St, Dallas, TX 75202", label: "Dallas Field Office" },
    { city: "Fort Worth", address: "777 Main St, Fort Worth, TX 76102", label: "Fort Worth Field Office" },
    { city: "Arlington", address: "2000 E Lamar Blvd, Arlington, TX 76006", label: "Mid-Cities Dispatch" },
    { city: "Frisco / Plano", address: "6800 Dallas Pkwy, Plano, TX 75024", label: "North DFW Field Office" }
  ],
  certifications: [
    {
      title: "GAF Master Elite® Contractor",
      badge: "Top 2% in North America",
      description: "Only the top 2% of roofing contractors nationwide meet GAF's strict standards of licensing, insurance, and proven craftsmanship.",
      highlight: true
    },
    {
      title: "GAF President's Club Award",
      badge: "Elite Excellence",
      description: "Recognized for consistent premier installation quality, training, and verified homeowner satisfaction scores across North Texas.",
      highlight: true
    },
    {
      title: "BBB A+ Accredited Business",
      badge: "Accredited Since 2008",
      description: "Maintaining the highest rating for customer dispute resolution, ethical billing, and community trust.",
      highlight: false
    },
    {
      title: "Haag Certified Roof Inspector",
      badge: "Forensic Engineering",
      description: "Rigorous scientific storm damage assessment recognized and respected by major insurance adjusters.",
      highlight: true
    },
    {
      title: "Owens Corning Preferred Contractor",
      badge: "Certified Installer",
      description: "Trained and authorized to install Duration® Storm impact-resistant shingle systems with extended non-prorated warranties.",
      highlight: false
    },
    {
      title: "NTRCA Member",
      badge: "North Texas Roofing Contractors",
      description: "Active member in good standing with the North Texas Roofing Contractors Association, adhering to local building codes.",
      highlight: false
    }
  ],
  guarantees: [
    "Lifetime Workmanship Warranty on complete replacements",
    "50-Year Non-Prorated GAF Golden Pledge® Manufacturer Coverage",
    "Zero-Deposit Policy on Insurance Claim Projects",
    "Property & Landscape Protection Protocol (Magnetic nail sweep guarantee)",
    "Strict Compliance with Texas HB 2102 (Legal, ethical insurance assistance)"
  ]
};

export const IMAGES = {
  heroLuxury: luxuryRoofImg,
  commercialTpo: commercialTpoImg,
  standingSeamMetal: metalRoofImg,
  hailInspection: hailInspectImg
};

export interface ServiceItem {
  id: string;
  title: string;
  category: "residential" | "commercial" | "storm" | "repairs" | "exteriors";
  subtitle: string;
  description: string;
  features: string[];
  materialsIncluded: string[];
  warranty: string;
  turnaroundTime: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-replacement",
    title: "Residential Roof Replacement",
    category: "residential",
    subtitle: "Architectural, Class 4 Impact Resistant & Designer Shingles",
    description: "Engineered specifically for extreme North Texas thermal swings and severe hail. We install complete GAF and Owens Corning roofing systems with synthetic underlayment, ice and water shield in valleys, and balanced attic ridge ventilation.",
    features: [
      "Tear-off down to wood decking with full decking inspection & rot replacement",
      "Heavy-duty synthetic underlayment replacing cheap organic felt paper",
      "Ice & Water leak barrier installed on all valleys, chimneys, and wall transitions",
      "GAF Cobra® Ridge Vent ventilation system to lower summer attic temperatures by up to 30°F",
      "Full ground tarping, bush shields, and triple magnetic nail sweep"
    ],
    materialsIncluded: [
      "GAF Timberline HDZ®",
      "Timberline AS II (Class 4 Impact)",
      "Owens Corning Duration® Storm",
      "CertainTeed Landmark®"
    ],
    warranty: "Lifetime Workmanship + 50-Yr GAF Golden Pledge®",
    turnaroundTime: "1 to 2 Days (Typical single-family home)",
    image: luxuryRoofImg
  },
  {
    id: "standing-seam-metal",
    title: "Standing Seam Metal Roofing",
    category: "residential",
    subtitle: "50+ Year Architectural Durability with Concealed Fasteners",
    description: "The pinnacle of storm resistance and modern Texas architectural aesthetics. Custom fabricated 24-gauge Galvalume steel with baked-on Kynar 500® coatings that resist fading, 140+ mph hurricane-force winds, and golf-ball sized hail.",
    features: [
      "Concealed fastener design eliminates exposed screws that cause leaks over time",
      "High solar reflectance (Cool Roof rating) slashes summer cooling bills by up to 25%",
      "Class 4 UL 2218 hail impact rating (highest rating achievable)",
      "Non-combustible Class A fire rating",
      "Available in 28+ designer matte and textured finishes"
    ],
    materialsIncluded: [
      "24-Gauge Galvalume Steel",
      "Kynar 500® Fluoropolymer Finish",
      "High-Temp Ice & Water Underlayment",
      "Custom Copper Accents"
    ],
    warranty: "Lifetime Workmanship + 40-Yr Paint Warranty",
    turnaroundTime: "3 to 5 Days",
    image: metalRoofImg
  },
  {
    id: "tile-slate-cedur",
    title: "Tile, Slate & Synthetic Shake",
    category: "residential",
    subtitle: "Spanish Clay, Concrete Tile, and CeDUR Synthetic Wood Shakes",
    description: "Specialized luxury roofing for Mediterranean, Spanish Revival, and custom estate homes across Southlake, Highland Park, and Frisco. We handle structural load calculations, custom lead flashings, and storm-rated underlayment upgrades.",
    features: [
      "CeDUR synthetic wood shakes deliver realistic cedar look without fire or rot hazards",
      "Boral and Eagle concrete & clay tile systems with hurricane tie-downs",
      "Double-ply self-adhered waterproofing membrane base",
      "Weight analysis and rafter reinforcement verification",
      "Indestructible against harsh Texas UV radiation"
    ],
    materialsIncluded: [
      "CeDUR Synthetic Shakes",
      "Boral Concrete Tile",
      "Clay Spanish 'S' Tile",
      "DaVinci Composite Slate"
    ],
    warranty: "Lifetime Manufacturer + 15-Yr Workmanship",
    turnaroundTime: "4 to 7 Days",
    image: luxuryRoofImg
  },
  {
    id: "commercial-tpo-coatings",
    title: "Commercial TPO & Flat Systems",
    category: "commercial",
    subtitle: "Energy Star Certified Single-Ply TPO, PVC & Elastomeric Restoration",
    description: "Protecting commercial assets, warehouses, strip retail, churches, and multi-family complexes across the DFW Metroplex. We offer both complete membrane tear-offs and liquid-applied silicone roof restorations that renew existing roofs at 50% lower cost.",
    features: [
      "60-mil and 80-mil thick TPO single-ply membrane with robotically welded seams",
      "Bright white reflective surface reduces heat island effect and HVAC energy loads",
      "Silicone roof coating systems qualify as 100% tax-deductible maintenance in Year 1",
      "Commercial infrared drone moisture scans to detect hidden trapped moisture",
      "Zero disruption to your business operations or tenant parking"
    ],
    materialsIncluded: [
      "Carlisle SynTec TPO",
      "GAF EverGuard® TPO",
      "Gaco Western 100% Silicone",
      "ISO Rigid Insulation Board"
    ],
    warranty: "20 to 30-Year NDL (No Dollar Limit) Manufacturer Warranties",
    turnaroundTime: "Scheduled according to facility square footage",
    image: commercialTpoImg
  },
  {
    id: "storm-hail-insurance",
    title: "Storm & Hail Damage Restoration",
    category: "storm",
    subtitle: "Haag Forensic Inspections & Comprehensive Insurance Claims Support",
    description: "North Texas sits at the core of 'Hail Alley.' When severe weather strikes, our Haag-certified inspectors perform forensic photo inspections, create itemized Xactimate estimates, and meet your insurance adjuster on the roof to ensure all damaged components are approved.",
    features: [
      "High-resolution drone aerial photography and thermal shingle analysis",
      "Xactimate software formatting matching your insurance company's exact billing standards",
      "Full coverage of city building code upgrades (drip edge, ice barrier, ventilation)",
      "Strict compliance with Texas House Bill 2102 (no illegal deductible waivers)",
      "Zero out-of-pocket costs beyond your mandatory insurance deductible"
    ],
    materialsIncluded: [
      "Forensic Hail Test Squares",
      "Xactimate Itemized Scope of Work",
      "City Code Compliance Documentation",
      "Completion Certificates"
    ],
    warranty: "Lifetime Workmanship on complete insurance re-roofs",
    turnaroundTime: "Emergency Tarping in < 4 Hours | Full Build in 1 Day",
    image: hailInspectImg
  },
  {
    id: "roof-repairs-maintenance",
    title: "Precision Roof Repairs & Leak Fixes",
    category: "repairs",
    subtitle: "24/7 Emergency Tarping, Flashing Fixes & Leak Detection",
    description: "Not every roof needs a full replacement. We provide fast, accurate diagnostics for persistent leaks, damaged flashing, rotted pipe jacks, and wind-torn shingles, extending your current roof's life and preventing costly interior ceiling rot.",
    features: [
      "Fast response for active interior water leaks and storm damage tarping",
      "Replacement of cracked neoprene plumbing pipe boots with lifetime lead collars",
      "Chimney cricket fabrication and step flashing re-mortaring",
      "Skylight re-flashing and seal replacement",
      "Gutter-to-eave leak prevention and soffit/fascia carpentry repair"
    ],
    materialsIncluded: [
      "Lifetime Lead Pipe Jacks",
      "Commercial Grade Flashing Sealants",
      "Matching Architectural Shingles",
      "Reinforced Ice/Water Membranes"
    ],
    warranty: "3 to 5-Year Workmanship on All Repair Work",
    turnaroundTime: "Same Day or 24 Hours",
    image: luxuryRoofImg
  },
  {
    id: "gutters-siding-exteriors",
    title: "Seamless Gutters, Siding & Exteriors",
    category: "exteriors",
    subtitle: "5\" & 6\" Heavy-Gauge Seamless Aluminum Gutters & James Hardie Siding",
    description: "Complete water shedding protection from the roofline to the foundation. Oversized 6-inch seamless gutters handle intense North Texas downpours, while James Hardie fiber cement siding shields your home from termites, hail, and humidity.",
    features: [
      "On-site custom continuous gutter extrusion with baked-on enamel finish",
      "Oversized 3x4 downspouts to prevent overflow near house slab foundation",
      "Micro-mesh leaf guards to prevent clogs and oak tassel buildup",
      "James Hardie ColorPlus® siding with 30-year non-prorated substrate warranty",
      "Complete exterior trim, fascia wrap, and leak-repair drywall restoration"
    ],
    materialsIncluded: [
      "0.032 Heavy Gauge Aluminum Gutters",
      "LeafRelief Micro-Mesh Guards",
      "James Hardie Fiber Cement Planks",
      "Sherwin-Williams SuperPaint®"
    ],
    warranty: "Lifetime Gutter Installation & 30-Yr Siding Warranty",
    turnaroundTime: "1 to 2 Days",
    image: metalRoofImg
  }
];

export const MATERIAL_COMPARISON = [
  {
    name: "Architectural Asphalt Shingles",
    brand: "GAF Timberline HDZ / OC Duration",
    hailRating: "Class 3 (UL 2218)",
    windRating: "Up to 130 mph",
    lifespan: "25 - 30 Years",
    relativeCost: "$$",
    insuranceDiscount: "0% - 10%",
    energyEfficiency: "Standard",
    fireRating: "Class A",
    bestFor: "Most Texas residential homes seeking best balance of cost and appearance."
  },
  {
    name: "Class 4 Impact Resistant Shingles",
    brand: "GAF Timberline AS II / OC Storm",
    hailRating: "Class 4 (Highest - Withstands 2\" steel ball)",
    windRating: "Up to 130 mph",
    lifespan: "35 - 40 Years",
    relativeCost: "$$$",
    insuranceDiscount: "20% - 30% Annual Texas Premium Savings",
    energyEfficiency: "High (Reflective options available)",
    fireRating: "Class A",
    bestFor: "Homeowners in DFW hail belts wanting roof longevity + massive insurance discounts."
  },
  {
    name: "Standing Seam Metal (24-Ga)",
    brand: "Custom Fabricated Galvalume",
    hailRating: "Class 4 (Maximum Dent Resistance)",
    windRating: "Up to 150+ mph",
    lifespan: "50+ Years",
    relativeCost: "$$$$$",
    insuranceDiscount: "25% - 35% Annual Premium Savings",
    energyEfficiency: "Exceptional (Reflects 70% solar radiation)",
    fireRating: "Class A (Non-combustible)",
    bestFor: "Modern, luxury, and estate homes wanting a lifetime roof with zero shingle blow-offs."
  },
  {
    name: "CeDUR Synthetic Wood Shake",
    brand: "CeDUR Polyurethane Matrix",
    hailRating: "Class 4 (Simulated 50 yr cedar)",
    windRating: "Up to 115 mph",
    lifespan: "50+ Years",
    relativeCost: "$$$$",
    insuranceDiscount: "20% - 30% Annual Savings",
    energyEfficiency: "High insulation value (R-value)",
    fireRating: "Class A (No chemical fire retardant wash-out)",
    bestFor: "HOAs requiring wood shake aesthetics without severe fire or rot liability."
  },
  {
    name: "Commercial Single-Ply TPO",
    brand: "Carlisle / GAF EverGuard",
    hailRating: "Severe Hail (Puncture resistant)",
    windRating: "FM 1-90 to 1-120 ratings",
    lifespan: "20 - 30 Years",
    relativeCost: "$$$",
    insuranceDiscount: "Commercial Asset Rate Reductions",
    energyEfficiency: "Energy Star Certified (Cool Roof)",
    fireRating: "Class A",
    bestFor: "Flat or low-slope commercial buildings, warehouses, retail, and multi-family."
  }
];

export const DFW_CITIES = [
  {
    name: "Mansfield",
    county: "Tarrant / Johnson",
    zipCodes: ["76063"],
    status: "Headquarters Hub",
    notes: "Home of our central fleet & supply staging warehouse.",
    recentStorm: "Moderate Hail Event recorded spring 2025"
  },
  {
    name: "Dallas",
    county: "Dallas",
    zipCodes: ["75201", "75204", "75214", "75225", "75230", "75248"],
    status: "Field Crew Stationed",
    notes: "Serving Lakewood, Preston Hollow, Oak Lawn, and North Dallas.",
    recentStorm: "Quarter to golf-ball hail swath in central Dallas"
  },
  {
    name: "Fort Worth",
    county: "Tarrant",
    zipCodes: ["76102", "76107", "76109", "76126", "76132", "76137"],
    status: "Field Crew Stationed",
    notes: "Covering Cultural District, Tanglewood, Alliance, and North Fort Worth.",
    recentStorm: "Major wind and hail recorded in northern Tarrant corridor"
  },
  {
    name: "Arlington",
    county: "Tarrant",
    zipCodes: ["76006", "76012", "76013", "76017"],
    status: "Priority Response Zone",
    notes: "Over 1,200 roofs replaced across North & South Arlington.",
    recentStorm: "Active storm restoration projects ongoing"
  },
  {
    name: "Plano & Frisco",
    county: "Collin / Denton",
    zipCodes: ["75024", "75034", "75035", "75070", "75093"],
    status: "High Demand Area",
    notes: "Luxury HOA compliant re-roofs and Class 4 impact shingle upgrades.",
    recentStorm: "Frequent spring supercell storms"
  },
  {
    name: "Southlake & Keller",
    county: "Tarrant",
    zipCodes: ["76092", "76244", "76248", "76262"],
    status: "Priority Response Zone",
    notes: "High-end designer asphalt, standing seam metal, and tile specialists.",
    recentStorm: "Severe hail history in 2024 & 2025"
  },
  {
    name: "Grand Prairie & Irving",
    county: "Dallas",
    zipCodes: ["75050", "75052", "75062", "75063"],
    status: "Field Crew Stationed",
    notes: "Residential neighborhoods and heavy commercial TPO warehouse centers.",
    recentStorm: "Storm damage claims processing"
  },
  {
    name: "Burleson & Crowley",
    county: "Johnson / Tarrant",
    zipCodes: ["76028", "76036"],
    status: "Immediate Dispatch",
    notes: "Local South DFW community coverage with same-day roof checks.",
    recentStorm: "High wind damage reports"
  },
  {
    name: "Denton & Flower Mound",
    county: "Denton",
    zipCodes: ["76201", "76210", "75022", "75028"],
    status: "Field Crew Stationed",
    notes: "Serving the entire Golden Triangle area with GAF Master Elite warranties.",
    recentStorm: "Hail impact verified on aging 3-tab roofs"
  }
];

export const INSPECTION_POINTS = [
  {
    zone: "Surface & Shingles",
    icon: "Shield",
    points: [
      "Hail impact bruise depth & micro-fractures in fiberglass matting",
      "Granule loss percentage exposing asphalt to rapid UV oxidation",
      "Wind lift failure on starter strips and perimeter shingles",
      "Missing, cracked, curling, or blistered shingles",
      "Previous unpermitted patch jobs and improper nail placements"
    ]
  },
  {
    zone: "Flashings & Penetrations",
    icon: "Flame",
    points: [
      "Plumbing pipe jack boot seal integrity (UV degradation check)",
      "Chimney step flashing, counter flashing, and cricket slope",
      "Wall apron and sidewall flashing rust or separation",
      "HVAC gas flue storm collar and spark arrestor stability",
      "Skylight curb flashings, seals, and acrylic dome condition"
    ]
  },
  {
    zone: "Ventilation & Decking",
    icon: "Wind",
    points: [
      "Attic intake vs. exhaust airflow balance (NFA ratio calculation)",
      "Ridge vent baffle function and mesh insect barrier check",
      "Sub-surface plywood/OSB decking rot or water delamination",
      "Soffit intake vents clear of blown attic insulation blockages",
      "Attic moisture signs, mildew, or rusted nail shanks on sheathing"
    ]
  },
  {
    zone: "Drainage & Perimeters",
    icon: "Droplets",
    points: [
      "Drip edge presence & proper installation over fascia boards",
      "Valley metal or ice/water shield thickness and water flow channels",
      "Gutter slope, downspout clearance, and fascia board dry rot",
      "Soffit sagging and animal penetration entry point analysis",
      "Ground drainage splash blocks and foundation protection"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "David & Sarah Henderson",
    location: "Frisco, TX (Starwood)",
    project: "Class 4 GAF Timberline AS II Replacement + Gutters",
    rating: 5,
    text: "After the monster hailstorm last April, our neighborhood was swarmed with out-of-state storm chasers knocking on doors. A coworker recommended James Kate Roofing since they’ve been in DFW since 2008. Their Haag-certified inspector met our Allstate adjuster on the roof with drone photos. Insurance approved our entire roof and gutters. Installation took just ONE day and their magnetic clean-up left zero nails on our driveway. Plus, our insurance company gave us a 26% discount on our annual homeowner policy for the Class 4 shingles!",
    verified: true,
    year: "2025"
  },
  {
    id: 2,
    name: "Marcus Vance",
    location: "Lakewood, Dallas, TX",
    project: "Custom Standing Seam Matte Black Metal Roof",
    rating: 5,
    text: "We wanted a clean modern metal roof for our mid-century remodel in Dallas. Other roofers quoted absurd prices or tried to push standard asphalt. James Kate's metal fabrication crew was top notch. Concealed fasteners, gorgeous ridge trim, and incredible craftsmanship. Our electric bill dropped noticeably this past summer thanks to the reflective Kynar finish.",
    verified: true,
    year: "2024"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Mansfield, TX (Walnut Creek)",
    project: "Emergency Leak Repair & Full Roof Replacement",
    rating: 5,
    text: "During a severe Sunday night storm, water started dripping through our master bedroom ceiling. James Kate dispatched a repair technician first thing in the morning to tarp the section. When we decided to replace the 18-year-old roof, their quote was transparent and honest with no hidden fees. They even walked us through Texas HB 2102 so we understood the deductible laws. True professionals.",
    verified: true,
    year: "2025"
  },
  {
    id: 4,
    name: "Robert Sterling",
    location: "Southlake, TX",
    project: "CeDUR Synthetic Wood Shake Conversion",
    rating: 5,
    text: "Our HOA required cedar shake appearance, but real cedar insurance premiums were through the roof. James Kate installed CeDUR synthetic shakes. It looks identical to natural wood but has a Class A fire rating and Class 4 hail rating. We passed HOA architectural review on the first submission.",
    verified: true,
    year: "2025"
  },
  {
    id: 5,
    name: "Dr. Anthony Caldwell",
    location: "Arlington, TX (Medical District)",
    project: "Commercial 60-mil TPO Membrane (18,000 sq ft)",
    rating: 5,
    text: "We manage an outpatient clinic building in Arlington. James Kate handled the TPO overlay and new parapet flashing without requiring us to shut down our practice for even an hour. The 25-year NDL manufacturer warranty gives our ownership group total peace of mind.",
    verified: true,
    year: "2024"
  }
];

export const FAQ_ITEMS = [
  {
    q: "How do I know if my roof has hail damage even if it isn't leaking yet?",
    a: "Hail damage rarely causes immediate indoor leaks. Instead, hail stones crush the protective mineral granules on shingles, fracturing the internal fiberglass matting. Over the following 6 to 18 months, intense Texas sun bakes the exposed raw asphalt, causing it to crack, curl, and eventually leak. Our Haag-certified inspectors use high-resolution drone cameras and chalk test squares to detect sub-surface bruising before interior drywall damage occurs."
  },
  {
    q: "What is Texas House Bill 2102 and why can't a roofer 'waive' my insurance deductible?",
    a: "In 2019, Texas enacted House Bill 2102 (Texas Insurance Code § 707.002), which makes it a criminal misdemeanor for contractors to waive, absorb, rebate, or offset a homeowner's insurance deductible through false invoices or marketing credits. Reputable, licensed roofers like James Kate strictly adhere to Texas state law. Beware of out-of-town 'storm chasers' offering to pay your deductible—they often cut corners on materials, skip synthetic underlayment, fail to pull city permits, or void your manufacturer warranty."
  },
  {
    q: "What is the difference between a standard roofer and a GAF Master Elite® contractor?",
    a: "Only 2% of all roofing contractors in North America qualify for GAF Master Elite® status. It requires rigorous ongoing factory training, verification of spotless BBB standing, adequate general liability and workers' compensation coverage, and proven local tenure. Crucially, only Master Elite contractors can offer GAF's flagship Golden Pledge® 50-year non-prorated warranty, where GAF themselves inspect and back the installation."
  },
  {
    q: "Can Class 4 impact-resistant shingles lower my Texas home insurance bill?",
    a: "Yes! Because North Texas has the highest frequency of severe hail claims in the United States, almost every major insurance carrier in Texas (including State Farm, Allstate, USAA, Travelers, and Farmers) offers an annual premium discount of 15% to 30% for roofs with verified UL 2218 Class 4 impact resistance. This often saves homeowners between $400 and $1,200 every single year, frequently paying for the upgrade in just 3 to 4 years."
  },
  {
    q: "How long does a roof replacement take on a typical North Texas home?",
    a: "For standard single-family homes (2,000 to 3,500 sq ft), our experienced crew completes the entire tear-off, decking inspection, ice & water barrier installation, shingle nailing, and full cleanup in ONE day. Larger luxury homes or complex standing seam metal projects typically take 2 to 4 days. We always check radar before starting and never leave an exposed roof open overnight."
  },
  {
    q: "Do you offer free roof inspections and estimates?",
    a: "Yes, 100% free with zero obligation. We provide a comprehensive 21-point photographic inspection report, including drone aerial imaging, roof slope measurements, and honest recommendations on whether your roof needs a simple repair, a full replacement, or is currently in sound health."
  }
];
