"use client";

import Image from "next/image";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { FaCode, FaServer, FaPalette, FaRocket, FaBolt } from "react-icons/fa";
import { useState } from "react";
import laptop from "@/public/images/laptop.jpg";
import coding from "@/public/images/coding.jpg";

const highlights = [
  {
    icon: FaCode,
    title: "Frontend Engineering",
    description: "React, Next.js, TypeScript — pixel-perfect UIs with buttery-smooth interactions and accessible design.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: FaServer,
    title: "Backend Architecture",
    description: "Node.js, Express, Prisma — scalable RESTful APIs, optimized queries, and robust database design.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description: "Tailwind CSS, responsive layouts — clean, conversion-focused interfaces that users love.",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const journey = [
  { year: "2025", title: "MERN Developer — Algotix AI", desc: "Versioned REST APIs, Prisma ORM, JWT auth, Socket.IO features" },
  { year: "2024", title: "MERN Developer — Codes Thinker", desc: "Next.js + Tailwind apps, reusable React components, RTK Query" },
  { year: "2023", title: "Backend Focused", desc: "Deep dive into Node.js, PostgreSQL, and database optimization" },
  { year: "2022", title: "Started Coding", desc: "First lines of code — fell in love with web development" },
];

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nawaz51412@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="bg-[#000319] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#CBACF9] text-sm font-medium tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Passionate about crafting{" "}
            <span className="gradient-text">digital experiences</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Full-Stack MERN Architect and Backend Engineer specializing in
            high-concurrency applications, with proven expertise in React 19,
            Next.js, PostgreSQL, MongoDB, and Prisma ORM.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Image Card */}
          <div className="relative group h-72 sm:h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-[#141b4e]">
            <Image
              src={laptop}
              alt="Developer workspace setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={70}
              loading="lazy"
              placeholder="blur"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000319] via-[#000319]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <FaRocket className="text-[#CBACF9] text-sm" />
                <span className="text-[#CBACF9] text-xs font-medium uppercase tracking-wider">My Approach</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                I prioritize client collaboration
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-sm">
                Fostering open communication and transparent processes to deliver exactly what you envision.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 bg-[#0C0E23] rounded-2xl border border-[#141b4e] hover:border-[#CBACF9]/20 transition-all duration-300 group hover:-translate-y-0.5"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-[#CBACF9] text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Coding Image Card */}
          <div className="relative group h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#141b4e]">
            <Image
              src={coding}
              alt="Code on a screen"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={70}
              loading="lazy"
              placeholder="blur"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000319] via-[#000319]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center gap-2 mb-1">
                <FaBolt className="text-yellow-400 text-xs" />
                <p className="text-gray-400 text-xs uppercase tracking-wider">Currently</p>
              </div>
              <h4 className="text-white font-semibold text-lg">
                Building scalable platforms
              </h4>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="p-6 bg-[#0C0E23] rounded-2xl border border-[#141b4e]">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-5">My Journey</h4>
            <div className="space-y-4">
              {journey.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-[#CBACF9]' : 'bg-gray-700'} flex-shrink-0 mt-1`}></div>
                    {i < journey.length - 1 && <div className="w-px h-full bg-gray-800 mt-1"></div>}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs text-[#CBACF9] font-medium">{item.year}</span>
                    <h5 className="text-white text-sm font-semibold mt-0.5">{item.title}</h5>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-[#0C0E23] to-[#111a36] rounded-2xl border border-[#141b4e] sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-gradient-to-br from-[#CBACF9]/20 to-[#8A6CF4]/20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-semibold text-white text-center">
              Want to start a project together?
            </h4>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#CBACF9]/10 border border-[#CBACF9]/20 rounded-lg text-sm text-[#CBACF9] hover:bg-[#CBACF9]/20 transition-all duration-300 hover:scale-105"
            >
              {copied ? (
                <>
                  <IoCheckmarkOutline className="text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <IoCopyOutline /> Copy My Email
                </>
              )}
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {["Remote", "Flexible Hours", "Worldwide"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
