import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  narrow?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  eyebrow,
  title,
  description,
  narrow = false,
  ...props
}) => {
  return (
    <section
      className={`py-16 md:py-24 border-b border-border-subtle/50 ${className}`}
      {...props}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          narrow ? "max-w-[720px]" : "max-w-[1280px]"
        }`}
      >
        {/* Section Header */}
        <div className={`mb-12 ${narrow ? "text-left" : "text-center md:max-w-2xl md:mx-auto"}`}>
          {eyebrow && (
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase font-mono block mb-2">
              {eyebrow}
            </span>
          )}
          <h2 className="text-fluid-h2 font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className={`text-text-secondary text-base md:text-lg leading-relaxed max-w-[680px] ${
              narrow ? "mr-auto" : "mx-auto"
            }`}>
              {description}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div>{children}</div>
      </div>
    </section>
  );
};
