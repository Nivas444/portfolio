"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/lib/data";
import { Code, Cpu, Server, Layers, Brain, Hammer } from "lucide-react";

const skillIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  cpu: Cpu,
  server: Server,
  layers: Layers,
  brain: Brain,
};

// Accent colors per category for brighter skill pills
const categoryAccentMap: Record<string, { dot: string; border: string; hoverBg: string }> = {
  code:   { dot: "rgb(34,211,238)",  border: "rgba(34,211,238,0.25)",  hoverBg: "rgba(34,211,238,0.1)" },   // cyan
  cpu:    { dot: "rgb(167,139,250)", border: "rgba(167,139,250,0.25)", hoverBg: "rgba(167,139,250,0.1)" },  // violet
  server: { dot: "rgb(52,211,153)",  border: "rgba(52,211,153,0.25)",  hoverBg: "rgba(52,211,153,0.1)" },   // emerald
  layers: { dot: "rgb(251,191,36)",  border: "rgba(251,191,36,0.25)",  hoverBg: "rgba(251,191,36,0.1)" },   // amber
  brain:  { dot: "rgb(251,113,133)", border: "rgba(251,113,133,0.25)", hoverBg: "rgba(251,113,133,0.1)" },  // rose
};

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">04 / Skills</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight select-none">
            Technical{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}>
              Stack.
            </span>
          </h2>
        </motion.div>

        {/* Skills grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="flex flex-col border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group rounded-2xl bg-white/[0.01] p-8"
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white/80">
                  {(() => {
                    const Icon = skillIconMap[group.icon] || Hammer;
                    return <Icon size={20} className="stroke-[1.5]" />;
                  })()}
                </span>
                <span className="mono text-xs tracking-[0.2em] text-white/70 uppercase leading-relaxed font-bold">
                  {group.category}
                </span>
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.035 }}
                    whileHover={{
                      backgroundColor: (categoryAccentMap[group.icon] || categoryAccentMap.code).hoverBg,
                      borderColor: (categoryAccentMap[group.icon] || categoryAccentMap.code).border,
                      color: "#fff",
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white/15 text-white/80
                      cursor-default transition-all duration-200 rounded-full"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: (categoryAccentMap[group.icon] || categoryAccentMap.code).dot,
                        boxShadow: `0 0 6px ${(categoryAccentMap[group.icon] || categoryAccentMap.code).dot}`,
                      }}
                    />
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
