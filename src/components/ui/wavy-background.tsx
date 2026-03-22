"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let w = 0,
    h = 0,
    nt = 0,
    ctx: CanvasRenderingContext2D | null = null;

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use half-resolution for performance (still looks great with blur)
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);
    ctx.filter = `blur(${blur}px)`;

    const handleResize = () => {
      const dpr2 = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.width = window.innerWidth * dpr2;
      h = canvas.height = window.innerHeight * dpr2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx!.scale(dpr2, dpr2);
      ctx!.filter = `blur(${blur}px)`;
    };
    window.addEventListener('resize', handleResize);

    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx!.beginPath();
      ctx!.lineWidth = waveWidth || 50;
      ctx!.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx!.lineTo(x, y + h * 0.5);
      }
      ctx!.stroke();
    }
  };

  let animationId: number;
  const render = () => {
    if (!ctx) return;
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative h-screen overflow-hidden flex items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
