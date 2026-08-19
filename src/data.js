export const profile = {
  name: 'Asadullah Baig',
  role: 'AI Engineer — Production ML & LLM Systems',
  tagline:
    'Specializing in production ML systems, infrastructure optimization, and scaling LLM applications.',
  email: 'asadullahbeg@gmail.com',
  phone: '+32 465 569 301',
  location: 'Ghent, Belgium',
  sites: [
    { label: 'psxgpt.com', url: 'https://psxgpt.com' },
    { label: 'bhaikaamdo.com', url: 'https://bhaikaamdo.com' },
  ],
  github: 'https://github.com/linkstatic12',
  linkedin: 'https://www.linkedin.com/in/asad-ullah-baig-334ba973/',
  twitter: 'https://x.com/asadullahbaig12',
}

export const metrics = [
  { value: 60, suffix: '%', label: 'infra cost reduction', detail: '$100K+ saved annually' },
  { value: 10, suffix: 'K+', label: 'daily inference requests', detail: 'via GPU load-balancing' },
  { value: 45, suffix: '%', label: 'latency improvement', detail: 'student-teacher distillation' },
  { value: 30, suffix: '%', label: 'job-matching accuracy', detail: 'PEFT fine-tuning, unsloth' },
]

export const experience = [
  {
    period: '2025 — Present',
    company: 'Bhaikaamdo',
    role: 'Principal AI Engineer',
    location: 'Remote',
    points: [
      'Engineered a scalable recruitment platform with a distributed RAG pipeline across 500+ domains using dual-vector (dense/sparse) Qdrant retrieval.',
      'Reduced API infrastructure costs by 60% ($100K+ annually) while scaling to 10K+ daily inference requests through custom GPU load-balancing.',
      'Deployed an elastic FastAPI backend on Azure supporting 3,000+ active users.',
      'Launched cross-browser extensions that significantly boosted user retention.',
      'Fine-tuned a base model using PEFT with the unsloth framework, achieving a 30% improvement in job-matching accuracy.',
    ],
    stack: ['FastAPI', 'Azure', 'Qdrant', 'PEFT', 'unsloth', 'GPU load-balancing'],
  },
  {
    period: '2025 — Present',
    company: 'Datapsx',
    role: 'Lead Machine Learning Engineer',
    location: 'Remote',
    points: [
      'Engineered a proprietary extraction engine transforming unstructured financial reports into standardized datasets for 100+ PSX-listed companies.',
      'Built a citation-based financial GPT that grounds every generated insight in verifiable source data.',
      'Implemented student-teacher distillation, improving response latency by 45% and reducing VRAM utilization.',
      'Developed a multi-arm ensemble model for the RSNA knee-abnormality collaboration — combining a DINOv2 visual transformer, spatial cross-series attention, and domain-specific ResNet-50 representations, alongside a multilingual NLP pipeline for soft-label extraction from radiology reports.',
    ],
    stack: ['Model Distillation', 'DINOv2', 'ResNet-50', 'NLP', 'PyTorch'],
  },
  {
    period: '2022 — 2025',
    company: 'Genesis Engineering',
    role: 'Chief Technical Officer',
    location: 'Islamabad',
    points: [
      'Built and led cross-functional teams, restructuring internal hierarchies to streamline delivery for clients including Ideamia, Vieux, and Sanmina.',
      'Accelerated technical growth for junior-to-intermediate developers through hands-on coaching across concurrent engagements.',
    ],
    stack: ['Engineering Leadership', 'Delivery', 'Mentorship'],
  },
  {
    period: '2016 — 2022',
    company: 'National University of Science & Technology',
    role: 'Team Lead',
    location: 'Islamabad',
    points: [
      'Directed end-to-end project lifecycles for a major educational institution, optimizing workflows and HR processes with a lean team.',
      'Mentored staff and served as Principal Investigator on diverse industrial and academic projects under tight deadlines.',
    ],
    stack: ['Project Leadership', 'Operations'],
  },
]

export const skillGroups = [
  {
    label: 'LLM / NLP',
    items: ['LLM/NLP', 'RAG', 'LangGraph', 'CrewAI', 'GraphRAG', 'Neo4j', 'LlamaIndex', 'Semantic Kernel', 'PydanticAI'],
  },
  {
    label: 'ML / AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Fine-Tuning Pipeline', 'Raga AI'],
  },
  {
    label: 'Data & Retrieval',
    items: ['SQL DB', 'DB2', 'Qdrant', 'Redis'],
  },
  {
    label: 'Infrastructure',
    items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'RabbitMQ'],
  },
  {
    label: 'Full-stack',
    items: ['Angular', 'React.js', 'Node.js', 'Python', 'FastAPI', 'GraphQL', 'C# .NET', 'Java', 'Spring Boot', 'VBA', 'Vue.js'],
  },
]

export const certifications = [
  {
    name: 'Claude with the Anthropic API',
    org: 'Anthropic',
    date: 'May 2026',
    orgLogo: '/cert-anthropic.png',
    verifyUrl: 'https://verify.skilljar.com/c/mccnb6rcubpm',
  },
  {
    name: 'IBM AI Developer',
    org: 'IBM · Coursera',
    date: 'Apr 2026',
    orgLogo: '/cert-ibm.png',
    verifyUrl: 'https://coursera.org/verify/professional-cert/D4CLONJ2DTZC',
  },
  {
    name: 'IBM Data Science',
    org: 'IBM · Coursera',
    date: 'Mar 2026',
    orgLogo: '/cert-ibm.png',
    verifyUrl: 'https://coursera.org/verify/professional-cert/NATIHRPVAIS7',
  },
  {
    name: 'Machine Learning with Python',
    org: 'IBM · Coursera',
    date: 'Mar 2026',
    orgLogo: '/cert-ibm.png',
    verifyUrl: 'https://coursera.org/verify/H4VCEY3B0RVM',
  },
  {
    name: 'EITCA/AI — Artificial Intelligence Programme',
    org: 'EITCA, Brussels',
    date: 'Nov 2025',
    orgLogo: '/cert-eitci.png',
    detail: '24 ECTS credits — umbrella academy credential covering the 10 EITC exams below',
    verifyUrl: 'https://www.eitci.org/validate',
    components: [
      { code: 'EITC/AI/ADL', label: 'Advanced Deep Learning', score: '80%' },
      { code: 'EITC/AI/ARL', label: 'Advanced Reinforced Learning', score: '73.33%' },
      { code: 'EITC/AI/DLTF', label: 'Deep Learning with TensorFlow', score: '86.67%' },
      { code: 'EITC/AI/DLPTFK', label: 'Deep Learning w/ Python, TensorFlow & Keras', score: '86.67%' },
      { code: 'EITC/AI/DLPP', label: 'Deep Learning with Python & PyTorch', score: '66.67%' },
      { code: 'EITC/AI/MLP', label: 'Machine Learning with Python', score: '93.33%' },
      { code: 'EITC/AI/TFF', label: 'TensorFlow Fundamentals', score: '80%' },
      { code: 'EITC/AI/TFQML', label: 'TensorFlow Quantum Machine Learning', score: '73.33%' },
      { code: 'EITC/AI/GCML', label: 'Google Cloud Machine Learning', score: '73.33%' },
      { code: 'EITC/AI/GVAPI', label: 'Google Vision API', score: '66.67%' },
    ],
  },
  {
    name: 'EITC/CL/GCP — Google Cloud Platform',
    org: 'EITCI, Brussels',
    date: 'Nov 2025',
    orgLogo: '/cert-eitci.png',
    detail: 'Examination result: 73.33%',
    verifyUrl: 'https://www.eitci.org/validate',
  },
  {
    name: 'EITC/CP/PPF — Python Programming Fundamentals',
    org: 'EITCI, Brussels',
    date: 'Oct 2025',
    orgLogo: '/cert-eitci.png',
    detail: 'Examination result: 66.67%',
    verifyUrl: 'https://www.eitci.org/validate',
  },
]

export const projects = [
  {
    name: 'CLIP — Media Intelligence Vault',
    period: '2026',
    summary:
      'SaaS media intelligence vault: analyze, store, and search media assets using AI-generated metadata.',
    details: [
      'Streamlit-based interface for uploading media and generating searchable AI metadata over the asset library.',
      'Deployed as a running Hugging Face Space for interactive demoing.',
    ],
    stack: ['Streamlit', 'CLIP / Embeddings', 'Media Metadata', 'Search'],
    demo: 'https://huggingface.co/spaces/linkstatic1/clip',
    demoLabel: 'Hugging Face Space ↗',
    video: 'https://youtu.be/-g1v2wsxlGc',
  },
  {
    name: 'Storytime',
    period: 'Personal project',
    summary:
      'Native Android storytelling application built using Jetpack Compose, featuring interactive audio narration and parent-controlled limits.',
    details: [
      'Designed with Jetpack Compose, Dagger Hilt, and Firebase Firestore, incorporating Lottie animations for an immersive, child-friendly UX.',
      'Built-in parent dashboard featuring custom screen-time limits, profile creation, and multi-language support (English/Urdu).',
    ],
    stack: ['Kotlin', 'Android', 'Gradle'],
    github: 'https://github.com/linkstatic12/storytime-app',
    video: 'https://www.youtube.com/shorts/232nYX1t5q0',
  },
  {
    name: 'Virtual Try-On — StableViTON Fine-Tune',
    period: '2026',
    summary:
      'Production-grade virtual garment try-on system adapted from the StableViTON diffusion architecture. Users upload a product image and a model photo; the pipeline warps and blends the garment onto the model with photorealistic, pose-aware fidelity — demonstrated live in the video below.',
    details: [
      'Fine-tuned the open-source rlawjdghek/StableViTON latent diffusion model with custom garment–person pair datasets, improving edge-alignment and texture fidelity on out-of-distribution clothing categories.',
      'Added a preprocessing stage (OpenPose keypoint extraction + DensePose body segmentation) to robustly handle arbitrary model poses without manual masking.',
      'Built a FastAPI inference server with async batching, reducing per-request latency by ~40% compared to a naive synchronous implementation.',
      'Packaged as a Docker container deployable on GPU-enabled cloud instances (AWS EC2 g4dn / Azure NC series) with automatic CUDA memory management and half-precision inference.',
      'Integrated a Streamlit demo UI for rapid A/B comparison of garments on multiple base models.',
    ],
    stack: ['Stable Diffusion', 'StableViTON', 'PyTorch', 'FastAPI', 'Docker', 'DensePose', 'OpenPose', 'AWS'],
    github: 'https://github.com/rlawjdghek/StableViTON',
    video: 'https://www.youtube.com/watch?v=NjhF-DiBwok',
  },
  {
    name: 'Nemotron-3 Reasoning Pipeline',
    period: '2026',
    summary:
      'Full SFT + GRPO fine-tuning pipeline for NVIDIA\u2019s Nemotron-3 Nano (30B-A3B) Mamba-hybrid reasoning model, built for the NVIDIA Nemotron-3 Reasoning Challenge.',
    details: [
      'Stage 1 — supervised fine-tuning on gold puzzle answers with LoRA (rank 32) targeted at the Mamba-H SSM in_proj/out_proj/up_proj/down_proj layers.',
      'Stage 2 — GRPO reinforcement learning with three reward signals: answer correctness, output-format compliance, and a length penalty.',
      'Diagnosed and patched five Blackwell-SM-12.0-specific Triton/CUDA compilation bugs (RMSNorm fallback, ptxas path fix, Mamba3 stub, fast-path disable, Triton env spoofing) required to run on RTX PRO 6000 hardware.',
      'Packaged and validated a submission adapter (safetensors + config) under a strict LoRA-rank constraint.',
    ],
    stack: ['LoRA', 'GRPO', 'TRL', 'PEFT', 'Nemotron-H', 'PyTorch', 'Blackwell/CUDA'],
    github: 'https://github.com/linkstatic12/NVIDIA-nemotron-3-reasoning',
    image: '/proj-nemotron.png',
  },
  {
    name: 'RSNA Knee Abnormality Detection',
    period: '2026',
    summary:
      'Multi-arm visual foundation ensemble detecting 12 knee pathologies from multi-planar MRI, built for the RSNA 2026 Knee Abnormality Detection Challenge — 0.911+ on the public leaderboard.',
    details: [
      'Stage 1 — 20-member DINOv2 ViT-Small ensemble with 6-slot cross-attention over sagittal/coronal/axial sequences, deterministic DICOM geometry normalization, and 10-window sliding TTA with target-specific pooling.',
      'Stage 2 — 5-fold cross-series spatial attention capturing inter-plane 3D alignment, rank-blended with the Stage 1 consensus.',
      'Stage 3 — domain-specific RadImageNet ResNet-50 heads with selective per-target gating, strictly preserving Baker\u2019s cyst and fracture predictions from dilution.',
      'Multilingual (English/German/Latin/French) NLP report-distillation engine converting free-text radiology reports into probabilistic soft labels.',
    ],
    stack: ['DINOv2', 'ResNet-50', 'Medical Imaging', 'DICOM', 'Ensemble Learning', 'NLP'],
    github: 'https://github.com/linkstatic12/RNSA_knee_abormality_model',
    image: '/proj-rsna.png',
  },
  {
    name: 'ShariaGPT',
    period: '2025 — 2026',
    summary:
      'Production RAG assistant answering Islamic finance questions grounded in Sharia source documents, built for financial institutions in the Middle East.',
    details: [
      'RAG pipeline over 8 Sharia finance references (Murabaha, Sukuk, Ijara, Mudaraba, Musharaka, Takaful, Riba, Zakat) served through FastAPI with Qdrant Cloud retrieval and GPT-4o-mini via OpenRouter.',
      'Pre-LLM PII redaction (Emirates ID, IBAN, account numbers, phone, email) and stateful Redis-backed sessions.',
      'Compliance tooling aligned with regional frameworks (UAE NESA, Saudi SAMA, PDPL/GDPR): audit logging, data-export, and right-to-be-forgotten endpoints.',
      'Automated evaluation suite covering grounding accuracy, PII redaction, and off-topic refusal.',
    ],
    stack: ['RAG', 'FastAPI', 'Qdrant', 'Redis', 'OpenRouter', 'Compliance'],
    github: 'https://github.com/linkstatic12/shariagpt',
    demo: 'https://shariagpt.onrender.com/',
    image: '/shariagpt.png',
  },
  {
    name: 'Raspiwii',
    period: 'Personal project',
    summary:
      'Python bridge between a Raspberry Pi and a MultiWii flight controller over serial/USB using the MultiWii Serial Protocol (MSP).',
    details: [
      'Reads and writes MSP frames over the flight controller\u2019s USB-serial link, enabling telemetry capture and control experiments directly from a Raspberry Pi.',
      'Implements the full MultiWii Serial Protocol (MSP) command set — querying sensor data (gyro, accelerometer, altitude), motor outputs, and RC channel values in real time.',
      'Designed as a bidirectional bridge: Pi can arm/disarm the controller, set PID gains, and stream raw attitude data for logging or closed-loop control experiments.',
      'Lightweight, dependency-light (pyserial) implementation aimed at engineers experimenting with flight-controller internals without proprietary tooling.',
    ],
    stack: ['Raspberry Pi', 'MultiWii / MSP', 'Serial Comms', 'Python'],
    github: 'https://github.com/linkstatic12/Raspiwii',
    image: '/proj-raspiwii.png',
  },
  {
    name: 'AI Marketplace — Admin Dashboard',
    period: '2026',
    summary: 'Full-featured admin dashboard for an AI-marketplace SaaS platform — real-time seller analytics, multi-channel revenue tracking, and AI-driven store audits, deployed as a React SPA on Vercel.',
    details: [
      'Real-time KPI cards tracking profit, return rate (FIT), sell-through rate (STR), deadstock value, and platform ROAS with live delta indicators.',
      'Revenue intelligence module with daily/weekly/monthly area charts and an AI forecast engine surfacing +12.4% growth projections.',
      'Channel Pulse panel — aggregated acquisition metrics across Instagram Shop, TikTok Shop, WhatsApp Business, and Online Store with ROAS and sales multipliers.',

    ],
    stack: ['React', 'Vercel', 'Chart.js', 'REST API'],
    demo: 'https://aimarketplace-phi.vercel.app/admin',
    demoLabel: 'Live admin ↗',
    image: '/proj-ai-marketplace.png',
  },
  {
    name: 'Home Automation Dashboard',
    period: 'Personal project',
    summary:
      'Web-based home automation interface to monitor and manage smart devices — lights, fans, and a security hub — across rooms.',
    details: [
      'Dedicated room views for Bedroom, Drawing Room, Garage, and Kitchen with visual status indicators for lights, ceiling and pedestal fans, and a central hub.',
      'Front-door and porch-light security monitoring, plus PHP backend services for user/employee access and reporting.',
      'Responsive, touch-friendly frontend built with Bootstrap and jQuery Mobile over a PHP + SQL backend.',
    ],
    stack: ['PHP', 'SQL', 'Bootstrap', 'jQuery Mobile'],
    github: 'https://github.com/linkstatic12/homeautomation2',
    image: '/iot-home.png',
  },
  {
    name: 'Predicting Irrigation Needs',
    period: '2026',
    summary:
      'GPU-accelerated XGBoost classification pipeline for the Kaggle Playground Series S6E4, predicting irrigation need (Low / Medium / High) with a 0.9735 OOF Balanced Accuracy on dual T4 hardware.',
    details: [
      'Custom feature engineering — Heat_Stress_Index, Evaporation_Potential, and Moisture_Rain_Interaction derived from raw temperature, humidity, soil-moisture, and rainfall signals.',
      'XGBClassifier with tree_method=\'hist\' and device=\'cuda\', trained on a 5-fold StratifiedKFold split with balanced sample weights to handle class imbalance.',
      'Parallel Optuna hyperparameter search — 30 trials (n_jobs=2) targeting balanced accuracy; final logit-based probability bias tuning for further metric lift.',
      'Achieved ~0.9735 OOF Balanced Accuracy; output: submission_dual_t4_optimized.csv for Kaggle submission.',
    ],
    stack: ['XGBoost', 'Optuna', 'CUDA / GPU', 'scikit-learn', 'Python', 'Kaggle'],
    github: 'https://github.com/linkstatic12/predicting_irrigation_needs',
  },
  {
    name: 'Warcraft Windows — Cross-Platform Port',
    period: 'Personal project',
    summary:
      'An unofficial, faithful recreation of Blizzard\'s classic Warcraft II, re-engineered from the ground up to run natively on Windows, macOS, Android, and iOS. Built as a tribute to a legendary RTS title, the project preserves the original gameplay experience while modernising the runtime to work on contemporary hardware and operating systems.',
    details: [
      'Multi-platform Gradle build targeting four runtimes simultaneously — Windows desktop (LibGDX/LWJGL), macOS desktop, Android (Dalvik/ART), and iOS (RoboVM) — from a single shared core.',
      'Faithfully reimplemented game loop covering unit AI, fog-of-war, pathfinding, resource extraction, tech-tree progression, and full multiplayer session management.',
      'Asset pipeline supports the original game\'s data files, performing format conversion and sprite atlas packing at build time so no proprietary assets are bundled in the repo.',
      'CI/CD via Travis CI with CodeClimate static analysis and Codecov coverage tracking to maintain quality across all platform targets.',
      'Structured across modular Gradle sub-projects (core, desktop, android, ios, integration, tools) enabling independent compilation and targeted testing per platform.',
    ],
    stack: ['Java', 'LibGDX', 'Gradle', 'Android', 'iOS / RoboVM', 'Game Development', 'CI/CD'],
    github: 'https://github.com/linkstatic12/warcraft-windows',
    image: '/warcraft.png',
  },
]

export const education = [
  {
    school: 'Bahria University',
    detail: 'Bachelors, Electronics — Grade A',
    location: 'Islamabad',
    period: 'Oct 2010 — Oct 2014',
  },
  {
    school: 'Founder Institute',
    detail: 'Entrepreneurial Studies, Business, Management, Marketing',
    location: 'Remote',
    period: 'Jan 2025 — Jun 2025',
  },
]
