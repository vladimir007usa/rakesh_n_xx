"use client";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  return (
    <>
      {Array.from({ length: number }).map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute top-0 left-1/2 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] animate-meteor-effect",
            className
          )}
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </>
  );
};
