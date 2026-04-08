/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: Navbar
 * Style: Thin top bar, wordmark in small caps left-aligned, nav items right-aligned.
 * A single 1px bottom border — the "label" motif.
 */

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250,250,247,0.97)" : "rgba(250,250,247,1)",
        borderBottom: "1px solid oklch(0.87 0.008 75)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="flex items-center justify-between px-4" style={{ height: "72px" }}>
          {/* Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 no-underline"
          >
            <img src="/logo-icon.png" alt="TerraGreenOak icon" className="w-auto" style={{ height: "36px" }} />
            <img src="/logo-wordmark.png" alt="TerraGreenOak" className="w-auto" style={{ height: "36px" }} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-text link-underline text-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="label-text border border-foreground px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em" }}
            >
              Shop Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-foreground transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }}
            />
            <span
              className="block w-5 h-px bg-foreground transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-foreground transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
            />
          </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "oklch(0.87 0.008 75)", backgroundColor: "oklch(0.984 0.003 90)" }}
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="label-text text-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="label-text border border-foreground px-4 py-2.5 text-foreground text-center mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em" }}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
