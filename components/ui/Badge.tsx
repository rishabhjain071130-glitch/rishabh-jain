import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "filled" | "soft";
  color?: "blue" | "cyan" | "purple" | "success" | "warning" | "error" | "neutral";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "soft",
  color = "neutral",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold select-none border";

  const colorStyles = {
    blue: {
      filled: "bg-brand-blue border-brand-blue text-white",
      outline: "border-brand-blue/50 text-brand-blue bg-transparent",
      soft: "bg-brand-blue/10 border-brand-blue/20 text-brand-blue",
    },
    cyan: {
      filled: "bg-brand-cyan border-brand-cyan text-bg-primary",
      outline: "border-brand-cyan/50 text-brand-cyan bg-transparent",
      soft: "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan",
    },
    purple: {
      filled: "bg-brand-purple border-brand-purple text-white",
      outline: "border-brand-purple/50 text-brand-purple bg-transparent",
      soft: "bg-brand-purple/10 border-brand-purple/20 text-brand-purple",
    },
    success: {
      filled: "bg-success border-success text-white",
      outline: "border-success/50 text-success bg-transparent",
      soft: "bg-success/10 border-success/20 text-success",
    },
    warning: {
      filled: "bg-warning border-warning text-bg-primary",
      outline: "border-warning/50 text-warning bg-transparent",
      soft: "bg-warning/10 border-warning/20 text-warning",
    },
    error: {
      filled: "bg-error border-error text-white",
      outline: "border-error/50 text-error bg-transparent",
      soft: "bg-error/10 border-error/20 text-error",
    },
    neutral: {
      filled: "bg-text-secondary border-text-secondary text-bg-primary",
      outline: "border-border-subtle text-text-secondary bg-transparent",
      soft: "bg-white/5 border-white/10 text-text-secondary",
    },
  };

  const combinedClassName = `${baseStyles} ${colorStyles[color][variant]} ${className}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};
