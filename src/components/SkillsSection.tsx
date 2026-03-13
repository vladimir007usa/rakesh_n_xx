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
    <section id="skills" className="relative min-h-screen">
      <WavyBackground
        backgroundFill="hsl(230 25% 3%)"
        blur={14}
        speed="slow"
        waveOpacity={0.2}
        // Removed fixed height constraints, ensuring full height visibility
        containerClassName="py-20 sm:py-32 flex flex-col items-center"
        colors={["#22d3ee", "#6366f1", "#0ea5e9"]}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          {/* TITLE */}
          <ScrollReveal>
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-white">
              Tech Stack
            </h2>
          </ScrollReveal>

          {/* STACK - Enhanced for mobile responsiveness */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 0.02}>
                <div
                  className="flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl
                  bg-black/40 border border-white/10 backdrop-blur-md
                  hover:border-cyan-400/40 hover:bg-black/60
                  transition-all duration-300 group"
                >
                  <tech.icon
                    className={`text-xl sm:text-2xl ${tech.color}
                    group-hover:scale-110 transition-transform`}
                  />

                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default SkillsSection;