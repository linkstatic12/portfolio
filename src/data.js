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
  { name: 'Building with the Claude API', org: 'Anthropic', date: 'May 2026' },
  { name: 'IBM AI Developer', org: 'IBM', date: 'Apr 2026' },
  { name: 'IBM Data Science Specialization', org: 'IBM', date: 'Mar 2026' },
  { name: 'EITCA/AI Certification Programme', org: 'EITCA', date: 'Nov 2025' },
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
