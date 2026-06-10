"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">02 / Experience</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight select-none">
            Where I&apos;ve{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}>
              Worked.
            </span>
          </h2>
        </motion.div>

        {/* Experience list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col justify-between border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group rounded-2xl bg-white/[0.01] p-8 md:p-10"
            >
              <div className="space-y-6">
                {/* Meta & Title */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="mono text-[11px] tracking-wider text-white/45 uppercase">{exp.period}</div>
                    {exp.current && (
                      <div className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                        <span className="mono text-[9px] tracking-wider text-white/60 uppercase">Most Recent</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{exp.role}</h3>
                    <div className="text-white/80 font-bold text-base md:text-lg mt-1">{exp.company}</div>
                    <div className="mono text-xs tracking-wider text-white/35 uppercase mt-0.5">{exp.location} · {exp.type}</div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-left">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-white/75 text-sm md:text-base leading-relaxed">
                      <span className="text-white/30 flex-shrink-0 mt-1.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mt-8">
                {exp.techStack.map((t) => (
                  <span key={t}
                    className="mono px-3 py-1 text-[10px] tracking-wider border border-white/12
                      text-white/45 uppercase rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
