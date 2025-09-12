// categoriesData.js
export const categories = [
  { name: 'Handyman & General Repairs',    icon: 'handyman-general-repairs' },
  { name: 'Carpentry & Joinery',            icon: 'carpentry-joinery' },
  { name: 'Plumbing, Gas & Drainage',       icon: 'plumbing-gas-drainage' },
  { name: 'Electrical & Data',              icon: 'electrical-data' },
  { name: 'Heating, Cooling & Ventilation', icon: 'heating-cooling-hvac' },
  { name: 'Roofing & Guttering',            icon: 'roofing-guttering' },
  { name: 'Painting & Decorating',          icon: 'painting-decorating' },
  { name: 'Plastering & Drywall',           icon: 'plastering-drywall' },
  { name: 'Tiling, Stone & Masonry',        icon: 'tiling-stone-masonry' },
  { name: 'Flooring',                       icon: 'flooring' },
  { name: 'Windows, Doors & Glazing',       icon: 'windows-doors-glazing' },
  { name: 'Fencing & Gates',                icon: 'fencing-gates' },
  { name: 'Outdoor, Landscaping & Garden',  icon: 'outdoor-landscaping-garden' },
  { name: 'Pools, Spas & Saunas',           icon: 'pools-spas-saunas' },
  { name: 'Cleaning & Housekeeping',        icon: 'cleaning-housekeeping' },
  { name: 'Rubbish, Recycling & Skip Hire', icon: 'rubbish-recycling-skip-hire' },
  { name: 'Pest & Wildlife',                icon: 'pest-wildlife' },
  { name: 'Security, Alarms & CCTV',        icon: 'security-alarms-cctv' },
  { name: 'Smart Home & IT',                icon: 'smart-home-it' },
  { name: 'Solar, Batteries & Energy',      icon: 'solar-batteries-energy' },
  { name: 'Appliances',                     icon: 'appliances' },
  { name: 'Building & Renovation',          icon: 'building-renovation' },
  { name: 'Compliance, Inspection & Reports', icon: 'compliance-inspection-reports' },
  { name: 'Emergency & Disaster Recovery',  icon: 'emergency-disaster-recovery' },
  { name: 'Strata & Property Management Services', icon: 'strata-property-management' },
  { name: 'Moving, Storage & Relocations',  icon: 'moving-storage-relocations' },
  { name: 'Transport, Delivery & Courier',  icon: 'transport-delivery-courier' },
  { name: 'Automotive & Mobile Services',   icon: 'automotive-mobile-services' },
  { name: 'Metalwork & Fabrication',        icon: 'metalwork-fabrication' },
  { name: 'Glass, Glazing & Screens',       icon: 'glass-glazing-screens' },
  { name: 'Signage & Printing',             icon: 'signage-printing' },
  { name: 'Garden Structures & Exteriors',  icon: 'garden-structures-exteriors' },
  { name: 'Wastewater, Septic & Rural',     icon: 'wastewater-septic-rural' },
  { name: 'Marine & Jetty',                 icon: 'marine-jetty' },
  { name: 'Accessibility, NDIS & Aged Care', icon: 'accessibility-ndis-aged-care' },
  { name: 'Health, Wellness & Personal Care', icon: 'health-wellness-personal-care' },
  { name: 'Childcare, Family & Education',  icon: 'childcare-family-education' },
  { name: 'Pets & Animals',                 icon: 'pets-animals' },
  { name: 'Events & Hospitality',           icon: 'events-hospitality' },
  { name: 'Photography, Video & Creative',   icon: 'photography-video-creative' },
  { name: 'Business, Admin & Virtual Support', icon: 'business-admin-virtual-support' },
  { name: 'Legal, Finance & Property Services', icon: 'legal-finance-property-services' },
  { name: 'IT, Web & Cyber',                icon: 'it-web-cyber' },
  { name: 'Sustainability & Environment',   icon: 'sustainability-environment' },
  { name: 'Specialty Trades & Niche Services', icon: 'specialty-niche-services' }
];

export const subcategoriesMap = {
  'Handyman & General Repairs': [
    { name: 'General handyman / odd jobs',        icon: 'handyman-general-repairs-general-handyman-odd-jobs' },
    { name: 'Furniture assembly / flat-packs',     icon: 'handyman-general-repairs-furniture-assembly-flat-packs' },
    { name: 'Picture/mirror hanging, TV mounting', icon: 'handyman-general-repairs-picture-mirror-hanging' },
    { name: 'Door repairs: handles, locks, hinges',icon: 'handyman-general-repairs-door-repairs' },
    { name: 'Flyscreens & mesh, window latches',   icon: 'handyman-general-repairs-flyscreens-mesh' },
    { name: 'Caulking & sealing',                  icon: 'handyman-general-repairs-caulking-sealing' },
    { name: 'Basic carpentry',                     icon: 'handyman-general-repairs-basic-carpentry' },
    { name: 'Small patch & paint',                 icon: 'handyman-general-repairs-small-patch-paint' },
    { name: 'Weatherproofing & draught sealing',   icon: 'handyman-general-repairs-weatherproofing-draught-sealing' }
  ],
  'Carpentry & Joinery': [
    { name: 'Framing & extensions',           icon: 'carpentry-joinery-framing-extensions' },
    { name: 'Decks, pergolas, verandahs',     icon: 'carpentry-joinery-decks-pergolas' },
    { name: 'Stairs & balustrades',           icon: 'carpentry-joinery-stairs-balustrades' },
    { name: 'Custom cabinetry & built-ins',   icon: 'carpentry-joinery-custom-cabinetry' },
    { name: 'Doors & architraves',            icon: 'carpentry-joinery-doors-architraves' },
    { name: 'Skirting & mouldings',           icon: 'carpentry-joinery-skirting-mouldings' },
    { name: 'Timber repairs & rot replacement', icon: 'carpentry-joinery-timber-repairs' }
  ],
  'Plumbing, Gas & Drainage': [
    { name: 'Emergency plumbing (24/7)',         icon: 'plumbing-gas-drainage-emergency-plumbing' },
    { name: 'Blocked drains / CCTV inspection', icon: 'plumbing-gas-drainage-blocked-drains' },
    { name: 'Leaks: taps, toilets, showers',     icon: 'plumbing-gas-drainage-leaks' },
    { name: 'Hot water systems',                 icon: 'plumbing-gas-drainage-hot-water-systems' },
    { name: 'Gasfitting: cooktops, heaters',     icon: 'plumbing-gas-drainage-gasfitting' },
    { name: 'Roof plumbing, gutters',            icon: 'plumbing-gas-drainage-roof-plumbing' },
    { name: 'Rainwater tanks & pumps',           icon: 'plumbing-gas-drainage-rainwater-tanks' },
    { name: 'Backflow prevention & TMV',         icon: 'plumbing-gas-drainage-backflow-prevention' }
  ],
  'Electrical & Data': [
    { name: 'Emergency electrical (24/7)',       icon: 'electrical-data-emergency-electrical' },
    { name: 'Power points, switches, lighting',  icon: 'electrical-data-power-points' },
    { name: 'Switchboard upgrades & RCDs',       icon: 'electrical-data-switchboard-upgrades' },
    { name: 'Smoke alarms install/test',         icon: 'electrical-data-smoke-alarms' },
    { name: 'EV chargers home & commercial',     icon: 'electrical-data-ev-chargers' },
    { name: 'Data/phone cabling, NBN pre-wire',  icon: 'electrical-data-data-cabling' },
    { name: 'Home theatre & AV',                 icon: 'electrical-data-home-theatre' },
    { name: 'Test & tag (commercial)',           icon: 'electrical-data-test-tag' }
  ],
  'Heating, Cooling & Ventilation': [
    { name: 'Split-system AC install & service', icon: 'heating-cooling-hvac-split-system-ac' },
    { name: 'Ducted air-con & zoning',           icon: 'heating-cooling-hvac-ducted-air-con' },
    { name: 'Evaporative cooling',               icon: 'heating-cooling-hvac-evaporative-cooling' },
    { name: 'Gas heater service & CO test',      icon: 'heating-cooling-hvac-gas-heater-service' },
    { name: 'Ventilation & exhaust fans',        icon: 'heating-cooling-hvac-ventilation-fans' },
    { name: 'Thermostat controls',               icon: 'heating-cooling-hvac-thermostat-controls' }
  ],
  'Roofing & Guttering': [
    { name: 'Roof repairs (tile, metal)',         icon: 'roofing-guttering-roof-repairs' },
    { name: 'Re-roofing & restorations',          icon: 'roofing-guttering-re-roofing' },
    { name: 'Flashings, valleys & ridge capping', icon: 'roofing-guttering-flashings-valleys' },
    { name: 'Gutter install/guard',               icon: 'roofing-guttering-gutter-install' },
    { name: 'Skylights & roof windows',           icon: 'roofing-guttering-skylights' },
    { name: 'Leak detection & storm make safe',   icon: 'roofing-guttering-leak-detection' }
  ],
  'Painting & Decorating': [
    { name: 'Interior/exterior painting',      icon: 'painting-decorating-interior-exterior' },
    { name: 'Feature walls & wallpaper',       icon: 'painting-decorating-feature-walls' },
    { name: 'Timber staining & oiling',        icon: 'painting-decorating-timber-staining' },
    { name: 'Roof painting & sealing',         icon: 'painting-decorating-roof-painting' },
    { name: 'Lead-paint management',           icon: 'painting-decorating-lead-paint' },
    { name: 'Plaster & surface prep',          icon: 'painting-decorating-plaster-prep' }
  ],
  'Plastering & Drywall': [
    { name: 'Hole patching & cornices',        icon: 'plastering-drywall-hole-patching' },
    { name: 'New walls & ceilings',            icon: 'plastering-drywall-new-walls' },
    { name: 'Soundproofing & acoustic panels', icon: 'plastering-drywall-soundproofing' },
    { name: 'Water damage repairs',            icon: 'plastering-drywall-water-damage' }
  ],
  'Tiling, Stone & Masonry': [
    { name: 'Floor/wall tiling',               icon: 'tiling-stone-masonry-floor-tiling' },
    { name: 'Waterproofing',                   icon: 'tiling-stone-masonry-waterproofing' },
    { name: 'Regrouting & silicone',           icon: 'tiling-stone-masonry-regrouting' },
    { name: 'Natural stone & pavers',          icon: 'tiling-stone-masonry-natural-stone' },
    { name: 'Bricklaying & blockwork',         icon: 'tiling-stone-masonry-bricklaying' },
    { name: 'Concrete slabs & paths',          icon: 'tiling-stone-masonry-concrete-slabs' },
    { name: 'Polished concrete & epoxy',       icon: 'tiling-stone-masonry-polished-concrete' }
  ],
  'Flooring': [
    { name: 'Timber/engineered install', icon: 'flooring-timber-install' },
    { name: 'Sanding & polishing',       icon: 'flooring-sanding-polishing' },
    { name: 'Hybrid & vinyl plank',      icon: 'flooring-hybrid-vinyl' },
    { name: 'Carpet install & stretching', icon: 'flooring-carpet-install' },
    { name: 'Tile removal & prep',       icon: 'flooring-tile-removal' },
    { name: 'Underlay & trims',          icon: 'flooring-underlay-trims' }
  ],
  'Windows, Doors & Glazing': [
    { name: 'Window replacement & repairs', icon: 'windows-doors-glazing-window-replacement' },
    { name: 'Double glazing/retrofit',       icon: 'windows-doors-glazing-double-glazing' },
    { name: 'Flyscreens & security screens',icon: 'windows-doors-glazing-flyscreens' },
    { name: 'Sliding door tracks & rollers', icon: 'windows-doors-glazing-sliding-doors' },
    { name: 'Garage doors install/service',  icon: 'windows-doors-glazing-garage-doors' },
    { name: 'Shower screens & mirrors',      icon: 'windows-doors-glazing-shower-screens' },
    { name: 'Bi-folds, French & stacker',    icon: 'windows-doors-glazing-bifold-doors' }
  ],
  'Fencing & Gates': [
    { name: 'Timber, Colorbond, aluminium', icon: 'fencing-gates-timber-colorbond' },
    { name: 'Pool fencing & compliance',    icon: 'fencing-gates-pool-fencing' },
    { name: 'Slat screens & privacy',       icon: 'fencing-gates-slat-screens' },
    { name: 'Gates manual/automatic',       icon: 'fencing-gates-gates' },
    { name: 'Rural & stock fencing',        icon: 'fencing-gates-rural-fencing' },
    { name: 'Repairs & storm damage',       icon: 'fencing-gates-repairs-storm-damage' }
  ],
  'Outdoor, Landscaping & Garden': [
    { name: 'Lawn care & mowing',            icon: 'outdoor-landscaping-garden-lawn-care' },
    { name: 'Hedging & tree lopping',        icon: 'outdoor-landscaping-garden-hedging' },
    { name: 'Garden makeovers & softscaping',icon: 'outdoor-landscaping-garden-makeovers' },
    { name: 'Irrigation & water tanks',      icon: 'outdoor-landscaping-garden-irrigation' },
    { name: 'Natural & synthetic turf',       icon: 'outdoor-landscaping-garden-turf' },
    { name: 'Decks, pergolas & gazebos',     icon: 'outdoor-landscaping-garden-decks' },
    { name: 'Paving & edging',               icon: 'outdoor-landscaping-garden-paving' },
    { name: 'Garden lighting & power',       icon: 'outdoor-landscaping-garden-lighting' },
    { name: 'Green waste removal',           icon: 'outdoor-landscaping-garden-green-waste' }
  ],
  'Pools, Spas & Saunas': [
    { name: 'Pool cleaning & servicing',         icon: 'pools-spas-saunas-pool-cleaning' },
    { name: 'Pumps, filters & chlorinators',     icon: 'pools-spas-saunas-pumps-filters' },
    { name: 'Leak detection',                    icon: 'pools-spas-saunas-leak-detection' },
    { name: 'Heating solar/gas/electric',        icon: 'pools-spas-saunas-heating' },
    { name: 'Pool fencing & compliance',         icon: 'pools-spas-saunas-pool-fencing' },
    { name: 'Spa install & maintenance',         icon: 'pools-spas-saunas-spa-install' },
    { name: 'Saunas & steam rooms',              icon: 'pools-spas-saunas-saunas' }
  ],
  'Cleaning & Housekeeping': [
    { name: 'Regular house cleaning',         icon: 'cleaning-housekeeping-regular-cleaning' },
    { name: 'End-of-lease cleaning',          icon: 'cleaning-housekeeping-end-of-lease' },
    { name: 'Deep cleans kitchens/baths',     icon: 'cleaning-housekeeping-deep-cleans' },
    { name: 'Window & flyscreen cleaning',    icon: 'cleaning-housekeeping-window-cleaning' },
    { name: 'Carpet & upholstery steam clean',icon: 'cleaning-housekeeping-carpet-steam-clean' },
    { name: 'Pressure washing',               icon: 'cleaning-housekeeping-pressure-washing' },
    { name: 'Solar panel cleaning',           icon: 'cleaning-housekeeping-solar-panel' },
    { name: 'Oven & rangehood detailing',     icon: 'cleaning-housekeeping-oven-detailing' },
    { name: 'Post-reno & builder’s cleans',   icon: 'cleaning-housekeeping-post-reno-cleans' }
  ],
  'Rubbish, Recycling & Skip Hire': [
    { name: 'Household junk removal', icon: 'rubbish-recycling-skip-hire-household-junk' },
    { name: 'Green waste & debris',   icon: 'rubbish-recycling-skip-hire-green-waste' },
    { name: 'Construction waste',     icon: 'rubbish-recycling-skip-hire-construction-waste' },
    { name: 'Whitegoods & e-waste',   icon: 'rubbish-recycling-skip-hire-e-waste' },
    { name: 'Mattress & bulky items', icon: 'rubbish-recycling-skip-hire-bulky-items' },
    { name: 'Skip bin delivery/pickup',icon: 'rubbish-recycling-skip-hire-skip-bin' }
  ],
  'Pest & Wildlife': [
    { name: 'Termite inspections & barriers', icon: 'pest-wildlife-termite-inspections' },
    { name: 'General pest control',           icon: 'pest-wildlife-general-pest-control' },
    { name: 'Rodent proofing',                 icon: 'pest-wildlife-rodent-proofing' },
    { name: 'Possum removal (licensed)',       icon: 'pest-wildlife-possum-removal' },
    { name: 'Bird control & netting',          icon: 'pest-wildlife-bird-control' },
    { name: 'End-of-lease pest treatment',     icon: 'pest-wildlife-end-of-lease' }
  ],
  'Security, Alarms & CCTV': [
    { name: 'Alarm systems & monitoring', icon: 'security-alarms-cctv-alarms-monitoring' },
    { name: 'CCTV & NVR setup',           icon: 'security-alarms-cctv-cctv-nvr' },
    { name: 'Intercoms & access control', icon: 'security-alarms-cctv-intercoms' },
    { name: 'Security doors & screens',   icon: 'security-alarms-cctv-security-doors' },
    { name: 'Safes install/bolt down',     icon: 'security-alarms-cctv-safes' },
    { name: 'Temporary site security',     icon: 'security-alarms-cctv-temporary-security' }
  ],
  'Smart Home & IT': [
    { name: 'Smart lighting & sensors',      icon: 'smart-home-it-smart-lighting' },
    { name: 'Voice assistants & hubs',       icon: 'smart-home-it-voice-assistants' },
    { name: 'Wi-Fi optimisation & mesh',      icon: 'smart-home-it-wifi-mesh' },
    { name: 'Home networking & NAS',         icon: 'smart-home-it-home-networking' },
    { name: 'Device setup (TVs, printers)',  icon: 'smart-home-it-device-setup' },
    { name: 'Cybersecurity checkup',         icon: 'smart-home-it-cybersecurity' }
  ],
  'Solar, Batteries & Energy': [
    { name: 'Solar PV installs & upgrades',      icon: 'solar-batteries-energy-solar-pv' },
    { name: 'Inverter replacement & diagnostics',icon: 'solar-batteries-energy-inverter' },
    { name: 'Battery storage (home/commercial)',  icon: 'solar-batteries-energy-battery-storage' },
    { name: 'Solar hot water & heat-pump',        icon: 'solar-batteries-energy-solar-hot-water' },
    { name: 'Energy audits & bill optimisation',  icon: 'solar-batteries-energy-energy-audits' }
  ],
  'Appliances': [
    { name: 'Install dishwashers, ovens, cooktops', icon: 'appliances-install-dishwashers' },
    { name: 'Repairs (authorised/independent)',     icon: 'appliances-repairs' },
    { name: 'Air-con cleaning services',            icon: 'appliances-aircon-cleaning' },
    { name: 'Commercial kitchen equipment',         icon: 'appliances-commercial-equipment' }
  ],
  'Building & Renovation': [
    { name: 'Bathrooms, laundries & kitchens',         icon: 'building-renovation-bathrooms' },
    { name: 'Extensions & additions',                  icon: 'building-renovation-extensions' },
    { name: 'Granny flats & studios',                  icon: 'building-renovation-granny-flats' },
    { name: 'Garage conversions',                      icon: 'building-renovation-garage-conversions' },
    { name: 'Design & drafting (BASIX/NATHERS)',       icon: 'building-renovation-design-drafting' },
    { name: 'Owner-builder support & management',      icon: 'building-renovation-owner-builder' },
    { name: 'Quantity surveying & take-offs',          icon: 'building-renovation-quantity-surveying' }
  ],
  'Compliance, Inspection & Reports': [
    { name: 'Pre-purchase building & pest',               icon: 'compliance-inspection-reports-building-pest' },
    { name: 'Pool safety inspections/certs',              icon: 'compliance-inspection-reports-pool-safety' },
    { name: 'Smoke alarm compliance',                     icon: 'compliance-inspection-reports-smoke-alarm' },
    { name: 'Electrical compliance certificates',         icon: 'compliance-inspection-reports-electrical' },
    { name: 'Gas compliance certificates',                icon: 'compliance-inspection-reports-gas' },
    { name: 'Asbestos testing & removal',                 icon: 'compliance-inspection-reports-asbestos' },
    { name: 'Mould assessment & remediation',             icon: 'compliance-inspection-reports-mould' },
    { name: 'BAL assessment',                             icon: 'compliance-inspection-reports-bal' },
    { name: 'Dilapidation reports',                       icon: 'compliance-inspection-reports-dilapidation' },
    { name: 'Strata/common property reports',             icon: 'compliance-inspection-reports-strata' }
  ],
  'Emergency & Disaster Recovery': [
    { name: '24/7 Make Safe (roof, glazing)',    icon: 'emergency-disaster-recovery-make-safe' },
    { name: 'Storm/flood extraction & drying',   icon: 'emergency-disaster-recovery-extraction' },
    { name: 'Fire damage cleanup & deodorising', icon: 'emergency-disaster-recovery-fire-cleanup' },
    { name: 'Insurance repair & quote mgmt',     icon: 'emergency-disaster-recovery-insurance-repair' },
    { name: 'Temporary fencing & site safety',   icon: 'emergency-disaster-recovery-fencing' }
  ],
  'Strata & Property Management Services': [
    { name: 'Common-area cleaning & bins',    icon: 'strata-property-management-cleaning' },
    { name: 'Grounds & garden care',          icon: 'strata-property-management-grounds-care' },
    { name: 'Lift lobby/foyer maintenance',   icon: 'strata-property-management-lift-maintenance' },
    { name: 'Carpark line-marking & bollards',icon: 'strata-property-management-carpark-marking' },
    { name: 'Lighting & sensor maintenance',  icon: 'strata-property-management-lighting' },
    { name: 'Compliance logs & coordination', icon: 'strata-property-management-compliance-logs' }
  ],
  'Moving, Storage & Relocations': [
    { name: 'Local & interstate removals', icon: 'moving-storage-relocations-removals' },
    { name: 'Packing/unpacking & materials', icon: 'moving-storage-relocations-packing' },
    { name: 'Piano & specialty moves',       icon: 'moving-storage-relocations-piano-moves' },
    { name: 'Office relocations',            icon: 'moving-storage-relocations-office' },
    { name: 'Storage short/long term',       icon: 'moving-storage-relocations-storage' },
    { name: 'Move-out cleans & end-of-lease',icon: 'moving-storage-relocations-moveout-cleans' }
  ],
  'Transport, Delivery & Courier': [
    { name: 'Same-day courier & parcels', icon: 'transport-delivery-courier-same-day' },
    { name: 'Bulky item pickup',         icon: 'transport-delivery-courier-bulky-pickup' },
    { name: 'Furniture delivery & assembly', icon: 'transport-delivery-courier-furniture-delivery' },
    { name: 'Click-and-collect runs',    icon: 'transport-delivery-courier-click-collect' },
    { name: 'Trailer/ute hire & driver', icon: 'transport-delivery-courier-trailer-hire' }
  ],
  'Automotive & Mobile Services': [
  { name: 'Car servicing & repairs',       icon: 'automotive-mobile-services-car-repairs' },
  { name: 'Mobile mechanics',              icon: 'automotive-mobile-services-mobile-mechanics' },
  { name: 'Roadside assistance',           icon: 'automotive-mobile-services-roadside' },
  { name: 'Car wash & detailing',          icon: 'automotive-mobile-services-car-wash' },
  { name: 'Windscreens & tinting',         icon: 'automotive-mobile-services-windscreens' },
  { name: 'Tyres, batteries & fitment',    icon: 'automotive-mobile-services-tyres' },
  { name: 'Car audio & accessories',       icon: 'automotive-mobile-services-audio' }
]
