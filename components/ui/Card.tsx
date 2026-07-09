"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface CardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hoverEffect = true, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const cardClass = `bg-card border border-border-subtle rounded-md p-6 text-text-primary ${className}`;

    if (hoverEffect && !shouldReduceMotion) {
      return (
        <motion.div
          ref={ref}
          whileHover={{
            y: -4,
            scale: 1.01,
            borderColor: "rgba(79, 124, 255, 0.3)",
            boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cardClass}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={cardClass} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
