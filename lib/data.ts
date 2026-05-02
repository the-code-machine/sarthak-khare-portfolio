// All portfolio content lives here.
// Replace `image: "/images/projects/<file>.png"` with your actual screenshots.

export const profile = {
  name: "Sarthak Khare",
  title: "Tech Lead & Full-Stack Engineer",
  location: "Vidisha, Madhya Pradesh — India",
  email: "sarthakkhare821@gmail.com",
  phone: "+91 97521 33459",
  tagline:
    "I design, ship and operate full software ecosystems — from frontend pixels to AWS infrastructure.",
  bio: [
    "I'm a full-stack engineer currently leading engineering at Cobox. I joined as a frontend developer and now own the entire stack — frontend, backend, system design, DevOps and AWS infrastructure across the Cobox ecosystem.",
    "Beyond Cobox, I've shipped products with IIT Indore, Wikimedia, and Indian SaaS startups, and freelanced 10+ production apps for clients across India, Australia and the Philippines. I also build open-source tools for the Wikimedia community.",
  ],
  socials: {
    github: "https://github.com/the-code-machine",
    linkedin: "https://www.linkedin.com/in/sarthak-khare-898084253/",
    instagram: "https://instagram.com/sarthak_io", // replace with handle
    email: "mailto:sarthakkhare821@gmail.com",
  },
};

export const wikiIdentity = {
  username: "Sarthak Khare", // adjust if your Wikimedia username differs
  links: [
    {
      label: "Wikimedia Commons",
      url: "https://commons.wikimedia.org/wiki/User:Status_401",
      description: "Contributor profile · uploads & gallery",
    },
    {
      label: "Meta-Wiki",
      url: "https://meta.wikimedia.org/wiki/User:Status_401",
      description: "Movement-wide user page",
    },
    {
      label: "MediaWiki",
      url: "https://www.mediawiki.org/wiki/User:Status_401",
      description: "Developer profile",
    },
    {
      label: "Phabricator",
      url: "https://phabricator.wikimedia.org/p/Status-401/",
      description: "Tasks & technical contributions",
    },
  ],
};

export const currentRole = {
  company: "Cobox",
  role: "Tech Lead",
  period: "Jun 2025 — Present",
  location: "Remote",
  url: "https://www.cobox.co/",
  blurb:
    "Joined as a frontend developer and now lead the entire engineering ecosystem — frontend, backend, system design, DevOps and AWS infrastructure across all Cobox platforms.",
  highlights: [
    "Owns architecture and delivery across multiple Cobox products",
    "AWS infrastructure: EC2, RDS (Postgres), Secrets Manager, Docker workflows",
    "Frontend systems with Next.js, TypeScript, Tailwind, Radix UI, Zustand",
    "Backend services with FastAPI, Django, PostgreSQL",
    "Auth migration (Thirdweb → Firebase), email infra (ZeptoMail, Brevo)",
  ],
};

export const internship = {
  company: "SRM University AP × IIT Indore",
  role: "Open-Source Engineering Intern",
  period: "Oct 2024 — Jun 2025",
  duration: "6 months",
  location: "Vijayawada, Andhra Pradesh",
  url: "https://sindhisanchaya.in/",
  project: "Sindhi Sanchaya Archive",
  blurb:
    "IIT Indore-funded open-source project under SRM University AP — built a research-grade digital archive preserving 60,000+ partition-era Sindhi literary works.",
  highlights: [
    "Architected the platform on Next.js + PostgreSQL",
    "Built OpenAI-powered NLP pipelines for multilingual transliteration",
    "Achieved 92% transliteration accuracy, cutting manual processing by 75%",
    "Serves 4,000+ researchers monthly",
  ],
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Cobox" | "Internship" | "Tuffle" | "Freelance" | "Wiki Tool";
  year: string;
  url: string;
  image: string;
  summary: string;
  stack: string[];
  role: string;
};

export const projects: Project[] = [
  // ---------- COBOX ----------
  {
    slug: "cobox",
    title: "Cobox Platform",
    client: "Cobox · Tech Lead",
    category: "Cobox",
    year: "2025 — present",
    url: "https://www.cobox.co/",
    image: "/images/projects/cobox.png",
    summary:
      "Lead engineer for the Cobox ecosystem — Next.js + FastAPI, AWS infra, Firebase auth, and shared services across multiple products.",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Firebase",
    ],
    role: "Tech Lead — full-stack & infra",
  },

  // ---------- INTERNSHIP ----------
  {
    slug: "sindhi-sanchaya",
    title: "Sindhi Sanchaya Archive",
    client: "IIT Indore × SRM University AP",
    category: "Internship",
    year: "2024 — 2025",
    url: "https://sindhisanchaya.in/",
    image: "/images/projects/sindhi-sanchaya.png",
    summary:
      "Open-source digital archive preserving 60,000+ partition-era Sindhi literary works with OpenAI transliteration pipelines.",
    stack: ["Next.js", "PostgreSQL", "OpenAI API", "Python", "NLP"],
    role: "Full-stack engineer (intern)",
  },

  // ---------- TUFFLE STARTUP ----------
  {
    slug: "jobpakki",
    title: "JobPakki",
    client: "Tuffle Enterprises",
    category: "Tuffle",
    year: "2024",
    url: "https://www.jobpakki.in/",
    image: "/images/projects/jobpakki.png",
    summary:
      "AI resume SaaS — parses applicant data and produces ATS-friendly resumes with intelligent job matching. 15k+ resumes generated.",
    stack: ["Next.js", "Puppeteer", "TypeScript", "OpenAI"],
    role: "Frontend developer",
  },
  {
    slug: "sabarkaro",
    title: "Sabarkaro",
    client: "Tuffle Enterprises",
    category: "Tuffle",
    year: "2024",
    url: "https://sabarkaro.com/",
    image: "/images/projects/sabarkaro.png",
    summary:
      "All-in-one creator platform for thumbnails, scripts and AI audio — scaled to 20k+ users and 50k+ generated assets.",
    stack: ["Next.js", "TypeScript", "FFmpeg", "Razorpay", "Django API"],
    role: "Frontend developer",
  },
  {
    slug: "tick-your-tour",
    title: "Tick Your Tour",
    client: "Tuffle Enterprises",
    category: "Tuffle",
    year: "2024",
    url: "https://tuffleiq.com/projects/tick-your-tour-web-app",
    image: "/images/projects/tick-your-tour.png",
    summary:
      "Travel itinerary web app — clean, fast Next.js frontend wired to Tuffle's tour booking backend.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    role: "Frontend developer",
  },

  // ---------- FREELANCE ----------
  {
    slug: "paperbill",
    title: "Paperbill",
    client: "Paperbill · Freelance",
    category: "Freelance",
    year: "2025 — present",
    url: "https://paperbill.in/",
    image: "/images/projects/paperbill.png",
    summary:
      "Offline-first GST invoicing desktop suite. Electron + Node backend, Django sync, WhatsApp API. 100+ businesses onboarded.",
    stack: ["Electron.js", "Node.js", "Django", "PostgreSQL", "WhatsApp API"],
    role: "Full-stack developer",
  },
  {
    slug: "glossour-web",
    title: "Glossour — Agency Website",
    client: "Glossour Digital Marketing",
    category: "Freelance",
    year: "2023 — 2024",
    url: "https://www.glossour.com/",
    image: "/images/projects/glossour-web.png",
    summary:
      "Full-stack marketing platform with deep Dolibarr CRM integration. 5k+ users, 10k+ orders, 70% reporting overhead reduction.",
    stack: ["Next.js", "Dolibarr CRM", "Node.js"],
    role: "Full-stack developer",
  },
  {
    slug: "glossour-app",
    title: "Glossour — Android App",
    client: "Glossour Digital Marketing",
    category: "Freelance",
    year: "2023 — 2024",
    url: "https://play.google.com/store/apps/details?id=com.glossour.glossour_production",
    image: "/images/projects/glossour-app.png",
    summary:
      "Native Android client for Glossour — Google auth, real-time analytics, animated UI. 10k+ Play Store installs.",
    stack: ["Flutter", "Dart", "Google Auth", "Lottie"],
    role: "Mobile developer",
  },
  {
    slug: "effortless-events",
    title: "Effortless Events",
    client: "Effortless Events",
    category: "Freelance",
    year: "2024",
    url: "https://www.effortlessevents.in/",
    image: "/images/projects/effortless-events.png",
    summary:
      "Full-fledged event management website with a custom PHP admin panel for booking, content and operations.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    role: "Full-stack developer",
  },
  {
    slug: "studygen",
    title: "StudyGen Australia",
    client: "StudyGen",
    category: "Freelance",
    year: "2024",
    url: "https://studygen.com.au/",
    image: "/images/projects/studygen.png",
    summary:
      "Marketing and admissions platform for an Australian education consultancy.",
    stack: ["Next.js", "Tailwind", "Node.js"],
    role: "Full-stack developer",
  },
  {
    slug: "itcouncil",
    title: "IT Council",
    client: "IT Council",
    category: "Freelance",
    year: "2024",
    url: "https://www.itcouncil.in/",
    image: "/images/projects/itcouncil.png",
    summary: "Corporate website for an IT certifications and training body.",
    stack: ["Next.js", "Tailwind"],
    role: "Frontend developer",
  },
  {
    slug: "zootopia",
    title: "Zootopia PH",
    client: "Zootopia · Philippines",
    category: "Freelance",
    year: "2024",
    url: "https://zootopia.com.ph/",
    image: "/images/projects/zootopia.png",
    summary:
      "Pet hospital management website for a veterinary chain in the Philippines.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    role: "Full-stack developer",
  },
];

// ---------- WIKI TOOLS ----------
export const wikiTools = [
  {
    title: "Commons Image Converter",
    url: "https://commonsimageconverter.toolforge.org/",
    description:
      "A Toolforge tool that converts and optimizes images into Wikimedia Commons-compatible formats before upload.",
    host: "Wikimedia Toolforge",
  },
  {
    title: "Wikitable Converter",
    url: "https://wikitable-converter.onrender.com/",
    description:
      "Convert wikitables to/from CSV, JSON and HTML — built for editors who work across formats.",
    host: "Render",
  },
  {
    title: "Commons SVG Sanitizer",
    url: "https://commons-svg-sanitizer.onrender.com/",
    description:
      "Cleans SVG files of Commons-incompatible elements before upload.",
    host: "Render",
  },
  {
    title: "Editor Dashboard",
    url: "https://editor-dashboard-nixw.onrender.com/",
    description:
      "Personal dashboard for Wikimedia editors — tracks contributions, watchlists and tasks.",
    host: "Render",
  },
];

// ---------- COMMUNITIES ----------
export const communities = [
  {
    name: "Variable X Community",
    role: "Founder",
    url: "https://www.linkedin.com/in/variablex-community-37b56830a/",
    blurb:
      "A developer community I founded to bring together engineers, makers and open-source contributors.",
  },
  {
    name: "Wiki Open Learning",
    role: "Founder",
    url: "https://meta.wikimedia.org/wiki/Wiki_Open_Learning",
    blurb:
      "Founded a Wikimedia learning initiative on Meta-Wiki focused on open educational resources.",
  },
  {
    name: "Wiki Club SATI",
    role: "Ex Technical Head",
    url: "https://meta.wikimedia.org/wiki/Wiki_Club_SATI",
    blurb:
      "Led technical operations for the Wikimedia chapter at Samrat Ashok Technological Institute.",
  },
];

// ---------- HACKATHONS ----------
export const hackathons = [
  {
    name: "Kriyeta 2.0",
    placement: "First Runner-up",
    prize: "₹50,000",
    detail:
      "Built a personalized learning platform with integrated video calling. National-level hackathon.",
    url: "https://www.linkedin.com/posts/sarthak-khare-898084253_hackathon-nlp-flask-ugcPost-7184957781165105153-PvRw",
  },
  {
    name: "HackHound 2.0 — SRM Delhi",
    placement: "Third Runner-up",
    prize: "₹25,000",
    detail:
      "Designed a uniform marking-scheme logic for India Post recruitment. National-level hackathon.",
    url: "https://www.linkedin.com/posts/sarthak-khare-898084253_recently-the-srm-university-delhi-hackhound-ugcPost-7184950335075926016-GW8z",
  },
  {
    name: "Chandigarh University Hackathon",
    placement: "Finalist",
    prize: "Blockchain track",
    detail: "Blockchain & innovation track — built a decentralized solution.",
    url: "https://www.linkedin.com/posts/sarthak-khare-898084253_blockchain-hackathon-innovation-activity-7243157327367880704-rb1n",
  },
  {
    name: "IIT Dhanbad Hackathon",
    placement: "Finalist",
    prize: "LegalTech",
    detail: "Built an e-Vault — blockchain-backed legal evidence vault.",
    url: "https://www.linkedin.com/posts/sarthak-khare-898084253_blockchain-legaltech-evault-ugcPost-7196835692977520641-KtV9",
  },
];

// ---------- SKILLS ----------
export const skillGroups = [
  {
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "Dart",
      "PHP",
      "HTML/CSS",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Zustand",
      "React Hook Form",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "FastAPI",
      "Django",
      "Express",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Mobile & Desktop",
    items: ["Flutter", "Electron.js", "Android (Native)"],
  },
  {
    title: "AI & Data",
    items: [
      "OpenAI API",
      "NLP Pipelines",
      "Pandas",
      "NumPy",
      "Beautiful Soup",
      "Selenium",
    ],
  },
  {
    title: "Infra & DevOps",
    items: [
      "AWS (EC2, RDS, Secrets)",
      "Docker",
      "Linux",
      "Firebase",
      "ZeptoMail",
      "Toolforge",
    ],
  },
  {
    title: "Tooling",
    items: [
      "Git / GitHub",
      "Figma",
      "VS Code",
      "Google Analytics",
      "Phabricator",
    ],
  },
];

// ---------- EDUCATION ----------
export const education = [
  {
    school: "Samrat Ashok Technological Institute",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2021 — 2025",
    location: "Vidisha, MP",
    grade: "GPA 8.5 / 10.0",
  },
  {
    school: "Nehru Memorial Higher Secondary School",
    degree: "Class XII — Science",
    period: "Graduated 2020",
    location: "Vidisha, MP",
    grade: "92.2%",
  },
];
