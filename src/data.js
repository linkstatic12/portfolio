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
    label: 'LLM / RAG',
    items: ['LangGraph', 'CrewAI', 'RAG', 'GraphRAG', 'Neo4j', 'LlamaIndex', 'Semantic Kernel', 'PydanticAI'],
  },
  {
    label: 'ML / AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Fine-Tuning Pipelines', 'Raga AI'],
  },
  {
    label: 'Data & Retrieval',
    items: ['SQL', 'DB2', 'Qdrant', 'Redis'],
  },
  {
    label: 'Infrastructure',
    items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'RabbitMQ'],
  },
  {
    label: 'Full-stack',
    items: ['React.js', 'Angular', 'Vue.js', 'Node.js', 'Python', 'FastAPI', 'GraphQL', 'C# .NET', 'Java', 'Spring Boot', 'VBA'],
  },
]

export const certifications = [
  {
    name: 'Claude with the Anthropic API',
    org: 'Anthropic',
    date: 'May 2026',
    verifyUrl: 'https://verify.skilljar.com/c/mccnb6rcubpm',
  },
  {
    name: 'IBM AI Developer',
    org: 'IBM · Coursera',
    date: 'Apr 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/D4CLONJ2DTZC',
  },
  {
    name: 'IBM Data Science',
    org: 'IBM · Coursera',
    date: 'Mar 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/NATIHRPVAIS7',
  },
  {
    name: 'Machine Learning with Python',
    org: 'IBM · Coursera',
    date: 'Mar 2026',
    verifyUrl: 'https://coursera.org/verify/H4VCEY3B0RVM',
  },
  {
    name: 'EITCA/AI — Artificial Intelligence Programme',
    org: 'EITCA, Brussels',
    date: 'Nov 2025',
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
    detail: 'Examination result: 73.33%',
    verifyUrl: 'https://www.eitci.org/validate',
  },
  {
    name: 'EITC/CP/PPF — Python Programming Fundamentals',
    org: 'EITCI, Brussels',
    date: 'Oct 2025',
    detail: 'Examination result: 66.67%',
    verifyUrl: 'https://www.eitci.org/validate',
  },
]

export const projects = [
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
  },
  {
    name: 'Raspiwii',
    period: 'Personal project',
    summary:
      'Python bridge between a Raspberry Pi and a MultiWii flight controller over serial/USB using the MultiWii Serial Protocol (MSP).',
    details: [
      'Reads and writes MSP frames over the flight controller\u2019s USB-serial link, enabling telemetry capture and control experiments directly from a Raspberry Pi.',
      'Lightweight, dependency-light (pyserial) implementation aimed at engineers experimenting with flight-controller internals.',
    ],
    stack: ['Raspberry Pi', 'MultiWii / MSP', 'Serial Comms', 'Python'],
    github: 'https://github.com/linkstatic12/Raspiwii',
  },
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
    name: 'AI Marketplace — Admin Dashboard',
    period: '2026',
    summary: 'Admin dashboard for an AI-marketplace platform, deployed as a React single-page app on Vercel.',
    details: [
      'Internal admin interface for managing the AI Marketplace platform\u2019s listings and operations.',
    ],
    stack: ['React', 'Vercel'],
    demo: 'https://aimarketplace-phi.vercel.app/admin',
    demoLabel: 'Live admin ↗',
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
  },
  {
    name: 'Storytime',
    period: 'Personal project',
    summary: 'Android (Kotlin/Gradle) storytelling app project.',
    details: ['Native Android app scaffolded with Kotlin and Gradle for an interactive storytelling experience.'],
    stack: ['Kotlin', 'Android', 'Gradle'],
    github: 'https://github.com/linkstatic12/storytime-app',
    video: 'https://www.youtube.com/shorts/232nYX1t5q0',
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
