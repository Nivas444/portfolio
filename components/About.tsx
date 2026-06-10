"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";

const stats = [
  { value: "5+", label: "Core AI Frameworks" },
  { value: "3+", label: "Systems Deployed" },
  { value: "3", label: "Certifications" },
  { value: "8.0", label: "B.Tech CGPA" },
];

const techTags = ["Python", "PyTorch", "YOLOv8", "FastAPI", "Edge AI", "Raspberry Pi", "NVIDIA Jetson", "OpenCV"];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">01 / About</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-16">

          {/* Headline + tags */}
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight text-white mb-8 select-none"
            >
              Building AI{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}>
                That Works
              </span>{" "}
              In the Real World.
            </motion.h2>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 max-w-2xl"
            >
              {techTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                  className="mono px-4 py-2 text-xs tracking-wider border border-white/12
                    text-white/50 cursor-default transition-all duration-200 rounded-full uppercase"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Text + stats */}
          <div className="w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-16"
            >
              <p>
                I&apos;m <span className="text-white font-semibold">{personalInfo.name}</span> — an AI Engineer specializing in computer vision, edge AI, and intelligent SaaS architectures. I bridge the gap between complex algorithms and high-throughput production-ready deployments.
              </p>
              <p className="text-white/60 text-[15px] md:text-[17px]">
                Currently, at SortyX Ventures, I build and deploy multi-agent AI systems, scale high-throughput machine learning backends, and design edge AI computer vision pipelines. My work involves training deep learning models like YOLOv8 and optimizing them for embedded platforms like the NVIDIA Jetson Orin Nano.
              </p>
              <p className="text-white/60 text-[15px] md:text-[17px]">
                I don&apos;t just train models in isolation — I build the SaaS products, data pipelines, and hardware integrations that make them operational. My engineering focus is on system efficiency, reliability, and business value.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 w-full max-w-3xl"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="bg-black p-6 relative group hover:bg-white/3 transition-colors duration-200"
                >
                  <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                  <div className="mono text-[10px] tracking-[0.2em] text-white/35 uppercase">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
