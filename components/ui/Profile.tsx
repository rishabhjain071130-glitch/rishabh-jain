"use client";

import * as React from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { User } from "lucide-react";

export interface ProfileProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Profile: React.FC<ProfileProps> = ({ className = "", size = "md" }) => {
  const [imageError, setImageError] = React.useState(false);

  const sizeDimensions = {
    sm: { width: 100, height: 100, wrapper: "w-24 h-24" },
    md: { width: 350, height: 350, wrapper: "w-[280px] h-[280px] md:w-[350px] md:h-[350px]" },
    lg: { width: 450, height: 450, wrapper: "w-[350px] h-[350px] md:w-[450px] md:h-[450px]" },
  };

  const currentSize = sizeDimensions[size];

  return (
    <div
      className={`relative rounded-lg border border-border-subtle bg-bg-secondary flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] group ${currentSize.wrapper} ${className}`}
    >
      {!imageError ? (
        <Image
          src={profile.profilePhoto}
          alt={profile.name}
          width={currentSize.width}
          height={currentSize.height}
          priority={size === "md" || size === "lg"} // Prioritize hero profile load
          loading={size === "sm" ? "lazy" : undefined}
          onError={() => setImageError(true)}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* Elegant custom SVG Silhouette placeholder if file is missing */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-text-muted space-y-3 font-mono">
          <div className="p-4 rounded-full bg-bg-primary border border-border-subtle text-brand-blue/60 group-hover:text-brand-blue transition-colors">
            <User className="w-12 h-12" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-text-secondary">
            Avatar Offline
          </span>
          <span className="text-[8px] text-center text-text-muted max-w-[160px]">
            Please upload profile.jpg to public/profile/ folder
          </span>
        </div>
      )}

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
    </div>
  );
};
