"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiSocketdotio,
  SiHtml5,
  SiGit,
  SiPostman,
  SiVercel,
  SiVite,
  SiSwagger,
  SiBootstrap,
  SiSass,
  SiJsonwebtokens,
  SiRedis,
  SiSupabase,
  SiRender,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible user interfaces",
    accent: "from-blue-500 to-cyan-500",
    techs: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", level: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Advanced" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Advanced" },
      { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952B3", level: "Advanced" },
      { name: "SCSS", icon: SiSass, color: "#CC6699", level: "Advanced" },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26", level: "Advanced" },
      { name: "Framer Motion", icon: SiReact, color: "#FF6B9D", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and server-side solutions",
    accent: "from-green-500 to-emerald-500",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Advanced" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", level: "Advanced" },
      { name: "RESTful APIs", icon: SiSwagger, color: "#85EA2D", level: "Advanced" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", level: "Advanced" },
      { name: "JWT & RBAC", icon: SiJsonwebtokens, color: "#FB015B", level: "Advanced" },
    ],
  },
  {
    title: "Database",
    description: "Optimized data storage and query performance",
    accent: "from-orange-500 to-amber-500",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Advanced" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#5A67D8", level: "Advanced" },
      { name: "Redis", icon: SiRedis, color: "#DC382D", level: "Intermediate" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Streamlining development workflows",
    accent: "from-purple-500 to-pink-500",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032", level: "Advanced" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Advanced" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D", level: "Advanced" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", level: "Intermediate" },
      { name: "Render", icon: SiRender, color: "#46E3B7", level: "Intermediate" },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: "Intermediate" },
    ],
  },
];

const levelColor = {
  Advanced: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Intermediate: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

const TechStack = () => {
  return (
    <section id="expertise" className="bg-[#04071D] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#CBACF9] text-sm font-medium tracking-widest uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            A curated set of modern tools I use to build fast, scalable, and
            maintainable applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.title} data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-1 h-6 rounded-full bg-gradient-to-b ${category.accent}`}
                ></div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[#141b4e] to-transparent"></div>
                <span className="text-xs text-gray-500 hidden sm:block">
                  {category.description}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      data-reveal="scale"
                      data-reveal-delay={Math.min(idx * 60, 420)}
                      className="group flex flex-col items-center justify-center gap-3 p-6 bg-[#0C0E23] rounded-2xl border border-[#141b4e] hover:border-[#CBACF9]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#CBACF9]/5 relative"
                    >
                      <Icon
                        className="text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm font-medium text-gray-300 text-center">
                        {tech.name}
                      </span>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${levelColor[tech.level]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {tech.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
