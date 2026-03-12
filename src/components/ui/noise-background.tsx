"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NoiseBackgroundProps {
  children: ReactNode;
  containerClassName?: string;
  gradientColors?: string[];
}

export function NoiseBackground({
  children,
  containerClassName,
  gradientColors = [
    "rgb(56,189,248)",
    "rgb(168,85,247)",
    "rgb(236,72,153)",
  ],
}: NoiseBackgroundProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative inline-flex items-center justify-center p-[2px] rounded-xl overflow-hidden",
        containerClassName
      )}
    >
      {/* Animated gradient */}
      <motion.div
        className="absolute inset-0 blur-xl opacity-70"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{
          background: `conic-gradient(${gradientColors.join(",")})`,
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 rounded-xl bg-black/90 backdrop-blur-md">
        {children}
      </div>
    </motion.div>
  );
}
