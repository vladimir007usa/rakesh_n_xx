"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  className?: string;
  gap?: number;
  radius?: number;
  speed?: number;
  opacity?: number;
};

const DottedGlowBackground = ({ 
  className, 
  gap = 26, 
  radius = 1.8, // Slightly larger base radius
  speed = 1.2, 
  opacity = 1 
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: { x: number; y: number; phase: number }[] = [];
    let animationId: number;

    const generateDots = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      const newDots = [];
      for (let x = 0; x < w; x += gap) {
        for (let y = 0; y < h; y += gap) {
          newDots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      dots = newDots;
    };

    const animate = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const glow = (Math.sin(t * (0.001 * speed) + dot.phase) + 1) / 2;
        
        // VISIBILITY TUNING:
        // Increased base alpha (0.3) and peak alpha (0.7)
        const alpha = (0.3 + glow * 0.4) * opacity; 

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius + glow * 0.8, 0, Math.PI * 2);

        // Vibrant Cyan/Sky Blue
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        
        // Bloom/Glow Effect
        ctx.shadowColor = `rgba(34, 211, 238, ${alpha})`;
        ctx.shadowBlur = glow * 10; 

        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    generateDots();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", generateDots);

    return () => {
      window.removeEventListener("resize", generateDots);
      cancelAnimationFrame(animationId);
    };
  }, [gap, radius, speed, opacity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: '100%', height: '100%' }} />
    </div>
  );
};

export default DottedGlowBackground;