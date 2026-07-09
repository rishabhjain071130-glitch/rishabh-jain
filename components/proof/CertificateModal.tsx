"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ShieldCheck, Download, ExternalLink, Award } from "lucide-react";
import { Certificate } from "@/types";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Esc keypress listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()} // Prevent close on modal body click
          className="w-full max-w-2xl bg-[#0c0e14] border border-border-subtle rounded-md overflow-hidden shadow-2xl flex flex-col md:flex-row h-[500px] md:h-96"
        >
          {/* Left / Top: Certificate Preview Image */}
          <div className="w-full md:w-1/2 bg-[#05070a] border-b md:border-b-0 md:border-r border-border-subtle flex items-center justify-center relative min-h-[200px] md:min-h-0">
            {!imageError ? (
              certificate.previewImage.endsWith(".pdf") ? (
                <iframe
                  src={certificate.previewImage}
                  className="w-full h-full border-0 bg-white"
                  title={`${certificate.title} Preview`}
                />
              ) : (
                <Image
                  src={certificate.previewImage}
                  alt={`${certificate.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                  onError={() => setImageError(true)}
                />
              )
            ) : (
              /* High quality SVG placeholder if preview image is missing */
              <div className="flex flex-col items-center justify-center text-text-muted p-6 space-y-2 font-mono text-center">
                <Award className="w-12 h-12 text-brand-blue/60" />
                <span className="text-[10px] text-white uppercase tracking-wider">Preview Missing</span>
                <span className="text-[8px] max-w-[140px] text-text-muted">
                  Place preview.jpg under public/certificates/{certificate.id}/
                </span>
              </div>
            )}
          </div>

          {/* Right / Bottom: Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-brand-cyan uppercase tracking-wider block">
                    {certificate.organization}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {certificate.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1 text-text-muted hover:text-white rounded hover:bg-white/5 border border-transparent hover:border-border-subtle"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-xs text-text-secondary leading-relaxed font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Timeline: {certificate.issueDate} - {certificate.completionDate}</span>
                </div>
                {certificate.credentialId && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-success" />
                    <span className="truncate">ID: {certificate.credentialId}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border-subtle/50">
                This industry certification validates Rishabh&apos;s theoretical domain depth and practical engineering executions.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-4 border-t border-border-subtle/50 mt-4">
              {certificate.verificationUrl && (
                <Button
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="w-full text-xs flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Credential Online
                </Button>
              )}

              <Button
                href={certificate.previewImage}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
                className="w-full text-xs flex items-center justify-center gap-1.5 border border-border-subtle hover:border-brand-blue/30"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Full Size
              </Button>

              <Button
                href={certificate.download}
                download={`${certificate.title.replace(/\s+/g, "_")}_Certificate.pdf`}
                variant="secondary"
                size="sm"
                className="w-full text-xs flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download Certificate PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
