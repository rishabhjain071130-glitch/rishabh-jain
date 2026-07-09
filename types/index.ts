export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  github?: string;
  liveDemo?: string;
  future?: string[];
  timeline: string;
  screenshots: string[];
  featured: boolean;
  difficulty: string;
  role: string;
  architecture: string;
  lessonsLearned: string;
  futureImprovements: string[];
  sections?: { title: string; content: string | string[] }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  status: string;
  duration: string;
  description: string;
  highlights: string[];
  certificate?: string;
  github?: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  richDetails?: string[];
  tags?: string[];
}

export interface SkillItem {
  name: string;
  proficiency: "Advanced" | "Intermediate" | "Basics" | "Explorer";
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  completionDate: string;
  credentialId?: string;
  verificationUrl?: string;
  previewImage: string;
  download: string;
  status: "Completed" | "In Progress";
  category?: string;
}

export interface Profile {
  name: string;
  headline: string;
  shortIntro: string;
  location: string;
  profilePhoto: string;
  email: string;
  phone: string;
}

