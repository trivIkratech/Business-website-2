/**
 * THE VERDANT TERRACES - CENTRAL PROJECT DATA CONFIGURATION
 * 
 * All project specifications, branding, pricing, amenities, gallery images,
 * location connectivity, and developer information are configured here.
 * To update property details, edit this file without modifying HTML/CSS.
 */

const PROJECT_DATA = {
  brand: {
    name: "The Verdant Terraces",
    tagline: "Ultra-Luxury Riverside Residences & Sky Penthouses",
    locationShort: "Upper Koregaon Park, Pune",
    fullAddress: "The Verdant Terraces, Riverside Boulevard, Mundhwa-Magarpatta Road, Upper Koregaon Park, Pune, Maharashtra 411036",
    developer: "Mantra Curated Living",
    reraNumber: "P52100054321",
    reraWebsite: "https://maharera.mahaonline.gov.in",
    brochureUrl: "assets/documents/brochure.pdf",
    logoPath: "assets/icons/logo.svg"
  },

  contact: {
    phoneDisplay: "+91 98230 00000",
    phoneTel: "+919823000000",
    whatsappNumber: "919823000000",
    whatsappDefaultText: "Hello, I am interested in The Verdant Terraces at Upper Koregaon Park. Please share floor plans, pricing, and schedule a private site visit.",
    email: "concierge@verdantterraces.com",
    salesOfficeHours: "Monday to Sunday: 10:00 AM – 7:30 PM",
    formEndpoint: "https://httpbin.org/post" // Configurable form submission endpoint
  },

  hero: {
    kicker: "AN ARCHITECTURAL ODE TO NATURE & SERENITY",
    title: "Where Riverside Calm Meets Sculpted Luxury",
    subtitle: "8.5 acres of low-density biophilic sanctuaries featuring 2.5, 3, 3.5 & 4.5 BHK residences with double-height sky decks overlooking lush greens.",
    startingPrice: "₹ 1.85 Cr*",
    handoverDate: "December 2028",
    image: "assets/images/hero-architecture.jpg"
  },

  overview: {
    kicker: "THE PHILOSOPHY",
    title: "A Masterpiece Designed For Living in Harmony",
    paragraphs: [
      "Nestled along the tranquil waterfront of Upper Koregaon Park, The Verdant Terraces is a collection of signature residential towers rising amidst an 8.5-acre landscaped sanctuary. Designed in collaboration with international master-architects, every residence is shaped around natural daylight, cross-ventilation, and unbroken panoramic views.",
      "With only three bespoke residences per floor, private high-speed elevator access, and generous 10.5-foot finished ceiling heights, Verdant Terraces redefines quiet luxury in Pune's most dynamic residential enclave."
    ],
    primaryImage: "assets/images/project-overview.jpg",
    detailImage: "assets/images/architecture-detail.jpg"
  },

  highlights: [
    { value: "8.5", unit: "Acres", label: "Low-Density Enclave", desc: "Over 78% open green reserves & landscaped podiums" },
    { value: "3", unit: "Only", label: "Residences Per Floor", desc: "Maximum privacy with dedicated private elevator access" },
    { value: "45K+", unit: "Sq. Ft.", label: "Curated VIP Clubhouse", desc: "25+ bespoke indoor & outdoor lifestyle amenities" },
    { value: "10.5", unit: "Feet", label: "Clear Ceiling Heights", desc: "Voluminous spatial grandeur with acoustic glass" },
    { value: "37", unit: "Storeys", label: "Sculpted Towers", desc: "Panoramic skyline & riverfront vistas" },
    { value: "IGBC", unit: "Platinum", label: "Green Certified", desc: "Sustainable architecture with rainwater harvesting" }
  ],

  configurations: [
    {
      id: "config-2bhk",
      type: "2.5 BHK",
      badge: "ROYALE SUITE",
      carpetArea: "1,180 Sq. Ft.",
      balconyDeck: "145 Sq. Ft. Deep Verandah",
      floors: "Tower B | Levels 2 - 24",
      startingPrice: "₹ 1.85 Cr* Onwards",
      features: [
        "2 Expansive Master Bedrooms + Multi-Utility Study",
        "Open-Plan Formal Living & Dining Salon",
        "Large Format Imported Italian Marble",
        "Chef's Kitchen with Attached Utility Balcony"
      ],
      image: "assets/images/config-2bhk.jpg",
      floorPlanSvg: "assets/images/floorplan-2bhk.svg"
    },
    {
      id: "config-3bhk",
      type: "3 BHK",
      badge: "IMPERIAL RESIDENCE",
      carpetArea: "1,560 Sq. Ft.",
      balconyDeck: "180 Sq. Ft. Panoramic Sky Deck",
      floors: "Tower A & B | Levels 2 - 34",
      startingPrice: "₹ 2.45 Cr* Onwards",
      features: [
        "3 En-Suite Bedrooms with Walk-In Wardrobes",
        "24-Foot Wide Living Salon Opening to Sky Deck",
        "Concealed VRV Central Climate Control Provision",
        "Bespoke European Kitchen with Quartz Island"
      ],
      image: "assets/images/config-3bhk.jpg",
      floorPlanSvg: "assets/images/floorplan-3bhk.svg"
    },
    {
      id: "config-35bhk",
      type: "3.5 BHK",
      badge: "SKY SANCTUARY",
      carpetArea: "1,890 Sq. Ft.",
      balconyDeck: "230 Sq. Ft. Wraparound Terrace",
      floors: "Tower A | Levels 15 - 34",
      startingPrice: "₹ 3.10 Cr* Onwards",
      features: [
        "Private Elevator Foyer & Double Entrance Door",
        "3 Master En-Suites + Dedicated Home Office Pod",
        "Double-Glazed Acoustic Full-Height Glass Facade",
        "Separate Housekeeping Quarters with Private Access"
      ],
      image: "assets/images/config-35bhk.jpg",
      floorPlanSvg: "assets/images/floorplan-35bhk.svg"
    },
    {
      id: "config-4bhk",
      type: "4.5 BHK",
      badge: "SIGNATURE PENTHOUSE",
      carpetArea: "2,450 Sq. Ft.",
      balconyDeck: "320 Sq. Ft. Double-Height Verandah",
      floors: "Tower C | Top 5 Floors (Levels 32 - 37)",
      startingPrice: "₹ 4.35 Cr* Onwards",
      features: [
        "Private Keycard Elevator Direct to Residence",
        "Presidential Master Suite with Private Lounge",
        "Outdoor Jacuzzi Deck with 270° Skyline Views",
        "Dual Gourmet Kitchens & Dedicated Staff Suite"
      ],
      image: "assets/images/config-4bhk.jpg",
      floorPlanSvg: "assets/images/floorplan-4bhk.svg"
    }
  ],

  amenities: [
    {
      id: "amenity-pool",
      category: "Wellness",
      title: "Olympic Sky Lagoon",
      subtitle: "50-meter temperature-controlled infinity edge pool with submerged sun loungers and cabana deck.",
      image: "assets/images/amenity-pool.jpg"
    },
    {
      id: "amenity-gym",
      category: "Fitness",
      title: "Glasshouse Fitness Pavilion",
      subtitle: "Biophilic wellness center featuring Technogym equipment, pilates reformer studio and personal training bays.",
      image: "assets/images/amenity-gym.jpg"
    },
    {
      id: "amenity-clubhouse",
      category: "Leisure",
      title: "The VIP Clubhouse Salon",
      subtitle: "Designer residential lounge with curated art gallery, barista café, and private dining salon for hostings.",
      image: "assets/images/amenity-clubhouse.jpg"
    },
    {
      id: "amenity-spa",
      category: "Wellness",
      title: "Hydrotherapy & Zen Spa",
      subtitle: "Finnish cedar sauna, steam suites, Himalayan salt relaxation cave, and private massage rooms.",
      image: "assets/images/amenity-spa.jpg"
    },
    {
      id: "amenity-theater",
      category: "Entertainment",
      title: "Private Dolby Atmos Cinema",
      subtitle: "Intimate 24-seater acoustically tuned screening theatre with motorized Italian leather recliners.",
      image: "assets/images/amenity-theater.jpg"
    },
    {
      id: "amenity-greens",
      category: "Nature",
      title: "Riverfront Biophilic Gardens",
      subtitle: "Aromatic botanical walkways, reflexology tracks, meditation gazebos, and organic butterfly groves.",
      image: "assets/images/amenity-greens.jpg"
    },
    {
      id: "amenity-coworking",
      category: "Business",
      title: "Executive Co-Working Pods",
      subtitle: "High-speed optical fiber connectivity, soundproof Zoom cabins, meeting boardroom, and print salon.",
      image: "assets/images/amenity-coworking.jpg"
    }
  ],

  masterPlan: {
    title: "Master Site Layout",
    description: "8.5 acres thoughtfully planned into distinct experiential zones: arrival plaza, residential towers, central recreational lagoon, and riverside botanical boulevard.",
    image: "assets/images/master-plan.svg"
  },

  gallery: [
    { category: "exterior", title: "Sculptural Tower Architecture", desc: "Contemporary glass & stone facade with cantilevered decks", image: "assets/images/tower-facade.jpg" },
    { category: "exterior", title: "Twilight Grand Facade", desc: "Warm architectural illumination reflecting on water features", image: "assets/images/gallery-ext-1.jpg" },
    { category: "exterior", title: "Riverside Horizon Towers", desc: "High-rise towers rising amidst an 8.5-acre biophilic sanctuary", image: "assets/images/hero-architecture.jpg" },
    { category: "exterior", title: "Botanical Water Court", desc: "Arrival plaza with reflecting ponds and mature canopies", image: "assets/images/project-overview.jpg" },
    { category: "interiors", title: "Expansive Living Salon", desc: "Italian marble flooring and seamless floor-to-ceiling glass", image: "assets/images/gallery-int-1.jpg" },
    { category: "interiors", title: "Presidential Master Suite", desc: "Plush ensuite retreat with walk-in closet & panoramic views", image: "assets/images/gallery-int-2.jpg" },
    { category: "interiors", title: "Designer Island Kitchen", desc: "European modular kitchen with quartz waterfall counter", image: "assets/images/gallery-int-3.jpg" },
    { category: "interiors", title: "Sky Residence Dining Lounge", desc: "Formal dining salon opening seamlessly to private sundeck", image: "assets/images/config-3bhk.jpg" },
    { category: "amenities", title: "Sunset Olympic Sky Lagoon", desc: "Submerged loungers and twilight reflection deck", image: "assets/images/gallery-amenity-1.jpg" },
    { category: "amenities", title: "Zen Hydrotherapy Bath Suite", desc: "Calming botanical bath suite crafted for holistic rejuvenation", image: "assets/images/gallery-amenity-2.jpg" },
    { category: "amenities", title: "Glasshouse Fitness Pavilion", desc: "Biophilic wellness center featuring Technogym equipment", image: "assets/images/amenity-gym.jpg" },
    { category: "amenities", title: "Cedar Sauna & Spa Sanctuary", desc: "Thermal restoration chambers and hydrotherapy wellness", image: "assets/images/amenity-spa.jpg" },
    { category: "lifestyle", title: "Terrace Dining Experience", desc: "Alfresco evening entertaining overlooking riverfront canopies", image: "assets/images/gallery-lifestyle-1.jpg" },
    { category: "lifestyle", title: "Botanical Riverfront Walk", desc: "1.2 km riverside nature trail and aromatic herbarium", image: "assets/images/amenity-greens.jpg" },
    { category: "lifestyle", title: "The VIP Resident Lounge", desc: "Bespoke seating, curated art library, and private barista bar", image: "assets/images/amenity-clubhouse.jpg" },
    { category: "lifestyle", title: "Private Dolby Atmos Cinema", desc: "Intimate 24-seater acoustically isolated screening theatre", image: "assets/images/amenity-theater.jpg" }
  ],

  location: {
    tagline: "CONVERGENCE OF HIGH LIFE & VIBRANT URBANITY",
    title: "Upper Koregaon Park & Magarpatta Riverside",
    description: "Verdant Terraces occupies a strategic riverfront position connecting Koregaon Park's boutique dining with Magarpatta's thriving commercial IT hubs and the Pune-Nagar corridor.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.187311197825!2d73.91689107593671!3d18.52042076918239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19e59d2a233%3A0xb30e3713028fa2d8!2sMundhwa%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    landmarks: [
      { category: "Business Hubs", items: [
        { name: "Magarpatta Cybercity", time: "5 Mins", dist: "2.1 km" },
        { name: "EON Free Zone IT Park Kharadi", time: "10 Mins", dist: "4.9 km" },
        { name: "World Trade Center Pune", time: "11 Mins", dist: "5.1 km" },
        { name: "Cerebrum IT Park Kalyani Nagar", time: "12 Mins", dist: "5.8 km" }
      ]},
      { category: "Lifestyle & Dining", items: [
        { name: "Koregaon Park Dining Strip (North Main Rd)", time: "8 Mins", dist: "3.8 km" },
        { name: "Phoenix Marketcity Viman Nagar", time: "12 Mins", dist: "5.4 km" },
        { name: "Amanora Town Centre & Seasons Mall", time: "6 Mins", dist: "2.7 km" },
        { name: "Marriott Suites & The Ritz-Carlton", time: "14 Mins", dist: "6.2 km" }
      ]},
      { category: "Healthcare & Schools", items: [
        { name: "Columbia Asia / Manipal Hospital", time: "7 Mins", dist: "3.2 km" },
        { name: "The Kalyani School & Wisdom World School", time: "8 Mins", dist: "3.5 km" },
        { name: "Ruby Hall Clinic Wanowrie", time: "15 Mins", dist: "6.8 km" },
        { name: "Vibgyor High International School", time: "9 Mins", dist: "4.1 km" }
      ]},
      { category: "Transit Hubs", items: [
        { name: "Pune International Airport (PNQ)", time: "20 Mins", dist: "9.5 km" },
        { name: "Pune Railway Central Station", time: "18 Mins", dist: "8.2 km" },
        { name: "Kalyani Nagar Metro Station", time: "10 Mins", dist: "4.6 km" },
        { name: "Pune-Solapur / Nagar Highway", time: "7 Mins", dist: "3.0 km" }
      ]}
    ]
  },

  developer: {
    name: "Mantra Curated Living",
    legacyYears: "16+ Years",
    deliveredSqFt: "14+ Million",
    happyFamilies: "12,500+",
    ongoingProjects: "18 Projects",
    aboutText: "Mantra Properties has continually pioneered design-forward residential landmarks across Western India. The Curated Living vertical represents our signature luxury standard—blending sustainable bioclimatic architecture, uncompromising structural engineering, and ultra-refined lifestyle curation. With an immaculate record of on-time delivery and customer delight, we sculpt homes that transcend generations.",
    image: "assets/images/developer-legacy.jpg"
  },

  faqs: [
    {
      q: "Where is The Verdant Terraces located and how is the connectivity?",
      a: "The project is strategically positioned on the prime Mundhwa-Magarpatta riverfront boulevard in Upper Koregaon Park. It offers seamless dual access to Koregaon Park's cultural and dining avenues (8 mins) and the major IT corridors of Magarpatta Cybercity (5 mins) and Kharadi EON IT Park (10 mins)."
    },
    {
      q: "What residential configurations and carpet areas are available?",
      a: "The Verdant Terraces offers four curated luxury residences: 2.5 BHK Royale Suites (1,180 sq. ft.), 3 BHK Imperial Residences (1,560 sq. ft.), 3.5 BHK Sky Sanctuaries (1,890 sq. ft.), and limited 4.5 BHK Penthouse Pavilions (2,450 sq. ft.). Every layout includes private sky decks with finished 10.5-ft ceiling heights."
    },
    {
      q: "Is the project MahaRERA approved and what is the registration number?",
      a: "Yes, The Verdant Terraces is fully compliant and registered under MahaRERA with registration number P52100054321. Complete documents, approvals, and quarterly progress updates can be reviewed on the official MahaRERA portal (maharera.mahaonline.gov.in)."
    },
    {
      q: "What are the handover timelines and construction milestones?",
      a: "Excavation and foundation works are actively underway. The planned phased handover for Towers A, B, and C begins from December 2028 with milestone-linked payment schedules approved by leading nationalized and private financial institutions."
    },
    {
      q: "What are the primary lifestyle and clubhouse amenities provided?",
      a: "The enclave features over 25+ curated amenities across 45,000 sq. ft., including a 50m temperature-controlled Olympic Sky Lagoon, Glasshouse Gymnasium by Technogym, Hydrotherapy Spa with Finnish Cedar sauna, 24-seater Dolby Atmos Cinema, Floodlit Padel & Tennis courts, and Riverfront biophilic walkways."
    },
    {
      q: "How can I book a private site preview or download the architectural brochure?",
      a: "You can download the official architectural brochure directly using the 'Download Brochure' button on this site. To arrange a private VIP experience pavilion visit with our Senior Relationship Director, submit the enquiry form or click the WhatsApp / Call button."
    }
  ]
};

// Export to window for vanilla browser consumption
window.PROJECT_DATA = PROJECT_DATA;

