import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "TypeScript", proficiency: "Intermediate" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "Python", proficiency: "Intermediate" },
      { name: "C", proficiency: "Intermediate" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", proficiency: "Intermediate" },
      { name: "Next.js", proficiency: "Intermediate" },
      { name: "Tailwind CSS", proficiency: "Advanced" },
      { name: "HTML", proficiency: "Advanced" },
      { name: "CSS", proficiency: "Advanced" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: "Basics" },
      { name: "Express", proficiency: "Basics" },
      { name: "MongoDB", proficiency: "Basics" },
      { name: "REST APIs", proficiency: "Intermediate" }
    ]
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Networking", proficiency: "Intermediate" },
      { name: "Security Fundamentals", proficiency: "Intermediate" },
      { name: "Web Security (OWASP)", proficiency: "Basics" },
      { name: "Network Defense", proficiency: "Basics" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub", proficiency: "Intermediate" }
    ]
  }
];
