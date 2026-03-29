import { NavItem, ProjectItem, SkillCategory, StatItem, TimelineItem } from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const HERO_TYPING_WORDS: string[] = [
  'scalable APIs',
  'reliable backend systems',
  'clean .NET Core architecture',
  'high-performance data workflows'
];

export const HERO_STATS: StatItem[] = [
  { value: '3+ yrs', label: 'Professional experience' },
  { value: '4', label: 'Flagship backend products' },
  { value: '200 req/s', label: 'Peak API throughput delivered' }
];

export const ABOUT_POINTS: string[] = [
  'Backend Software Engineer with 3+ years of experience delivering enterprise workflows and scalable APIs.',
  'Hands-on expertise across C#, .NET Core, SQL Server, Web API development, and pragmatic system design.',
  'Focused on building maintainable services, improving query performance, and shipping features with measurable impact.'
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '01',
    skills: [
      { name: 'C#', level: 92, description: 'Clean architecture, async patterns, SOLID design' },
      { name: '.NET Core', level: 90, description: 'REST APIs, middleware, dependency injection' },
      { name: 'Web API', level: 88, description: 'Secure endpoints, validation, versioning, logging' }
    ]
  },
  {
    title: 'Database',
    icon: '02',
    skills: [
      { name: 'SQL Server', level: 89, description: 'Stored procedures, indexing, optimization' },
      { name: 'JSON/XML Data', level: 86, description: 'Structured content pipelines and data exchange' },
      { name: 'Query Tuning', level: 84, description: 'Performance analysis and bottleneck reduction' }
    ]
  },
  {
    title: 'Tools',
    icon: '03',
    skills: [
      { name: 'Git', level: 87, description: 'Branching, collaboration, release readiness' },
      { name: 'Postman', level: 85, description: 'API validation, testing, contract checks' },
      { name: 'Swagger', level: 82, description: 'Endpoint documentation and integration support' }
    ]
  },
  {
    title: 'Concepts',
    icon: '04',
    skills: [
      { name: 'System Design', level: 84, description: 'Scalability, resilience, modular boundaries' },
      { name: 'Performance', level: 88, description: 'Throughput tuning and response-time improvements' },
      { name: 'Code Quality', level: 90, description: 'Readable services, maintainable abstractions, reviews' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Polling-Based Chat System',
    summary:
      'Built a chat workflow using XML payloads and API polling to support reliable message synchronization in constrained environments.',
    techStack: ['C#', '.NET Core', 'Web API', 'XML', 'SQL Server'],
    achievements: [
      'Delivered stable real-time-like updates using optimized polling intervals',
      'Handled up to 200 requests per second during peak communication cycles',
      'Improved response consistency by simplifying XML parsing and API contracts'
    ],
    accent: 'linear-gradient(135deg, rgba(56, 189, 248, 0.85), rgba(110, 231, 216, 0.7))'
  },
  {
    title: 'Content Verification Workflow System',
    summary:
      'Designed a verification pipeline for structured content approval, enabling reviewers to validate, track, and approve submissions efficiently.',
    techStack: ['.NET Core', 'SQL Server', 'REST API', 'Role-based Access'],
    achievements: [
      'Reduced manual verification friction with streamlined reviewer states',
      'Improved workflow visibility using status-driven dashboard APIs',
      'Optimized approval turnaround by nearly 30% through query and process tuning'
    ],
    accent: 'linear-gradient(135deg, rgba(45, 212, 191, 0.88), rgba(59, 130, 246, 0.72))'
  },
  {
    title: 'JSON-Based Article CMS',
    summary:
      'Created a lightweight article content management system using JSON-driven structures to support flexible publishing and data portability.',
    techStack: ['C#', '.NET Core', 'JSON', 'SQL Server', 'Swagger'],
    achievements: [
      'Enabled dynamic article layouts with reusable JSON content models',
      'Improved editor productivity with predictable content schemas and APIs',
      'Lowered maintenance cost by keeping publishing logic modular and extensible'
    ],
    accent: 'linear-gradient(135deg, rgba(250, 204, 21, 0.84), rgba(249, 115, 22, 0.72))'
  },
  {
    title: 'Learning & Certification System',
    summary:
      'Developed a backend platform for learning progress, certification tracking, and rule-based eligibility across user journeys.',
    techStack: ['.NET Core', 'C#', 'SQL Server', 'API Integrations'],
    achievements: [
      'Modeled learning progress and certification rules for scalable feature rollout',
      'Improved reporting accuracy with stronger data contracts and backend validation',
      'Built extensible endpoints to support future integrations and learning modules'
    ],
    accent: 'linear-gradient(135deg, rgba(168, 85, 247, 0.82), rgba(59, 130, 246, 0.72))'
  }
];

export const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    company: 'MindStick Software Pvt Ltd',
    role: 'Backend Software Engineer',
    period: '2021 - Present',
    highlights: [
      'Built and maintained backend systems using C#, .NET Core, and SQL Server.',
      'Delivered business workflows for chat, verification, content management, and learning products.',
      'Partnered with cross-functional teams to optimize APIs, data access patterns, and release quality.'
    ]
  }
];

export const CONTACT_LINKS = {
  email: 'mailto:ravivishwakarmas349@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ravi-vishwakarma-a20b451b6/',
  github: 'https://github.com/ravi-vishwakarma-hash'
};

export const GITHUB_USERNAME = 'ravi-vishwakarma-hash';
