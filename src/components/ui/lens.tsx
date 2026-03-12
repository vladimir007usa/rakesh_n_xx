"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LensProps {
  children: ReactNode;
  hovering: boolean;
  setHovering: (v: boolean) => void;
}

const Lens = ({ children, hovering, setHovering }: LensProps) => {
  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      animate={{
        scale: hovering ? 1.08 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute -inset-3 rounded-full pointer-events-none"
        animate={{
          opacity: hovering ? 1 : 0,
          scale: hovering ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35), transparent 60%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Lens;
