import { useRef, useState, useEffect } from 'react';

interface BackgroundGridProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundGrid = ({ children, className = '' }: BackgroundGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute transition-opacity duration-500"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, hsl(190 95% 55% / 0.08) 0%, transparent 70%)',
          opacity: mousePos.x > -500 ? 1 : 0,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundGrid;
