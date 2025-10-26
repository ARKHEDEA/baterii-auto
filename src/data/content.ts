export const siteData = {
  // Business Information
  business: {
    name: "BatteryCare.ro",
    phone: "0240 000 000",
    location: "Moreni (jud. Dâmbovița)",
    coverage: "Moreni + jud. Dâmbovița",
    emergencyHours: "24/7",
    serviceHours: "Luni - Sâmbătă 08:00 - 20:00",
    currentYear: new Date().getFullYear(),
  },

  // Navigation
  navigation: {
    links: [
      { href: "#services", label: "Servicii" },
      { href: "#why", label: "De ce noi" },
      { href: "#contact", label: "Contact" },
    ],
  },

  // Hero Section
  hero: {
    badge: "Service baterii auto · Moreni · 24/7 deplasare",
    title: "Pornim orice mașină.",
    subtitle: "Test rapid & înlocuire pe loc.",
    description: "Diagnostic profesionist pentru bateria ta, direct în parcare. Montaj imediat, garanție reală, fără bătăi de cap. Fără platformă, fără taxi, fără stres.",
    cta: {
      primary: "Sună acum",
      secondary: "Vezi serviciile",
    },
  },

  // Services Section
  services: {
    eyebrow: "Ce facem",
    title: "Servicii rapide pentru bateria mașinii",
    items: [
      {
        title: "Test baterie & alternator",
        description: "Măsurăm tensiunea, curentul de pornire (CCA) și verificăm încărcarea alternatorului. Îți spunem clar: mai duce sau nu mai duce.",
        icon: "⚡",
      },
      {
        title: "Înlocuire baterie la fața locului",
        description: "Venim noi, scoatem vechea baterie, montăm una nouă compatibilă, resetăm erorile dacă e cazul. Mașina ta pleacă pe propriile roți.",
        icon: "🔧",
      },
      {
        title: "Pornire de urgență (boost start)",
        description: "Ai rămas în parcare și nu pornește? Venim cu booster profesional 12V/24V și te ridicăm instant, fără să riști instalația electronică.",
        icon: "🚗",
      },
      {
        title: "Montaj baterii start-stop / AGM / EFB",
        description: "Mașini moderne cu sistem start-stop au nevoie de baterii speciale și recalibrare. Facem codare corectă, nu improvizații.",
        icon: "🏁",
      },
    ],
  },

  // Why Us Section
  whyUs: {
    eyebrow: "De ce noi",
    title: "Fără fum. Fără vrăjeală. Doar curent serios",
    intro: {
      title: "Transparent, direct, mecanici care răspund la telefon.",
      description: "Explicăm înainte ce facem și cât costă. Îți arătăm testul de baterie pe loc, nu te punem să \"ne crezi pe cuvânt\".",
    },
    stats: [
      { label: "intervenții rezolvate", value: "8.200+" },
      { label: "porniri reușite", value: "99.1%" },
      { label: "timp mediu sosire", value: "~35 min" },
      { label: "rating clienți", value: "4.9/5" },
    ],
    points: [
      {
        title: "Suntem focusați DOAR pe baterii",
        description: "Nu schimbăm ulei, nu facem tinichigerie, nu ne risipim. Doar baterii, încărcare și sisteme electrice de pornire.",
      },
      {
        title: "Venim la tine (Moreni + jud. Dâmbovița)",
        description: "Nu plătești platformă, nu pierzi timp în service. Ajungem de obicei în <45 min, în funcție de zonă și trafic.",
      },
      {
        title: "Garanție reală, factură fiscală",
        description: "Nu improvizații din portbagaj. Baterii testate, producători cunoscuți, totul trecut pe hârtie.",
      },
      {
        title: "Ai mașina cu sistem start-stop?",
        description: "Nu stricăm ECU-ul (calculatorul mașinii). Folosim tester și facem înregistrarea bateriei corect pentru mașinile moderne.",
      },
    ],
  },

  // Contact Section
  contact: {
    eyebrow: "Contact",
    title: "Ai bateria moartă acum? Te scoatem din parcare",
    urgencyCard: {
      label: "Urgență / Pornire imediată",
      description: "Răspundem 24/7 pentru urgențe reale (mașina nu pornește). Moreni + jud. Dâmbovița.",
    },
    form: {
      fields: {
        name: {
          label: "Nume",
          placeholder: "ex. Andrei Popescu",
        },
        phone: {
          label: "Telefon",
          placeholder: "ex. 07xx xxx xxx",
        },
        carModel: {
          label: "Model mașină",
          placeholder: "ex. VW Golf 7 1.6 TDI 2017",
        },
      },
      submitText: "trimite cerere (în curând)",
    },
  },

  // Footer
  footer: {
    description: "Intervenții baterii auto · Moreni & jud. Dâmbovița · 24/7 urgențe reale",
    schedule: [
      "Program service: Luni - Sâmbătă 08:00 - 20:00",
      "Program urgențe: Non-stop",
    ],
  },
};

export type SiteData = typeof siteData;