import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ElectricBorderProps {
  isVisible: boolean;
  className?: string;
  color?: string;
}

const ElectricBorder = ({ 
  isVisible, 
  className = "", 
  color = "hsl(190 95% 70%)" 
}: ElectricBorderProps) => {
  // Unique ID for SVG filters to avoid collisions
  const filterId = useMemo(() => `electric-filter-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <div className={`absolute inset-0 pointer-events-none z-20 ${className}`}>
      {/* SVG filter for the electric "jagged" look */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="seed"
                from="1"
                to="100"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </defs>
      </svg>

      {/* Animated Border Container */}
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            filter: `url(#${filterId})`,
            boxShadow: `inset 0 0 10px ${color}, 0 0 10px ${color}`,
            border: `2px solid ${color}`,
          }}
        />
        
        {/* Extra glowing layer */}
        <div
          className="absolute inset-0 rounded-[inherit] blur-sm opacity-50"
          style={{
            filter: `url(#${filterId})`,
            border: `3px solid ${color}`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ElectricBorder;
