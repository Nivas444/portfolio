"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pb-12"
    >
      {/* Full-height right photo panel */}
      <motion.div
        style={{ y: yPhoto }}
        className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:block"
      >
        {/* Pure black wash to kill any transparent bg */}
        <div className="absolute inset-0 bg-black" />
        {/* The photo */}
        <div className="absolute inset-0">
          <Image
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            fill
            className="object-cover object-top"
            priority
            sizes="42vw"
            style={{ filter: "grayscale(20%) contrast(1.05)" }}
          />
        </div>
        {/* Gradient masks — left edge and bottom to blend into black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      </motion.div>
      {/* Main content */}
      <motion.div
        style={{ opacity: opacitySection }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 flex-1 flex flex-col justify-between"
      >
        {/* Main content grouping */}
        <div className="flex-1 flex flex-col justify-center py-6 items-center text-center max-w-4xl mx-auto lg:items-start lg:text-left lg:mx-0 lg:max-w-[55%]">

          {/* Mobile-only avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:hidden mb-8 relative group"
          >
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
            {/* Outer border wrapper */}
            <div className="relative w-36 h-36 rounded-full p-[2px] bg-gradient-to-tr from-white/25 to-white/10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="144px"
                  style={{ filter: "contrast(1.05)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name — giant editorial type */}
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(3.8rem,9.5vw,8.5rem)] font-black leading-[1.0] tracking-tight mb-2 select-none"
              style={{ fontStretch: "condensed" }}
            >
              <span className="text-white inline-block">NIVAS</span>{" "}
              <span
                className="inline-block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2.5px rgba(255,255,255,0.75)",
                }}
              >
                M
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-6 mb-8"
            >
              <div className="w-8 h-px bg-white/20" />
              <span className="mono text-[12px] tracking-[0.25em] text-white/70 uppercase">
                AI Engineer · Computer Vision · Edge AI
              </span>
              <div className="w-8 h-px bg-white/20" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            >
              {personalInfo.subTitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-12 py-5 bg-white text-black text-sm font-black tracking-widest uppercase rounded-full
                  transition-all duration-200 hover:bg-white/90"
              >
                View Projects
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 border border-white/25 text-white text-sm font-black tracking-widest uppercase rounded-full
                  hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Location shortcut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex items-center justify-center lg:justify-start gap-2 mono text-xs tracking-[0.2em] text-white/40 uppercase mt-8"
            >
              <MapPin size={13} className="text-white/50 stroke-[1.5]" />
              <span>Tamil Nadu, India &nbsp;·&nbsp; Open to Remote</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom footer elements of Hero */}
        <div className="flex items-center justify-between w-full border-t border-white/8 pt-6 mt-auto">
          {/* Scroll cue */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 text-white/25 hover:text-white/50 transition-colors group"
          >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={14} />
            </motion.div>
            <span className="mono text-xs tracking-[0.3em] uppercase">Scroll</span>
          </motion.button>

          {/* Stats row — bottom right corner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="hidden md:flex items-end gap-8"
          >
            {[
              { n: "2", label: "Industry Internships" },
              { n: "3", label: "Selected Projects" },
              { n: "3", label: "Certifications" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <div className="text-2xl font-black text-white/80 leading-none">{s.n}</div>
                <div className="mono text-[9px] tracking-widest text-white/30 uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
