"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Terminal, Shield, MessageSquare, ArrowUpRight } from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  shortcut: string;
  category: "Navigation" | "Terminal" | "System";
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const inputRef = React.useRef<HTMLInputElement>(null);

  // Close palette
  const closePalette = React.useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  // Scroll handler helper wrapped in useCallback to satisfy dependency rules
  const scrollTo = React.useCallback((selector: string) => {
    closePalette();
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [closePalette]);

  const paletteItems: PaletteItem[] = React.useMemo(() => {
    return [
      {
        id: "nav-about",
        title: "Scroll to About (Philosophy & Values)",
        shortcut: "G A",
        category: "Navigation",
        icon: <Compass className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#about"),
      },
      {
        id: "nav-journey",
        title: "Scroll to Journey (Chronology)",
        shortcut: "G J",
        category: "Navigation",
        icon: <Compass className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#journey"),
      },
      {
        id: "nav-projects",
        title: "Scroll to Projects (Case Studies)",
        shortcut: "G P",
        category: "Navigation",
        icon: <Compass className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#projects"),
      },
      {
        id: "nav-skills",
        title: "Scroll to Skills (Matrix)",
        shortcut: "G S",
        category: "Navigation",
        icon: <Compass className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#skills"),
      },
      {
        id: "nav-certs",
        title: "Scroll to Certificates (Credentials)",
        shortcut: "G E",
        category: "Navigation",
        icon: <Compass className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#certificates"),
      },
      {
        id: "nav-contact",
        title: "Scroll to Contact Form",
        shortcut: "G C",
        category: "Navigation",
        icon: <MessageSquare className="w-4 h-4 text-brand-blue" />,
        action: () => scrollTo("#contact"),
      },
      {
        id: "term-cli",
        title: "Focus Interactive Terminal CLI",
        shortcut: "F T",
        category: "Terminal",
        icon: <Terminal className="w-4 h-4 text-brand-cyan" />,
        action: () => {
          closePalette();
          setTimeout(() => {
            const el = document.querySelector("#terminal");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            const input = document.querySelector("#terminal input") as HTMLInputElement;
            input?.focus();
          }, 150);
        },
      },
      {
        id: "sys-security",
        title: "Audit Active Security Headers",
        shortcut: "A S",
        category: "System",
        icon: <Shield className="w-4 h-4 text-success" />,
        action: () => {
          closePalette();
          setTimeout(() => {
            const el = document.querySelector("#terminal") as HTMLElement;
            if (el) el.scrollIntoView({ behavior: "smooth" });
            const input = document.querySelector("#terminal input") as HTMLInputElement;
            if (input) {
              input.value = "security";
              input.focus();
            }
          }, 150);
        },
      },
    ];
  }, [scrollTo, closePalette]);

  // Filtered items list
  const filteredItems = React.useMemo(() => {
    if (!query) return paletteItems;
    return paletteItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [paletteItems, query]);

  // Global event listener for Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Keyboard navigation within open palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "Escape") {
      closePalette();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  // Auto focus input on modal open
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm"
            onClick={closePalette}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
              className="w-full max-w-lg bg-[#0c0e14] border border-border-subtle rounded-md overflow-hidden shadow-2xl flex flex-col h-96"
            >
              {/* Search input line */}
              <div className="flex items-center border-b border-border-subtle px-4 py-3 shrink-0">
                <Search className="w-4 h-4 text-text-muted mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0); // Reset index on search change directly inside event handler
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or navigation route..."
                  className="flex-1 bg-transparent border-none text-white placeholder:text-text-muted text-sm outline-none font-mono"
                />
                <button
                  onClick={closePalette}
                  className="text-[10px] font-mono text-text-secondary border border-border-subtle px-2 py-0.5 rounded hover:text-white"
                >
                  ESC
                </button>
              </div>

              {/* Items List area */}
              <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-text-muted text-xs font-mono">
                    No results found matching &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Render by Category */}
                    {(["Navigation", "Terminal", "System"] as const).map((cat) => {
                      const catItems = filteredItems.filter((i) => i.category === cat);
                      if (catItems.length === 0) return null;

                      return (
                        <div key={cat} className="space-y-1">
                          <span className="px-3 text-[9px] font-mono text-text-muted uppercase tracking-wider block font-bold">
                            {cat}
                          </span>
                          <div className="space-y-0.5">
                            {catItems.map((item) => {
                              const overallIndex = filteredItems.findIndex((fi) => fi.id === item.id);
                              const isSelected = selectedIndex === overallIndex;

                              return (
                                <button
                                  key={item.id}
                                  onClick={item.action}
                                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-mono text-xs text-left cursor-pointer transition-colors ${
                                    isSelected
                                      ? "bg-brand-blue/15 text-white border border-brand-blue/30"
                                      : "text-text-secondary border border-transparent hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {item.icon}
                                    <span>{item.title}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                                    <span>{item.shortcut}</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Instructions footer */}
              <div className="px-4 py-2 border-t border-border-subtle text-[10px] text-text-muted flex items-center justify-between font-mono bg-card/25 shrink-0 select-none">
                <div className="flex items-center gap-3">
                  <span>&uarr;&darr; Navigate</span>
                  <span>&crarr; Select</span>
                </div>
                <span>Cmd+K / Ctrl+K to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
