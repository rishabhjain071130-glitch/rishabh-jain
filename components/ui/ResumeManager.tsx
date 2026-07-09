"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Download, AlertCircle, FileText } from "lucide-react";
import { resumeConfig } from "@/content/resume";

export const ResumeManager: React.FC = () => {
  const [fileExists, setFileExists] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkFile = async () => {
      try {
        const res = await fetch(resumeConfig.filePath, { method: "HEAD" });
        if (res.status === 200) {
          setFileExists(true);
        } else {
          setFileExists(false);
        }
      } catch {
        setFileExists(false);
      }
    };

    checkFile();
  }, []);

  // Loading state (while checking file presence)
  if (fileExists === null) {
    return (
      <Button variant="secondary" size="md" isLoading className="opacity-50 min-w-[170px]" disabled>
        Checking...
      </Button>
    );
  }

  if (fileExists) {
    return (
      <Button
        href={resumeConfig.filePath}
        download="Rishabh_Jain_Resume.pdf"
        variant="secondary"
        size="md"
        className="flex items-center gap-2 min-w-[170px]"
      >
        <Download className="w-4 h-4 text-brand-blue" />
        Download Resume
      </Button>
    );
  }

  // File is missing fallback
  return (
    <span className="group relative inline-block">
      {/* Visual Cue overlay */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-[9px] font-mono text-text-secondary bg-card border border-border-subtle rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 flex items-center gap-1.5 shadow-xl">
        <AlertCircle className="w-3.5 h-3.5 text-warning shrink-0" />
        <span>resume.pdf missing in public/resume/</span>
      </span>
      <Button
        variant="secondary"
        size="md"
        disabled
        className="flex items-center gap-2 cursor-not-allowed opacity-50 min-w-[170px] select-none"
      >
        <FileText className="w-4 h-4 text-text-disabled" />
        Resume Coming Soon
      </Button>
    </span>
  );
};
