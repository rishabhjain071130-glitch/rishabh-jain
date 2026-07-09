import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "inamigos",
    company: "InAmigos Foundation",
    role: "Web Development Intern",
    status: "Completed",
    duration: "Summer 2025",
    description: "Built responsive user interfaces and worked on backend route integration during a virtual summer internship.",
    highlights: [
      "Created responsive layout sections using React and Tailwind CSS.",
      "Connected React components to Node.js backend REST API endpoints.",
      "Used Git and GitHub for version control, branching, and pull requests.",
      "Tested features locally to ensure alignment with design mockups."
    ],
    certificate: "/certificates/inamigos/Screenshot 2026-07-04 195855.png",
    github: ""
  },
  {
    id: "labmentix",
    company: "Labmentix",
    role: "Web Development Intern",
    status: "Verified",
    duration: "6 Months (In Progress)",
    description: "Gaining practical experience in full-stack web application features and API integrations.",
    highlights: [
      "Building user interface components with React, HTML, and CSS.",
      "Assisting in connecting Express backend controllers with MongoDB databases.",
      "Writing documentation for APIs and setting up local development guides.",
      "Participating in code review sessions to improve code readability and fix bugs."
    ],
    certificate: "/certificates/labmentix/Labmentix_Offer_Letter_Rishabh_Jain.pdf",
    github: ""
  }
];
