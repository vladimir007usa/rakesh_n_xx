import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Use event delegation for hover state - much more performant!
      const target = e.target as HTMLElement;
      const isHoverable = !!target.closest('a, button, [role="button"], input, textarea, select, .hoverable');
      setIsHovering(isHoverable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: pos.x - (isHovering ? 24 : 16),
          y: pos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full border border-foreground/50" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
