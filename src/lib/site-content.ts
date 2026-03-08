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
      de: "Gießereitechnologien & Werkstoffe",
      en: "Casting Technologies & Materials",
      fr: "Technologies de fonderie & Matériaux",
    },
    short: {
      de: "Moderne Gießverfahren und Werkstoffe von Prototyp bis Serienfertigung",
      en: "Modern casting processes and materials from prototype to serial production",
      fr: "Procédés de fonderie et matériaux modernes du prototype à la série",
    },
    intro: {
      de: "Metallguss ermöglicht die wirtschaftliche Herstellung komplexer Bauteile mit hoher mechanischer Belastbarkeit. MAG deckt ein breites Spektrum moderner Gießverfahren und Werkstoffe ab, von Prototypen und Kleinserien bis zur industriellen Serienfertigung.",
      en: "Metal casting enables the efficient production of complex components with high mechanical strength and durability. MAG covers a broad range of modern casting processes and materials, from prototypes and small batches to industrial series production.",
      fr: "La fonderie métallique permet la fabrication économique de composants complexes présentant une résistance mécanique élevée. MAG couvre un large éventail de procédés de fonderie et de matériaux, depuis les prototypes et petites séries jusqu'à la production industrielle en série.",
    },
    capabilities: {
      de: [
        "Sandguss, Shellguss, Feinguss, Druckguss und Guss in verlorenen Formen",
        "Grauguss (EN-GJL), Sphäroguss (EN-GJS), Stahlguss und Edelstahl inkl. 904L",
        "Duplex-Werkstoffe, Aluminiumlegierungen, Zinn- und Bimetall-Lösungen",
        "Sonderlegierungen auf Anfrage",
      ],
      en: [
        "Sand casting, shell moulding, investment casting, die casting and expendable mold casting",
        "Grey cast iron (EN-GJL), ductile iron (EN-GJS), cast steel and stainless steel incl. 904L",
        "Duplex materials, aluminum alloys, tin and bi-metal solutions",
        "Special alloys on request",
      ],
      fr: [
        "Moulage en sable, moulage en coquille, fonderie de précision, moulage sous pression et moules perdus",
        "Fonte grise (EN-GJL), fonte ductile (EN-GJS), acier moulé et inox y compris 904L",
        "Alliages duplex, alliages d'aluminium, solutions à base d'étain et bimétalliques",
        "Alliages spéciaux sur demande",
      ],
    },
    useCases: {
      de: ["Pumpengehäuse", "Ventilkomponenten", "Getriebegehäuse"],
      en: ["Pump housings", "Valve bodies", "Gearbox housings"],
      fr: ["Corps de pompes", "Composants de vannes", "Boîtiers de transmission"],
    },
  },
  {
    slug: "weldments-steel-structures",
    image: "/images/services/service-2.jpg",
    title: {
      de: "Schweißbaugruppen & Stahlkonstruktionen",
      en: "Welded Assemblies & Structural Steel",
      fr: "Assemblages soudés & Structures acier",
    },
    short: {
      de: "Schweißen nach internationalen Standards mit ergänzender Umform- und Blechkompetenz",
      en: "Welding to international standards with complementary forming and sheet metal capabilities",
      fr: "Soudage selon normes internationales avec compétences complémentaires en formage et tôlerie",
    },
    intro: {
      de: "MAG fertigt komplexe Schweißbaugruppen für Maschinenbau, Anlagenbau, Infrastruktur und Fahrzeugtechnik. Zum Einsatz kommen MIG-, MAG- und WIG-Schweißen, Roboterschweißen sowie Laserschweißen.",
      en: "MAG manufactures complex welded assemblies for machinery, industrial plants, infrastructure and vehicle applications. Technologies include MIG, MAG and TIG welding, robotic welding and laser welding.",
      fr: "MAG fabrique des assemblages soudés complexes pour la construction de machines, les installations industrielles, l'infrastructure et les applications véhicules. Les technologies incluent le soudage MIG, MAG et TIG, le soudage robotisé et le soudage laser.",
    },
    capabilities: {
      de: [
        "Fertigung nach ISO 3834, EN 1090 und anwendungsbezogen EN 15085",
        "Schmieden und Umformtechnik mit spezialisierten Partnern",
        "Blechbearbeitung inklusive Stanzen und Laserschneiden",
        "Nachbearbeitung zu einbaufertigen Komponenten",
      ],
      en: [
        "Production according to ISO 3834, EN 1090 and application-specific EN 15085",
        "Forging and forming with specialized partners",
        "Sheet metal processing including stamping and laser cutting",
        "Post-processing to ready-to-install components",
      ],
      fr: [
        "Production selon ISO 3834, EN 1090 et EN 15085 selon l'application",
        "Forge et formage avec des partenaires spécialisés",
        "Tôlerie incluant emboutissage et découpe laser",
        "Finition pour composants prêts à monter",
      ],
    },
    useCases: {
      de: ["Maschinenbau", "Infrastruktur", "Anlagenbau"],
      en: ["Machinery", "Infrastructure", "Industrial plants"],
      fr: ["Construction de machines", "Infrastructure", "Installations industrielles"],
    },
  },
  {
    slug: "vehicle-systems",
    image: "/images/services/service-3.jpg",
    title: {
      de: "Fahrzeugbau / MAG Vehicle Systems",
      en: "Vehicle Structures / MAG Vehicle Systems",
      fr: "Structures de véhicules / MAG Vehicle Systems",
    },
    short: {
      de: "Hochbelastete Fahrzeugrahmen, Chassis und mobile Strukturkonstruktionen",
      en: "Heavy-duty vehicle frames, chassis and mobile structural solutions",
      fr: "Cadres de véhicules lourds, châssis et structures mobiles",
    },
    intro: {
      de: "Mit MAG Vehicle Systems bündelt das Unternehmen seine Kompetenz im Bereich Fahrzeugbau und mobile Strukturkonstruktionen. Entwickelt und gefertigt werden hochbelastete Fahrzeugrahmen, Chassis und Unterkonstruktionen für Sonderfahrzeuge.",
      en: "MAG Vehicle Systems combines the company's expertise in vehicle engineering and mobile structural solutions. The division develops and manufactures heavy-duty vehicle frames, chassis and substructures for special-purpose vehicles.",
      fr: "MAG Vehicle Systems regroupe l'expertise de l'entreprise dans le domaine de la construction de véhicules et des structures mobiles. La division développe et fabrique des cadres de véhicules lourds, des châssis et des sous-structures pour véhicules spéciaux.",
    },
    capabilities: {
      de: [
        "Verstärkte Schweißrahmen für mobile Anwendungen",
        "Unterkonstruktionen für Sonderfahrzeuge",
        "Auslegung hochbelasteter Chassis-Strukturen",
        "Seriennahe industrielle Umsetzung",
      ],
      en: [
        "Reinforced welded frames for mobile applications",
        "Substructures for special-purpose vehicles",
        "Engineering of heavy-duty chassis structures",
        "Industrial implementation close to serial production",
      ],
      fr: [
        "Cadres soudés renforcés pour applications mobiles",
        "Sous-structures pour véhicules spéciaux",
        "Conception de structures de châssis fortement sollicitées",
        "Mise en œuvre industrielle proche de la série",
      ],
    },
    useCases: {
      de: ["Sonderfahrzeuge", "Mobile Anwendungen", "Fahrzeugtechnik"],
      en: ["Special-purpose vehicles", "Mobile applications", "Vehicle engineering"],
      fr: ["Véhicules spéciaux", "Applications mobiles", "Ingénierie véhicule"],
    },
  },
  {
    slug: "cnc-machining",
    image: "/images/services/service-4.jpg",
    title: {
      de: "CNC-Präzisionsfertigung & Oberflächen",
      en: "CNC Precision Machining & Surface Treatment",
      fr: "Usinage CNC de précision & Traitements de surface",
    },
    short: {
      de: "Kosteneffiziente mechanische Bearbeitung mit zuverlässiger Toleranzkontrolle",
      en: "Cost-efficient mechanical processing with reliable tolerance control",
      fr: "Usinage mécanique économique avec maîtrise fiable des tolérances",
    },
    intro: {
      de: "Die werkseigene mechanische Bearbeitung umfasst CNC-Fräsen, Drehen, Bohren und Schleifen für eine kosteneffiziente, toleranzsichere Fertigung.",
      en: "In-house mechanical processing includes CNC milling, turning, drilling and grinding for cost-efficient production with reliable tolerance control.",
      fr: "L'usinage mécanique interne comprend le fraisage CNC, le tournage, le perçage et la rectification pour une production économique et une maîtrise fiable des tolérances.",
    },
    capabilities: {
      de: [
        "CNC-Fräsen, Drehen, Bohren und Schleifen",
        "Verzinken warm und kalt",
        "Pulverbeschichtung, KTL-Beschichtung, Sandstrahlen und Trowalisieren",
        "Weitere Nachbearbeitungsprozesse",
      ],
      en: [
        "CNC milling, turning, drilling and grinding",
        "Hot and cold galvanizing",
        "Powder coating, KTL coating, sandblasting and vibratory finishing",
        "Additional post-processing steps",
      ],
      fr: [
        "Fraisage CNC, tournage, perçage et rectification",
        "Galvanisation à chaud et à froid",
        "Revêtement poudre, revêtement KTL, sablage et tribofinition",
        "Autres opérations de finition",
      ],
    },
    useCases: {
      de: ["Präzisionsbauteile", "Serienkomponenten", "Mechanische Nachbearbeitung"],
      en: ["Precision components", "Serial components", "Mechanical post-processing"],
      fr: ["Composants de précision", "Composants de série", "Finition mécanique"],
    },
  },
  {
    slug: "engineering-simulation",
    image: "/images/services/service-5.jpg",
    title: {
      de: "Engineering, Simulation & Co-Engineering",
      en: "Engineering, Simulation & Co-Engineering",
      fr: "Ingénierie, Simulation & Co-ingénierie",
    },
    short: {
      de: "Entwicklungskompetenz von FEM bis Reverse Engineering mit Kundenintegration",
      en: "Development expertise from FEM to reverse engineering with customer integration",
      fr: "Compétence de développement de la FEM à l'ingénierie inverse avec intégration client",
    },
    intro: {
      de: "Engineering ist integraler Bestandteil des MAG-Leistungsmodells. Die Leistungen umfassen Kosten- und Gewichtsoptimierung, FEM-Simulation, Materialauswahl, Reverse Engineering und Co-Engineering mit Kunden.",
      en: "Engineering is an integral part of the MAG service model. Capabilities include cost and weight optimization, FEM simulation, material selection, reverse engineering and co-engineering with customers.",
      fr: "L'ingénierie fait partie intégrante du modèle de services de MAG. Les prestations comprennent l'optimisation des coûts et du poids, la simulation FEM, le choix des matériaux, l'ingénierie inverse et la co-ingénierie avec les clients.",
    },
    capabilities: {
      de: [
        "Kosten- und Gewichtsoptimierung",
        "FEM-Simulation und Materialauswahl",
        "Reverse Engineering bestehender Bauteile",
        "Kooperation mit Universitäten und technischen Partnern",
      ],
      en: [
        "Cost and weight optimization",
        "FEM simulation and material selection",
        "Reverse engineering of existing components",
        "Cooperation with universities and technical partners",
      ],
      fr: [
        "Optimisation des coûts et du poids",
        "Simulation FEM et choix des matériaux",
        "Ingénierie inverse de composants existants",
        "Coopération avec des universités et partenaires techniques",
      ],
    },
    useCases: {
      de: ["Bauteiloptimierung", "Entwicklungsprojekte", "Co-Engineering"],
      en: ["Component optimization", "Development projects", "Co-engineering"],
      fr: ["Optimisation de composants", "Projets de développement", "Co-ingénierie"],
    },
  },
  {
    slug: "logistics-supply-chain",
    image: "/images/services/service-6.jpg",
    title: {
      de: "Logistik & Supply Chain",
      en: "Logistics & Supply Chain",
      fr: "Logistique & Chaîne logistique",
    },
    short: {
      de: "End-to-End Transport- und Lieferkoordination mit flexiblen Belieferungsmodellen",
      en: "End-to-end transport and delivery coordination with flexible supply models",
      fr: "Coordination transport/livraison de bout en bout avec modèles flexibles",
    },
    intro: {
      de: "MAG steuert die gesamte Transportabwicklung bis zum Lieferort in Zusammenarbeit mit langjährigen Logistikpartnern. Flexible Belieferungskonditionen wie Just-in-Time, Just-in-Sequence und Werkslagerung ermöglichen eine enge Integration in die Produktionskette der Kunden.",
      en: "MAG manages end-to-end transport coordination to the delivery point in cooperation with long-standing logistics partners. Flexible delivery models such as just-in-time, just-in-sequence and plant warehousing support seamless integration into customers' production chains.",
      fr: "MAG coordonne l'ensemble du transport jusqu'au point de livraison en coopération avec des partenaires logistiques de longue date. Des modèles de livraison flexibles tels que le juste-à-temps, le juste-en-séquence et le stockage sur site permettent une intégration étroite dans les chaînes de production des clients.",
    },
    capabilities: {
      de: [
        "Just-in-Time und Just-in-Sequence",
        "Werkslagerung und verlängerte Werkbank",
        "Verpackungskonzepte und Transportkoordination",
        "Lieferkoordination bis zum Lieferort",
      ],
      en: [
        "Just-in-time and just-in-sequence",
        "Plant warehousing and extended workbench support",
        "Packaging concepts and transport coordination",
        "Delivery coordination to point of delivery",
      ],
      fr: [
        "Juste-à-temps et juste-en-séquence",
        "Stockage sur site et rôle d'atelier externalisé",
        "Concepts d'emballage et coordination des transports",
        "Coordination des livraisons jusqu'au point de livraison",
      ],
    },
    useCases: {
      de: ["Produktionskettenintegration", "Internationale Lieferungen", "Serienversorgung"],
      en: ["Production chain integration", "International deliveries", "Serial supply"],
      fr: ["Intégration dans la chaîne de production", "Livraisons internationales", "Approvisionnement série"],
    },
  },
  {
    slug: "quality-certifications",
    image: "/images/services/service-7.jpg",
    title: {
      de: "Qualitätssicherung & Zertifizierungen",
      en: "Quality Assurance & Certifications",
      fr: "Assurance qualité & Certifications",
    },
    short: {
      de: "Interne Prüfkompetenz und zertifizierte Standards für stabile Produktqualität",
      en: "Internal testing capabilities and certified standards for stable product quality",
      fr: "Moyens d'essai internes et standards certifiés pour une qualité stable",
    },
    intro: {
      de: "MAG verfügt über ein internes Messzentrum und fundierte Erfahrung in modernen Prüfverfahren. Damit wird die Produktqualität auch bei effizienten Produktionsmethoden sichergestellt.",
      en: "MAG operates an internal measurement and inspection capability with sound experience in modern testing methods, ensuring product quality even in efficient production environments.",
      fr: "MAG dispose de moyens internes de mesure et de contrôle, ainsi que d'une solide expérience des méthodes d'essai modernes, garantissant la qualité des produits même dans des environnements de production efficaces.",
    },
    capabilities: {
      de: [
        "Röntgenprüfung, Spektralanalyse, Härteprüfung und Zugprüfung",
        "Rissprüfung, Probeschneider und Materialprüfungen",
        "Relevante Zertifizierungen: ISO 9001, ISO 10002, ISO 14001",
        "OHSAS 18001 / ISO 45001 sowie EN 15085-2",
      ],
      en: [
        "Radiographic testing, spectral analysis, hardness and tensile testing",
        "Crack testing, sample cutting and material tests",
        "Relevant certifications: ISO 9001, ISO 10002, ISO 14001",
        "OHSAS 18001 / ISO 45001 and EN 15085-2",
      ],
      fr: [
        "Contrôle radiographique, analyse spectrale, essais de dureté et de traction",
        "Essais de fissuration, éprouvettes et essais matériaux",
        "Certifications pertinentes: ISO 9001, ISO 10002, ISO 14001",
        "OHSAS 18001 / ISO 45001 et EN 15085-2",
      ],
    },
    useCases: {
      de: ["Sicherheitskritische Bauteile", "Industrie-Serien", "Prüfintensive Anwendungen"],
      en: ["Safety-critical components", "Industrial serial production", "Testing-intensive applications"],
      fr: ["Composants critiques", "Production industrielle en série", "Applications exigeantes en contrôle"],
    },
  },
];

export const contentByLocale: Record<Locale, LocaleContent> = {
  de: {
    localeLabel: "DE",
    siteName: "MAG - Metal Advancement Group",
    tagline: "Industrieller Metallguss, Engineering und Metalllösungen",
    heroTitle: "Industrieller Metallguss, Engineering und integrierte Metalllösungen",
    heroSubtitle:
      "MAG - Metal Advancement Group ist ein deutsches Industrieunternehmen aus Baden-Württemberg. Wir verbinden Engineering, moderne Gießereitechnologien, Metallverarbeitung und Supply-Chain-Integration zu einer durchgängigen industriellen Wertschöpfungskette.",
    stats: [
      { label: "Mitarbeitende", value: "65" },
      { label: "Verarbeiteter Stahl/Jahr", value: "ca. 3.800 t" },
      { label: "Länder mit Projekten", value: "14" },
    ],
    homeIntroTitle: "Industrielle Wertschöpfung aus einer Hand",
    homeIntroText:
      "MAG begleitet Projekte entlang der gesamten Leistungskette: Engineering & Design, Gießverfahren, Schmieden, Schweißen, Stanzen, Laserschneiden, mechanische Bearbeitung, Qualitätssicherung sowie Logistik und Lieferkoordination. Mit Hauptsitz in Deutschland, internationalen Produktionspartnern und operativer Fertigungserfahrung in der Türkei unterstützt MAG Kunden von der Konzeptphase über Engineering und Simulation bis zur Serienproduktion, Qualitätssicherung und internationalen Logistik.",
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
      title: "Über MAG",
      intro:
        "MAG - Metal Advancement Group ist ein deutsches Industrieunternehmen mit Sitz in Baden-Württemberg. Als technologieorientierter Partner für internationale Industrieunternehmen verbindet MAG Engineering-Kompetenz, moderne Gießereitechnologien, Metallverarbeitung und Supply-Chain-Integration zu einer durchgängigen industriellen Wertschöpfungskette.",
      valuesTitle: "Leistungsbereiche",
      values: [
        "Gießereitechnologien und Werkstoffentwicklung",
        "Schmieden und Umformtechnik",
        "Schweißbaugruppen und Stahlkonstruktionen",
        "Blechbearbeitung, Stanzen und Laserschneiden",
        "Fahrzeugstrukturen und mobile Maschinenrahmen",
        "CNC-Präzisionsfertigung und Oberflächenbehandlung",
        "Engineering, Simulation und Co-Engineering",
        "Qualitätssicherung, Supply Chain und Logistik",
      ],
      factsTitle: "Key Facts",
      facts: [
        { label: "Unternehmensform", value: "Familienunternehmen" },
        { label: "Gegründet", value: "2012" },
        { label: "Standorte", value: "Deutschland / Türkei" },
        { label: "Mitarbeitende", value: "65" },
        { label: "Länder", value: "14" },
        { label: "Stahl/Jahr", value: "ca. 3.800 t" },
        { label: "Jahresumsatz", value: "ca. 3,4 Mio. EUR" },
      ],
      locationsTitle: "Branchen und Nutzungsbereiche",
      locationsText:
        "MAG liefert Komponenten und Baugruppen für Maschinenbau, Automotive, Bergbau/Mining, Pumpenindustrie, Energieanlagen, Infrastrukturprojekte, MDF-Industrie sowie Rüstungsindustrie / Defence.",
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Sie planen ein neues Bauteil oder eine Serienanfrage? Wir unterstützen Sie von Engineering, Fertigung und Qualitätssicherung bis zur internationalen Logistik.",
      openingHours: "Mo-Fr 08:00-17:00 Uhr (Platzhalter)",
    },
  },
  en: {
    localeLabel: "EN",
    siteName: "MAG - Metal Advancement Group",
    tagline: "Industrial Casting, Engineering & Metal Solutions",
    heroTitle: "Industrial Casting, Engineering and Integrated Metal Solutions",
    heroSubtitle:
      "MAG - Metal Advancement Group is a German industrial company based in Baden-Wuerttemberg. We combine engineering, advanced casting technologies, metal manufacturing and integrated supply chain solutions into one industrial value chain.",
    stats: [
      { label: "Employees", value: "65" },
      { label: "Processed steel/year", value: "approx. 3,800 t" },
      { label: "Countries served", value: "14" },
    ],
    homeIntroTitle: "End-to-end industrial value chain",
    homeIntroText:
      "MAG supports industrial projects from design to ready-to-install components: engineering and design, foundry processes, forging, welding, stamping, laser cutting, mechanical machining, quality assurance, logistics and delivery coordination. With headquarters in Germany, international production partners and manufacturing experience in Turkey, MAG supports customers from concept development and engineering through serial production, quality assurance and international logistics.",
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
      title: "About MAG",
      intro:
        "MAG - Metal Advancement Group is a German industrial company based in Baden-Wuerttemberg. As a technology-driven partner for international industrial customers, MAG combines engineering expertise, advanced casting technologies, metal manufacturing and integrated supply chain solutions into a complete industrial value chain.",
      valuesTitle: "Core Industrial Capabilities",
      values: [
        "Casting technologies and material expertise",
        "Forging and forming technologies",
        "Welded assemblies and structural steel",
        "Sheet metal processing, stamping and laser cutting",
        "Vehicle structures and heavy-duty mobile frames",
        "CNC precision machining and surface treatment",
        "Engineering, simulation and co-engineering",
        "Quality assurance, supply chain and logistics",
      ],
      factsTitle: "Key Facts",
      facts: [
        { label: "Company type", value: "Family-owned" },
        { label: "Founded", value: "2012" },
        { label: "Locations", value: "Germany / Turkey" },
        { label: "Employees", value: "65" },
        { label: "Countries", value: "14" },
        { label: "Steel/year", value: "approx. 3,800 t" },
        { label: "Annual revenue", value: "approx. EUR 3.4 million" },
      ],
      locationsTitle: "Industries and Application Areas",
      locationsText:
        "MAG supplies components and assemblies for machinery and heavy equipment, automotive, mining and mineral processing, pump industry, energy systems, infrastructure projects, MDF industry, and defence and security applications.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Planning a new component or serial request? We support your team from engineering, manufacturing and quality assurance through international logistics.",
      openingHours: "Mon-Fri 08:00-17:00 (placeholder)",
    },
  },
  fr: {
    localeLabel: "FR",
    siteName: "MAG - Metal Advancement Group",
    tagline: "Fonderie industrielle, ingénierie et solutions métalliques",
    heroTitle: "Fonderie industrielle, ingénierie et solutions métalliques intégrées",
    heroSubtitle:
      "MAG - Metal Advancement Group est une entreprise industrielle allemande basée dans le Bade-Wurtemberg. Nous combinons l'ingénierie, les technologies de fonderie avancées, la fabrication métallique et l'intégration de la chaîne logistique dans une chaîne de valeur industrielle complète.",
    stats: [
      { label: "Collaborateurs", value: "65" },
      { label: "Acier traité/an", value: "env. 3 800 t" },
      { label: "Pays de projets", value: "14" },
    ],
    homeIntroTitle: "Chaîne de valeur industrielle de bout en bout",
    homeIntroText:
      "MAG accompagne les projets industriels de la conception au composant prêt à monter: ingénierie et conception, fonderie, forge, soudage, emboutissage, découpe laser, usinage mécanique, assurance qualité, logistique et coordination des livraisons. Avec son siège en Allemagne, des partenaires de production internationaux et une expérience de fabrication en Turquie, MAG accompagne ses clients depuis la phase de conception et d'ingénierie jusqu'à la production en série, l'assurance qualité et la logistique internationale.",
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
      title: "À propos de MAG",
      intro:
        "MAG - Metal Advancement Group est une entreprise industrielle allemande basée dans le Bade-Wurtemberg. En tant que partenaire technologique pour des clients industriels internationaux, MAG combine l'expertise en ingénierie, les technologies de fonderie avancées, la fabrication métallique et l'intégration de la chaîne logistique au sein d'une chaîne de valeur industrielle complète.",
      valuesTitle: "Domaines de compétences",
      values: [
        "Technologies de fonderie et expertise matériaux",
        "Forge et technologies de formage",
        "Assemblages soudés et structures acier",
        "Tôlerie industrielle, emboutissage et découpe laser",
        "Structures de véhicules et châssis mobiles lourds",
        "Usinage CNC de précision et traitements de surface",
        "Ingénierie, simulation et co-ingénierie",
        "Assurance qualité, chaîne logistique et logistique",
      ],
      factsTitle: "Chiffres clés",
      facts: [
        { label: "Type d'entreprise", value: "Entreprise familiale" },
        { label: "Fondée", value: "2012" },
        { label: "Implantations", value: "Allemagne / Turquie" },
        { label: "Collaborateurs", value: "65" },
        { label: "Pays", value: "14" },
        { label: "Acier/an", value: "env. 3 800 t" },
        { label: "Chiffre d'affaires", value: "env. 3,4 M EUR" },
      ],
      locationsTitle: "Secteurs et domaines d'utilisation",
      locationsText:
        "MAG fournit des composants et des sous-ensembles pour la construction de machines, l'automobile, l'industrie minière, l'industrie des pompes, les systèmes énergétiques, les projets d'infrastructure, l'industrie MDF et les applications de défense et de sécurité.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Vous préparez un nouveau composant ou une demande série? Nous vous accompagnons de l'ingénierie, la fabrication et l'assurance qualité jusqu'à la logistique internationale.",
      openingHours: "Lun-Ven 08:00-17:00 (placeholder)",
    },
  },
};

export const serviceOrder: ServiceSlug[] = services.map((service) => service.slug);

export const serviceGalleryFolders: Record<ServiceSlug, string[]> = {
  "casting-materials": ["sandguss", "shellguss", "schmiedteile"],
  "weldments-steel-structures": ["schweisskonstr"],
  "vehicle-systems": [],
  "cnc-machining": [],
  "engineering-simulation": [],
  "logistics-supply-chain": [],
  "quality-certifications": [],
};

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
