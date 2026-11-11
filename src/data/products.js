export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles', count: 24 },
  { id: 'fashion', name: 'Fashion & Apparel', icon: 'Shirt', count: 8 },
  { id: 'electronics', name: 'Electronics & Audio', icon: 'Headphones', count: 6 },
  { id: 'watches', name: 'Watches & Accessories', icon: 'Watch', count: 4 },
  { id: 'footwear', name: 'Footwear & Sneakers', icon: 'Footprints', count: 4 },
  { id: 'beauty', name: 'Beauty & Skincare', icon: 'HeartHandshake', count: 2 },
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'AeroPulse Wireless Noise-Cancelling Headphones',
    brand: 'AeroSound',
    category: 'electronics',
    price: 249.99,
    originalPrice: 329.99,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 342,
    stock: 14,
    isBestSeller: true,
    isNew: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80'
    ],
    colors: [
      { name: 'Matte Black', hex: '#1e293b' },
      { name: 'Silver Mist', hex: '#cbd5e1' },
      { name: 'Rose Gold', hex: '#f43f5e' }
    ],
    sizes: ['One Size'],
    description: 'Experience studio-grade acoustic clarity with industry-leading active noise cancellation. Engineered with 40mm custom graphene drivers and up to 45 hours of continuous playtime.',
    features: [
      'Hybrid Active Noise Cancellation with Transparency Mode',
      '45-Hour Battery Life with USB-C Ultra-Fast Charging (10m = 5hrs)',
      'Multipoint Bluetooth 5.3 connection across laptop & phone',
      'Plush memory foam ear cushions wrapped in breathable vegan leather'
    ],
    specs: {
      'Connectivity': 'Bluetooth 5.3, 3.5mm Aux',
      'Battery Life': '45 hours ANC on / 60 hours ANC off',
      'Driver Size': '40mm Titanium-Coated Graphene',
      'Weight': '250 grams',
      'Warranty': '2-Year Manufacturer Warranty'
    },
    reviews: [
      { id: 'r1', user: 'Marcus Vance', rating: 5, date: '2 days ago', verified: true, title: 'Unbeatable sound & comfort', comment: 'The bass is punchy without muddying the mids. ANC completely blocks out city traffic.' },
      { id: 'r2', user: 'Elena Rostova', rating: 5, date: '1 week ago', verified: true, title: 'Best travel headphones', comment: 'Took these on a 14-hour flight. Completely silent cabin experience!' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Minimalist Cashmere Blend Knit Sweater',
    brand: 'Atelier Noir',
    category: 'fashion',
    price: 119.50,
    originalPrice: 160.00,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 189,
    stock: 9,
    isBestSeller: true,
    isNew: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'
    ],
    colors: [
      { name: 'Oatmeal Heather', hex: '#e2d9cc' },
      { name: 'Charcoal Black', hex: '#1c1917' },
      { name: 'Sage Green', hex: '#84a98c' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Crafted from an ultra-soft grade-A Mongolian cashmere and organic merino wool blend. Features a relaxed silhouette with ribbed cuffs and hem for effortless casual elegance.',
    features: [
      '70% Ultra-Fine Merino Wool, 30% Grade-A Mongolian Cashmere',
      'Pill-resistant yarn treatment for lifetime longevity',
      'Breathable, temperature-regulating natural fibers',
      'Dry clean or gentle hand wash cold'
    ],
    specs: {
      'Material': '70% Merino, 30% Cashmere',
      'Fit': 'Relaxed Modern Silhouette',
      'Care': 'Hand wash cold or dry clean',
      'Origin': 'Sustainably woven in Portugal'
    },
    reviews: [
      { id: 'r3', user: 'Sarah Jenkins', rating: 5, date: '3 days ago', verified: true, title: 'Incredibly soft!', comment: 'Does not itch at all. The oatmeal color is so versatile.' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Chronograph Vanguard Sapphire Automatic Watch',
    brand: 'Vanguard Chrono',
    category: 'watches',
    price: 489.00,
    originalPrice: 650.00,
    discountPercentage: 24,
    rating: 4.95,
    reviewCount: 94,
    stock: 5,
    isBestSeller: true,
    isNew: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80'
    ],
    colors: [
      { name: 'Silver & Emerald', hex: '#0f5132' },
      { name: 'Black Ion & Rose Gold', hex: '#1c1917' },
      { name: 'Brushed Steel', hex: '#94a3b8' }
    ],
    sizes: ['40mm', '42mm'],
    description: 'A masterpiece of horological engineering. Features a Swiss-precision automatic movement visible through an exhibition sapphire crystal caseback, housed in aerospace-grade 316L stainless steel.',
    features: [
      'Anti-reflective, scratch-resistant double-domed sapphire crystal',
      '100M / 10 ATM Water Resistance with screw-down crown',
      'Swiss Super-LumiNova luminescence on hands and indices',
      'Interchangeable Italian vegetable-tanned leather strap'
    ],
    specs: {
      'Movement': 'Automatic 24-Jewel Calibre, 42h power reserve',
      'Case Diameter': '41mm',
      'Case Thickness': '11.8mm',
      'Water Resistance': '10 ATM (100 meters)'
    },
    reviews: [
      { id: 'r4', user: 'David Kim', rating: 5, date: '2 weeks ago', verified: true, title: 'Feels like a $3000 luxury watch', comment: 'The finishing is stunning. Keeps time within +3 seconds a day.' }
    ]
  },
  {
    id: 'prod-4',
    name: 'CloudStride Pro Ultra-Light Performance Runners',
    brand: 'Velox Athletics',
    category: 'footwear',
    price: 139.99,
    originalPrice: 179.99,
    discountPercentage: 22,
    rating: 4.75,
    reviewCount: 421,
    stock: 18,
    isBestSeller: false,
    isNew: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
    ],
    colors: [
      { name: 'Crimson Surge', hex: '#dc2626' },
      { name: 'Stealth Triple Black', hex: '#09090b' },
      { name: 'Arctic Ice Blue', hex: '#38bdf8' }
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    description: 'Built for relentless speed and supreme all-day comfort. Features nitrogen-infused superfoam cushioning combined with an ultra-breathable engineered mesh upper for zero distraction.',
    features: [
      'Nitrogen-infused foam midsole delivers 85% energy return',
      'Seamless engineered woven mesh prevents hot spots and blisters',
      'Continental rubber traction outsole for all-weather grip',
      'Reflective 3M detailing for nighttime visibility'
    ],
    specs: {
      'Weight': '210g (US Men 9)',
      'Heel-to-Toe Drop': '8mm',
      'Pronation': 'Neutral',
      'Best For': 'Marathon, 10k, Road Running, Daily Training'
    },
    reviews: [
      { id: 'r5', user: 'Rachel Green', rating: 5, date: 'Yesterday', verified: true, title: 'Like running on clouds', comment: 'Shaved 40 seconds off my 5K personal best. Outstanding cushioning.' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Oasis Smart Lumbar Ergonomic Office Chair',
    brand: 'Zenith Living',
    category: 'electronics',
    price: 349.00,
    originalPrice: 450.00,
    discountPercentage: 22,
    rating: 4.85,
    reviewCount: 156,
    stock: 7,
    isBestSeller: false,
    isNew: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1580481077195-c322b72bf904?w=800&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80'
    ],
    colors: [
      { name: 'Graphite Grey', hex: '#4b5563' },
      { name: 'Obsidian Black', hex: '#111827' }
    ],
    sizes: ['Standard'],
    description: 'Engineered for optimal spine alignment and posture health during long creative sessions. Features self-adjusting dynamic lumbar support and 4D adjustable armrests.',
    features: [
      'Dynamic responsive lumbar support system',
      'Breathable German elastomeric mesh for cool airflow',
      'Heavy-duty aluminum wheelbase tested up to 350 lbs',
      '135-degree synchronized recline with tilt lock'
    ],
    specs: {
      'Max Weight': '350 lbs (160 kg)',
      'Adjustment': '4D Armrests, Seat Depth, Lumbar Height',
      'Warranty': '10-Year Frame Warranty'
    },
    reviews: [
      { id: 'r6', user: 'Thomas Reed', rating: 5, date: '5 days ago', verified: true, title: 'My lower back pain disappeared', comment: 'Worth every single penny for anyone working remotely.' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Luxe Botanical Radiance Night Elixir Serum',
    brand: 'Lumière Organics',
    category: 'beauty',
    price: 68.00,
    originalPrice: 85.00,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 230,
    stock: 25,
    isBestSeller: true,
    isNew: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-46761001a4e2?w=800&q=80'
    ],
    colors: [
      { name: '30ml Dropper', hex: '#d97706' }
    ],
    sizes: ['30ml / 1.0 fl oz', '50ml / 1.7 fl oz'],
    description: 'An active overnight treatment infused with botanical squalane, bakuchiol, and organic rosehip oil that deeply hydrates, plumps, and restores luminous skin barrier health by morning.',
    features: [
      'Natural Bakuchiol (gentle retinol alternative that does not irritate)',
      'Cold-pressed Moroccan Argan and Chilean Rosehip Seed oils',
      '100% Vegan, Cruelty-Free, and Paraben-Free',
      'Fast-absorbing dry oil finish with delicate neroli scent'
    ],
    specs: {
      'Skin Type': 'All skin types, especially sensitive and dry',
      'Formulation': 'Concentrated Botanical Facial Oil',
      'Volume': '30ml (approx. 3 month supply)'
    },
    reviews: [
      { id: 'r7', user: 'Camila Diaz', rating: 5, date: '1 week ago', verified: true, title: 'Wake up glowing', comment: 'Leaves my skin so hydrated and silky. Smells like a luxury spa.' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Artisan Heritage Full-Grain Leather Duffle Bag',
    brand: 'Valhalla Goods',
    category: 'fashion',
    price: 289.00,
    originalPrice: 380.00,
    discountPercentage: 24,
    rating: 4.92,
    reviewCount: 118,
    stock: 8,
    isBestSeller: true,
    isNew: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80'
    ],
    colors: [
      { name: 'Cognac Brown', hex: '#78350f' },
      { name: 'Espresso Dark', hex: '#3f1a09' },
      { name: 'Midnight Black', hex: '#18181b' }
    ],
    sizes: ['45L Weekend'],
    description: 'Handcrafted from vegetable-tanned full-grain cowhide leather that develops a rich, unique patina over time. Equipped with heavy-duty solid brass YKK zippers and waterproof nylon lining.',
    features: [
      'TSA-approved carry-on dimensions for all international airlines',
      'Separate ventilated shoe compartment with water-resistant liner',
      'Padded 16-inch laptop pocket and zippered passport organizer',
      'Detachable padded leather shoulder strap'
    ],
    specs: {
      'Dimensions': '52cm x 28cm x 26cm',
      'Capacity': '45 Liters',
      'Hardware': 'Antique Solid Brass YKK',
      'Weight': '1.8 kg'
    },
    reviews: [
      { id: 'r8', user: 'Oliver Wright', rating: 5, date: '3 weeks ago', verified: true, title: 'The leather smells amazing', comment: 'Already took it on 4 trips. Built to last a lifetime.' }
    ]
  },
  {
    id: 'prod-8',
    name: 'RetinaVision 4K UHD Portable Smart Projector',
    brand: 'NovaTech',
    category: 'electronics',
    price: 399.00,
    originalPrice: 520.00,
    discountPercentage: 23,
    rating: 4.7,
    reviewCount: 88,
    stock: 11,
    isBestSeller: false,
    isNew: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80'
    ],
    colors: [
      { name: 'Polar White', hex: '#f8fafc' },
      { name: 'Space Grey', hex: '#334155' }
    ],
    sizes: ['Compact'],
    description: 'Transform any wall into an immersive 150-inch cinematic experience. Equipped with real 900 ANSI lumens, auto-focus, keystone correction, and built-in Harman Kardon dual speakers.',
    features: [
      'Full 4K Decoding with HDR10+ visual brilliance',
      'Instant Auto-Focus & Auto 4-Point Keystone within 2 seconds',
      'Built-in Android TV with Netflix, Disney+, Prime Video & YouTube',
      '3-Hour internal rechargeable battery for outdoor movie nights'
    ],
    specs: {
      'Resolution': '1080p Native (Supports 4K UHD)',
      'Brightness': '900 ANSI Lumens',
      'Projection Size': '40 - 200 inches',
      'Speakers': 'Dual 8W Harman Kardon Sound'
    },
    reviews: [
      { id: 'r9', user: 'Kevin Miller', rating: 5, date: '1 month ago', verified: true, title: 'Movie nights leveled up', comment: 'Picture is crisp even with ambient room lights on. Kids love it!' }
    ]
  },
  {
    id: 'prod-9',
    name: 'Solace Geometric Japanese Ceramic Tea Set',
    brand: 'Komorebi Crafts',
    category: 'fashion',
    price: 84.00,
    originalPrice: 110.00,
    discountPercentage: 23,
    rating: 4.88,
    reviewCount: 75,
    stock: 12,
    isBestSeller: false,
    isNew: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80'
    ],
    colors: [
      { name: 'Kyoto Moss', hex: '#526e48' },
      { name: 'Sand Dune', hex: '#d4c5b9' }
    ],
    sizes: ['1 Teapot + 4 Cups'],
    description: 'Hand-thrown high-fired stoneware finished in a matte reactive glaze. Includes an ergonomic 750ml teapot with internal micro-perforated stainless infuser and 4 matching handleless cups.',
    features: [
      'Hand-crafted ceramic with natural heat retention',
      'Integrated food-grade 304 stainless steel tea leaf strainer',
      'Microwave and dishwasher safe',
      'Packed in a silk-lined bamboo gift box'
    ],
    specs: {
      'Teapot Capacity': '750 ml (25 fl oz)',
      'Cup Capacity': '150 ml each',
      'Material': 'High-fired durable stoneware',
      'Box': 'Eco-friendly bamboo collector box'
    },
    reviews: [
      { id: 'r10', user: 'Aiko Tanaka', rating: 5, date: '2 weeks ago', verified: true, title: 'Authentic & peaceful', comment: 'Every piece has a unique handmade character. Pours cleanly without dripping.' }
    ]
  },
  {
    id: 'prod-10',
    name: 'TitanShield Polarized Titanium Aviator Sunglasses',
    brand: 'AeroVue Eyewear',
    category: 'watches',
    price: 155.00,
    originalPrice: 195.00,
    discountPercentage: 20,
    rating: 4.79,
    reviewCount: 164,
    stock: 15,
    isBestSeller: false,
    isNew: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'
    ],
    colors: [
      { name: 'Gunmetal / Smoke', hex: '#374151' },
      { name: 'Gold / Amber', hex: '#b45309' },
      { name: 'Silver / Glacier Blue', hex: '#0284c7' }
    ],
    sizes: ['Medium 58mm', 'Large 62mm'],
    description: 'Ultra-lightweight Japanese beta-titanium frames weighing a mere 14 grams. Equipped with 9-layer polarized TriAcetate lenses that completely eliminate harsh glare while enhancing natural contrast.',
    features: [
      '100% UV400 Protection against UVA, UVB and blue light',
      'Aerospace Beta-Titanium frames that bend without breaking',
      'Hypoallergenic medical silicone self-adjusting nose pads',
      'Includes hardshell magnetic travel case and microfiber cloth'
    ],
    specs: {
      'Frame Material': 'Japanese Pure Beta-Titanium',
      'Weight': '14.2 grams',
      'Lens': '9-Layer Polarized TAC Category 3',
      'Bridge Width': '14 mm'
    },
    reviews: [
      { id: 'r11', user: 'Brian Cox', rating: 5, date: '1 month ago', verified: true, title: 'Lightest sunglasses I own', comment: 'I forget I am wearing them. Crystal clear optics while driving.' }
    ]
  },
  {
    id: 'prod-11',
    name: 'UrbanStride All-Weather Commuter Trench Coat',
    brand: 'Nordic Element',
    category: 'fashion',
    price: 220.00,
    originalPrice: 295.00,
    discountPercentage: 25,
    rating: 4.84,
    reviewCount: 97,
    stock: 8,
    isBestSeller: false,
    isNew: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80'
    ],
    colors: [
      { name: 'Desert Camel', hex: '#c29b6e' },
      { name: 'Midnight Navy', hex: '#1e3a8a' },
      { name: 'Olive Drab', hex: '#3f4f34' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A tailored modern reinterpretation of the iconic trench coat. Built with a 3-layer breathable weatherproof shell, storm flap closure, and a removable insulated vest liner for year-round versatility.',
    features: [
      '10,000mm Waterproof & Windproof breathable membrane',
      'Removable thermal vest liner with zip attachment',
      'Hidden magnetic storm flap and internal pocket for tablets',
      'Adjustable belt with reinforced horn buckle'
    ],
    specs: {
      'Shell': '100% Recycled Technical Twill with DWR coating',
      'Lining': 'Breathable Viscose Blend',
      'Waterproof Rating': '10,000 mm Hydrostatic Head'
    },
    reviews: [
      { id: 'r12', user: 'Sebastian M.', rating: 5, date: '3 weeks ago', verified: true, title: 'Perfection in the rain', comment: 'Water just beads right off. Looks razor sharp in meetings.' }
    ]
  },
  {
    id: 'prod-12',
    name: 'ApexStudio Mechanical Keyboard with Wooden Palm Rest',
    brand: 'Apex Peripherals',
    category: 'electronics',
    price: 169.00,
    originalPrice: 210.00,
    discountPercentage: 20,
    rating: 4.91,
    reviewCount: 312,
    stock: 16,
    isBestSeller: true,
    isNew: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80'
    ],
    colors: [
      { name: 'Walnut & Chalk', hex: '#582f0e' },
      { name: 'Carbon & Neon', hex: '#18181b' }
    ],
    sizes: ['75% Compact', '100% Full Size'],
    description: 'Engineered for developers, writers, and keyboard enthusiasts. Equipped with pre-lubed Gateron Pro hot-swappable mechanical switches, acoustic poron foam gaskets, and south-facing RGB lighting.',
    features: [
      'Gasket-mounted plate structure for deep, creamy "thocky" sound',
      'Hot-swappable 5-pin PCB supports all MX-style mechanical switches',
      'Triple connectivity: Bluetooth 5.1, 2.4Ghz wireless, and USB-C wired',
      'Includes solid American walnut magnetic wrist rest'
    ],
    specs: {
      'Switches': 'Factory Lubed Gateron Yellow Pro Linear',
      'Battery': '4,000 mAh Rechargeable (Up to 200 hours)',
      'Keycaps': 'Double-shot PBT Cherry Profile',
      'Compatibility': 'macOS, Windows, Linux, iOS, Android'
    },
    reviews: [
      { id: 'r13', user: 'Jason Croft', rating: 5, date: '4 days ago', verified: true, title: 'The sound is hypnotic', comment: 'Typing on this is pure joy. The gasket mount really softens finger fatigue.' }
    ]
  }
];

export const PROMO_CODES = {
  'SHOPORA20': { discount: 20, type: 'percent', label: '20% Off Storewide' },
  'WELCOME10': { discount: 10, type: 'percent', label: '10% New Customer Discount' },
  'SAVE50': { discount: 50, type: 'fixed', label: '$50 Off Orders Over $200', minTotal: 200 }
};

