"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Controls the intensity of the glass effect */
  intensity?: "subtle" | "medium" | "strong";
  /** Whether to enable hover effects */
  hover?: boolean;
  /** Additional className for custom styling */
  className?: string;
  /** Padding preset */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const intensityStyles = {
  subtle: {
    bg: "bg-white/5",
    bgHover: "hover:bg-white/10",
    border: "border-white/10",
    blur: "backdrop-blur-xl",
  },
  medium: {
    bg: "bg-white/10",
    bgHover: "hover:bg-white/15",
    border: "border-white/20",
    blur: "backdrop-blur-2xl",
  },
  strong: {
    bg: "bg-white/15",
    bgHover: "hover:bg-white/25",
    border: "border-white/30",
    blur: "backdrop-blur-3xl",
  },
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
};

export default function GlassCard({
  children,
  intensity = "medium",
  hover = true,
  className = "",
  padding = "lg",
  ...motionProps
}: GlassCardProps) {
  const styles = intensityStyles[intensity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={`
        /* Base glass material */
        ${styles.bg}
        ${styles.blur}
        ${hover ? styles.bgHover : ""}
        
        /* Border - simulates light hitting the edge */
        border ${styles.border}
        
        /* Inner shadow ring for depth */
        ring-1 ring-inset ring-white/10
        
        /* Super rounded corners for iOS feel */
        rounded-[32px]
        
        /* Layered shadows for 3D levitation effect */
        shadow-xl shadow-black/10
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        
        /* Subtle inner glow at the top edge */
        before:absolute before:inset-x-0 before:top-0 before:h-px
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        
        /* Content positioning */
        relative overflow-hidden
        
        /* Smooth transitions */
        transition-all duration-300 ease-out
        
        /* Padding */
        ${paddingStyles[padding]}
        
        /* Custom classes */
        ${className}
      `}
      {...motionProps}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* 
 * Sub-components for consistent typography inside GlassCard
 */

export function GlassCardTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold text-white tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function GlassCardDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-white/70 leading-relaxed ${className}`}>{children}</p>
  );
}

export function GlassCardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`text-white/80 ${className}`}>{children}</div>;
}

