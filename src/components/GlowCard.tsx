import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from './ui/ElectricBorder';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = '' }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 ${className}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(190 95% 55% / 0.12), transparent 60%)`,
          }}
        />
      )}
      {/* Border glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(190 95% 55% / 0.2), transparent 60%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
        />
      )}
      {/* Electric Border Animation on Hover */}
      <ElectricBorder isVisible={isHovered} />

      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
