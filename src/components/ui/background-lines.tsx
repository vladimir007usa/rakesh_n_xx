"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
  className,
}: {
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lines = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.6 + Math.random() * 1.2,
      length: 120 + Math.random() * 200,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)"; // cyan glow
      ctx.lineWidth = 1;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(56, 189, 248, 0.6)";

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        line.y += line.speed;
        if (line.y > height + line.length) {
          line.y = -line.length;
          line.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none mix-blend-screen",
        className
      )}
    />
  );
};
