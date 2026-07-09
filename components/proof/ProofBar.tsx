"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, CodeXml, FolderGit } from "lucide-react";

interface ProofMetric {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const metrics: ProofMetric[] = [
  {
    value: "2",
    label: "Professional Internships",
    sublabel: "Web Dev & Cyber Security",
    icon: <CodeXml className="w-5 h-5 text-brand-blue" />,
  },
  {
    value: "1",
    label: "Featured AI Agent",
    sublabel: "EduPilot Multi-Agent System",
    icon: <BrainCircuit className="w-5 h-5 text-brand-cyan" />,
  },
  {
    value: "6+",
    label: "Core Specializations",
    sublabel: "AI, Cyber Security & Full Stack",
    icon: <FolderGit className="w-5 h-5 text-brand-purple" />,
  },
  {
    value: "100%",
    label: "Defensive Coding",
    sublabel: "OWASP Prevention Practices",
    icon: <ShieldCheck className="w-5 h-5 text-success" />,
  },
];

export const ProofBar: React.FC = () => {
  return (
    <div className="bg-bg-secondary/40 border-y border-border-subtle py-8 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex items-start gap-3 group"
            >
              <div className="p-2 rounded bg-card border border-border-subtle group-hover:border-brand-blue/30 transition-colors">
                {metric.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-xl md:text-2xl font-bold tracking-tight text-white font-mono flex items-baseline">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-text-primary uppercase tracking-wide">
                  {metric.label}
                </div>
                <div className="text-[10px] text-text-muted font-mono leading-none">
                  {metric.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
