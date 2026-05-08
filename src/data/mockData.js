// Données pour la page d'accueil
export const homeData = {
  title: "SEN-MOOL PROTECT 2.0",
  subtitle: "Souveraineté Numérique & Économie Bleue — New Deal Technologique 2026",
  description:
    "Bracelet connecté Mool-Safe, app mobile inclusive et dashboard Mool-Control pour protéger les travailleurs de la mer au Sénégal.",
  ctaButtons: [
    {
      id: 1,
      text: "Découvrir Mool-Safe",
      icon: "📱",
      link: "/mool-safe",
    },
    {
      id: 2,
      text: "Dashboard Mool-Control",
      icon: "📊",
      link: "/dashboard",
    },
    {
      id: 3,
      text: "Maquettes & Wireframes",
      icon: "📐",
      link: "/wireframes",
    },
  ],
};

// Données pour les 3 piliers
export const pillars = [
  {
    id: 1,
    title: "Souveraineté des Données",
    icon: "🔒",
    description:
      "Données stockées exclusivement sur le Cloud National SENUM SA. Aucun transfert vers des serveurs étrangers. Maîtrise totale par l'État du Sénégal.",
  },
  {
    id: 2,
    title: "Inclusion Technologique",
    icon: "📱",
    description:
      "Interface 100% visuelle et vocale en Wolof, Pulaar et Serer. L'IoT maritime accessible à tous, même sans alphabétisation.",
  },
  {
    id: 3,
    title: "Sécurité Publique Digitalisée",
    icon: "⚠️",
    description:
      "Commandement temps réel pour la Marine Nationale et la Gendarmerie Maritime. IA prédictive des zones à risque selon courants et historiques.",
  },
];

// Données pour Mool-Safe (Bracelet)
export const moolSafeData = {
  name: "Mool-Safe",
  subtitle: "Bracelet Connecté Maritime",
  description: "Interface de simulation du bracelet IoT. Testez le SOS, la détection de noyade, et le mode Mesh Network.",
  features: [
    {
      id: 1,
      label: "Assemblage",
      detail: "Made in Sénégal — PTN Diamniadio",
      icon: "✅",
    },
    {
      id: 2,
      label: "Signal",
      detail: "Dual-Signal fréquences nationales sécurisées",
      icon: "✅",
    },
    {
      id: 3,
      label: "Détection",
      detail: "Alerte SOS automatique après 5 sec immersion",
      icon: "✅",
    },
    {
      id: 4,
      label: "Étanchéité",
      detail: "IP68 — immersion continue",
      icon: "✅",
    },
    {
      id: 5,
      label: "Autonomie",
      detail: "72h en mode actif",
      icon: "✅",
    },
    {
      id: 6,
      label: "GPS",
      detail: "Précision < 3m en mer",
      icon: "✅",
    },
  ],
  liveData: {
    location: "14°42'55\"N 17°26'48\"W",
    time: "12:30",
    gps: "GPS, IoT, 4G",
    status: "Mesh: 68% — 3 relais",
    speed: "0.9 kt",
    bearing: "310° NW",
    battery: "92%",
    temperature: "28.5°",
    heartRate: "67 bpm",
    waterMode: "IP68 Active",
  },
  meshNetwork: [
    { id: 1, name: "Amadou Diop", signal: "96%", distance: "2.1km", relays: 3 },
    { id: 2, name: "Moussa Sow", signal: "87%", distance: "1.5km", relays: 0 },
    { id: 3, name: "Oumar Seck", signal: "72%", distance: "4.3km", relays: 12 },
    { id: 4, name: "Ibrahima Ndiaye", status: "Hors ligne" },
  ],
  eventLog: [
    { time: "09:30:00", event: "GPS connecté, signal fort" },
    { time: "09:30:15", event: "Capteur température OK" },
    { time: "09:31:00", event: "Vitesse : 0.8 neuds" },
    { time: "09:31:30", event: "Mesh Network : 3 neuds relais à portée" },
  ],
};

// Données pour la simulation mobile
export const mobileAppData = {
  title: "App Mool-Control Mobile",
  subtitle: "Interface inclusive pour les pêcheurs sénégalais",
  username: "Nanga def, Amadou !",
  boatId: "MS-2026-001 — Jamm baax",
  currentCondition: "MER OUVERTE",
  windSpeed: "10 kt",
  waveHeight: "0.7m",
  sosButton: "SOS — APPUYER",
  metrics: [
    { label: "Daw", value: "0.8 kt", icon: "⚡" },
    { label: "Yoon", value: "310°", icon: "🧭" },
    { label: "Battéri", value: "92%", icon: "🔋" },
    { label: "Tângal", value: "28°", icon: "🌡️" },
  ],
  warnings: [
    { type: "battery", message: "Batterie bracelet < 20% — alerte résolution par recharging - 18:45" },
  ],
  nearbyVessels: {
    title: "Voisin de Mer",
    count: "3 piroques à proximité — réseau actif",
  },
  weather: {
    title: "Ciel dégagé — 32°C",
    location: "Vent NE 12 kt — Mer calme",
  },
  navigationMenu: [
    { id: 1, label: "Accueil", icon: "🏠" },
    { id: 2, label: "Ma carte", icon: "🗺️" },
    { id: 3, label: "Alertes", icon: "🔔" },
    { id: 4, label: "Voisin de Mer", icon: "👥" },
    { id: 5, label: "Météo", icon: "⛅" },
    { id: 6, label: "Mon profil", icon: "👤" },
  ],
};

// Données pour le Dashboard
export const dashboardData = {
  title: "Mool-Control — Dashboard Marine Nationale du Sénégal",
  stats: [
    { id: 1, label: "Appareils actifs", value: "1247", icon: "📱", color: "green" },
    { id: 2, label: "Alertes actives", value: "2", icon: "🚨", color: "red" },
    { id: 3, label: "Sauveiés ce mois", value: "18", icon: "⭐", color: "yellow" },
    { id: 4, label: "Temps moyen", value: "6.2 min", icon: "⏱️", color: "teal" },
  ],
  mapTitle: "Carte temps réel — Côtes du Sénégal",
  mapData: "5 actifs / 6 total",
  vessels: [
    {
      id: 1,
      name: "Pirogue Jämm baax",
      location: "Amadou Diop — Cap-Vert, Dakar",
      status: "Actif",
      crewCount: 5,
    },
    {
      id: 2,
      name: "Pirogue Ndar",
      location: "Saint-Louis",
      status: "Actif",
      crewCount: 3,
    },
    {
      id: 3,
      name: "Pirogue Sopi",
      location: "Casamance",
      status: "Actif",
      crewCount: 4,
    },
    {
      id: 4,
      name: "Pirogue Béggal",
      location: "Kolda",
      status: "Hors-ligne",
      crewCount: 2,
    },
  ],
  liveCamera: {
    title: "Vision IA temps réel — Caméras embarquées",
    camera: "CAM-001",
    location: "Pirogue Jämm baax - Amadou Diop — Cap-Vert, Dakar",
    detections: [
      { type: "Personne à la mer", confidence: "94%", color: "red" },
      { type: "Piogue bois", confidence: "89%", color: "green" },
      { type: "Vague — houle", confidence: "70%", color: "blue" },
      { type: "Filet de pêche", confidence: "86%", color: "cyan" },
      { type: "Objet flottant", confidence: "73%", color: "orange" },
    ],
    modelInfo: "YOLO-Maritime v3.2",
  },
  menuItems: [
    { id: 1, label: "Vue d'ensemble", icon: "👁️" },
    { id: 2, label: "Carte temps réel", icon: "🗺️" },
    { id: 3, label: "Alertes", icon: "🚨" },
    { id: 4, label: "Pêcheurs", icon: "👨‍🌾" },
    { id: 5, label: "Météo Marine", icon: "🌊" },
    { id: 6, label: "Trajets", icon: "🛤️" },
    { id: 7, label: "Mode Mesh", icon: "📡" },
    { id: 8, label: "Rapports", icon: "📊" },
  ],
};

// Données pour les composantes du système
export const systemComponents = [
  {
    id: 1,
    name: "Mool-Safe — Bracelet",
    icon: "⌚",
    description: "Bracelet connecté maritime IoT",
    features: ["GPS < 3m", "Dual-Signal", "IP68", "72h autonomie"],
  },
  {
    id: 2,
    name: "App Mobile — Inclusive",
    icon: "📱",
    description: "Interface 100% vocale et visuelle",
    features: ["Wolof, Pulaar, Serer", "Accessible offline", "Mesh Network"],
  },
  {
    id: 3,
    name: "Mool-Control — Dashboard",
    icon: "📊",
    description: "Commande temps réel pour marines/police côtière",
    features: ["Vision IA", "Alertes temps réel", "Rapports"],
  },
  {
    id: 4,
    name: "Voisin de Mer — Mesh",
    icon: "📡",
    description: "Réseau pair-à-pair d'urgence offshore",
    features: ["Portée 5km", "Relais automatiques", "Sans requete serveur"],
  },
];
// Données mockées pour SEN-MOOL PROTECT

export const mockedData = {
  // Données du bracelet Mool-Safe
  bracelet: {
    id: "MS-2026-001",
    name: "Mool-Safe",
    status: "NORMAL",
    battery: 92,
    speed: 0.9,
    speedUnit: "kt",
    heading: 310,
    headingUnit: "°NW",
    temperature: 28.5,
    heartRate: 67,
    waterImmersion: true,
    meshNetwork: "ACTIF",
    meshRelays: 3,
    specifications: {
      assembly: "Made in Sénégal — PTN Diamniadio",
      signal: "Dual-Signal fréquences nationales sécurisées",
      detection: "Alerte SOS automatique après 5 sec immersion",
      waterResistance: "IP68 — immersion continue",
      battery: "72h en mode actif",
      gps: "Précision < 3m en mer",
    },
    features: [
      "Made in Sénégal — PTN Diamniadio",
      "Dual-Signal fréquences nationales sécurisées",
      "Alerte SOS automatique après 5 sec immersion",
      "IP68 — immersion continue",
      "72h en mode actif",
      "Précision < 3m en mer",
    ],
  },

  // Données de l'app mobile
  app: {
    user: {
      name: "Nanga def, Amadou",
      id: "MS-2026-001",
      team: "Jamm baax",
    },
    currentCondition: {
      status: "MER OUVERTE",
      speed: "10 kt",
      waves: "0.7m",
      icon: "✓",
    },
    alerts: {
      active: 2,
      sosActive: 1,
    },
    metrics: {
      speed: { value: 0.8, unit: "kt", label: "Daw" },
      heading: { value: 310, unit: "°", label: "Yoon" },
      battery: { value: 92, unit: "%", label: "Battéri" },
      temperature: { value: 28, unit: "°", label: "Tángal" },
    },
    alerts_detail: [
      {
        type: "warning",
        title: "Batterie bracelet < 20%",
        message: "Alerte résolu par recharge",
        time: "18:45",
      },
    ],
    weather: {
      label: "Voisin de Mer",
      prochain: "3 prouges à proximité — réseau actif",
    },
    forecast: {
      condition: "Ciel dégagé — 32°C",
      description: "Vent NE 12 kt — Mer calme",
    },
  },

  // Données du dashboard
  dashboard: {
    title: "Mool-Control",
    subtitle: "Dashboard Marine Nationale du Sénégal",
    stats: {
      activeDevices: { value: 1247, label: "Appareils actifs" },
      activeAlerts: { value: 2, label: "Alertes actives" },
      savedThisMonth: { value: 18, label: "Sauvetés ce mois" },
      avgResponseTime: { value: "6.2 min", label: "Temps moyen" },
    },
    map: {
      center: "Sénégal",
      activeZones: { current: 5, total: 6 },
      region: "Côtes du Sénégal",
    },
    menu: [
      { label: "Vue d'ensemble", icon: "📊" },
      { label: "Carte temps réel", icon: "🗺️" },
      { label: "Alertes", icon: "🚨" },
      { label: "Pêcheurs", icon: "👤" },
      { label: "Météo Marine", icon: "☁️" },
      { label: "Trajets", icon: "📍" },
      { label: "Mode Mesh", icon: "📡" },
      { label: "Rapports", icon: "📋" },
    ],
    fishermenZones: [
      {
        name: "Amadou Diop",
        location: "Cap-Vert, Dakar",
        signal: "98%",
        distance: "2.1km",
        relays: 3,
        status: "online",
      },
      {
        name: "Moussa Sow",
        location: "Koungheul",
        signal: "87%",
        distance: "15km",
        status: "online",
      },
      {
        name: "Oumar Seck",
        location: "Lompoul",
        signal: "42%",
        distance: "4.3km",
        relays: 12,
        status: "online",
      },
      {
        name: "Ibrahima Ndiaye",
        location: "Offshore",
        signal: "-",
        distance: "-",
        status: "offline",
      },
    ],
    events: [
      { time: "09:30:00", event: "GPS connecté, signal fort" },
      { time: "09:30:15", event: "Capteur température OK" },
      { time: "09:31:00", event: "Vitesse : 0.8 neuds" },
      { time: "09:31:30", event: "Mesh Network : 3 neuds relais à portée" },
    ],
  },

  // Données pour la caméra IA
  camera: {
    id: "CAM-001",
    location: "Pirogue Jämm baax",
    fishery: "Amadou Diop — Cap-Vert, Dakar",
    model: "YOLO-Maritime v3.2",
    fps: 24,
    latency: "1.7ms",
    detections: [
      {
        object: "Personne à la mer",
        confidence: 94,
        label: "ALERTE IA — Personne détectée à la mer (confiance 94%)",
        type: "critical",
      },
      {
        object: "Vague — houle",
        confidence: 70,
        label: "Vague — houle (70%)",
        type: "normal",
      },
      {
        object: "Pirogue bois",
        confidence: 89,
        label: "Pirogue bois (89%)",
        type: "normal",
      },
      {
        object: "Pinoque Ndar",
        confidence: 76,
        label: "Pinoque Ndar (76%)",
        type: "normal",
      },
      {
        object: "Objet flottant",
        confidence: 73,
        label: "Objet flottant (73%)",
        type: "normal",
      },
      {
        object: "Filet de pêche",
        confidence: 86,
        label: "Filet de pêche (86%)",
        type: "normal",
      },
    ],
    detectionSummary: [
      { label: "Personne à la mer (93%)", color: "#ef4444" },
      { label: "Pirogue bois (89%)", color: "#10b981" },
      { label: "Objet flottant (73%)", color: "#f59e0b" },
      { label: "Filet de pêche (86%)", color: "#3b82f6" },
      { label: "Vague — houle (70%)", color: "#8b5cf6" },
    ],
  },

  // Vision IA
  aiVision: {
    title: "Vision IA temps réel — Caméras embarquées",
    description:
      "Une simulation visuelle des interfaces Mool-Safe, App Mobile, Dashboard et Voisin de Mer — le tout, en temps réel.",
    components: [
      {
        id: "mool-safe",
        name: "Mool-Safe — Bracelet",
        icon: "⌚",
      },
      {
        id: "app",
        name: "App Mobile — Inclusive",
        icon: "📱",
      },
      {
        id: "dashboard",
        name: "Mool-Control — Dashboard",
        icon: "📊",
      },
      {
        id: "mesh",
        name: "Voisin de Mer — Mesh",
        icon: "🌊",
      },
    ],
  },
};
