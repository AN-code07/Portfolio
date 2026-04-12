"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection, getActiveSection } from "@/lib/scrollUtils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = links.map((link) => link.id);
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        setActiveSection(getActiveSection(sections));
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full text-white fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04071D]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="flex h-[72px] justify-between items-center max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold tracking-tight group"
        >
          <span className="text-[#CBACF9] group-hover:text-white transition-colors duration-300">A</span>
          <span className="text-white group-hover:text-[#CBACF9] transition-colors duration-300">N</span>
          <span className="text-gray-600 text-lg font-normal ml-1 hidden sm:inline">/ developer</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-[#CBACF9]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#CBACF9] rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300"
          >
            Resume
          </a>
          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] rounded-lg hover:shadow-lg hover:shadow-[#CBACF9]/25 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#04071D]/95 backdrop-blur-xl border-t border-white/5 px-8 sm:px-12 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-[#CBACF9] bg-[#CBACF9]/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-5 py-3 text-sm font-medium border border-gray-700 rounded-lg text-center text-gray-300"
            >
              Resume
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex-1 px-5 py-3 text-sm font-medium bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] rounded-lg text-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
