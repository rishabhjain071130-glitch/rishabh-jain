"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal as TerminalIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { resumeConfig } from "@/content/resume";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const lastScrollY = React.useRef(0);

  // Monitor scroll for visibility (hide on scroll down, show on scroll up) and transparency
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection of sections to highlight active link
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["about", "journey", "projects", "skills", "certificates", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }}
            className="flex items-center gap-2 group font-mono text-white text-sm font-semibold tracking-wider hover:opacity-95"
          >
            <div className="w-8 h-8 rounded-sm bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center group-hover:border-brand-blue transition-colors">
              <TerminalIcon className="w-4 h-4 text-brand-blue" />
            </div>
            <span>RISHABH.JAIN</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action / Callout */}
          <div className="hidden md:flex items-center gap-3">
            {resumeConfig.filePath && (
              <Button
                variant="primary"
                size="sm"
                href={resumeConfig.filePath}
                download="Rishabh_Jain_Resume.pdf"
                className="flex items-center gap-2 font-mono text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </Button>
            )}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const target = document.querySelector("#terminal");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 font-mono text-xs"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              Terminal CLI
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-border-subtle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-bg-secondary border-l border-border-subtle p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6 pt-16">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`text-lg font-medium py-2 block border-b border-white/5 ${
                          isActive ? "text-brand-blue font-semibold" : "text-text-secondary"
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                {resumeConfig.filePath && (
                  <Button
                    variant="primary"
                    href={resumeConfig.filePath}
                    download="Rishabh_Jain_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={toggleMobileMenu}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                )}
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    toggleMobileMenu();
                    const target = document.querySelector("#terminal");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <TerminalIcon className="w-4 h-4" />
                  Terminal CLI
                </Button>
                <div className="text-center text-xs text-text-muted font-mono">
                  Press Cmd+K to navigate
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
