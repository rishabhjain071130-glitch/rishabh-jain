"use client";

import * as React from "react";
import { Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/shared/BrandIcons";
import { profile } from "@/content/profile";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-12 md:py-16 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand block */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-white text-base font-semibold tracking-wider">
              {profile.name.toUpperCase().replace(/\s+/g, ".")}
            </h3>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              Building secure, intelligent, and scalable software. Focused on Cyber Security, Artificial Intelligence, and Full Stack Development.
            </p>
          </div>

          {/* Navigation block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  onClick={(e) => handleNavClick(e, "#journey")}
                  className="hover:text-white transition-colors"
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  onClick={(e) => handleNavClick(e, "#certificates")}
                  className="hover:text-white transition-colors"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, "#skills")}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Connect
            </h4>
            <div className="flex gap-4">
              <span className="group relative">
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-card border border-border-subtle rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  Visit GitHub Profile
                </span>
                <a
                  href="https://github.com/rishabhjain071130-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-blue/30 transition-colors"
                  aria-label="GitHub Profile"
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
                  className="w-10 h-10 rounded-md border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-blue/30 transition-colors"
                  aria-label="LinkedIn Profile"
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
                  className="w-10 h-10 rounded-md border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-blue/30 transition-colors"
                  aria-label="Contact Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="border-t border-border-subtle/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <div className="text-center md:text-left">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Version {process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"}</span>
            <span className="hidden md:inline text-border-subtle">|</span>
            <span>Built with Next.js, React & Tailwind v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
