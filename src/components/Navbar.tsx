import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",       href: "#home" },
  { label: "Services",   href: "#services" },
  { label: "About",      href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:     scrolled ? "rgba(7,1,15,0.92)"  : "transparent",
        backdropFilter: scrolled ? "blur(16px)"          : "none",
        borderBottom:   scrolled ? "1px solid rgba(168,85,247,0.12)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#e879f9 0%,#6d28d9 100%)", boxShadow: "0 0 18px rgba(232,121,249,0.45)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wider uppercase" style={{ color: "#f5eeff" }}>
            TRIAXIS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: "#7c6a99" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e879f9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7c6a99")}
            >{l.label}</a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact"
            className="px-5 py-2 rounded text-sm font-semibold tracking-wide transition-all duration-200"
            style={{ background: "linear-gradient(135deg,#e879f9 0%,#6d28d9 100%)", color: "#fff", boxShadow: "0 0 20px rgba(232,121,249,0.3)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 32px rgba(232,121,249,0.55)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(232,121,249,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Get Started</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <div className="w-5 h-0.5 mb-1 transition-all" style={{ background: "#f5eeff", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <div className="w-5 h-0.5 mb-1 transition-all" style={{ background: "#f5eeff", opacity: menuOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 transition-all"     style={{ background: "#f5eeff", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(7,1,15,0.97)", borderTop: "1px solid rgba(168,85,247,0.12)", overflow: "hidden" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm font-medium py-1" style={{ color: "#f5eeff" }} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="text-center px-5 py-2.5 rounded text-sm font-semibold"
                style={{ background: "linear-gradient(135deg,#e879f9,#6d28d9)", color: "#fff" }}
                onClick={() => setMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
