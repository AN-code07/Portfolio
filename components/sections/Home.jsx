"use client";

import Image from "next/image";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCountUp } from "@/hooks/useCountUp";
import { scrollToSection } from "@/lib/scrollUtils";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";
import nawaz from "@/public/images/AllahNawaz.png";

const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

const StatItem = ({ value, suffix, label }) => {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center">
      <span className="text-2xl sm:text-3xl font-bold gradient-text">
        {count}{suffix}
      </span>
      <p className="text-[11px] sm:text-xs text-gray-500 mt-1 tracking-wide">{label}</p>
    </div>
  );
};

const Home = () => {
  const texts = [
    "Full Stack MERN Developer",
    "Backend Engineer",
    "React & Next.js Specialist",
  ];
  const currentText = useTypingEffect(texts);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center overflow-hidden bg-[#000319] relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#CBACF9] rounded-full blur-[200px] opacity-[0.07]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8A6CF4] rounded-full blur-[180px] opacity-[0.05]"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#6C3CF4] rounded-full blur-[160px] opacity-[0.04]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(203,172,249,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(203,172,249,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-28 pb-20 relative z-10">
        {/* Left - Content */}
        <div className="flex-1 flex flex-col gap-5 animate-fade-in-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs text-emerald-300 font-medium">Available for hire</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.15]">
            Building scalable{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">web systems.</span>
          </h1>

          {/* Typing Effect */}
          <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-gray-300 font-light">
            <span className="text-[#CBACF9] font-mono">&gt;</span>
            <span>{currentText}</span>
            <span className="w-0.5 h-5 bg-[#CBACF9] animate-pulse"></span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
            I&apos;m <span className="text-white font-medium">Allah Nawaz</span> — a Full-Stack MERN
            Architect specializing in high-concurrency applications and distributed systems.
            Focused on Clean Architecture and Composition patterns to eliminate technical debt
            and ensure long-term scalability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-6 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] text-white shadow-lg hover:shadow-[#CBACF9]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Let&apos;s Work Together
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 text-sm font-medium rounded-xl border border-[#CBACF9]/30 text-[#CBACF9] hover:bg-[#CBACF9]/10 transition-all duration-300"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-medium rounded-xl border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://github.com/allah-nawaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-[#CBACF9] hover:border-[#CBACF9]/30 transition-all duration-300"
            >
              <FaGithub className="text-base" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/allah-nawaz-mern"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-[#CBACF9] hover:border-[#CBACF9]/30 transition-all duration-300"
            >
              <FaLinkedin className="text-base" aria-hidden="true" />
            </a>
            <div className="w-10 h-px bg-gray-700"></div>
            <span className="text-[11px] text-gray-500 tracking-wider uppercase">
              Based in Pakistan
            </span>
          </div>
        </div>

        {/* Right - Image + Stats */}
        <div className="flex-shrink-0 relative animate-slide-in-right flex flex-col items-center gap-8">
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#CBACF9]/25 via-[#8A6CF4]/15 to-transparent rounded-[2.5rem] blur-3xl animate-pulse-slow"></div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#CBACF9]/50 rounded-tl-2xl z-20"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#CBACF9]/50 rounded-br-2xl z-20"></div>

            {/* Image frame with gradient border */}
            <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-[#CBACF9] via-[#8A6CF4]/60 to-transparent shadow-2xl shadow-[#CBACF9]/20">
              <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[24rem] xl:w-[22rem] xl:h-[26rem] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a1440] to-[#0C0E23]">
                {/* Soft backlight behind image */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#CBACF9]/15 to-transparent"></div>

                <Image
                  src={nawaz}
                  alt="Allah Nawaz — Full-Stack MERN Developer"
                  fill
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 22rem"
                  className="object-contain object-bottom"
                  priority
                  quality={80}
                  placeholder="blur"
                />

                {/* Subtle grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(203,172,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(203,172,249,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-3 -right-4 bg-[#0C0E23]/95 border border-[#CBACF9]/30 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md z-30">
              <span className="text-xs font-semibold gradient-text">MERN Stack</span>
            </div>
            <div className="absolute -top-3 -right-3 bg-[#0C0E23]/95 border border-emerald-500/30 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md z-30 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-medium text-emerald-400">Open to work</span>
            </div>
            <div className="absolute top-1/2 -left-5 -translate-y-1/2 bg-[#0C0E23]/95 border border-[#CBACF9]/30 rounded-lg px-2.5 py-1.5 shadow-xl backdrop-blur-md z-30 rotate-[-90deg] origin-center">
              <span className="text-[10px] font-mono text-[#CBACF9] tracking-widest">&lt;/Engineer&gt;</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-5 sm:gap-8 bg-[#0C0E23]/80 border border-[#141b4e] rounded-2xl px-5 sm:px-7 py-4 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-5 sm:gap-8">
                <StatItem {...stat} />
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-[#141b4e]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-[11px] text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-7 border border-gray-600 rounded-full flex justify-center pt-1">
          <HiOutlineArrowDown className="text-[#CBACF9] text-[10px] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;
