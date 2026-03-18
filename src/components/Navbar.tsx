import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" }, // ✅ fixed
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-surface" : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="text-lg font-bold tracking-tight"
          >
            <span className="text-gradient-primary">R N</span>

          </button>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group drop-shadow-[0_0_4px_rgba(34,211,238,0.2)] hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                >
                  {item.label}
                  {/* Glowing Underline */}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#22d3ee]" />
                </button>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="relative text-3xl font-light text-slate-300 hover:text-cyan-300 transition-all duration-300 group drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
                {/* Glowing Underline for Mobile */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4 shadow-[0_0_8px_#22d3ee]" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
