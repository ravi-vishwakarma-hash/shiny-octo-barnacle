export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  techStack: string[];
  achievements: string[];
  accent: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}
