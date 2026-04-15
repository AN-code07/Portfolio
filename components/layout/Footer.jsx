"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { scrollToSection } from "@/lib/scrollUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AN-code07", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/allah-nawaz-mern", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:nawaz51412@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#04071D] text-white relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#CBACF9]/40 to-transparent"></div>

      {/* CTA Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CBACF9]/5 via-[#8A6CF4]/5 to-[#CBACF9]/5"></div>
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#0C0E23] to-[#111a36] border border-[#141b4e] rounded-2xl p-8 md:p-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a project in mind?
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Let&apos;s turn your ideas into reality. I&apos;m currently accepting new projects and would love to hear from you.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex-shrink-0 px-7 py-3 text-sm font-medium bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] rounded-xl hover:shadow-lg hover:shadow-[#CBACF9]/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Start a Conversation
              <HiOutlineArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-2xl font-bold">
              <span className="text-[#CBACF9]">A</span>
              <span className="text-white">N</span>
              <span className="text-gray-600 text-base font-normal ml-1.5">/ developer</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Full-Stack MERN Architect crafting high-performance web applications
              with Clean Architecture principles. Turning complex problems into
              elegant, scalable solutions.
            </p>
            <div className="flex space-x-2.5 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0C0E23] border border-[#141b4e] rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#CBACF9]/10 hover:border-[#CBACF9]/30 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CBACF9]/60">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#CBACF9] transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CBACF9]/60">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:nawaz51412@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-[#0C0E23] border border-[#141b4e] rounded-lg flex items-center justify-center group-hover:border-[#CBACF9]/30 transition-colors duration-300">
                  <FaEnvelope className="text-[11px] text-[#CBACF9]/60 group-hover:text-[#CBACF9]" />
                </div>
                <span className="text-sm">nawaz51412@gmail.com</span>
              </a>
              <a
                href="tel:+923148084741"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-[#0C0E23] border border-[#141b4e] rounded-lg flex items-center justify-center group-hover:border-[#CBACF9]/30 transition-colors duration-300">
                  <FaPhone className="text-[11px] text-[#CBACF9]/60 group-hover:text-[#CBACF9]" />
                </div>
                <span className="text-sm">+92-314-8084741</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-[#0C0E23] border border-[#141b4e] rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[11px] text-[#CBACF9]/60" />
                </div>
                <span className="text-sm">Pakistan / Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#141b4e]/60">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Allah Nawaz. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Crafted with <FaHeart className="text-[#CBACF9] text-[9px]" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 bg-[#0C0E23] border border-[#141b4e] text-[#CBACF9] p-3 rounded-xl shadow-lg hover:shadow-[#CBACF9]/20 hover:scale-110 hover:border-[#CBACF9]/30 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </footer>
  );
};

export default Footer;
