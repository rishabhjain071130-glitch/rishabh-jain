"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/content/journey";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const JourneyTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpand(id);
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-8">
      {/* Central line */}
      <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-border-subtle/50 -translate-x-1/2" />

      <div className="space-y-12">
        {journeyMilestones.map((milestone, index) => {
          const isExpanded = expandedId === milestone.id;
          const isEven = index % 2 === 0;

          return (
            <div
              key={milestone.id}
              className={`relative flex flex-col md:flex-row items-stretch ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot on central line */}
              <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-bg-primary border-2 border-brand-blue -translate-x-1/2 z-10" />

              {/* Spacing node for Desktop centering */}
              <div className="hidden md:block w-1/2" />

              {/* Card Container Column */}
              <div className="w-full md:w-[46%] pl-12 md:pl-0">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(milestone.id)}
                  onKeyDown={(e) => handleKeyDown(e, milestone.id)}
                  aria-expanded={isExpanded}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4 focus-visible:ring-offset-bg-primary rounded-md block cursor-pointer text-left"
                >
                  <Card hoverEffect className={`transition-all duration-300 bg-card/60 ${
                    isExpanded ? "border-brand-blue/50 ring-1 ring-brand-blue/30" : "border-border-subtle"
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{milestone.date}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-text-muted hover:text-white"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {milestone.tags && milestone.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {milestone.tags.map((tag) => (
                          <Badge key={tag} variant="soft" color="neutral" className="text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Expandable highlights container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && milestone.richDetails && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border-subtle/50 mt-4 pt-4 space-y-2 text-sm text-text-secondary leading-relaxed">
                            {milestone.richDetails.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <ArrowRight className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-1" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {!isExpanded && milestone.richDetails && (
                      <div className="text-[10px] text-text-muted font-mono mt-3 text-right">
                        Click to view details
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
