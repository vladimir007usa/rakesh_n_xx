"use client";

import ScrollReveal from "./ScrollReveal";
import { WavyBackground } from "@/components/ui/wavy-background";

import {
  SiHtml5, SiCss3, SiSass, SiTailwindcss, SiBootstrap,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux,
  SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiRedis, SiPrisma, SiDocker, SiGit, SiGithub, SiFigma,
  SiFirebase, SiVercel, SiNetlify, SiAppwrite,
  SiWireshark, SiKalilinux, 
  SiAdobeindesign, SiAdobeillustrator, SiAdobexd, SiWordpress
} from "react-icons/si";

import { FaShieldAlt, FaLinux, FaWindows, FaApple } from "react-icons/fa";
import { TbBrandOffice } from "react-icons/tb";

const techStack = [
  // 🌐 Frontend
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "Sass", icon: SiSass, color: "text-pink-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React JS", icon: SiReact, color: "text-cyan-400" },
  { name: "Next JS", icon: SiNextdotjs, color: "text-gray-200" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },

  // 🖥 Backend
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Appwrite", icon: SiAppwrite, color: "text-pink-500" },

  // 🗄 Databases
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-gray-200" },

  // 🔐 Cybersecurity
  { name: "Wireshark", icon: SiWireshark, color: "text-blue-400" },
  { name: "Burp Suite", icon: FaShieldAlt, color: "text-orange-400" },
  { name: "Nmap", icon: FaShieldAlt, color: "text-green-500" },
  { name: "Kali Linux", icon: SiKalilinux, color: "text-blue-300" },

  // 🎨 Design
  { name: "Adobe InDesign", icon: SiAdobeindesign, color: "text-pink-500" },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "text-orange-500" },
  { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-400" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-500" },

  // 🖥 Systems
  { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
  { name: "Windows", icon: FaWindows, color: "text-blue-500" },
  { name: "macOS", icon: FaApple, color: "text-white-500" },

  // ⚙️ Dev Tools
  { name: "Github", icon: SiGithub, color: "text-black-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Vercel", icon: SiVercel, color: "text-gray-200" },
  { name: "Netlify", icon: SiNetlify, color: "text-green-400" },

  // 📄 Office & AI
  { name: "MS Word", icon: TbBrandOffice, color: "text-blue-400" },
  { name: "Excel", icon: TbBrandOffice, color: "text-green-500" },
  { name: "PowerPoint", icon: TbBrandOffice, color: "text-orange-500" },
  { name: "AI Tools", icon: TbBrandOffice, color: "text-purple-400" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen w-full flex flex-col items-center justify-center">
      {/* 1. WE MOVE THE WAVY BACKGROUND TO BE AN ABSOLUTE FILLER 
          This ensures the waves cover the whole section regardless of how long the skill list gets.
      */}
      <div className="absolute inset-0 z-0">
        <WavyBackground
          backgroundFill="hsl(230 25% 3%)"
          blur={14}
          speed="slow"
          waveOpacity={0.2}
          containerClassName="h-full w-full"
          colors={["#22d3ee", "#6366f1", "#0ea5e9"]}
        />
      </div>

      {/* 2. CONTENT CONTAINER 
          Using relative z-10 ensures the skills sit on top of the waves.
          Adding 'pb-20' ensures there's room at the bottom on mobile.
      */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32">
        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 text-white drop-shadow-md">
            Tech Stack
          </h2>
        </ScrollReveal>

        {/* STACK */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {techStack.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 0.01}>
              <div
                className="flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl
                bg-black/60 border border-white/10 backdrop-blur-xl
                hover:border-cyan-400/60 hover:bg-black/80
                transition-all duration-300 group shadow-lg"
              >
                <tech.icon
                  className={`text-xl sm:text-2xl ${tech.color}
                  group-hover:scale-110 transition-transform`}
                />

                <span className="text-xs sm:text-sm text-gray-200 group-hover:text-white font-medium tracking-wide whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;