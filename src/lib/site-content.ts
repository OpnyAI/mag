import { Locale, LocaleContent, ServiceItem, ServiceSlug } from "@/lib/types";

export const email = "info@mag-group.example";
export const phone = "+49 7121 555 000";
export const companyAddress = "Musterstraße 1, 72760 Reutlingen, Deutschland";

export const localeBasePath: Record<Locale, string> = {
  de: "",
  en: "/en",
  fr: "/fr",
};

export const services: ServiceItem[] = [
  {
    slug: "casting-materials",
    image: "/images/services/service-1.jpg",
    title: {
      de: "Guss & Werkstoffe",
      en: "Casting & Materials",
      fr: "Fonderie & Matériaux",
    },
    short: {
      de: "Materialkompetenz von Stahlguss bis Duplex",
      en: "Material expertise from steel castings to duplex",
      fr: "Expertise matériaux de l'acier coulé au duplex",
    },
    intro: {
      de: "Unser Spektrum umfasst Stahlguss, EN-GJS, EN-GJL, Edelstahlguss inklusive optimierter 904L-Lösungen, Duplex-Werkstoffe, Sonderlegierungen und Aluminium-Druckguss.",
      en: "Our scope includes steel castings, ductile iron, grey cast iron, stainless castings including optimized 904L solutions, duplex materials, special alloys and aluminum die casting.",
      fr: "Notre périmètre comprend acier coulé, fonte ductile, fonte grise, inox incluant des solutions 904L optimisées, matériaux duplex, alliages spéciaux et moulage sous pression aluminium.",
    },
    capabilities: {
      de: [
        "Werkstoffauswahl und Design-for-Casting",
        "FEM-gestützte Bauteilauslegung",
        "Sandguss, Feinguss und Druckguss",
        "Serientaugliche Prüf- und Freigabeprozesse",
      ],
      en: [
        "Material selection and design-for-casting",
        "FEM-supported component design",
        "Sand casting, investment casting and die casting",
        "Production-ready test and release workflows",
      ],
      fr: [
        "Sélection des matériaux et design-for-casting",
        "Dimensionnement de pièces avec FEM",
        "Moulage sable, cire perdue et sous pression",
        "Processus de validation pour la série",
      ],
    },
    useCases: {
      de: ["Maschinenbau", "Korrosive Umgebungen", "Dynamisch belastete Strukturen"],
      en: ["Machinery", "Corrosive environments", "Dynamically loaded structures"],
      fr: ["Machines", "Environnements corrosifs", "Structures soumises à des charges dynamiques"],
    },
  },
  {
    slug: "weldments-steel-structures",
    image: "/images/services/service-2.jpg",
    title: {
      de: "Schweißbaugruppen & Stahlkonstruktionen",
      en: "Weldments & Steel Structures",
      fr: "Assemblages soudés & Structures acier",
    },
    short: {
      de: "Komplexe Schweißbaugruppen mit ISO-konformen Prozessen",
      en: "Complex weldments with ISO-compliant workflows",
      fr: "Assemblages complexes avec processus conformes aux normes ISO",
    },
    intro: {
      de: "MAG fertigt tragende Konstruktionen für Maschinenbau, Anlagenbau, Infrastruktur und Fahrzeugtechnik. Eingesetzt werden MIG-, MAG-, WIG-, Robotik- und Laserverfahren.",
      en: "MAG manufactures load-bearing assemblies for machinery, plant engineering, infrastructure and vehicle technology using MIG, MAG, TIG, robotic and laser welding.",
      fr: "MAG fabrique des ensembles porteurs pour machines, installations industrielles, infrastructures et applications véhicules avec procédés MIG, MAG, TIG, robotisés et laser.",
    },
    capabilities: {
      de: [
        "Fertigung gemäß ISO 3834 und EN 1090",
        "Anwendungsbezogene Erfüllung EN 15085",
        "Dokumentierte Schweißnahtprüfung",
        "Lückenlose Materialrückverfolgbarkeit",
      ],
      en: [
        "Manufacturing according to ISO 3834 and EN 1090",
        "Application-specific fulfillment of EN 15085",
        "Documented weld seam inspection",
        "Full material traceability",
      ],
      fr: [
        "Fabrication selon ISO 3834 et EN 1090",
        "Conformité EN 15085 selon application",
        "Contrôle documenté des cordons de soudure",
        "Traçabilité complète des matériaux",
      ],
    },
    useCases: {
      de: ["Anlagenbau", "Infrastruktur", "Schwerlast-Rahmen"],
      en: ["Plant engineering", "Infrastructure", "Heavy-duty frames"],
      fr: ["Installations industrielles", "Infrastructure", "Cadres lourds"],
    },
  },
  {
    slug: "vehicle-systems",
    image: "/images/services/service-3.jpg",
    title: {
      de: "Fahrzeugsysteme",
      en: "Vehicle Systems",
      fr: "Systèmes véhicules",
    },
    short: {
      de: "Rahmen, Chassis und mobile Strukturkompetenz",
      en: "Frames, chassis and mobile structural competence",
      fr: "Expertise en châssis, cadres et structures mobiles",
    },
    intro: {
      de: "Basierend auf unserer Herkunft im Kran- und Plattformbau entwickeln und fertigen wir hochbelastete Fahrzeugrahmen, Chassis-Komponenten und Unterkonstruktionen.",
      en: "Based on our crane and platform engineering background, we develop and manufacture heavy-duty frames, chassis components and mobile substructures.",
      fr: "Issus de l'ingénierie des grues et plateformes, nous développons et produisons des cadres lourds, composants de châssis et sous-structures mobiles.",
    },
    capabilities: {
      de: [
        "Auslegung auf Torsion, Biegung und Vibration",
        "Dauerfestigkeitsorientiertes Engineering",
        "Gewichtsoptimierte Konstruktionen",
        "Prozesssichere Serienfertigung",
      ],
      en: [
        "Design for torsion, bending and vibration",
        "Fatigue-oriented engineering",
        "Weight-optimized structures",
        "Reliable serial production",
      ],
      fr: [
        "Conception pour torsion, flexion et vibration",
        "Ingénierie orientée tenue en fatigue",
        "Structures optimisées en poids",
        "Production série fiable",
      ],
    },
    useCases: {
      de: ["Sonderfahrzeuge", "Mobile Hebesysteme", "Nutzfahrzeug-Komponenten"],
      en: ["Special vehicles", "Mobile lifting systems", "Commercial vehicle components"],
      fr: ["Véhicules spéciaux", "Systèmes de levage mobiles", "Composants utilitaires"],
    },
  },
  {
    slug: "cnc-machining",
    image: "/images/services/service-4.jpg",
    title: {
      de: "CNC-Bearbeitung",
      en: "CNC Machining",
      fr: "Usinage CNC",
    },
    short: {
      de: "Präzisionsfertigung mit engen Toleranzen",
      en: "Precision manufacturing with tight tolerances",
      fr: "Fabrication de précision à tolérances serrées",
    },
    intro: {
      de: "Unsere werkseigene CNC-Fertigung umfasst Fräsen, Drehen, Bohren und Schleifen. Ergänzt durch Verzinken, KTL, Pulverbeschichtung und Sandstrahlen.",
      en: "Our in-house CNC production includes milling, turning, drilling and grinding, complemented by galvanizing, KTL coating, powder coating and blasting.",
      fr: "Notre production CNC interne comprend fraisage, tournage, perçage et rectification, complétée par galvanisation, cataphorèse, thermolaquage et sablage.",
    },
    capabilities: {
      de: [
        "Dokumentierte Prozessparameter",
        "Enge Maß- und Formtoleranzen",
        "Reproduzierbare Serienqualität",
        "Endkontrolle inklusive Prüfprotokollen",
      ],
      en: [
        "Documented process parameters",
        "Tight dimensional and geometric tolerances",
        "Repeatable serial quality",
        "Final inspections with reports",
      ],
      fr: [
        "Paramètres process documentés",
        "Tolérances dimensionnelles et géométriques serrées",
        "Qualité série reproductible",
        "Contrôle final avec rapports",
      ],
    },
    useCases: {
      de: ["Präzisionskomponenten", "Funktionsflächen", "Serienbauteile"],
      en: ["Precision components", "Functional surfaces", "Serial parts"],
      fr: ["Composants de précision", "Surfaces fonctionnelles", "Pièces de série"],
    },
  },
  {
    slug: "engineering-simulation",
    image: "/images/services/service-5.jpg",
    title: {
      de: "Engineering & Simulation",
      en: "Engineering & Simulation",
      fr: "Ingénierie & Simulation",
    },
    short: {
      de: "FEM, Reverse Engineering und Optimierung",
      en: "FEM, reverse engineering and optimization",
      fr: "FEM, rétro-ingénierie et optimisation",
    },
    intro: {
      de: "Engineering ist integraler Bestandteil unseres Leistungsmodells: FEM-Analysen, Reverse Engineering, Gewichts- und Kostenoptimierung sowie Materialsubstitution.",
      en: "Engineering is integral to our delivery model: FEM analysis, reverse engineering, weight and cost optimization, and material substitution.",
      fr: "L'ingénierie est au cœur de notre modèle: analyses FEM, rétro-ingénierie, optimisation poids/coût et substitution de matériaux.",
    },
    capabilities: {
      de: [
        "Belastungs- und Lebensdauersimulation",
        "Design-Iteration bis Serienreife",
        "Technische Wirtschaftlichkeitsbewertung",
        "Null-Fehler-orientierte Prozessoptimierung",
      ],
      en: [
        "Load and lifetime simulations",
        "Design iterations to production readiness",
        "Technical-economic evaluations",
        "Zero-defect-oriented process optimization",
      ],
      fr: [
        "Simulations de charge et de durée de vie",
        "Itérations design jusqu'à l'industrialisation",
        "Évaluation technico-économique",
        "Optimisation process orientée zéro défaut",
      ],
    },
    useCases: {
      de: ["Lebensdauersteigerung", "Korrosionsoptimierung", "Effizienzsteigerung"],
      en: ["Lifetime extension", "Corrosion optimization", "Efficiency increase"],
      fr: ["Augmentation de durée de vie", "Optimisation anticorrosion", "Gain d'efficacité"],
    },
  },
  {
    slug: "logistics-supply-chain",
    image: "/images/services/service-6.jpg",
    title: {
      de: "Logistik & Supply Chain",
      en: "Logistics & Supply Chain",
      fr: "Logistique & Supply Chain",
    },
    short: {
      de: "JIT/JIS-Modelle für stabile Versorgung",
      en: "JIT/JIS models for stable supply",
      fr: "Modèles JIT/JIS pour une supply chain stable",
    },
    intro: {
      de: "MAG integriert sich als verlängerter Arm in bestehende Produktionsketten mit JIT, JIS, Lagerhaltung, Verpackungskonzepten und internationaler Transportkoordination.",
      en: "MAG acts as an extended arm within existing production chains through JIT, JIS, warehousing, packaging concepts and global transport coordination.",
      fr: "MAG s'intègre comme bras étendu des chaînes de production avec JIT, JIS, stockage, concepts d'emballage et coordination transport international.",
    },
    capabilities: {
      de: [
        "Bedarfssynchronisierte Anlieferung",
        "Lager- und Sicherheitsbestandskonzepte",
        "Exportgerechte Verpackung",
        "Transparente Lieferkettenkommunikation",
      ],
      en: [
        "Demand-synchronized delivery",
        "Warehouse and safety stock concepts",
        "Export-ready packaging",
        "Transparent supply chain communication",
      ],
      fr: [
        "Livraison synchronisée à la demande",
        "Concepts de stock et stock de sécurité",
        "Emballages adaptés à l'export",
        "Communication transparente de la chaîne logistique",
      ],
    },
    useCases: {
      de: ["Automotive Serienversorgung", "Internationale Projekte", "Sequenzierte Produktion"],
      en: ["Automotive serial supply", "International programs", "Sequenced production"],
      fr: ["Approvisionnement série automobile", "Programmes internationaux", "Production séquencée"],
    },
  },
  {
    slug: "quality-certifications",
    image: "/images/services/service-7.jpg",
    title: {
      de: "Qualität & Zertifizierungen",
      en: "Quality & Certifications",
      fr: "Qualité & Certifications",
    },
    short: {
      de: "Normgerechte Prozesse mit messbarer Qualität",
      en: "Standard-compliant processes with measurable quality",
      fr: "Processus conformes avec qualité mesurable",
    },
    intro: {
      de: "Unsere Prozesse orientieren sich an ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 und PED / AD 2000.",
      en: "Our workflows align with ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 and PED / AD 2000.",
      fr: "Nos processus s'alignent sur ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 et PED / AD 2000.",
    },
    capabilities: {
      de: [
        "Werkseigenes Messzentrum",
        "Röntgenprüfung und Spektralanalyse",
        "Härte- und Zugprüfung",
        "Lückenlose Rückverfolgbarkeit",
      ],
      en: [
        "In-house measurement center",
        "X-ray testing and spectral analysis",
        "Hardness and tensile testing",
        "Complete traceability",
      ],
      fr: [
        "Centre de mesure interne",
        "Contrôle radiographique et analyse spectrale",
        "Essais dureté et traction",
        "Traçabilité complète",
      ],
    },
    useCases: {
      de: ["Sicherheitskritische Bauteile", "Regulatorische Projekte", "Auditsichere Serien"],
      en: ["Safety-critical components", "Regulated projects", "Audit-ready production"],
      fr: ["Composants critiques sécurité", "Projets réglementés", "Production prête audit"],
    },
  },
];

export const contentByLocale: Record<Locale, LocaleContent> = {
  de: {
    localeLabel: "DE",
    siteName: "MAG - Metal Advanced Group",
    tagline: "Engineering with Substance",
    heroTitle: "Industrielle Metallkompetenz aus dem deutschen Mittelstand",
    heroSubtitle:
      "MAG ist ein familiengeführtes Industrieunternehmen aus Baden-Württemberg. Seit 2012 liefern wir belastbare Metalllösungen für Automotive und Industrie - präzise, zertifiziert und partnerschaftlich.",
    stats: [
      { label: "Mitarbeitende", value: "65" },
      { label: "Verarbeiteter Stahl/Jahr", value: "3.800 t" },
      { label: "Länder mit Projekten", value: "14" },
    ],
    homeIntroTitle: "Leistungsstark entlang der gesamten Wertschöpfung",
    homeIntroText:
      "Von Guss über Schweißbaugruppen und Fahrzeugsysteme bis zu CNC, Engineering, Logistik und Qualitätssicherung: MAG verbindet technische Tiefe mit stabiler Serienfähigkeit.",
    ctaPrimary: "Kontakt anfragen",
    ctaSecondary: "Projekt besprechen",
    nav: {
      company: "Unternehmen",
      services: "Leistungen",
      quality: "Qualität",
      contact: "Kontakt",
    },
    footer: {
      quickLinks: "Schnellzugriff",
      legal: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    company: {
      title: "Unternehmen",
      intro:
        "MAG entstand aus dem industriellen Umfeld von Tiger Lift und bündelt tiefgehende Erfahrung im Kran- und Plattformbau, in hochbelasteten Stahlkonstruktionen und in globalen Lieferprojekten.",
      valuesTitle: "Werte",
      values: [
        "Technische Exzellenz in Entwicklung und Fertigung",
        "Langfristige, partnerschaftliche Kundenbeziehungen",
        "Verantwortungsvolle und nachhaltige Unternehmensführung",
      ],
      factsTitle: "Kennzahlen",
      facts: [
        { label: "Gegründet", value: "2012" },
        { label: "Mitarbeitende", value: "65" },
        { label: "Jahreskapazität Stahl", value: "3.800 Tonnen" },
        { label: "Internationale Projekte", value: "14 Länder" },
      ],
      locationsTitle: "Standorte",
      locationsText:
        "Hauptsitz in Baden-Württemberg mit angebundenen Produktions- und Logistiknetzwerken. Weitere Standortangaben werden durch den Kunden final ergänzt.",
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Sie planen ein neues Bauteil, eine Serienanfrage oder möchten Ihre bestehende Lieferkette stabilisieren? MAG ist Ihr direkter Ansprechpartner.",
      openingHours: "Mo-Fr 08:00-17:00 Uhr (Platzhalter)",
    },
  },
  en: {
    localeLabel: "EN",
    siteName: "MAG - Metal Advanced Group",
    tagline: "Engineering with Substance",
    heroTitle: "Industrial metal expertise from the German Mittelstand",
    heroSubtitle:
      "MAG is a family-owned industrial company based in Baden-Württemberg. Since 2012, we deliver robust metal solutions for automotive and industrial applications with certified quality.",
    stats: [
      { label: "Employees", value: "65" },
      { label: "Processed steel/year", value: "3,800 t" },
      { label: "Countries served", value: "14" },
    ],
    homeIntroTitle: "Performance across the full value chain",
    homeIntroText:
      "From casting and weldments to vehicle systems, CNC machining, engineering, logistics and quality assurance: MAG combines engineering depth with reliable serial production.",
    ctaPrimary: "Request contact",
    ctaSecondary: "Discuss project",
    nav: {
      company: "Company",
      services: "Services",
      quality: "Quality",
      contact: "Contact",
    },
    footer: {
      quickLinks: "Quick links",
      legal: "Legal",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    company: {
      title: "Company",
      intro:
        "MAG emerged from the industrial environment of Tiger Lift and combines deep expertise in crane and platform engineering, heavy-duty steel structures and international project delivery.",
      valuesTitle: "Values",
      values: [
        "Engineering excellence in development and manufacturing",
        "Long-term, partnership-driven customer relationships",
        "Responsible and sustainable entrepreneurship",
      ],
      factsTitle: "Facts",
      facts: [
        { label: "Founded", value: "2012" },
        { label: "Employees", value: "65" },
        { label: "Annual steel capacity", value: "3,800 tons" },
        { label: "International projects", value: "14 countries" },
      ],
      locationsTitle: "Locations",
      locationsText:
        "Headquartered in Baden-Württemberg with linked production and logistics networks. Final location details will be added by the client.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Planning a new component, a serial request, or better integration into your supply chain? Talk to MAG directly.",
      openingHours: "Mon-Fri 08:00-17:00 (placeholder)",
    },
  },
  fr: {
    localeLabel: "FR",
    siteName: "MAG - Metal Advanced Group",
    tagline: "Ingénierie avec substance",
    heroTitle: "Expertise industrielle allemande en métallurgie",
    heroSubtitle:
      "MAG est une entreprise industrielle familiale basée dans le Bade-Wurtemberg. Depuis 2012, nous livrons des solutions métalliques robustes pour l'automobile et l'industrie.",
    stats: [
      { label: "Collaborateurs", value: "65" },
      { label: "Acier traité/an", value: "3 800 t" },
      { label: "Pays de projets", value: "14" },
    ],
    homeIntroTitle: "Performance sur toute la chaîne de valeur",
    homeIntroText:
      "Fonderie, assemblages soudés, systèmes véhicules, usinage CNC, ingénierie, logistique et qualité: MAG associe expertise technique et production série fiable.",
    ctaPrimary: "Demander un contact",
    ctaSecondary: "Discuter du projet",
    nav: {
      company: "Entreprise",
      services: "Services",
      quality: "Qualité",
      contact: "Contact",
    },
    footer: {
      quickLinks: "Accès rapide",
      legal: "Mentions légales",
      imprint: "Impressum",
      privacy: "Confidentialité",
    },
    company: {
      title: "Entreprise",
      intro:
        "MAG est issue de l'environnement industriel de Tiger Lift et réunit une expertise solide en ingénierie de grues et plateformes, structures acier lourdes et projets internationaux.",
      valuesTitle: "Valeurs",
      values: [
        "Excellence technique en développement et fabrication",
        "Partenariats clients durables et transparents",
        "Responsabilité entrepreneuriale et durabilité",
      ],
      factsTitle: "Chiffres clés",
      facts: [
        { label: "Création", value: "2012" },
        { label: "Collaborateurs", value: "65" },
        { label: "Capacité acier annuelle", value: "3 800 tonnes" },
        { label: "Projets internationaux", value: "14 pays" },
      ],
      locationsTitle: "Implantations",
      locationsText:
        "Siège dans le Bade-Wurtemberg avec réseaux de production et de logistique connectés. Les détails finaux seront complétés par le client.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Vous préparez une nouvelle pièce, une demande série ou une intégration supply chain? Échangeons directement.",
      openingHours: "Lun-Ven 08:00-17:00 (placeholder)",
    },
  },
};

export const serviceOrder: ServiceSlug[] = services.map((service) => service.slug);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "de") {
    return normalized;
  }
  return `${localeBasePath[locale]}${normalized === "/" ? "" : normalized}`;
}

export function servicePath(locale: Locale, slug: ServiceSlug): string {
  return localizePath(locale, `/services/${slug}`);
}
