"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import dashboard from "@/public/images/projects/Dashboard.webp";
import ecommerce from "@/public/images/projects/ecommerce.webp";
import landingPage from "@/public/images/projects/LandingPage.webp";
import solarSystem from "@/public/images/projects/Solar System.webp";

const projects = [
  {
    id: 1,
    image: ecommerce,
    title: "Smart Outreach",
    category: "Full Stack",
    tagline: "Lead Generation & Outreach Automation",
    description:
      "Built a tool to extract and manage leads from Sales Navigator into campaigns. Automated connection requests and personalized messaging workflows with a scalable backend for lead tracking.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
    ],
    metrics: ["Campaign Automation", "Lead Tracking", "Scalable Pipeline"],
    status: "Live",
    link: "#",
  },
  {
    id: 2,
    image: dashboard,
    title: "Check Point",
    category: "Backend",
    tagline: "Multi-Tenant Architecture & RBAC",
    description:
      "Implemented multi-tenant system with organization-level isolation and role-based access control. Designed scalable data models for secure tenant management across organizations.",
    techStack: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
    ],
    metrics: ["Multi-Tenant", "RBAC System", "Secure Isolation"],
    status: "Live",
    link: "#",
  },
  {
    id: 3,
    image: landingPage,
    title: "Allogo",
    category: "Full Stack",
    tagline: "Logistics & Ride-Booking Platform",
    description:
      "Real-time logistics platform using Socket.IO for live ride updates and driver onboarding. Secured with JWT HTTP-only cookies and role-based access controls.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    metrics: ["Real-time Updates", "Live Tracking", "Driver Onboarding"],
    status: "Live",
    link: "#",
  },
  {
    id: 4,
    image: solarSystem,
    title: "Clinic Queue System",
    category: "Backend",
    tagline: "Real-Time Patient Management",
    description:
      "Architected a real-time workflow engine using Node.js and PostgreSQL to manage patient transitions with high data integrity and sub-second latency.",
    techStack: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
    ],
    metrics: ["Sub-second Latency", "High Integrity", "Real-time Queue"],
    status: "Live",
    link: "#",
  },
  {
    id: 5,
    image: ecommerce,
    title: "E-Commerce Platform",
    category: "Full Stack",
    tagline: "Scalable MERN Storefront",
    description:
      "Architected a scalable storefront using React and Node.js, leveraging RTK Query for optimized state orchestration. Integrated JWT authentication and NodeMailer for automated communications.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    metrics: ["RTK Query", "JWT Auth", "Email Automation"],
    status: "Live",
    link: "#",
  },
  {
    id: 6,
    image: dashboard,
    title: "Canvas AI Studio",
    category: "Frontend",
    tagline: "AI Creative Platform",
    description:
      "Architected a secure canvas editor with Supabase and advanced state management for real-time synchronization and data persistence. Zero-data-loss workflow during intensive sessions.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    metrics: ["Real-time Sync", "Zero Data Loss", "Secure Auth"],
    status: "In Dev",
    link: "#",
  },
];

const filters = ["All", "Full Stack", "Backend", "Frontend"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#000319] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div data-reveal className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#CBACF9] text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Production-grade applications built with scalability, performance,
            and real-world impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div data-reveal data-reveal-delay="120" className="flex justify-center gap-2 mb-14 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#CBACF9] text-[#000319] border-[#CBACF9] shadow-lg shadow-[#CBACF9]/20"
                  : "border-[#141b4e] text-gray-400 hover:text-white hover:border-[#CBACF9]/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              data-reveal
              data-reveal-delay={(idx % 3) * 120}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated gradient glow border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#CBACF9] via-[#8A6CF4] to-[#6C3CF4] rounded-3xl opacity-0 group-hover:opacity-60 blur-[2px] transition-opacity duration-500"></div>

              <div className="relative h-full bg-gradient-to-b from-[#0C0E23] to-[#0A0C1E] rounded-3xl border border-[#141b4e] overflow-hidden group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-2 flex flex-col">
                {/* Corner accent glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#CBACF9] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                {/* Image block */}
                <div className="relative h-52 overflow-hidden">
                  {/* Project index — magazine-style */}
                  <div className="absolute top-4 left-4 z-20 flex items-baseline gap-1.5 font-mono">
                    <span className="text-[10px] text-[#CBACF9]/60 tracking-widest">PRJ</span>
                    <span className="text-2xl font-bold text-white/90 leading-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-gray-500">/{String(filtered.length).padStart(2, "0")}</span>
                  </div>

                  {/* Category pill (top-right) */}
                  <div className="absolute top-4 right-4 z-20 bg-[#0C0E23]/80 backdrop-blur-md border border-[#CBACF9]/25 rounded-md px-2.5 py-1">
                    <span className="text-[10px] font-semibold text-[#CBACF9] tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.08]"
                  />

                  {/* Diagonal scan line overlay */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent 0px, transparent 3px, rgba(203,172,249,0.15) 3px, rgba(203,172,249,0.15) 4px)",
                    }}
                  ></div>

                  {/* Bottom gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0E23] via-[#0C0E23]/60 to-transparent"></div>

                  {/* Status chip (bottom-left) */}
                  <div className="absolute bottom-3 left-4 z-20 flex items-center gap-1.5 bg-[#0C0E23]/85 backdrop-blur-sm border border-[#141b4e] rounded-full px-2.5 py-1">
                    <span
                      className={`relative flex h-1.5 w-1.5`}
                    >
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          project.status === "Live" ? "bg-emerald-400" : "bg-yellow-400"
                        }`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                          project.status === "Live" ? "bg-emerald-400" : "bg-yellow-400"
                        }`}
                      ></span>
                    </span>
                    <span className="text-[10px] font-medium text-gray-300 tracking-wide">
                      {project.status}
                    </span>
                  </div>

                  {/* Hover action button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-[#CBACF9] text-[#000319] rounded-full px-3.5 py-1.5 text-[11px] font-semibold shadow-lg shadow-[#CBACF9]/30 transition-all duration-500 ${
                      hoveredId === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    Visit
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative">
                  {/* Title + tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#CBACF9] transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-px bg-gradient-to-r from-[#CBACF9] to-transparent"></span>
                      <p className="text-[#CBACF9]/80 text-[11px] font-medium uppercase tracking-widest">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics — clean list style */}
                  <ul className="space-y-1.5 mb-5">
                    {project.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="flex items-center gap-2 text-[11px] text-gray-400"
                      >
                        <span className="text-[#CBACF9] text-xs leading-none">▸</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack — labeled pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 bg-[#161A31]/80 border border-[#262c71]/60 rounded-md px-2 py-1 hover:border-[#CBACF9]/40 hover:bg-[#161A31] transition-all duration-300"
                        >
                          <Icon
                            className="text-[11px]"
                            style={{ color: tech.color }}
                          />
                          <span className="text-[10px] font-medium text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA footer */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between pt-4 border-t border-[#141b4e] group/cta"
                  >
                    <span className="text-[11px] text-gray-500 font-mono tracking-wider uppercase">
                      Case Study
                    </span>
                    <span className="flex items-center gap-2 text-[#CBACF9] text-xs font-semibold">
                      <span className="group-hover/cta:mr-1 transition-all duration-300">Explore</span>
                      <span className="w-6 h-6 rounded-full bg-[#CBACF9]/10 border border-[#CBACF9]/30 flex items-center justify-center group-hover/cta:bg-[#CBACF9] group-hover/cta:text-[#000319] transition-all duration-300">
                        <FaArrowRight className="text-[9px]" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
