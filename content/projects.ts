import { ProjectCaseStudy } from "@/types";

export const projects: ProjectCaseStudy[] = [
  {
    id: "edupilot-ai",
    title: "EduPilot AI",
    category: "Artificial Intelligence",
    status: "Completed",
    description: "A career guidance helper prototype that formats learning roadmaps based on student interests.",
    problem: "Students struggle to navigate tech careers due to generic, static advice spread across different guides.",
    solution: "A Python prototype that queries an LLM API to generate career timelines and custom learning steps.",
    features: [
      "Career Roadmap Generator",
      "Interests Evaluation Form",
      "Quick Reference Dashboard",
      "Mentorship Chatbot Interface"
    ],
    techStack: [
      "Python",
      "HTML",
      "CSS",
      "Git & GitHub"
    ],
    github: "https://github.com/rishabhjain071130-glitch/EduPilot-AI",
    liveDemo: "https://edupilot-ai-nitweutyqdvdwhc6uypzqb.streamlit.app/",
    screenshots: [
      "/projects/edupilot/dashboard.jpg",
      "/projects/edupilot/roadmap.jpg"
    ],
    architecture: "A Streamlit web application that captures user form responses, passes them to a structured Python script, queries the Gemini API using optimized system prompts, and prints the result dynamically.",
    featured: true,
    difficulty: "Medium",
    role: "Python Developer",
    lessonsLearned: "Learned how to design clear API prompt templates and handle API key storage securely in environment variables.",
    futureImprovements: [
      "Resume text scanner",
      "Self-guided quiz panels",
      "Dynamic links to public tutorials"
    ],
    timeline: "Spring 2026",
    sections: [
      {
        title: "Overview",
        content: "EduPilot AI is a Python career mentorship helper designed to address decision fatigue. It takes basic background inputs and generates learning pathways."
      },
      {
        title: "Problem",
        content: "Traditional career advice is expensive and static, failing to provide actionable steps for beginners trying to navigate technology fields."
      },
      {
        title: "Solution",
        content: "Built a Streamlit application where students select their fields of interest. The app queries a generative API to return a structured roadmap."
      },
      {
        title: "Engineering Decisions",
        content: "Selected Streamlit and Python for rapid deployment. Designed a simple formatting schema in prompt instructions to guarantee structured responses."
      },
      {
        title: "Challenges",
        content: "Faced output formatting issues when API responses included unstructured markdown. Resolved this by instructing the prompt to return strict key-value pairs."
      },
      {
        title: "Security",
        content: "Secured API keys locally. Implemented basic text-cleaning functions in Python to sanitize user text inputs before sending them to the API."
      },
      {
        title: "Outcome",
        content: "Deployed a local prototype that generates structured career roadmaps in under a minute, receiving positive feedback from classmates who tested it."
      },
      {
        title: "Future",
        content: [
          "Resume text scanner for skill extraction",
          "Interactive mock interview portal with real-time feedback",
          "Curated links to free tutorial channels"
        ]
      }
    ]
  },
  {
    id: "focusflow-ai",
    title: "FocusFlow AI",
    category: "AI / Productivity",
    status: "Completed",
    description: "An AI-powered productivity assistant built with Python, Streamlit, and Google Gemini that provides a unified workspace for text summarization, Q&A, content generation, text analysis, and smart suggestions.",
    problem: "Working with large amounts of information often requires users to switch between multiple tools for summarization, question answering, content creation, text analysis, and productivity planning.",
    solution: "FocusFlow AI brings these common productivity tasks into one AI-powered workspace using Gemini 2.5 Flash-Lite and Streamlit with secure API key handling and graceful rate-limit handling.",
    features: [
      "5 AI Productivity Modes",
      "Gemini 2.5 Flash-Lite",
      "Secure API Integration",
      "Modern Streamlit UI",
      "Live Deployment"
    ],
    techStack: [
      "Python",
      "Streamlit",
      "Google Gemini API",
      "Google GenAI SDK",
      "Gemini 2.5 Flash-Lite"
    ],
    github: "https://github.com/rishabhjain071130-glitch/focusflow-ai",
    liveDemo: "https://focusflow-ai-kdakrcva45bz5t4xwrgxsy.streamlit.app/",
    screenshots: [
      "/projects/focusflow/dashboard.jpg"
    ],
    architecture: "Built with Python and Streamlit using the Google GenAI SDK to communicate with Gemini 2.5 Flash-Lite. Implements secure environment variable API key storage, empty-input validation, friendly error handling, and graceful rate-limit handling.",
    featured: false,
    difficulty: "Medium",
    role: "Python & AI Developer",
    lessonsLearned: "Gained hands-on experience in integrating Google GenAI SDK with Streamlit, handling LLM rate limits gracefully, and managing secure API keys.",
    futureImprovements: [
      "Multi-document side-by-side analysis",
      "Export summaries to PDF and Markdown",
      "Custom prompt preset library"
    ],
    timeline: "Summer 2026",
    sections: [
      {
        title: "Overview",
        content: "FocusFlow AI is an AI-powered productivity assistant built with Python, Streamlit, and Google Gemini. It provides a unified workspace for summarizing text, asking questions, generating content, analyzing text, and receiving actionable productivity suggestions. The application uses Gemini 2.5 Flash-Lite and provides a clean, modern interface designed to help users understand, create, and improve content more efficiently."
      },
      {
        title: "Problem",
        content: "Working with large amounts of information often requires users to switch between multiple tools for summarization, question answering, content creation, text analysis, and productivity planning. This creates unnecessary context switching and makes it harder to manage everyday information and content-related tasks efficiently."
      },
      {
        title: "Solution",
        content: "FocusFlow AI brings these common productivity tasks into one AI-powered workspace. It provides five integrated AI capabilities: Summarize Text, Ask AI, Generate Content, Analyze Text, and Smart Suggestions. The application also includes secure Gemini API key handling, empty-input validation, user-friendly error handling, and graceful rate-limit handling."
      },
      {
        title: "Key Features",
        content: [
          "5 AI Productivity Modes",
          "Gemini 2.5 Flash-Lite",
          "Secure API Integration",
          "Modern Streamlit UI",
          "Live Deployment"
        ]
      }
    ]
  },
  {
    id: "finflow",
    title: "FinFlow",
    category: "Web Development",
    status: "Completed",
    description: "A simple budgeting web application to track transactions and view spending categories.",
    problem: "Many personal budget tools are either overly complicated or require linking private banking login credentials.",
    solution: "A secure web application where users manually log transactions to monitor budget targets and view monthly expenditure charts.",
    features: [
      "Secure Password Authentication",
      "Budget Tracking Progress Indicators",
      "Expense Logging History Table",
      "Category Summary Charts"
    ],
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Git & GitHub"
    ],
    github: "https://github.com/rishabhjain071130-glitch/digitalloansystem",
    liveDemo: "", // Live deployment unavailable -> Private Deployment
    screenshots: [
      "/projects/finflow/dashboard.jpg"
    ],
    architecture: "A standard web architecture featuring a JavaScript frontend interacting with a local backend server to save transaction records and calculate budget aggregates.",
    featured: false,
    difficulty: "Medium",
    role: "Web Developer",
    lessonsLearned: "Practiced setting up database models, writing server middleware handlers, and managing secure user sessions.",
    futureImprovements: [
      "CSV file statements upload",
      "Automated recurring budget limits",
      "Multiple user profile settings"
    ],
    timeline: "Winter 2025",
    sections: [
      {
        title: "Overview",
        content: "FinFlow is a web budget manager designed to simplify expense tracking. Users can record spending and compare category totals against monthly goals."
      },
      {
        title: "Problem",
        content: "Spreadsheets require manual formatting, while professional budgeting applications often demand access to bank login credentials, creating security concerns."
      },
      {
        title: "Solution",
        content: "Created a private web utility that stores transaction records locally, giving users complete control of their personal finance logs."
      },
      {
        title: "Database Design",
        content: "Defined transaction schemas linking users, amount, category, and date. Optimized index parameters to keep report queries fast."
      },
      {
        title: "Authentication",
        content: "Secured logins using hashed passwords and token cookies. Set up backend authentication gates to protect transaction endpoints."
      },
      {
        title: "Dashboard",
        content: "Rendered clean data visualization charts showing spend distributions and custom goal progress bars."
      },
      {
        title: "Challenges",
        content: "Faced canvas scaling issues on mobile screen layouts. Resolved this by writing custom window resize handlers."
      },
      {
        title: "Future",
        content: [
          "Import logs from Excel sheets",
          "Automated recurring expense tags",
          "Visual reports print settings"
        ]
      }
    ]
  },
  {
    id: "portfolio-os",
    title: "Rishabh Portfolio OS",
    category: "Frontend Engineering",
    status: "Completed",
    description: "A terminal-themed developer portfolio website featuring simulated CLI navigation and clean typography.",
    problem: "Standard resume websites are static and fail to showcase interactive programming ability, accessibility standards, or secure input processing.",
    solution: "Built an interactive terminal-style digital resume with command palettes, rate-limited forms, and fluid layouts.",
    features: [
      "Simulated Terminal Console",
      "Responsive Sticky Navigation",
      "Interactive Menu Shortcuts",
      "Rate-Limited Safe Contact Form"
    ],
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Git & GitHub"
    ],
    github: "https://github.com/rishabhjain071130-glitch/rishabh-jain",
    liveDemo: "/", // Live deployment available
    screenshots: [
      "/projects/portfolio/homepage.jpg"
    ],
    architecture: "A Next.js static site directory using React client hooks for interactive states and custom media handlers for layout calculations.",
    featured: false,
    difficulty: "Medium",
    role: "Frontend Developer",
    lessonsLearned: "Learned to configure server-side page hydration, design custom focus navigation guides, and integrate automated build scripts.",
    futureImprovements: [
      "Custom terminal theme profiles",
      "Keyboard commands cheatsheet",
      "Localized visitor counter"
    ],
    timeline: "Summer 2026",
    sections: [
      {
        title: "Why this portfolio was built",
        content: "Built to demonstrate frontend coding skills, responsive layout design, and terminal interface interactions. It serves as an engaging resume."
      },
      {
        title: "Design system",
        content: "Created custom theme tokens using CSS variables. Designed high-contrast slate text and deep navy layouts for clean readability."
      },
      {
        title: "Component architecture",
        content: "Organized as a modular folder structure. Separated stateful components like the CLI console from static page sections to optimize load times."
      },
      {
        title: "Accessibility",
        content: "Added focus indicators for keyboard users, semantic tag hierarchy, aria labels, and animations that disable when prefers-reduced-motion is active."
      },
      {
        title: "Future roadmap",
        content: [
          "Add terminal color themes",
          "Build keyboard navigation shortcuts guides",
          "Implement visitor contact inquiries table"
        ]
      }
    ]
  }
];
