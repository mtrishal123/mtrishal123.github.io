// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Trishal Varma Mudunuri",
  firstName: "Trishal",
  initials: "TV",
  location: "San Francisco, CA",
  email: "mtrishal379@gmail.com",
  github: "https://github.com/mtrishal123",
  githubUser: "mtrishal123",
  linkedin: "https://www.linkedin.com/in/trishalvarma",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI & LLM Engineer",
    "Backend & Cloud Engineer",
    "DevSecOps Enthusiast",
  ],
  tagline: "Building reliable systems at the intersection of backend, cloud, and AI.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "AdsGency AI",
    role: "Software Engineer Intern",
    period: "Jun 2026 – Sep 2026",
    location: "San Francisco, CA",
    points: [
      "Built a Redis-backed idempotency framework across 8 ad platforms that eliminated duplicate ad generation and double-charging on retries, using a SET NX claim/replay contract with fail-open design.",
      "Engineered an AI image suggestion pipeline using GPT-4o-mini scoring and an SSRF-hardened S3 import API, surfacing ranked brand images directly in Meta and TikTok media upload flows.",
      "Shipped the Snapchat carousel ad type end-to-end across 3 repos, adding a new ad format alongside existing image and video types.",
      "Resolved campaign analytics failures across TikTok, Snapchat, Reddit and Pinterest, fixing access-token injection and ad-account loading bugs.",
      "Implemented a DevSecOps pipeline across 3 repos with Bandit SAST blocking, Dependabot scanning, and Gitleaks detection.",
    ],
  },
  {
    company: "ConnectedH",
    role: "Software Engineer",
    period: "Jan 2022 – Dec 2023",
    location: "Gurgaon, India",
    points: [
      "Owned full-stack development of a healthcare affiliate platform (Node.js, TypeScript, React) with reusable API contracts and components, driving a 20% engagement uplift.",
      "Developed a live chat solution integrated with Zoho CRM using React, Node.js, TypeScript and WebSockets, removing appointment scheduling bottlenecks.",
      "Automated AWS S3 data lifecycle management with tiered storage and retention policies in Python (Boto3), cutting monthly cloud spend by 10%.",
    ],
  },
  {
    company: "IBM",
    role: "Associate Systems Engineer",
    period: "Dec 2019 – Sep 2021",
    location: "Bangalore, India",
    points: [
      "Executed CI/CD infrastructure for 10+ microservices with SAST/DAST gates in Jenkins, cutting deployment cycle time by 10%.",
      "Managed Kubernetes infrastructure with Python and Bash automation and Azure Blob Storage lifecycle policies for consistent non-prod releases.",
      "Maintained 99.9% production uptime with self-healing configurations and alerting that resolved pod failures before user impact.",
    ],
  },
];

export type Project = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

// TODO: replace `github` with each project's repo URL and add `demo` links where available.
export const projects: Project[] = [
  {
    title: "CodeVoyage",
    date: "Feb 2026",
    description:
      "An agentic AI platform built on Subconscious that orchestrates 5+ autonomous agents, using Exa Search for neural repository crawls across TypeScript/Node.js codebases. Token-efficient pipelines cut context retrieval latency by 40%.",
    tech: ["Agentic AI", "Multi-agent", "Exa Search", "TypeScript", "Node.js"],
    github: "https://github.com/mtrishal123",
  },
  {
    title: "DocuChat AI",
    date: "Nov 2025",
    description:
      "A production RAG pipeline with precision-optimized chunking and sliding-window context retention, delivering sub-2s multi-turn reasoning across 100+ page documents.",
    tech: ["RAG", "LangChain", "OpenAI", "Pinecone"],
    github: "https://github.com/mtrishal123",
  },
  {
    title: "Kanban Board",
    date: "Apr 2026",
    description:
      "A full-stack Kanban board with 15+ features including multi-dimensional filtering and real-time activity logging, backed by 6 normalized PostgreSQL tables with Row Level Security.",
    tech: ["React 19", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/mtrishal123",
  },
  {
    title: "Flashcard Study App",
    date: "Oct 2025",
    description:
      "An interactive study app with deck management, a timed quiz mode with live scoring, and cookie-based session authentication.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/mtrishal123",
  },
];

export const skills: Record<string, string[]> = {
  "AI / LLMs": ["RAG", "OpenAI API", "Claude API", "LangChain", "LangGraph", "Agentic AI", "Multi-agent Systems", "Prompt Engineering"],
  Frontend: ["TypeScript", "React", "JavaScript", "Next.js", "Vue.js", "Redux", "HTML/CSS"],
  "Backend & APIs": ["Python", "Node.js", "Express", "Flask", "FastAPI", "Java", "Spring", "Go", "C++", "Kafka", "REST"],
  "Databases & Caching": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone", "Firebase"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git", "Linux", "GitOps"],
  Monitoring: ["Prometheus", "Grafana", "CloudWatch", "Splunk", "PostHog"],
};

export const education = {
  school: "Northeastern University",
  degree: "Master of Science, Computer Science",
  period: "Jan 2024 – Dec 2025",
  location: "Boston, MA",
};
