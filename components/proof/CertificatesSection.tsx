"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { certificates } from "@/content/certificates";
import { Certificate } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Award, Eye, Calendar, Download, Search, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

const CertificateModal = dynamic(() => import("./CertificateModal").then((mod) => mod.CertificateModal), {
  ssr: false,
});

export const CertificatesSection: React.FC = () => {
  const [filter, setFilter] = React.useState<"All" | "Completed" | "In Progress">("All");
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Extract unique categories dynamically from certificates list
  const categories = React.useMemo(() => {
    const list = certificates.map((c) => c.category).filter(Boolean) as string[];
    return ["All", ...Array.from(new Set(list))];
  }, []);

  const filteredCerts = React.useMemo(() => {
    return certificates.filter((cert) => {
      // 1. Status Filter
      const matchesStatus = filter === "All" || cert.status === filter;
      // 2. Category Filter
      const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
      // 3. Search Query Filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.organization.toLowerCase().includes(query) ||
        (cert.category && cert.category.toLowerCase().includes(query));

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [filter, selectedCategory, searchQuery]);

  const openPreview = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent, cert: Certificate) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPreview(cert);
    }
  };

  return (
    <div className="space-y-8 text-left">
      {/* Controls Row: Search Input & Status Buttons */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Field */}
        <div className="relative w-full md:max-w-xs select-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certificates..."
            aria-label="Search certificates"
            className="w-full bg-card border border-border-subtle rounded-md pl-9 pr-4 py-1.5 text-xs text-white placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors font-mono"
          />
        </div>

        {/* Status Filters */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
          {(["All", "Completed", "In Progress"] as const).map((item) => {
            const isActive = filter === item;
            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-md text-xs font-mono select-none transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-blue text-white shadow-[0_4px_12px_rgba(79,124,255,0.2)]"
                    : "bg-card border border-border-subtle text-text-secondary hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Category Pill Filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start select-none border-b border-border-subtle/30">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isActive}
              className={`px-3.5 py-1 rounded-full text-[10px] font-mono transition-all duration-200 cursor-pointer whitespace-nowrap mb-2 ${
                isActive
                  ? "bg-brand-cyan/15 border border-brand-cyan/35 text-brand-cyan"
                  : "bg-bg-primary border border-border-subtle text-text-muted hover:text-text-secondary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid Gallery */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout={shouldReduceMotion ? false : "position"}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card hoverEffect={true} className="flex flex-col justify-between h-full space-y-4 border-border-subtle bg-card/60">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <div className="p-2.5 rounded bg-bg-primary border border-border-subtle text-brand-blue">
                      <Award className="w-5 h-5" />
                    </div>
                    <Badge
                      variant="soft"
                      color={cert.status === "Completed" ? "success" : "warning"}
                      className="text-[9px]"
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                        {cert.organization}
                      </span>
                      {cert.category && (
                        <span className="text-[9px] font-mono text-brand-cyan/85">
                          {cert.category}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {cert.title}
                    </h4>
                  </div>
                </div>

                {/* Info & CTA links */}
                <div className="space-y-3 pt-3 border-t border-border-subtle/50 mt-auto">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary leading-none">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Timeline: {cert.issueDate}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => openPreview(cert)}
                      onKeyDown={(e) => handleKeyDown(e, cert)}
                      className="flex-1 flex items-center justify-center gap-1 text-[10px] py-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Preview
                    </Button>
                    <Button
                      href={cert.previewImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      size="sm"
                      className="p-2 flex items-center justify-center border border-border-subtle hover:border-brand-blue/30 shrink-0"
                      title="View Full Size"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      href={cert.download}
                      download={`${cert.title.replace(/\s+/g, "_")}_Certificate.pdf`}
                      variant="ghost"
                      size="sm"
                      className="p-2 flex items-center justify-center border border-border-subtle hover:border-brand-blue/30 shrink-0"
                      title="Download"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Integration */}
      <CertificateModal
        key={selectedCert?.id || "none"}
        certificate={selectedCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
