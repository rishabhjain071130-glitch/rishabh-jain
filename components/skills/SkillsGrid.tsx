"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { skillCategories } from "@/content/skills";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const SkillsGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const shouldReduceMotion = useReducedMotion();

  // Flatten skills into a single array for searching and filtering
  const allSkills = React.useMemo(() => {
    return skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.category,
      }))
    );
  }, []);

  // Filter skills list
  const filteredSkills = React.useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allSkills, searchQuery, selectedCategory]);

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const getProficiencyColor = (prof: string) => {
    switch (prof) {
      case "Advanced":
        return "success";
      case "Intermediate":
        return "blue";
      case "Basics":
        return "cyan";
      default:
        return "neutral";
    }
  };

  return (
    <div className="space-y-8">
      {/* Filtering Actions Panel */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category filters */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-md text-xs font-mono select-none transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-brand-blue text-white shadow-[0_4px_12px_rgba(79,124,255,0.2)]"
                    : "bg-card border border-border-subtle text-text-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Next.js, OWASP)..."
            aria-label="Search skills"
            className="w-full bg-card border border-border-subtle rounded-md pl-9 pr-4 py-1.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors font-mono"
          />
        </div>
      </div>

      {/* Grid Display */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              layout={shouldReduceMotion ? false : "position"}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card hoverEffect={true} className="p-4 flex flex-col h-full justify-between gap-3 border-border-subtle bg-card/60">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">
                    {skill.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-mono">
                    {skill.name}
                  </h4>
                </div>
                <div className="flex justify-end pt-1">
                  <Badge variant="soft" color={getProficiencyColor(skill.proficiency)} className="text-[9px]">
                    {skill.proficiency}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Search Feedback */}
      {filteredSkills.length === 0 && (
        <div className="p-12 text-center rounded border border-border-subtle bg-card/20 max-w-md mx-auto space-y-2">
          <p className="text-sm text-text-secondary font-mono">No matching skills found</p>
          <p className="text-xs text-text-muted">
            Try adjusting your search query or selecting a different category filter.
          </p>
        </div>
      )}
    </div>
  );
};
