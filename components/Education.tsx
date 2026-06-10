"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/lib/data";
import { Award, Cpu, Eye, FileBadge } from "lucide-react";

const certIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  award: Award,
  cpu: Cpu,
  eye: Eye,
};

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">05 / Education & Certs</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-16">

          {/* Education */}
          <div className="w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-6 select-none"
            >
              Education
            </motion.h2>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center w-full max-w-xl mx-auto p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group rounded-2xl bg-white/1"
              >
                <div className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">{edu.degree}</div>
                <div className="text-white/60 text-sm md:text-base mb-4">{edu.institution}</div>
                <div className="w-16 h-px bg-white/12 mb-4" />
                <div className="flex items-center justify-center gap-3">
                  <span className="mono text-xs tracking-wider text-white/40 uppercase">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-6 select-none"
            >
              Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group rounded-2xl bg-white/[0.01]"
                >
                  <div className="text-white/60 mb-4 group-hover:text-white transition-colors">
                    {(() => {
                      const Icon = certIconMap[cert.badge] || FileBadge;
                      return <Icon size={24} className="stroke-[1.5]" />;
                    })()}
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="text-sm md:text-base font-extrabold text-white mb-2 leading-snug">{cert.title}</div>
                    <div className="mono text-[10px] tracking-wider text-white/45 uppercase mb-1">{cert.issuer}</div>
                  </div>
                  <div className="w-8 h-px bg-white/12 my-3" />
                  <div className="mono text-[10px] tracking-wider text-white/30 uppercase">{cert.date}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
