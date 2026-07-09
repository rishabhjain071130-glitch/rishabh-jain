"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, Cpu, Lightbulb, Compass, Calendar, AlertCircle, Award, Settings, BookOpen } from "lucide-react";
import { GitHub } from "@/components/shared/BrandIcons";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

type TabId = "overview" | "architecture" | "future";

export const ProjectsGrid: React.FC = () => {
  const [featuredTab, setFeaturedTab] = React.useState<TabId>("overview");
  const [expandedProjects, setExpandedProjects] = React.useState<Record<string, boolean>>({});
  const [showLivePreview, setShowLivePreview] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const featuredProject = React.useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, []);

  const otherProjects = React.useMemo(() => {
    return projects.filter((p) => !p.featured);
  }, []);

  const handleFeaturedTabKeyDown = (e: React.KeyboardEvent, tabId: TabId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFeaturedTab(tabId);
    }
  };

  const toggleExpand = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
      default:
        return "error";
    }
  };

  return (
    <div className="space-y-16 text-left">
      {/* 1. Featured Project Showcase */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 font-mono">
          <Award className="w-5 h-5 text-brand-cyan" />
          <span className="text-xs uppercase tracking-widest text-white font-bold">Featured Case Study</span>
        </div>

        {featuredProject && (
          <Card hoverEffect={false} className="p-0 border-border-subtle overflow-hidden bg-card/40">
            {/* Banner Header */}
            <div className="bg-bg-secondary border-b border-border-subtle p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="soft" color="cyan" className="font-mono text-[10px]">
                    {featuredProject.category}
                  </Badge>
                  <Badge variant="soft" color="success" className="font-mono text-[10px]">
                    {featuredProject.status}
                  </Badge>
                  <Badge variant="outline" color={getDifficultyColor(featuredProject.difficulty)} className="font-mono text-[10px]">
                    {featuredProject.difficulty} Level
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono ml-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredProject.timeline}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-xs text-text-muted font-mono leading-none">
                  Role: <span className="text-text-secondary">{featuredProject.role}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <span className="group relative">
                  {!featuredProject.github ? (
                    <Button variant="secondary" size="sm" disabled className="flex items-center gap-2 cursor-not-allowed opacity-50 text-xs">
                      <GitHub className="w-4 h-4" />
                      Private Repository
                    </Button>
                  ) : (
                    <Button
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                    >
                      <GitHub className="w-4 h-4" />
                      Code Link
                    </Button>
                  )}
                </span>

                <span className="group relative">
                  {!featuredProject.liveDemo ? (
                    <Button variant="primary" size="sm" disabled className="flex items-center gap-2 cursor-not-allowed opacity-50 text-xs">
                      <ExternalLink className="w-4 h-4" />
                      Private Deployment
                    </Button>
                  ) : (
                    <Button
                      href={featuredProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="px-6 md:px-8 border-b border-border-subtle/50 bg-bg-secondary/20 flex gap-2 overflow-x-auto">
              {(["overview", "architecture", "future"] as TabId[]).map((tabId) => {
                const isActive = featuredTab === tabId;
                const tabLabel = tabId.charAt(0).toUpperCase() + tabId.slice(1);

                return (
                  <button
                    key={tabId}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setFeaturedTab(tabId)}
                    onKeyDown={(e) => handleFeaturedTabKeyDown(e, tabId)}
                    className={`py-4 px-4 text-xs font-mono font-medium border-b-2 tracking-wider transition-colors relative outline-none focus-visible:text-white cursor-pointer ${
                      isActive
                        ? "border-brand-blue text-white"
                        : "border-transparent text-text-secondary hover:text-white"
                    }`}
                  >
                    {tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Tab Body */}
            <div className="p-6 md:p-8 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredTab}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6 text-sm text-text-secondary leading-relaxed"
                >
                  {featuredTab === "overview" && (
                    <div className="space-y-6">
                      {featuredProject.screenshots?.[0] && (
                        <div className="space-y-3">
                          <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden rounded-md border border-border-subtle bg-bg-primary/50 shrink-0">
                            {showLivePreview && featuredProject.liveDemo ? (
                              <iframe
                                src={featuredProject.liveDemo}
                                className="w-full h-full border-0 bg-white rounded-md"
                                title={`Live interactive demo of ${featuredProject.title}`}
                                sandbox="allow-scripts allow-same-origin allow-forms"
                              />
                            ) : (
                              <Image 
                                src={featuredProject.screenshots[0]} 
                                alt={`Screenshot preview of featured project case study: ${featuredProject.title}`} 
                                width={600}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          
                          {featuredProject.liveDemo && (
                            <div className="flex justify-end">
                              <button
                                onClick={() => setShowLivePreview(!showLivePreview)}
                                className="text-[10px] font-mono text-brand-cyan hover:underline flex items-center gap-1.5 cursor-pointer select-none border border-border-subtle/80 bg-card/40 px-2.5 py-1 rounded"
                              >
                                {showLivePreview ? "[⚙] Show Static Screenshot" : "[⚡] Load Live Interactive Streamlit App"}
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {featuredProject.sections ? (
                        <div className="space-y-6">
                          {featuredProject.sections
                            .filter((s) => ["Overview", "Problem", "Research", "Planning"].includes(s.title))
                            .map((section, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                                  {section.title}
                                </h4>
                                <p className="text-xs bg-bg-secondary/40 border border-border-subtle/30 p-3 rounded leading-relaxed text-text-secondary font-sans">
                                  {Array.isArray(section.content) ? section.content.join(", ") : section.content}
                                </p>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <>
                          <div className="flex gap-3 items-start p-4 rounded bg-bg-secondary/40 border border-border-subtle/30">
                            <Compass className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                                Executive Summary
                              </h4>
                              <p className="text-xs">{featuredProject.description}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                                <AlertCircle className="w-3.5 h-3.5 text-error" />
                                The Problem Statement
                              </h4>
                              <p className="text-xs md:text-sm bg-error/5 border border-error/10 p-3 rounded leading-relaxed text-text-secondary">
                                {featuredProject.problem}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 text-success" />
                                Engineered Solution
                              </h4>
                              <p className="text-xs md:text-sm bg-success/5 border border-success/10 p-3 rounded leading-relaxed text-text-secondary">
                                {featuredProject.solution}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                          Key Product Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {featuredProject.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {featuredTab === "architecture" && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-brand-purple" />
                          System Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" color="purple" className="font-mono text-xs py-1 px-3">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {featuredProject.sections ? (
                        <div className="space-y-6">
                          {featuredProject.sections
                            .filter((s) => ["Architecture", "Implementation", "Security"].includes(s.title))
                            .map((section, idx) => (
                              <div key={idx} className="p-4 rounded border border-border-subtle bg-bg-secondary/40 space-y-2">
                                <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                                  {section.title}
                                </h4>
                                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                                  {Array.isArray(section.content) ? section.content.join(", ") : section.content}
                                </p>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded border border-border-subtle bg-bg-secondary/40 space-y-2">
                          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                            Architecture Logic
                          </h4>
                          <p className="text-xs text-text-secondary leading-relaxed font-sans">
                            {featuredProject.architecture}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {featuredTab === "future" && (
                    <div className="space-y-6">
                      {featuredProject.sections ? (
                        <div className="space-y-6">
                          {featuredProject.sections
                            .filter((s) => ["Challenges", "Outcome", "Future"].includes(s.title))
                            .map((section, idx) => (
                              <div key={idx} className="p-4 rounded bg-bg-secondary/40 border border-border-subtle/50 space-y-2">
                                <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                                  {section.title}
                                </h4>
                                {Array.isArray(section.content) ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                                    {section.content.map((item, index) => (
                                      <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                        <span>{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-xs leading-relaxed font-sans">{section.content}</p>
                                )}
                              </div>
                            ))}
                        </div>
                      ) : (
                        <>
                          <div className="p-4 rounded bg-bg-secondary/40 border border-border-subtle/50 space-y-2">
                            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                              <BookOpen className="w-4 h-4 text-brand-cyan" />
                              Lessons Learned & Technical Challenges
                            </h4>
                            <p className="text-xs leading-relaxed font-sans">
                              {featuredProject.lessonsLearned}
                            </p>
                          </div>

                          {featuredProject.futureImprovements && featuredProject.futureImprovements.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                                Future Roadmap Objectives
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                {featuredProject.futureImprovements.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>
        )}
      </div>

      {/* 2. Other Core Projects Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 font-mono pt-4 border-t border-border-subtle/40">
          <Settings className="w-5 h-5 text-brand-blue" />
          <span className="text-xs uppercase tracking-widest text-white font-bold">Other Engineering Works</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];
            return (
              <Card key={project.id} hoverEffect={true} className="flex flex-col justify-between border-border-subtle bg-card/60 p-0 overflow-hidden space-y-4">
                <div className="space-y-3">
                  {project.screenshots?.[0] && (
                    <div className="relative w-full h-44 overflow-hidden border-b border-border-subtle bg-bg-primary/50 shrink-0">
                      <Image 
                        src={project.screenshots[0]} 
                        alt={`Screenshot preview of project: ${project.title}`} 
                        width={400}
                        height={220}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="px-6 pt-4 pb-2 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="soft" color="blue" className="font-mono text-[9px]">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Badge variant="soft" color={project.status === "Completed" ? "success" : "warning"} className="text-[9px]">
                          {project.status}
                        </Badge>
                        <Badge variant="outline" color={getDifficultyColor(project.difficulty)} className="text-[9px]">
                          {project.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white tracking-tight">{project.title}</h4>
                      <div className="flex items-center justify-between text-[10px] font-mono text-text-muted">
                        <span>Role: {project.role}</span>
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="soft" color="purple" className="text-[9px] py-0.5 px-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Expansion Accordion for Case Study Details */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[10px] font-mono text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer select-none"
                      >
                        {isExpanded ? "[-]" : "[+]"} View Details
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                            transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 p-4 bg-bg-primary/50 border border-border-subtle rounded text-xs text-text-secondary space-y-4 font-mono">
                              {project.sections ? (
                                project.sections.map((section, idx) => (
                                  <div key={idx} className="space-y-1">
                                    <span className="text-white font-bold block uppercase tracking-wider text-[10px]">
                                      {section.title}:
                                    </span>
                                    {Array.isArray(section.content) ? (
                                      <ul className="list-disc pl-4 space-y-1 mt-1 text-[11px]">
                                        {section.content.map((item, itemIdx) => (
                                          <li key={itemIdx}>{item}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="leading-relaxed text-[11px] font-sans">{section.content}</p>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <>
                                  <div>
                                    <span className="text-white font-bold block mb-1">SYSTEM ARCHITECTURE:</span>
                                    <p className="leading-normal text-[11px]">{project.architecture}</p>
                                  </div>
                                  <div>
                                    <span className="text-white font-bold block mb-1">LESSONS & OUTCOMES:</span>
                                    <p className="leading-normal text-[11px]">{project.lessonsLearned}</p>
                                  </div>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Footer action anchors */}
                <div className="flex gap-3 p-6 pt-3 border-t border-border-subtle/50 mt-auto">
                  <span className="flex-1">
                    {!project.github ? (
                      <Button variant="secondary" size="sm" disabled className="w-full flex items-center justify-center gap-1.5 text-[10px] cursor-not-allowed opacity-50 py-1.5">
                        <GitHub className="w-3.5 h-3.5" />
                        Private Repository
                      </Button>
                    ) : (
                      <Button
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        className="w-full flex items-center justify-center gap-1.5 text-[10px] py-1.5"
                      >
                        <GitHub className="w-3.5 h-3.5" />
                        Code Base
                      </Button>
                    )}
                  </span>

                  <span className="flex-1">
                    {!project.liveDemo ? (
                      <Button variant="ghost" size="sm" disabled className="w-full flex items-center justify-center gap-1.5 text-[10px] cursor-not-allowed opacity-40 border border-border-subtle py-1.5">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Private Deployment
                      </Button>
                    ) : (
                      <Button
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        className="w-full flex items-center justify-center gap-1.5 text-[10px] py-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </Button>
                    )}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
