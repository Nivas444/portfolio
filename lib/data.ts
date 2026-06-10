// ============================================================
// Resume Data for Nivas M – refined for AI Engineer portfolio
// ============================================================

export const personalInfo = {
  name: "Nivas M",
  title: "AI Engineer | Computer Vision & Edge AI Specialist",
  subTitle:
    "AI Engineer architecting production-grade AI agents, high-performance B2B SaaS platforms, and low-latency computer vision pipelines deployed at the edge.",
  email: "nivasm0402@gmail.com",
  phone: "+91 9361963564",
  linkedin: "https://www.linkedin.com/in/nivas040205/",
  github: "https://github.com/Nivas444",
  resumeUrl: "/Nivas_Resume.pdf",
  photoUrl: "/Gemini_Generated_Image-Photoroom.png",
  location: "Tamil Nadu, India",
};

export const summary =
  "I design and build end-to-end intelligent systems. From training and optimizing deep learning models for NVIDIA Jetson hardware to architecting scalable AI agent workflows and deploying robust B2B SaaS applications, I bridge the gap between advanced AI research and production-grade engineering.";

// ─── Experience ──────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: "AI Engineer",
    company: "SortyX Ventures Private Limited",
    location: "Chennai",
    period: "Mar 2026 – Present",
    type: "On-site",
    current: true,
    bullets: [
      "Architect and build multi-agent AI systems to automate complex document workflows, data extraction, and business operations.",
      "Develop high-performance backends and core machine learning API services for a B2B SaaS platform.",
      "Design and deploy low-latency computer vision pipelines on NVIDIA Jetson Orin Nano for edge-device real-time inference.",
      "Train, fine-tune, and quantize YOLOv8 and classification models, maximizing throughput and reducing hardware overhead.",
      "Represent the team at government-backed startup exhibitions and innovation panels to demonstrate real-time AI + IoT solutions."
    ],
    techStack: ["AI Agents", "YOLOv8", "NVIDIA Jetson Orin Nano", "Computer Vision", "SaaS Development", "FastAPI"],
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "TechPower Solutions",
    location: "Chennai",
    period: "Jun 2025",
    type: "On-site",
    current: false,
    bullets: [
      "Engineered predictive machine learning models utilizing Random Forest algorithms to analyze historical datasets and forecast risk metrics.",
      "Gained hands-on experience in Deep Learning workflows, training neural networks and CNN models for pattern recognition.",
      "Learned end-to-end model deployment processes by constructing data preprocessing pipelines and packaging low-latency inference endpoints with Flask.",
      "Successfully managed deployment pipelines under tight client sprint deadlines, developing strong pressure-handling and production debugging skills.",
      "Collaborated with cross-functional teams to design database normalization schemas, reducing preprocessing overhead by 20%."
    ],
    techStack: ["Deep Learning", "PyTorch", "Random Forest", "Pandas", "Scikit-Learn", "Flask", "Python", "Model Deployment"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "AI-Powered Automated Waste Segregation Bin",
    description:
      "A hardware-software integrated system utilizing computer vision to classify and sort recyclable items automatically. Optimized deep learning models (MobileNetV2) for real-time inference at the edge, integrated with sensor microcontrollers.",
    techStack: ["Python", "TensorFlow", "MobileNetV2", "OpenCV", "Raspberry Pi"],
    github: "",
    demo: "",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "trash",
  },
  {
    id: 2,
    title: "XAM.AI – AI Powered Study Buddy",
    description:
      "An intelligent learning platform leveraging generative AI, custom vector search, and explainable AI parameters. Built to personalize study tracks, provide structured concept explanations, and build learner trust with transparent reasoning.",
    techStack: ["Python", "FastAPI", "React.js", "AI APIs"],
    github: "https://github.com/Nivas444/XAM.AI-Project",
    demo: "https://xam-ai-project.vercel.app/",
    featured: true,
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "book",
  },
  {
    id: 3,
    title: "Decision-Driven Customer Retention System",
    description:
      "An end-to-end machine learning microservice that predicts customer churn and evaluates financial retention interventions. Designed business-centric risk dashboards and integrated automated decision rules via FastAPI.",
    techStack: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "Seaborn", "REST APIs", "Uvicorn"],
    github: "https://github.com/Nivas444/decision_driven_retention_ml",
    demo: "",
    featured: true,
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "chart",
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const skillGroups = [
  {
    category: "Languages & Core",
    icon: "code",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "AI & Machine Learning",
    icon: "cpu",
    skills: [
      "PyTorch",
      "TensorFlow",
      "YOLOv8",
      "AI Agents",
      "LLMs & RAG",
      "Generative AI",
      "Prompt Engineering",
      "Computer Vision",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Model Quantization",
      "Deep Learning",
    ],
  },
  {
    category: "Web Technologies",
    icon: "code",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "REST APIs", "Vercel"],
  },
  {
    category: "Backend & SaaS",
    icon: "server",
    skills: ["FastAPI", "Flask", "SaaS Architecture", "Docker", "Git", "Uvicorn"],
  },
  {
    category: "Edge AI & IoT",
    icon: "layers",
    skills: [
      "NVIDIA Jetson Orin Nano",
      "Raspberry Pi",
      "Edge AI Deployment",
      "MQTT / IoT Protocols",
      "Sensor Integration",
      "Real-time Inference",
    ],
  },
  {
    category: "Fundamentals",
    icon: "brain",
    skills: ["Data Structures & Algorithms", "System Design", "Database Normalization"],
  },
];

// ─── Education ───────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech., Artificial Intelligence & Data Science",
    institution: "Dhanalakshmi Srinivasan Engineering College, Perambalur",
    period: "2022 – 2026",
  },
];

// ─── Certifications ──────────────────────────────────────────
export const certifications = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL (IIT)",
    date: "Nov 2024",
    badge: "award",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI, Coursera",
    date: "Apr 2025",
    badge: "cpu",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "DeepLearning.AI, Coursera",
    date: "Aug 2025",
    badge: "eye",
  },
];
