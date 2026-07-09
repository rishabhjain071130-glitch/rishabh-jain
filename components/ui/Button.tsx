"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface ButtonProps extends React.ComponentPropsWithoutRef<typeof motion.button> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      type = "button",
      href,
      target,
      rel,
      download,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    // Size variants
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg",
    };

    // Color/Visual variants
    const variantStyles = {
      primary:
        "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-[0_4px_12px_rgba(79,124,255,0.2)]",
      secondary:
        "border border-border-subtle hover:border-text-muted text-text-secondary hover:text-white bg-transparent",
      ghost:
        "text-text-secondary hover:text-white hover:bg-white/5 bg-transparent",
      danger:
        "bg-error hover:bg-error/90 text-white shadow-[0_4px_12px_rgba(255,93,115,0.2)]",
      success:
        "bg-success hover:bg-success/90 text-white shadow-[0_4px_12px_rgba(46,204,113,0.2)]",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const content = isLoading ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading...
      </>
    ) : (
      children
    );

    // If href is provided, render as motion.a to support semantic links and solve accessibility nested button errors.
    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          download={download}
          whileHover={shouldReduceMotion || isLoading ? undefined : { y: -1, scale: 1.01 }}
          whileTap={shouldReduceMotion || isLoading ? undefined : { scale: 0.98 }}
          className={combinedClassName}
          {...(props as Record<string, unknown>)}
        >
          {content}
        </motion.a>
      );
    }

    // Framer motion interactive wrapper
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || isLoading}
        whileHover={shouldReduceMotion || disabled || isLoading ? undefined : { y: -1, scale: 1.01 }}
        whileTap={shouldReduceMotion || disabled || isLoading ? undefined : { scale: 0.98 }}
        className={combinedClassName}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
