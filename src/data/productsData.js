// High-definition product & category imagery using verified company CDN and natural coir assets
export const CATEGORY_IMAGES = {
  packaging: '/coir%20bubble%20wrap.avif',
  filtration:
    'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
  interiorPanel:
    'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
  scrubbers:
    'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
  horticulture:
    'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
  rollsSheets:
    'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
  erosionControl:
    'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
  mattresses:
    'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
  corporateGifts:
    'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
  heroMain:
    'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
  sustainability:
    'https://static.wixstatic.com/media/ab8198_c6e9e4cd9a8748929cc7f9d220ecbcd1~mv2.png/v1/crop/x_514,y_0,w_1609,h_1073/fill/w_633,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-11-02%20183052.png',
}

export const PRODUCT_CATEGORIES = [
  {
    id: 'coir-packaging',
    slug: 'coir-packaging',
    route: '/products/coir-packaging',
    aliases: ['/products/coir-packaging'],
    name: 'Coir Packaging',
    navLabel: 'Coir Packaging',
    badge: 'ISPM-15 Exempt',
    heroImage: '/coir%20bubble%20wrap.avif',
    mainHeading: 'Sustainable Coir Packaging',
    supportingHeading: 'Natural Protection. Sustainable Packaging Solutions.',
    shortDescription:
      'Biodegradable, shock-absorbing coir alternatives to expanded polystyrene, bubble wraps, and synthetic foam inserts.',
    fullDescription:
      'Engineered from natural coconut fibers and natural latex binder, our protective packaging solutions deliver superior shock-absorption, moisture resistance, and load-bearing strength. Certified ISPM-15 exempt for international sea freight without fumigation.',
    highlights: [
      'ISPM-15 Exempt (No fumigation or heat treatment required for export)',
      '100% Biodegradable & Compostable replacement for EPS styrofoam',
      'High rebound resilience and vibration dampening for heavy goods',
      'Custom molded geometries, corner caps, and void fillers',
    ],
    applications: [
      'Heavy Machinery & Industrial Component Crating',
      'Glassware, Ceramics & Fragile Electronics Protection',
      'Export Palletizing & Void-fill Dunnage',
      'Sustainable Luxury E-commerce Packaging',
    ],
    products: [
      {
        id: 'coir-bubble-wrap',
        slug: 'coir-bubble-wrap',
        name: 'Coir Bubble Wrap',
        image: '/coir%20bubble%20wrap.avif',
        gallery: ['/coir%20bubble%20wrap.avif', '/coir%20void%20fillers.avif'],
        shortDescription: 'Flexible natural coir cushioning sheet engineered to replace synthetic plastic bubble wrap.',
        fullDescription: 'Coir Bubble Wrap provides exceptional surface protection and shock absorption for breakable items, bottles, and precision instruments. Breathable, anti-static, and completely plastic-free.',
        features: ['Flexible rolling format', 'Breathable natural coconut fiber', 'Zero static charge build-up', 'Custom width and roll lengths'],
        benefits: ['Eliminates single-use plastic waste', 'Resists puncture and tearing', 'Enhances brand sustainability perception'],
        applications: ['Fragile consumer goods', 'Bottled beverages & cosmetics', 'Aerospace and electronics shipping'],
        specifications: { Material: 'Natural Coir & Eco-binder', Thickness: '3mm - 8mm', RollWidth: '50cm - 150cm', Density: '400 - 650 gsm' },
      },
      {
        id: 'coir-void-fillers',
        slug: 'coir-void-fillers',
        name: 'Coir Void Fillers',
        image: '/coir%20void%20fillers.avif',
        gallery: ['/coir%20void%20fillers.avif', '/coir%20bubble%20wrap.avif'],
        shortDescription: 'Loose and resilient coir fiber clusters for filling container and carton voids.',
        fullDescription: 'Natural coir void fillers immobilize goods within corrugated boxes, preventing shifting and transit impact while maintaining air circulation.',
        features: ['Interlocking springy fibers', 'Dust-extracted and sanitized', 'High bulk-to-weight ratio', 'Available in bulk compressed sacks'],
        benefits: ['Protects oddly shaped items', 'Cost-effective alternative to plastic peanuts', '100% soil biodegradable'],
        applications: ['E-commerce order fulfillment', 'Ceramic & handicrafts packaging', 'Industrial spare parts box packing'],
        specifications: { Material: 'Cleaned Coconut Fiber', MoistureContent: '< 15%', BaleWeight: '10kg / 25kg / 50kg', Biodegradability: '100%' },
      },
      {
        id: 'coir-fitted-cushion',
        slug: 'coir-fitted-cushion',
        name: 'Coir Fitted Cushion',
        image: '/Coir%20Fitted%20Cushioning-1.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-1.avif', '/Coir%20Fitted%20Cushioning-2.avif'],
        shortDescription: 'Custom-molded coir contour pads tailored to fit product shapes snugly.',
        fullDescription: 'Molded using precise tooling to hold equipment, automotive components, and glass bottles firmly without scratching or dislocation during transit.',
        features: ['3D contour molding', 'High compressive strength', 'Smooth non-abrasive surface', 'Moisture resistant formulation'],
        benefits: ['Replaces chemical polyurethane foam', 'Reusable across closed-loop logistics', 'Engineered drop-test compliant'],
        applications: ['Automotive lighting & batteries', 'Medical devices', 'Appliance shipping'],
        specifications: { Material: 'Molded Rubberized Coir', ShoreHardness: '30 - 60 Shore A', Thickness: '15mm - 60mm', CustomCAD: 'Supported' },
      },
      {
        id: 'coir-wood-box',
        slug: 'coir-wood-box',
        name: 'Coir Wood Box',
        image: '/Coir%20wood%20box.avif',
        gallery: ['/Coir%20wood%20box.avif', '/Coir%20Pallet.avif'],
        shortDescription: 'Composite crates combining natural coir composite panels with reinforced framing.',
        fullDescription: 'Heavy-duty export container built with high-density compressed coir boards and structural corners. Naturally termite-resistant and certified ISPM-15 exempt.',
        features: ['Puncture-resistant coir walls', 'Weather-treated exterior', 'Lightweight yet high payload capacity', 'Flat-pack delivery options'],
        benefits: ['No quarantine delays at global ports', 'Significantly lighter than solid timber boxes', 'Recyclable and compostable'],
        applications: ['Export of pumps and valves', 'Textile machinery spares', 'International air and sea freight'],
        specifications: { WallThickness: '9mm - 18mm', MaxPayload: 'Up to 600 kg', Certification: 'ISPM-15 Exempt', Assembly: 'Knock-down / Pre-assembled' },
      },
      {
        id: 'coir-wood-pallet',
        slug: 'coir-wood-pallet',
        name: 'Coir Wood Pallet',
        image: '/Coir%20Pallet.avif',
        gallery: ['/Coir%20Pallet.avif', '/Coir%20wood%20box.avif'],
        shortDescription: 'Eco-composite logistics pallets engineered for heavy static and dynamic loads.',
        fullDescription: 'Molded coir composite pallets offer a sanitary, splinter-free, and chemical-free platform for warehouse racking and containerized shipping.',
        features: ['4-way forklift entry', 'Splinter-free and nail-free finish', 'Consistent dimensional accuracy', 'High moisture resistance'],
        benefits: ['Guaranteed customs clearance worldwide', 'Zero fumigation paperwork', 'Stackable nestable design available'],
        applications: ['Food & pharmaceutical exports', 'Air freight weight reduction', 'Automated warehouse conveyor systems'],
        specifications: { Dimensions: '1200 x 1000 mm / 1200 x 800 mm', DynamicLoad: '1000 kg', StaticLoad: '3000 kg', TareWeight: '12 - 16 kg' },
      },
      {
        id: 'coir-foam-block',
        slug: 'coir-foam-block',
        name: 'Coir Foam Block',
        image: '/Coir%20Foam%20Block.avif',
        gallery: ['/Coir%20Foam%20Block.avif', '/Coir%20Fitted%20Cushioning-1.avif'],
        shortDescription: 'Dense resilient coir-latex blocks for heavy machinery base blocking.',
        fullDescription: 'Rigid shock-isolation blocks designed to be positioned under heavy equipment bases, steel coils, and engine blocks to absorb transport shocks.',
        features: ['High load resilience', 'Non-creeping under load', 'Oil and water resistant finish', 'Custom saw-cut dimensions'],
        benefits: ['Prevents metal-on-metal impact', 'Long fatigue life', 'Safe disposal after transit'],
        applications: ['Heavy machinery dunnage', 'Steel & pipe transport', 'Transformer vibration damping'],
        specifications: { Density: '70 - 120 kg/m³', StandardSizes: '100x100x1000mm / Custom', CompressionSet: '< 10%', BaseMaterial: 'Vulcanized Coir' },
      },
      {
        id: 'coir-corner-cap',
        slug: 'coir-corner-cap',
        name: 'Coir Corner Cap',
        image: 'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: ['https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png', '/Coir%20Fitted%20Cushioning-2.avif'],
        shortDescription: '3-way molded coir corner protectors for furniture, solar panels, and glass.',
        fullDescription: 'Molded coir edge and corner protectors safeguard vulnerable corners against dropping, strapping compression, and handling shocks.',
        features: ['Precision 90-degree 3-way fit', 'High impact absorption', 'Firm grip on box corners', 'Stackable for compact storage'],
        benefits: ['Protects expensive finishes', 'Reduces strapping damage', 'Eliminates plastic corner guards'],
        applications: ['Solar panel shipping', 'Furniture & tabletop packaging', 'Architectural glass crating'],
        specifications: { WallThickness: '10mm - 20mm', FlangeLength: '75mm / 100mm / 150mm', Color: 'Natural Earth Brown', Packing: 'Cartons of 100 pcs' },
      },
      {
        id: 'coir-tube-protectors',
        slug: 'coir-tube-protectors',
        name: 'Coir Tube Protectors',
        image: '/Coir%20Fitted%20Cushioning-2.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-2.avif', '/coir%20bubble%20wrap.avif'],
        shortDescription: 'Cylindrical coir sleeves engineered to wrap metal tubes, pipes, and rollers.',
        fullDescription: 'Spiral or molded tubular coir sleeves that slip over polished rods, precision pipes, and hydraulic cylinders to prevent scratching and denting.',
        features: ['Tubular flexible profile', 'Breathable preventing condensation rust', 'Impact resistant outer wall', 'Easy slide-on installation'],
        benefits: ['Stops transit corrosion', 'Rapid packing time', 'Completely bio-based'],
        applications: ['Hydraulic piston rods', 'Polished copper & aluminum tubing', 'Printing press roller transport'],
        specifications: { InternalDiameter: '25mm - 300mm', WallThickness: '5mm - 15mm', StandardLength: '1000mm - 2000mm', Material: 'Rubberized Coir Needlefelt' },
      },
      {
        id: 'coir-table-protectors',
        slug: 'coir-table-protectors',
        name: 'Coir Table Protectors',
        image: '/Coir%20Fitted%20Cushioning-1.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-1.avif', '/Coir%20Foam%20Block.avif'],
        shortDescription: 'Extended edge guards and full-perimeter protection strips for furniture tops.',
        fullDescription: 'Flexible U-profile and L-profile coir strips that clamp onto table edges, stone slabs, and countertops to cushion against handling shocks.',
        features: ['Snug fit on board edges', 'High lateral crush strength', 'Non-marking natural surface', 'Custom cut-to-length'],
        benefits: ['Prevents edge chipping on wood and marble', 'Safe for lacquered surfaces', 'Reusable across installations'],
        applications: ['Commercial office desks', 'Granite and quartz countertops', 'Pre-finished doors and panels'],
        specifications: { EdgeFitThickness: '15mm - 45mm', Profile: 'U-Channel / L-Angle', Length: '1.2m / 2.0m', Density: '80 kg/m³' },
      },
      {
        id: 'coir-packaging-container',
        slug: 'coir-packaging-container',
        name: 'Coir Packaging Container',
        image: '/Coir%20wood%20box.avif',
        gallery: ['/Coir%20wood%20box.avif', '/Coir%20Pallet.avif'],
        shortDescription: 'Molded rigid coir clamshells and carrying totes for gift sets and industrial kits.',
        fullDescription: 'Two-piece rigid molded coir containers with integrated closure recesses. Ideal for consumer products, luxury gifts, wine bottles, and instrumentation.',
        features: ['Custom clamshell closure', 'Embossable company logo', 'Rigid thermal barrier', 'Natural organic aesthetic'],
        benefits: ['Premium unboxing experience', 'Certified zero-plastic packaging', 'Reusable and compostable'],
        applications: ['Luxury organic food & wine', 'Sustainable electronics kits', 'Corporate holiday gifting'],
        specifications: { WallThickness: '4mm - 10mm', Finish: 'Natural / Wax-coated', MoldTooling: 'Custom CNC Available', EcoRating: '100% Biodegradable' },
      },
    ],
  },
  {
    id: 'coir-filtration',
    slug: 'coir-filtration',
    route: '/products/coir-filtration',
    aliases: ['/products/coir-filtration'],
    name: 'Coir Filtration',
    navLabel: 'Coir Filtration',
    badge: 'Eco Filter Media',
    heroImage:
      'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
    mainHeading: 'Coconut Coir Filtration',
    supportingHeading: 'Engineered Natural Fibre for Air, Water and Industrial Systems.',
    shortDescription:
      'High-surface-area natural coir filter media for industrial wastewater treatment, stormwater runoff, and air purification.',
    fullDescription:
      'With high lignin content, optimal porosity, and high cation exchange capacity, our coir filtration media naturally traps suspended solids, adsorbs heavy metals, and breaks down organic contaminants without petrochemical filter media.',
    highlights: [
      'High specific surface area for microbial biofilm attachment',
      'Naturally resilient to chemical degradation and anaerobic rot',
      'Low head loss and high hydraulic retention capacity',
      'Sustainable disposal via composting after exhaustion',
    ],
    applications: [
      'Municipal & Industrial Effluent Treatment Plants (ETP)',
      'Stormwater Infiltration & Runoff Bio-filtration',
      'Paint Booth & Air Intake Particulate Filtration',
      'Aquaculture Recirculating Filtration Systems',
    ],
    products: [
      {
        id: 'coir-air-filter',
        slug: 'coir-air-filter',
        name: 'Coir Air Filter',
        image:
          'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
        ],
        shortDescription: 'Natural porous coir needlefelt cartridge for dust, paint booth, and ventilation filtration.',
        fullDescription: 'Engineered coir fiber matrix captures coarse airborne particles, paint overspray, and atmospheric dust while offering low airflow resistance and long service life.',
        features: ['Gradient density needlefelt structure', 'High dust holding capacity', 'Naturally anti-static fibers', 'Biodegradable disposal'],
        benefits: ['Reduces fan energy consumption', 'Zero synthetic microplastic shedding', 'Moisture and humidity resistant'],
        applications: ['Automotive paint booth overspray capture', 'Agricultural grain elevator ventilation', 'HVAC pre-filter stages'],
        specifications: { FilterClass: 'G3 / G4 Equivalent (EN 779)', AirflowVelocity: '1.5 - 2.5 m/s', TemperatureLimit: 'Up to 90°C', Format: 'Rolls, Pads & Pleated Frames' },
      },
      {
        id: 'coir-wastewater-filter-media',
        slug: 'coir-wastewater-filter-media',
        name: 'Coir Wastewater Filter Media',
        image:
          'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png',
        ],
        shortDescription: 'High-surface coir fiber media for biological trickling filters and effluent polishers.',
        fullDescription: 'Coir Wastewater Filter Media provides exceptional surface area for active biofilm growth, effectively reducing BOD, COD, and total suspended solids (TSS) in effluent streams.',
        features: ['High void ratio (>85%)', 'Resistant to compaction and clogging', 'High lignin content resisting rapid degradation', 'Excellent adsorption of heavy metals and oils'],
        benefits: ['Lower operating cost than synthetic media', 'Stable pH buffer capacity', 'Spent media can be composted'],
        applications: ['Sewage treatment plants (STP/ETP)', 'Commercial kitchen grease trap polishing', 'Stormwater drainage bio-retention swales'],
        specifications: { SpecificSurfaceArea: '150 - 300 m²/m³', BulkDensity: '60 - 90 kg/m³', pHRange: '5.5 - 8.5', DeliveryFormat: 'Compressed Bales / Bound Modules' },
      },
    ],
  },
  {
    id: 'coir-interior-panels',
    slug: 'coir-interior-panels',
    route: '/products/coir-interior-panels',
    aliases: ['/products/coir-interior-panel', '/products/coir-interior-panels'],
    name: 'Coir Interior Panels',
    navLabel: 'Coir Interior Panels',
    badge: 'Acoustic & Thermal',
    heroImage:
      'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
    mainHeading: 'Coir Acoustic and Insulation Panels',
    supportingHeading: 'Natural Fibre Innovation for Modern Interiors.',
    shortDescription:
      'Architectural panels and ceiling boards combining organic texture, acoustic noise dampening, and high thermal insulation.',
    fullDescription:
      'Crafted from sustainable coconut coir bonded with non-toxic resins, these panels provide high sound absorption (NRC rating up to 0.85) and thermal resistance, creating healthy, biophilic, and energy-efficient building interiors.',
    highlights: [
      'High Sound Absorption Coefficient (NRC 0.65 - 0.85)',
      'Low thermal conductivity for passive heating/cooling efficiency',
      'VOC-free, formaldehyde-free, healthy indoor air quality',
      'Natural aesthetic with custom CNC routing and engraving options',
    ],
    applications: [
      'Auditoriums, Recording Studios & Conference Rooms',
      'Commercial Green Building Ceilings & Partitions',
      'Residential Under-roof Thermal Insulation',
      'Decorative Biophilic Wall Paneling & Art Screens',
    ],
    products: [
      {
        id: 'coir-roof-panel',
        slug: 'coir-roof-panel',
        name: 'Coir Roof Panel',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'Under-roof thermal insulating board reducing solar radiant heat transfer.',
        fullDescription: 'High-density compressed coir boards installed directly beneath metal, clay, or concrete roofing to significantly lower indoor temperatures naturally.',
        features: ['Thermal conductivity k = 0.042 W/mK', 'Fire-retardant treated options', 'Naturally mold and insect resistant', 'Easy to cut and screw to purlins'],
        benefits: ['Reduces air conditioning power bills by up to 25%', 'Eliminates rain noise on metal roofs', 'Safe to handle without protective respirators'],
        applications: ['Factories and warehouses', 'Residential bungalows and villas', 'Agricultural poultry and livestock sheds'],
        specifications: { Thickness: '15mm / 25mm / 50mm', Dimensions: '1200 x 600 mm / 2400 x 1200 mm', ThermalResistance: 'R-value 1.2 - 2.5', FireRating: 'Class B treated available' },
      },
      {
        id: 'coir-insulation-panel',
        slug: 'coir-insulation-panel',
        name: 'Coir Insulation Panel',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'Cavity wall and dry-wall insulation batts made from resilient natural coir.',
        fullDescription: 'A direct natural replacement for fiberglass and mineral rockwool batts in interior stud partition walls, false ceilings, and dry-wall assemblies.',
        features: ['Semi-rigid friction fit batts', 'Zero itchy glass fibers', 'Excellent humidity buffer capacity', 'Long-term structural resilience'],
        benefits: ['No skin irritation during installation', 'Non-toxic, zero VOC off-gassing', 'Maintains R-value over decades'],
        applications: ['Drywall stud cavities', 'Suspended ceiling grid infill', 'Modular wooden house construction'],
        specifications: { Density: '40 - 60 kg/m³', StandardSize: '1200 x 600 mm', SoundTransmissionClass: 'STC 45+', EcoLabel: 'Green Building Certified' },
      },
      {
        id: 'coir-acoustic-panel',
        slug: 'coir-acoustic-panel',
        name: 'Coir Acoustic Panel',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'High-performance sound-absorbing wall panel for reverberation control.',
        fullDescription: 'Decorative acoustic panel engineered to absorb flutter echoes and reverberation across mid-to-high frequencies, creating crystal-clear audio environments.',
        features: ['NRC rating up to 0.85', 'Textured organic aesthetic', 'Beveled edge design', 'Compatible with fabric wrapping'],
        benefits: ['Enhances speech intelligibility', 'Adds natural warmth and texture to modern rooms', 'Easy magnetic or adhesive wall mounting'],
        applications: ['Corporate boardrooms', 'Music studios and home theaters', 'Educational lecture halls and libraries'],
        specifications: { SoundAbsorption: 'NRC 0.70 - 0.85', Thickness: '20mm / 40mm', EdgeFinish: 'Beveled / Square / Wrapped', Mounting: 'Z-clips / Construction Adhesive' },
      },
      {
        id: 'coir-board-engraving',
        slug: 'coir-board-engraving',
        name: 'Coir Board Engraving',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'Custom CNC-carved and laser-engraved decorative coir wall panels and screens.',
        fullDescription: 'Precision CNC-machined architectural panels featuring parametric geometric patterns, corporate branding, and biophilic nature motifs.',
        features: ['High-precision CNC detailing', 'Deep shadow relief effect', 'Combine acoustic damping with visual art', 'Custom stain and natural finishes'],
        benefits: ['Creates stunning signature lobby walls', 'Dual function: acoustic dampener and artwork', 'Tailored to architect project blueprints'],
        applications: ['Hotel reception feature walls', 'Corporate entrance lobbies', 'Restaurant acoustic feature dividers'],
        specifications: { MaxSheetSize: '2440 x 1220 mm', EngravingDepth: '3mm - 12mm', BaseBoard: 'High-Density Coir Board (900 kg/m³)', CustomDesigns: 'Vector CAD / DXF input' },
      },
    ],
  },
  {
    id: 'coir-scrubbers',
    slug: 'coir-scrubbers',
    route: '/products/coir-scrubbers',
    aliases: ['/products/coir-scrubbers'],
    name: 'Coir Scrubbers',
    navLabel: 'Coir Scrubbers',
    badge: 'Plastic Free Clean',
    heroImage:
      'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
    mainHeading: 'Coconut Coir Scrubbers',
    supportingHeading: 'Natural Cleaning Solutions for Everyday Living.',
    shortDescription:
      'Compostable, zero-waste, plastic-free scrubbing pads made from durable natural coconut coir bristles.',
    fullDescription:
      'Engineered from natural coconut bristles and plant-based binders, ADHI scrubbers tackle tough burnt food, grease, and grime without scratching non-stick cookware or releasing microplastics into our waterways.',
    highlights: [
      '100% Microplastic-Free: Protects oceans and household wastewater systems',
      'Non-Scratch Performance: Safe on teflon, ceramic, stainless steel, and cast iron',
      'Naturally Anti-Microbial & Odor-Resistant: Stays fresh longer than synthetic sponges',
      'Home Compostable: Decomposes into nutrient-rich soil at the end of its life',
    ],
    applications: [
      'Household Kitchen Cookware & Utensil Washing',
      'Heavy-duty Commercial Restaurant Pan Cleaning',
      'Eco-friendly Exfoliating Bath & Body Scrubbing',
      'Industrial Tile, Grill, and Machinery Surface Scrubbing',
    ],
    products: [
      {
        id: 'coir-kitchen-scrubber',
        slug: 'coir-kitchen-scrubber',
        name: 'Coir Kitchen Scrubber',
        image:
          'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
        ],
        shortDescription: 'Durable, non-scratch dishwashing scrub pad made with dense coconut bristles.',
        fullDescription: 'The ultimate zero-waste kitchen companion. Its coarse coconut bristles easily scrub away baked-on grease, curry stains, and tawa residue without scratching delicate non-stick coatings.',
        features: ['Zero microplastic shedding', 'Stitched with natural cotton thread', 'Ergonomic rectangular grip', 'Dries quickly to prevent mold'],
        benefits: ['Leaves zero chemical residue on dishes', 'Lasts 3x longer than cheap synthetic yellow sponges', 'Compostable in home garden soil'],
        applications: ['Pots, pans, and frying skillets', 'Ceramic plates and glassware', 'Kitchen sink and countertop scouring'],
        specifications: { Dimensions: '100 x 70 x 15 mm / Custom', PackSizes: 'Packs of 3, 5, 10 / Bulk Private Label', Material: 'Coconut Bristle Coir + Natural Rubber', Certification: 'Food Contact Safe Tested' },
      },
      {
        id: 'coir-bath-scrubber',
        slug: 'coir-bath-scrubber',
        name: 'Coir Bath Scrubber',
        image:
          'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
        ],
        shortDescription: 'Gentle exfoliating body wash pad crafted from softened natural coir fibers.',
        fullDescription: 'Specially softened and conditioned coconut coir fibers designed for gentle body exfoliation, stimulating skin blood circulation and removing dead cells naturally.',
        features: ['Softened blonde coir fiber matrix', 'Cotton hanging loop for hygienic shower drying', 'Non-abrasive skin feel', 'Plastic-free alternative to nylon shower poufs'],
        benefits: ['Deeply cleanses pores naturally', 'Dries fast preventing bacterial colonization', 'Zero plastic micro-beads or fibers in shower runoff'],
        applications: ['Daily bath & shower exfoliation', 'Spa and wellness resort amenities', 'Sustainable hospitality toiletries'],
        specifications: { Size: '110 x 85 mm Oval / Rectangle', FiberType: 'Softened Grade-A Coir', Attachment: '100% Organic Cotton Cord', Packaging: 'Kraft Paper Box or Bare Bulk' },
      },
    ],
  },
  {
    id: 'coir-horticulture',
    slug: 'coir-horticulture',
    route: '/products/coir-horticulture',
    aliases: ['/products/coir-horticulture'],
    name: 'Coir Horticulture',
    navLabel: 'Coir Horticulture',
    badge: 'Organic Growing',
    heroImage:
      'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
    mainHeading: 'Coir Horticulture Products',
    supportingHeading: 'Natural Growing Solutions for Modern Agriculture.',
    shortDescription:
      'Biodegradable plant pots, weed mats, coco poles, and grow pads designed for nurseries, greenhouses, and organic farmers.',
    fullDescription:
      'Our horticulture range promotes root aeration, moisture retention, and zero-transplant-shock cultivation. Plants can be planted directly into the soil along with the coir pot, where the pot naturally biodegrades into organic humus.',
    highlights: [
      'Eliminates Transplant Shock: Roots grow directly through porous coir walls',
      'Superior Aeration & Water Retention: Balances moisture and air for healthy root tips',
      '100% Peat-Free & Organic Certified compatible growing media',
      'Weed Suppression & Soil Moisture Conservation in open nurseries',
    ],
    applications: [
      'Commercial Greenhouses & Plant Nurseries',
      'Urban Balcony & Vertical Terrace Gardening',
      'Hydroponic Microgreen Cultivation',
      'Landscape Tree Planting & Highway Revegetation',
    ],
    products: [
      {
        id: 'coir-pots',
        slug: 'coir-pots',
        name: 'Coir Pots',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Biodegradable nursery pots allowing roots to grow freely through the pot walls.',
        fullDescription: 'Molded coir nursery pots that eliminate plastic seedling trays. Plants are placed directly into the ground with the pot, resulting in zero root circling and 100% transplant survival.',
        features: ['Porous root-penetrable walls', 'Permeable to air and water', 'Natural rubber latex bonded', 'Biodegrades over 6-12 months into soil nutrients'],
        benefits: ['Zero transplant shock', 'Eliminates plastic nursery waste', 'Encourages dense fibrous root systems'],
        applications: ['Seedling propagation', 'Greenhouse organic vegetables', 'Forestry reforestation saplings'],
        specifications: { Diameters: '5cm, 8cm, 10cm, 15cm, 20cm', Volume: '0.1L to 5.0L', Shape: 'Round / Square', pH: '5.8 - 6.5 (Plant Neutral)' },
      },
      {
        id: 'coir-weed-prevention-mats',
        slug: 'coir-weed-prevention-mats',
        name: 'Coir Weed Prevention Mats',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Round coir mulch tree discs designed to suppress weed growth around plant stems.',
        fullDescription: 'Slotted circular coir needlefelt discs placed at the base of trees and shrubs. Blocks sunlight to suppress weed germination while allowing rain and liquid fertilizer to seep through.',
        features: ['Pre-cut center hole and slit for easy fitting', 'Resistant to wind lift', 'Biodegrades slowly over 18-24 months', 'Suppresses weeds without synthetic herbicides'],
        benefits: ['Conserves soil moisture', 'Reduces watering frequency by 40%', 'Prevents lawn mower and trimmer stem damage'],
        applications: ['Fruit orchards and vineyards', 'Municipal landscaping tree rings', 'Container nursery stock'],
        specifications: { Diameters: '15cm, 20cm, 30cm, 40cm, 60cm', Thickness: '5mm - 8mm', Weight: '600 - 800 gsm', LatexCoating: 'Single / Double side' },
      },
      {
        id: 'coco-basket-liner',
        slug: 'coco-basket-liner',
        name: 'Coco Basket Liner',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Pre-formed round coco liners for decorative metal hanging baskets.',
        fullDescription: 'Molded hemispherical coconut fiber liners designed for outdoor wire hanging planters. Provides optimal drainage and holds potting soil firmly in place.',
        features: ['Pre-formed round and conical shapes', 'Naturally breathable structure', 'Excellent water holding with free drainage', 'Aesthetic golden-brown natural appearance'],
        benefits: ['Prevents root rot from water-logging', 'Keeps soil cool during hot summers', 'Simple to insert and refill'],
        applications: ['Floral hanging baskets in city beautification', 'Balcony railings and garden pergolas', 'Resort floral landscaping'],
        specifications: { Sizes: '10 inch, 12 inch, 14 inch, 16 inch, 18 inch', Shape: 'Bowl / Cone / Wall Trough', Material: 'Rubberized Natural Coir Needlefelt', Thickness: '6mm - 10mm' },
      },
      {
        id: 'coco-trough-liner',
        slug: 'coco-trough-liner',
        name: 'Coco Trough Liner',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Elongated rectangular coco liners for window boxes and wall troughs.',
        fullDescription: 'Linear pre-formed coir liners engineered for rectangular wrought-iron window boxes and balcony planters. Ensures healthy moisture balance for annual flowers and herbs.',
        features: ['Reinforced folded corners', 'Thick durable needlefelt backing', 'Natural moisture regulator', 'Custom length roll goods available'],
        benefits: ['Prevents soil runoff through wire grids', 'Promotes vigorous trailing plant growth', 'Lasts through multiple planting seasons'],
        applications: ['Window sill planters', 'Balcony railing flower boxes', 'Commercial restaurant patio borders'],
        specifications: { Lengths: '24 inch (60cm), 30 inch (75cm), 36 inch (90cm), 48 inch (120cm)', Profile: 'Deep U-Trough / V-Trough', Material: '100% Coir with Natural Latex', Color: 'Natural Earth' },
      },
      {
        id: 'coir-coco-pole',
        slug: 'coir-coco-pole',
        name: 'Coir Coco Pole',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Natural moss plant support stick wrapped with organic coir fiber sheet.',
        fullDescription: 'A premium plant support pole wrapped with coarse natural coir sheet over a sturdy PVC or wooden core. Aerial roots grip the porous coir readily, encouraging upward growth.',
        features: ['Sturdy moisture-retaining coir wrap', 'Easy insertion into planter soil', 'Stackable extendable designs available', 'Resistant to indoor humidity breakdown'],
        benefits: ['Assists climbing monstera, pothos, and philodendron', 'Retains moisture when sprayed with water mist', 'Aesthetic natural indoor plant accent'],
        applications: ['Indoor houseplant staking', 'Commercial tropical nursery cultivation', 'Office plantscaping'],
        specifications: { Lengths: '45cm, 60cm, 90cm, 120cm, 150cm', PoleDiameter: '32mm / 45mm / 55mm', InnerCore: 'PVC / Eco Treated Wood / Bamboo', OuterLayer: 'Natural Coir Needlefelt Sheet' },
      },
      {
        id: 'coir-microgreen-grow-mat',
        slug: 'coir-microgreen-grow-mat',
        name: 'Coir Microgreen Grow Mat',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Soil-less organic coir pads optimized for clean hydroponic microgreen trays.',
        fullDescription: 'Sterilized, pathogen-free coir needlefelt grow pads sized for standard 10x20 inch microgreen trays. Delivers high germination rates without messy potting soil.',
        features: ['Clean soil-less harvesting', 'Consistent water capillary action', 'pH neutral and low EC tested', '100% organic compostable after harvest'],
        benefits: ['Cuts cleaning and washing time of harvested greens', 'Zero soil grit on edible shoots', 'Ideal for automated hydroponic racks'],
        applications: ['Commercial microgreen farms', 'Wheatgrass and sprout production', 'Home kitchen countertop gardening'],
        specifications: { Dimensions: '10 x 20 inch (25 x 50 cm) / Custom Cut', Thickness: '5mm - 8mm', ECLevel: '< 0.5 mS/cm (Washed & Desalted)', Sterilization: 'Heat Sanitized' },
      },
      {
        id: 'coir-root-trainer',
        slug: 'coir-root-trainer',
        name: 'Coir Root Trainer',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Conical coir pots designed with vertical grooves to train deep taproots.',
        fullDescription: 'Specialized deep-conical coir pots featuring internal directional channels that prevent root circling and guide primary taproots downward for forestry and fruit trees.',
        features: ['Deep conical profile', 'Vertical root-guiding channels', 'Bottom air-pruning opening', 'High mechanical strength when wet'],
        benefits: ['Develops robust drought-resistant taproot systems', 'Prevents j-rooting and root girdling', 'Significantly higher sapling survival in arid soils'],
        applications: ['Forestry and agro-forestry nurseries', 'Coffee, tea, and cocoa seedling raising', 'Teak and hardwood timber propagation'],
        specifications: { Height: '15cm, 20cm, 25cm', TopDiameter: '6cm - 10cm', Drainage: 'Central Bottom Hole + Porous Walls', Lifetime: 'Up to 12 months in nursery' },
      },
      {
        id: 'coir-grow-mat',
        slug: 'coir-grow-mat',
        name: 'Coir Grow Mat',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Continuous coir fiber fleece rolls for hydroponic greenhouse crop rows.',
        fullDescription: 'Rolled continuous coir matting laid along greenhouse gulleys and raised nursery beds. Serves as a rooting blanket for commercial tomatoes, cucumbers, and berries.',
        features: ['Continuous roll format', 'Uniform fiber distribution', 'High water retention capacity (up to 8x dry weight)', 'Chemically inert and sterile'],
        benefits: ['Even nutrient delivery across irrigation lines', 'Suppresses fungal pathogens', 'Easily rolled up and composted post-season'],
        applications: ['Greenhouse hydroponic vegetable rows', 'Commercial berry farming', 'Nursery bench sub-irrigation capillary matting'],
        specifications: { RollWidth: '1.0m, 1.2m, 2.0m', RollLength: '10m, 25m, 50m', Thickness: '8mm - 12mm', Density: '700 - 1000 gsm' },
      },
      {
        id: 'coir-seedling-tray',
        slug: 'coir-seedling-tray',
        name: 'Coir Seedling Tray',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Multi-cell biodegradable coir propagation trays for precision germination.',
        fullDescription: 'Integrated multi-cavity trays molded from natural coconut fiber. Individual plugs can be separated or planted whole into the field with zero root disturbance.',
        features: ['Multiple interconnected seed cells', 'Permeable cell partitions for air-pruning', 'Compatible with automated seed dispensing machines', 'Plastic-free alternative to black plastic plug trays'],
        benefits: ['Faster rooting and earlier harvest turnaround', 'Zero plastic disposal costs for commercial growers', '100% natural and organic certified input'],
        applications: ['Vegetable seed germination (tomato, pepper, melon)', 'Floriculture seedling plug production', 'Organic farming certifications'],
        specifications: { CellCounts: '24 cells / 54 cells / 104 cells', CellDepth: '40mm - 60mm', Material: 'Bio-molded Coconut Coir', Biodegradability: '100% In-Soil' },
      },
    ],
  },
  {
    id: 'coir-rolls-and-sheets',
    slug: 'coir-rolls-and-sheets',
    route: '/products/coir-rolls-and-sheets',
    aliases: ['/products/coir-roll-and-sheet', '/products/coir-rolls-and-sheets'],
    name: 'Coir Rolls & Sheets',
    navLabel: 'Coir Rolls & Sheets',
    badge: 'Raw Industrial Media',
    heroImage:
      'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
    mainHeading: 'Needlefelt Coir Rolls and Rubberized Coir Sheets',
    supportingHeading: 'Versatile Natural Fibre Materials for Multiple Applications.',
    shortDescription:
      'Continuous needle-punched coir rolls and vulcanized rubberized coir pads for mattress manufacturing, upholstery, and industrial engineering.',
    fullDescription:
      'Produced in our Pollachi facility on high-precision non-woven lines. Available as raw needlefelt rolls without binder or vulcanized with natural latex to create flexible, highly resilient cushioning sheets.',
    highlights: [
      'High tensile needlefelt bonding without synthetic scrims',
      'Vulcanized with 100% natural rubber latex for dynamic bounce',
      'Moisture-wicking, breathable, and orthopedic support ratings',
      'Wide range of densities (400 gsm needlefelt to 120 kg/m³ rubberized sheets)',
    ],
    applications: [
      'Mattress Core Cushioning & Topper Layers',
      'Automobile Seat & Train Carriage Upholstery',
      'Drainage Trench & Geotechnical Filter Interlays',
      'Sound Isolation & Thermal Building Blankets',
    ],
    products: [
      {
        id: 'coir-needlefelt-roll',
        slug: 'coir-needlefelt-roll',
        name: 'Coir Needlefelt Roll',
        image:
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        gallery: [
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        ],
        shortDescription: 'Pure needle-punched coir fiber blankets in continuous master rolls.',
        fullDescription: 'Mechanically intertwined using thousands of barbed needles. Contains zero chemical binders, making it ideal for filtration, mattress insulating layers, and geo-fabrics.',
        features: ['100% pure coconut fiber', 'No chemical binders or adhesives', 'Uniform thickness and high tensile strength', 'Flexible and easy to cut or stitch'],
        benefits: ['Eco-friendly spring insulator in mattresses', 'Excellent drainage and soil separation', 'Available in widths up to 2.4 meters'],
        applications: ['Pocket spring mattress insulation', 'Civil engineering sub-base protection', 'Frost and weed barrier roll goods'],
        specifications: { RollWidth: '1.0m to 2.4m', RollLength: '20m to 50m', Density: '400 gsm to 1200 gsm', Thickness: '3mm to 15mm' },
      },
      {
        id: 'rubberized-coir-sheet',
        slug: 'rubberized-coir-sheet',
        name: 'Rubberized Coir Sheet',
        image:
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        ],
        shortDescription: 'Vulcanized natural rubber-bonded coir sheets with high spring resilience.',
        fullDescription: 'Coir fibers treated with liquid natural latex and steam-cured to lock each fiber into a microscopic coil spring. Provides firm orthopedic spine support and continuous air circulation.',
        features: ['Springy three-dimensional fiber structure', 'Steam-vulcanized natural latex bonding', 'Breathable preventing heat build-up', 'High resistance to sagging and body impressions'],
        benefits: ['Naturally cool sleep surface compared to synthetic memory foam', 'Orthopedic firm spine alignment', 'Naturally anti-dust mite and anti-allergy'],
        applications: ['Orthopedic mattress core blocks', 'Automotive and train passenger seats', 'Gymnastic landing mats and sound damping pads'],
        specifications: { SheetDimensions: '72x36 inch, 75x36 inch, 78x72 inch / Custom', Thickness: '15mm to 100mm', Density: '60 kg/m³ to 110 kg/m³', LatexRatio: '30% - 40% Natural Latex' },
      },
    ],
  },
  {
    id: 'coir-erosion-control',
    slug: 'coir-erosion-control',
    route: '/products/coir-erosion-control',
    aliases: ['/products/erosion-control', '/products/coir-erosion-control'],
    name: 'Coir Erosion Control',
    navLabel: 'Coir Erosion Control',
    badge: 'Soil Stabilization',
    heroImage:
      'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
    mainHeading: 'Coir Erosion Control Solutions',
    supportingHeading: 'Protecting Soil Naturally. Supporting Sustainable Landscapes.',
    shortDescription:
      'High-tensile woven coir geotextiles and reinforced blankets engineered for slope stabilization, riverbank restoration, and erosion prevention.',
    fullDescription:
      'Coir geotextiles provide heavy-duty mechanical soil stabilization while indigenous vegetation establishes its own root network. Over 3 to 5 years, the geotextile gradually biodegrades into rich organic mulch.',
    highlights: [
      'High tensile strength (up to 35 kN/m) resists slope shear stress',
      'High water absorption slows surface runoff velocity and gullies',
      'Lasts 3 to 5 years in outdoor conditions before safely decomposing',
      'Completely wildlife-friendly (open mesh prevents snake and bird entanglement)',
    ],
    applications: [
      'Highway & Railway Embankment Slope Protection',
      'Riverbank, Canal & Shoreline Stabilization',
      'Mining Land Reclamation & Landfill Cap Closures',
      'Golf Course & Stormwater Retention Pond Edging',
    ],
    products: [
      {
        id: 'coir-geotextile',
        slug: 'coir-geotextile',
        name: 'Coir Geotextile',
        image:
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        gallery: [
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        ],
        shortDescription: 'Woven high-tensile coir mesh netting for steep slope soil protection.',
        fullDescription: 'Open-mesh geotextile woven from strong spun coir yarn. Holds topsoil firmly in place while allowing plants to grow freely through the open apertures.',
        features: ['Heavy spun 2-ply coir yarn', 'Open mesh structure (apertures from 10mm to 25mm)', 'High tensile strength in machine and cross directions', 'Decomposes naturally into organic humus after 3-5 years'],
        benefits: ['Stops topsoil wash-out during heavy torrential monsoons', 'Promotes rapid natural hydroseeding vegetative cover', 'Environmentally compliant for protected watershed zones'],
        applications: ['Steep road cuttings and hillside stabilization', 'Riverbank and reservoir flood erosion control', 'Sand dune anchoring and coastal restoration'],
        specifications: { MeshWeight: '400 gsm / 700 gsm / 900 gsm', TensileStrength: '15 kN/m - 35 kN/m', RollSize: '2.0m x 50m / 4.0m x 50m', ApertureSize: '15mm x 15mm / 20mm x 20mm' },
      },
      {
        id: 'coir-erosion-control-blanket',
        slug: 'coir-erosion-control-blanket',
        name: 'Coir Erosion Control Blanket (PP Net)',
        image:
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        gallery: [
          'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
        ],
        shortDescription: 'Needled coir fiber blanket stitched with UV-stabilized polypropylene mesh.',
        fullDescription: 'A composite erosion control blanket featuring dense coconut coir fiber sandwiched between top and bottom netting. Ideal for extreme velocity stormwater channels and critical highway embankments.',
        features: ['Uniform coir matrix stitched between UV-stable nets', 'Withstands water flow velocities up to 4.5 m/s', 'Immediate 99% erosion reduction index upon pinning', 'Heavy-duty nylon thread chain-stitching'],
        benefits: ['Protects newly graded soil before seed emergence', 'Locks moisture in the seedbed for high germination', 'Easy deployment with standard wooden stakes or steel staples'],
        applications: ['High-flow stormwater drainage ditches', 'Extreme gradient slopes (> 1:1 slopes)', 'Wetland and river estuary restoration'],
        specifications: { NettingType: 'Double UV-Stabilized Polypropylene / Jute', MatrixWeight: '350 - 500 g/m² 100% Coconut Coir', RollDimensions: '2.4m x 30m / 2.0m x 50m', ShearStressLimit: 'Up to 160 Pa' },
      },
    ],
  },
  {
    id: 'coir-mattresses',
    slug: 'coir-mattresses',
    route: '/products/coir-mattresses',
    aliases: ['/products/mattresses', '/products/coir-mattresses'],
    name: 'Coir Mattresses',
    navLabel: 'Coir Mattresses',
    badge: 'Natural Comfort',
    heroImage:
      'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
    mainHeading: 'Coir Mattresses and Accessories',
    supportingHeading: 'Natural Comfort for Better Everyday Living.',
    shortDescription:
      'Orthopedic natural coir mattresses, memory foam hybrid cores, travel mats, and organic pillows engineered for spinal health.',
    fullDescription:
      'Combining the natural bounce of rubberized coconut coir with breathable cotton and memory foam comfort layers. Our mattresses provide firm spinal alignment, zero heat trap, and anti-dust-mite properties.',
    highlights: [
      'Ergonomic Orthopedic Support: Recommended for spine alignment & back pain relief',
      'Naturally Cool & Breathable: Active 3D fiber air circulation eliminates body heat trap',
      'Zero Toxic Chemical Off-gassing: Built with natural coir, latex, and organic fabrics',
      'Hypoallergenic & Anti-Dust Mite: Resists microbial growth and dust mites naturally',
    ],
    applications: [
      'Residential Master Bedrooms & Kids Rooms',
      'Hotels, Eco-Resorts & Luxury Wellness Retreats',
      'Hospitals, Orthopedic Clinics & Elderly Care Centers',
      'Compact Travel, Camping, & Guest Sleeping Foldables',
    ],
    products: [
      {
        id: 'coir-memory-foam-mattress',
        slug: 'coir-memory-foam-mattress',
        name: 'Coir Memory Foam Mattress',
        image:
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        ],
        shortDescription: 'Hybrid mattress blending a firm rubberized coir foundation with plush memory foam.',
        fullDescription: 'The perfect balance of orthopedic support and pressure relief. A high-density rubberized coir base ensures proper spinal posture while a top memory foam layer contours to shoulders and hips.',
        features: ['Multi-layer hybrid design', 'Firm rubberized coir base core', 'Adaptive pressure-relieving memory foam top', 'Quilted organic bamboo-cotton cover'],
        benefits: ['Relieves pressure points without sagging', 'Keeps cooler than all-foam beds', 'Zero motion transfer across partners'],
        applications: ['Master bedroom primary mattress', 'Luxury hotel suites', 'Chronic back and joint pain sufferers'],
        specifications: { Sizes: 'Single, Queen, King, Custom', Thickness: '6 inch, 8 inch, 10 inch', Firmness: 'Medium-Firm (6.5/10)', Warranty: '10 Years Manufacturer Warranty' },
      },
      {
        id: 'foam-mattress',
        slug: 'foam-mattress',
        name: 'Foam Mattress',
        image: '/Coir%20Foam%20Block.avif',
        gallery: ['/Coir%20Foam%20Block.avif'],
        shortDescription: 'High-resilience foam mattress with balanced body contouring and rebound.',
        fullDescription: 'Engineered with high-density open-cell foam layers to deliver uniform body support, plush contouring, and lightweight ease of flipping.',
        features: ['High Resilience (HR) foam core', 'Open-cell breathable structure', 'Removable and washable zipped cover', 'Anti-sag certified durability'],
        benefits: ['Lightweight and easy to turn', 'Consistent comfort across all sleep positions', 'Cost-effective quality sleep solution'],
        applications: ['Guest rooms', 'Hostels and rental apartments', 'Bunk beds and daybeds'],
        specifications: { Thickness: '4 inch, 5 inch, 6 inch', CoreDensity: '32 - 40 D', CoverMaterial: 'Breathable Knitted Jacquard', Firmness: 'Medium (5/10)' },
      },
      {
        id: 'rubberized-coir-mattress',
        slug: 'rubberized-coir-mattress',
        name: 'Rubberized Coir Mattress',
        image:
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        ],
        shortDescription: 'Traditional 100% natural rubberized coir mattress for firm orthopedic spine support.',
        fullDescription: 'Built with dense layers of natural coconut fiber bonded with natural rubber latex. Provides rigid orthopedic support, promoting healthy blood circulation and natural back posture.',
        features: ['100% natural rubberized coir core', 'Natural spring-like bounce', 'Maximum ventilation through micro-air pores', 'Edge-reinforced border stitching'],
        benefits: ['Doctor-recommended firm back support', 'Never traps body heat in humid tropical climates', 'Environmentally sustainable natural sleep surface'],
        applications: ['Orthopedic spine care patients', 'Hot and humid climate bedrooms', 'Eco-friendly sustainable households'],
        specifications: { Core: '100% Rubberized Coconut Coir', Thickness: '4 inch, 5 inch, 6 inch', Firmness: 'Firm (8/10)', Lifespan: 'Over 12 years resilient support' },
      },
      {
        id: 'slim-coir-mattresses',
        slug: 'slim-coir-mattresses',
        name: 'Slim Coir Mattresses',
        image: '/Coir%20Fitted%20Cushioning-1.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-1.avif'],
        shortDescription: 'Low-profile 2 to 3-inch coir toppers and mats for daybeds and floor sleeping.',
        fullDescription: 'A slim, space-saving coir mattress that can be placed on top of existing firm surfaces, traditional wooden cots, or used as a firm mattress topper.',
        features: ['Ultra-slim 2-inch to 3-inch profile', 'Lightweight and easy to store', 'High density rubberized coir core', 'Cotton fabric wrapping with bound seams'],
        benefits: ['Upgrades uncomfortable soft beds with firm back support', 'Perfect for floor sleeping and meditation cots', 'Easy to move between rooms'],
        applications: ['Mattress topper upgrade', 'Studio apartment floor bedding', 'Yoga and meditation firm beds'],
        specifications: { Thickness: '2 inch (50mm) / 3 inch (75mm)', Dimensions: '72x36 inch / 75x36 inch / 78x60 inch', CoreMaterial: 'High-Density Coir Needlefelt', Weight: '6kg - 14kg' },
      },
      {
        id: 'back-pain-relief-mattress',
        slug: 'back-pain-relief-mattress',
        name: 'Back Pain Relief Mattress',
        image:
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        ],
        shortDescription: 'Scientifically zoned orthopedic mattress designed to relieve lumbar and sacral pressure.',
        fullDescription: 'Features multi-zone progressive firmness with an extra-supportive high-density rubberized coir core under the lumbar region to prevent spinal curvature during sleep.',
        features: ['Targeted lumbar support zone', 'Prevents spinal hyperextension', 'Therapeutic coir-latex layering', 'Breathable anti-static outer fabric'],
        benefits: ['Alleviates morning lower back stiffness', 'Maintains natural lordotic spine curve', 'Recommended for posture rehabilitation'],
        applications: ['Post-surgery spinal recovery', 'Chronic sciatica and slip disc support', 'Senior citizen orthopedic wellness'],
        specifications: { ErgonomicRating: 'Orthopedic Certified', CoreLayers: 'Zoned Coir + Transition Foam', Thickness: '6 inch / 8 inch', Firmness: 'Firm Ergonomic (7.5/10)' },
      },
      {
        id: 'foldable-travel-mattress',
        slug: 'foldable-travel-mattress',
        name: 'Foldable Travel Mattress',
        image: '/Coir%20Fitted%20Cushioning-2.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-2.avif'],
        shortDescription: '3-fold portable coir mattress with integrated carry handles for guests and camping.',
        fullDescription: 'Tri-folding portable mattress combining slim rubberized coir and flexible foam. Folds into a compact carry bag in seconds for guests, car travel, and camping.',
        features: ['3-fold accordion design', 'Sturdy carry strap handles', 'Removable stain-resistant outer cover', 'Compact footprint when folded'],
        benefits: ['Instant guest bed setup in seconds', 'Stores neatly in closets or car trunks', 'Far more supportive than thin air mattresses'],
        applications: ['Guest sleepovers', 'RV campervan and road trip bedding', 'Kids play mat and floor lounging'],
        specifications: { UnfoldedSize: '72 x 36 x 3 inch', FoldedSize: '24 x 36 x 9 inch', CarryWeight: '5.5 kg', Cover: 'Water-repellent Canvas / Cotton' },
      },
      {
        id: 'hospital-bed-mattress',
        slug: 'hospital-bed-mattress',
        name: 'Hospital Bed Mattress',
        image:
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
        ],
        shortDescription: 'Medical-grade antibacterial coir mattress designed for healthcare facilities.',
        fullDescription: 'Custom-manufactured for hospital profiling beds. Combines a ventilating rubberized coir core with an antimicrobial, wipe-clean, fluid-proof medical cover.',
        features: ['Medical grade waterproof PU cover', 'Anti-fungal and antibacterial treatment', 'Bi-directional profiling flexibility for motorized beds', 'High breathability preventing bedsores'],
        benefits: ['Easy to disinfect between patient admissions', 'Resists fluid ingress and incontinence stains', 'Supports patient rehabilitation with firm edge assistance'],
        applications: ['Hospitals and ICU recovery wards', 'Old age nursing homes', 'Home healthcare and palliative care beds'],
        specifications: { Cover: 'Flame-Retardant Waterproof PU with Welded Seams', Core: 'Rubberized Coir + High-Density Foam', StandardDimensions: '78 x 36 x 4 inch / 5 inch', Compliance: 'Hospital Sanitation Standards' },
      },
      {
        id: 'waterproof-mattress-protector',
        slug: 'waterproof-mattress-protector',
        name: 'Waterproof Mattress Protector',
        image: '/coir%20bubble%20wrap.avif',
        gallery: ['/coir%20bubble%20wrap.avif'],
        shortDescription: 'Breathable, noiseless waterproof fitted sheet shielding mattresses from spills.',
        fullDescription: 'Fitted mattress protector featuring an ultra-soft organic cotton terry top surface backed with a micro-porous breathable TPU membrane that blocks fluids 100%.',
        features: ['100% waterproof TPU barrier', 'Soft noiseless cotton terry top', 'Elasticized skirt fits up to 12-inch depth', 'Machine washable and tumble-dry friendly'],
        benefits: ['Protects mattress warranty from stain damage', 'Blocks dust mites, bed bugs, and allergens', 'No crinkly plastic sounds when turning'],
        applications: ['Everyday bed protection', 'Children potty training phase', 'Pet-friendly bedrooms and hospitality'],
        specifications: { Sizes: 'Single, Double, Queen, King', SkirtDepth: 'Fits mattresses 4 to 12 inches', TopMaterial: '80% Cotton Terry, 20% Polyester', Membrane: '100% Polyurethane' },
      },
      {
        id: 'memory-foam-pillow',
        slug: 'memory-foam-pillow',
        name: 'Memory Foam Pillow',
        image: '/Coir%20Foam%20Block.avif',
        gallery: ['/Coir%20Foam%20Block.avif'],
        shortDescription: 'Contoured cervical memory foam pillow designed to support neck curvature.',
        fullDescription: 'Ergonomically shaped memory foam pillow with dual-height cervical contours that cradle the head and keep the neck aligned whether sleeping on your back or side.',
        features: ['High-density slow-rebound memory foam', 'Contoured wave design for neck curve support', 'Breathable inner lining + zipped washable bamboo cover', 'Zero pressure ear cradling'],
        benefits: ['Alleviates stiff neck and shoulder tension', 'Promotes open airways to reduce snoring', 'Consistent shape retention over years'],
        applications: ['Side and back sleepers', 'Cervical spondylitis comfort', 'Desk workers with chronic neck strain'],
        specifications: { Dimensions: '24 x 14 x 4.5/3.5 inch', FoamType: 'CertiPUR-US Standard Memory Foam', Cover: 'Bamboo Knit Fabric', Weight: '1.1 kg' },
      },
      {
        id: 'coir-cotton-pillow',
        slug: 'coir-cotton-pillow',
        name: 'Coir & Cotton Pillow',
        image: '/Coir%20Fitted%20Cushioning-1.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-1.avif'],
        shortDescription: 'All-natural pillow combining a flexible coir core with organic cotton batting.',
        fullDescription: 'An organic sleep innovation: a resilient softened coir core provides non-collapsing head elevation while surrounding layers of fluffy organic cotton ensure soft plush surface comfort.',
        features: ['Natural coir center core', 'Outer layers of pure carded cotton', 'Zero synthetic polyester microfibers', 'Unmatched thermal coolness and breathability'],
        benefits: ['Never goes flat like hollow fiber pillows', 'All-natural chemical-free sleep', 'Continuous air circulation around head and scalp'],
        applications: ['Eco-conscious natural bedrooms', 'Warm sleepers prone to night sweating', 'Ayurvedic and wellness retreat centers'],
        specifications: { Size: '27 x 17 inch Standard', Fill: '50% Softened Coir / 50% Carded Organic Cotton', Shell: '100% Cotton Sheeting', Firmness: 'Medium-Firm Natural' },
      },
    ],
  },
  {
    id: 'coir-corporate-gifts',
    slug: 'coir-corporate-gifts',
    route: '/products/coir-corporate-gifts',
    aliases: ['/products/corporate-gifts', '/products/coir-corporate-gifts'],
    name: 'Coir Corporate Gifts',
    navLabel: 'Coir Corporate Gifts',
    badge: 'Eco Gifting',
    heroImage:
      'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
    mainHeading: 'Sustainable Coir Corporate Gifts',
    supportingHeading: 'Thoughtful, Custom-Branded and Eco-Friendly Gifting Solutions.',
    shortDescription:
      'Eco-friendly desk accessories, handcrafted planters, laptop stands, and engraved commemorative plaques made with coconut coir.',
    fullDescription:
      'Elevate your company’s ESG and sustainability commitment with bespoke corporate gifts. Handcrafted from natural coconut coir, eco-wood composites, and organic cotton, customizable with company logos and messaging.',
    highlights: [
      'Tangible expression of corporate environmental responsibility (ESG)',
      'Custom laser engraving and silkscreen branding available',
      'Long-lasting functional desk and office utility',
      'Delivered in biodegradable plastic-free gift packaging',
    ],
    applications: [
      'Corporate Annual Conferences & Trade Show Giveaways',
      'Employee Welcome Kits & Work Anniversary Awards',
      'Client Appreciation Gifts & Executive Hampers',
      'Green Building & Sustainability Milestone Plaques',
    ],
    products: [
      {
        id: 'laptop-stand',
        slug: 'laptop-stand',
        name: 'Laptop Stand',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'Ergonomic desktop laptop riser made from molded coir composite board.',
        fullDescription: 'A modern, minimalist laptop stand crafted from high-density coir composite. Elevates screens to eye level to improve posture while allowing natural laptop heat dissipation.',
        features: ['Ergonomic 15-degree viewing angle', 'Passive cooling ventilation cutout', 'Sturdy non-slip silicone feet', 'Custom laser-engraved corporate branding'],
        benefits: ['Promotes workplace ergonomics', 'Replaces toxic plastic desk stands', 'Visibly showcases your company’s eco-values on employee desks'],
        applications: ['Employee remote work welcome kits', 'Corporate IT hardware rollouts', 'Executive conference gifts'],
        specifications: { Compatibility: 'Laptops 11 to 16 inches', Material: 'High-Density Coir-Wood Composite', WeightCapacity: 'Up to 10 kg', Finish: 'Natural Matte Eco-Varnish' },
      },
      {
        id: 'table-organizer',
        slug: 'table-organizer',
        name: 'Table Organizer',
        image: '/Coir%20wood%20box.avif',
        gallery: ['/Coir%20wood%20box.avif'],
        shortDescription: 'Multi-compartment desk caddy for pens, mobile devices, and business cards.',
        fullDescription: 'Handcrafted desk organizer with dedicated slots for smartphone docking, writing instruments, stationery clips, and sticky notes, made from warm natural coir composite.',
        features: ['Multiple partitioned storage compartments', 'Cable slot for phone charging cable', 'Smooth rounded hand-sanded edges', 'Engravable front face for brand logo'],
        benefits: ['Cleans clutter from office workstations', 'Unique textured natural conversation starter', 'Durable and shatterproof'],
        applications: ['Executive desk styling', 'Client festive gifting hampers', 'New hire orientation packs'],
        specifications: { Dimensions: '220 x 110 x 85 mm', Material: 'Molded Coir + Solid Wood Base', Compartments: '4 Sections', BrandingMethod: 'Laser Etching / Foil Stamping' },
      },
      {
        id: 'coir-wood-painting',
        slug: 'coir-wood-painting',
        name: 'Coir Wood Painting',
        image:
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png',
        ],
        shortDescription: 'Artistic wall frames featuring hand-painted designs on textured natural coir board.',
        fullDescription: 'Unique artistic wall accents created by traditional artisans painting on textured coir panels framed with reclaimed wood. Depicts wildlife, heritage motifs, and abstract landscape art.',
        features: ['Authentic organic fiber canvas texture', 'Hand-painted with non-toxic natural pigments', 'Solid reclaimed timber framing', 'Pre-installed rear mounting hardware'],
        benefits: ['One-of-a-kind handcrafted aesthetic', 'Supports traditional artisan handicraft clusters', 'Adds warm earthy character to office meeting rooms'],
        applications: ['Corporate boardroom wall art', 'VIP client mementos', 'Eco-resort and boutique hotel decor'],
        specifications: { FrameSizes: '12x12 inch, 16x16 inch, 24x18 inch', BaseBoard: 'Textured Coir Felt Canvas', Frame: 'Reclaimed Teak / Pine', CustomArt: 'Commissioned Artwork Supported' },
      },
      {
        id: 'mobile-stand',
        slug: 'mobile-stand',
        name: 'Mobile Stand',
        image: '/Coir%20Fitted%20Cushioning-2.avif',
        gallery: ['/Coir%20Fitted%20Cushioning-2.avif'],
        shortDescription: 'Compact angled desktop mobile phone holder with charging cable notch.',
        fullDescription: 'A sleek, lightweight smartphone dock that holds mobile devices in both portrait and landscape orientations for comfortable hands-free video calls and desk notifications.',
        features: ['Dual orientation support (Vertical/Horizontal)', 'Precision bottom cutout for charging cable pass-through', 'Lightweight portable flat design', 'Prominent brand logo engraving area'],
        benefits: ['Zero desk clutter during zoom and teams calls', 'Low-cost high-impact sustainable promotional gift', 'Pocketable lightweight footprint'],
        applications: ['Mass event giveaways & trade show summits', 'College alumni gifts', 'Corporate anniversary token'],
        specifications: { Dimensions: '120 x 80 x 75 mm', Material: 'Compressed Coir Fiber Board', PhoneFit: 'Universal (All iPhone & Android Models)', CustomFinish: 'Natural / Dark Walnut Stain' },
      },
      {
        id: 'coir-pots-gift',
        slug: 'coir-pots',
        name: 'Coir Pots',
        image:
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        gallery: [
          'https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png',
        ],
        shortDescription: 'Desktop succulent and plant starter kit in a molded coir planter pot.',
        fullDescription: 'An uplifting "Grow Your Own Plant" corporate gift set including an organic coir pot, compressed expanding coco peat soil disc, and seed packet (sunflower, basil, or marigold).',
        features: ['Includes coir pot, coco peat pellet & seeds', 'Custom-printed kraft sleeve packaging', '100% biodegradable and zero waste', 'Easy to sprout on office desk window sills'],
        benefits: ['Brings living greenery and happiness to workstations', 'Engaging interactive gift with lasting sentimental value', 'Strong green corporate messaging'],
        applications: ['Earth Day & World Environment Day campaigns', 'Annual staff wellness initiatives', 'Eco-friendly party favors'],
        specifications: { PotSize: '3 inch / 4 inch diameter', SeedsIncluded: 'Choice of Herbs, Flowers, or Vegetables', Packaging: '100% Recycled Kraft Gift Box', MinimumOrder: '50 sets' },
      },
      {
        id: 'coir-wood-plaque',
        slug: 'coir-wood-plaque',
        name: 'Coir Wood Plaque',
        image: '/Coir%20wood%20box.avif',
        gallery: ['/Coir%20wood%20box.avif'],
        shortDescription: 'Prestigious commemorative trophy plaque combining polished wood with coir board.',
        fullDescription: 'A sustainable alternative to synthetic acrylic or plastic trophies. Combines high-density coir board with solid wooden borders, laser-engraved with awards and honoree names.',
        features: ['Laser engraved high-contrast typography', 'Beveled solid hardwood border frame', 'Standing brass easel strut or wall bracket', 'Plastic-free eco trophy certification'],
        benefits: ['Honors achievements while honoring the planet', 'Distinguished organic executive appearance', 'Never yellows or cracks like acrylic awards'],
        applications: ['Annual corporate employee recognition awards', 'Industry conference speaker mementos', 'Sustainability achievement trophies'],
        specifications: { Dimensions: '8x6 inch, 10x8 inch, 12x9 inch', Materials: 'Coir Board + Sustainable Hardwood', Engraving: 'High-Resolution CO2 Laser Etch', Stand: 'Desktop Stand Included' },
      },
    ],
  },
]

// Helper lookup functions
export const getAllCategories = () => PRODUCT_CATEGORIES

export const getCategoryBySlug = (slug) => {
  if (!slug) return null
  const clean = slug.toLowerCase().trim()
  return (
    PRODUCT_CATEGORIES.find(
      (cat) =>
        cat.slug === clean ||
        cat.id === clean ||
        cat.aliases.some((a) => a === `/products/${clean}` || a === clean)
    ) || null
  )
}

export const getAllProducts = () => {
  return PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      categorySlug: cat.slug,
      categoryName: cat.name,
      categoryBadge: cat.badge,
    }))
  )
}

export const getProductBySlug = (categorySlug, productSlug) => {
  if (!productSlug) return null
  const cleanProd = productSlug.toLowerCase().trim()

  if (categorySlug) {
    const cat = getCategoryBySlug(categorySlug)
    if (cat) {
      const prod = cat.products.find((p) => p.slug === cleanProd || p.id === cleanProd)
      if (prod) {
        return {
          ...prod,
          categorySlug: cat.slug,
          categoryName: cat.name,
          categoryBadge: cat.badge,
        }
      }
    }
  }

  // Fallback search across all products if category not matched
  const all = getAllProducts()
  return all.find((p) => p.slug === cleanProd || p.id === cleanProd) || null
}

export const getRelatedProducts = (currentProductId, categorySlug, limit = 4) => {
  const cat = getCategoryBySlug(categorySlug)
  if (!cat) return []
  return cat.products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit)
    .map((p) => ({
      ...p,
      categorySlug: cat.slug,
      categoryName: cat.name,
      categoryBadge: cat.badge,
    }))
}
