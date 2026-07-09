"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/shared/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Profile } from "@/components/ui/Profile";
import { ResumeManager } from "@/components/ui/ResumeManager";
import { profile } from "@/content/profile";

const focusRoles = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "AI Explorer",
  "Full Stack Developer",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Typing effect loop
  React.useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let timer: NodeJS.Timeout;
    const fullText = focusRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % focusRoles.length);
      }, 0);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, shouldReduceMotion]);

  const handleScrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 lg:pb-0 overflow-hidden bg-bg-primary">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-brand-blue/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-brand-cyan/5 blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Badge variant="soft" color="blue" className="px-3 py-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping mr-2 inline-block" />
              Open to Internships & Collaboration
            </Badge>
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-text-secondary text-sm font-semibold tracking-wider font-mono uppercase"
            >
              Hi, I&apos;m
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-fluid-hero font-bold tracking-tight text-white"
            >
              {profile.name}
            </motion.h1>

            {/* Dynamic typing role header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="h-8 md:h-10 text-brand-blue font-bold text-lg md:text-xl font-mono flex items-center"
            >
              <span>{shouldReduceMotion ? focusRoles[0] : currentText}</span>
              {!shouldReduceMotion && (
                <span className="w-1 h-5 md:h-6 bg-brand-blue ml-1 animate-pulse" />
              )}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[550px]"
          >
            {profile.shortIntro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button variant="primary" onClick={handleScrollToProjects}>
              View Projects
            </Button>

            {/* Centralized Resume Check Manager */}
            <ResumeManager />
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-6 pt-4 text-text-secondary"
          >
            <span className="group relative">
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-card border border-border-subtle rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                Visit GitHub Profile
              </span>
              <a
                href="https://github.com/rishabhjain071130-glitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white transition-colors block p-2 -m-2"
              >
                <GitHub className="w-5 h-5" />
              </a>
            </span>

            <span className="group relative">
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-card border border-border-subtle rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                Connect on LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/rishabh-jain-40079a396/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white transition-colors block p-2 -m-2"
              >
                <LinkedIn className="w-5 h-5" />
              </a>
            </span>

            <span className="group relative">
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-card border border-border-subtle rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                Email Rishabh
              </span>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="hover:text-white transition-colors block p-2 -m-2"
              >
                <Mail className="w-5 h-5" />
              </a>
            </span>
          </motion.div>
        </div>

        {/* Right Portrait/Visual Column: Now loads custom Profile component */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Profile size="md" />
          </motion.div>
        </div>
      </div>

      {/* Floating anchor scroll prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={handleScrollToProjects}>
        <ArrowDown className="w-5 h-5 text-text-muted hover:text-white transition-colors" />
      </div>
    </section>
  );
};
