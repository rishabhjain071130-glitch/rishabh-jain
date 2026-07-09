"use client";

import * as React from "react";
import { Brain, Sparkles, Send, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface QAPair {
  keywords: string[];
  answer: string;
}

const qaDatabase: QAPair[] = [
  {
    keywords: ["internship", "hire", "job", "work", "available", "position"],
    answer: "Rishabh is actively seeking Software Engineering internships (Full Stack, Backend, or Security). He has completed internships at Labmentix (Web Development) and InAmigos Foundation (Web Dev) and is open to collaboration or full-time opportunities.",
  },
  {
    keywords: ["skills", "languages", "stack", "technologies", "frameworks", "build"],
    answer: "Rishabh's primary languages are TypeScript, JavaScript, Python, and C. On the web side, he builds with React, Next.js, Tailwind CSS, Node.js, Express, and MongoDB. In security and AI, he focuses on OWASP prevention, authentication, and LLM prompt engineering.",
  },
  {
    keywords: ["project", "edupilot", "mentoring", "agents", "ai"],
    answer: "His featured project is EduPilot AI, a multi-agent career mentor system built using Next.js, React, Node.js, and GenAI APIs. It guides students by evaluating skill gaps and generating custom learning roadmaps.",
  },
  {
    keywords: ["security", "cyber", "protection", "safe", "owasp", "networks"],
    answer: "Rishabh has specialized training in Web Security and OWASP basics. In his internships, he remediated application security vulnerabilities, audited request logs, and studied network protocol security.",
  },
  {
    keywords: ["contact", "email", "reach", "socials", "phone"],
    answer: "You can reach out to Rishabh Jain by sending a message via the secure Contact Form at the bottom of this page. Standard email and LinkedIn links will be updated in the profiles shortly.",
  },
  {
    keywords: ["who", "biography", "background", "about", "india", "education", "college", "university", "gla"],
    answer: "Rishabh Jain is a Computer Science student based in India. He believes in learning by building practical, secure software solutions and continuously mastering AI and Cyber Security systems. Rishabh is currently pursuing his 3rd year in Computer Science Engineering from GLA University Mathura(UP). He is a Security Enthusiast who is passionate about Cyber Security, AI and Web Development. He is a quick learner and a team player. He is also a good communicator and has a strong work ethic.",
  },
];

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export const AskRishabhAI: React.FC = () => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Hi there! I am Rishabh's offline AI assistant. Ask me anything about his projects, technical skills, internships, or availability.",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const findBestResponse = (query: string): string => {
    const cleanQuery = query.toLowerCase().trim();

    // Exact keyword count match
    let bestMatch: QAPair | null = null;
    let maxMatches = 0;

    for (const qa of qaDatabase) {
      let matches = 0;
      for (const word of qa.keywords) {
        if (cleanQuery.includes(word)) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = qa;
      }
    }

    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }

    return "I couldn't find a direct match for that question. You can try asking about his 'internships', 'projects' (like EduPilot AI), 'technical skills', or how to 'contact' him.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userQuery = input;
    setMessages((prev) => [...prev, { sender: "user", text: userQuery }]);
    setInput("");
    setIsTyping(true);

    // Mock AI analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const response = findBestResponse(userQuery);
    setMessages((prev) => [...prev, { sender: "ai", text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-card border border-border-subtle rounded-md flex flex-col h-[400px] overflow-hidden select-none">
      {/* Header bar */}
      <div className="bg-bg-secondary px-6 py-4 border-b border-border-subtle flex items-center gap-2.5 shrink-0 text-left">
        <div className="w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
          <Brain className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1">
            OS Mentorship Agent
            <Sparkles className="w-3.5 h-3.5 text-warning" />
          </h4>
          <p className="text-[10px] font-mono text-text-muted">STATUS: ONLINE / LOCAL EMBEDDED MODEL</p>
        </div>
      </div>

      {/* Messages console area */}
      <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin flex flex-col">
        {messages.map((msg, index) => {
          const isAI = msg.sender === "ai";
          return (
            <div
              key={index}
              className={`flex gap-3 max-w-[85%] ${isAI ? "self-start text-left" : "self-end flex-row-reverse text-right"
                }`}
            >
              {/* Avatar circle */}
              <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center border ${isAI
                  ? "bg-brand-blue/10 border-brand-blue/20 text-brand-blue"
                  : "bg-white/5 border-white/10 text-text-secondary"
                }`}>
                {isAI ? <Brain className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
              </div>

              {/* Message text bubble */}
              <div className={`p-3 rounded text-xs leading-relaxed ${isAI
                  ? "bg-bg-secondary border border-border-subtle text-text-secondary"
                  : "bg-brand-blue text-white shadow-sm"
                }`}>
                {msg.text}
              </div>
            </div>
          );
        })}

        {/* Mock typing indicator dots */}
        {isTyping && (
          <div className="flex gap-3 max-w-[85%] self-start text-left">
            <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center border bg-brand-blue/10 border-brand-blue/20 text-brand-blue">
              <Brain className="w-3.5 h-3.5" />
            </div>
            <div className="bg-bg-secondary border border-border-subtle p-3 rounded flex items-center gap-1.5 h-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
      </div>

      {/* Input panel prompt */}
      <form onSubmit={handleSend} className="p-4 border-t border-border-subtle bg-bg-secondary/40 flex gap-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question (e.g. tell me about internships)..."
          className="flex-1 bg-card border border-border-subtle rounded-md px-4 py-2 text-xs text-white placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors font-mono"
        />
        <Button type="submit" size="sm" className="h-full shrink-0">
          <Send className="w-3.5 h-3.5" />
        </Button>
      </form>
    </div>
  );
};
