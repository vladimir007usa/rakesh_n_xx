"use client";

import { useState } from "react";
import Lens from "./lens";              // ✅ FIXED
import TextScramble from "../TextScramble"; // ✅ FIXED

export default function NameLens() {
  const [hovering, setHovering] = useState(false);

  return (
    <Lens hovering={hovering} setHovering={setHovering}>
      <span className="inline-block cursor-pointer select-none">
        <TextScramble
          text="Rakesh Naskar"
          className="text-gradient-primary"
          delay={1200}
          speed={25}
        />
      </span>
    </Lens>
  );
}
