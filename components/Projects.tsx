"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Trash2, BookOpen, BarChart3, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";

const projectIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  trash: Trash2,
  book: BookOpen,
  chart: BarChart3,
};

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">03 / Projects</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center gap-4 mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-none">
            Selected{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}>
              Work.
            </span>
          </h2>
          <a
            href="https://github.com/Nivas444"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 mono text-xs tracking-widest text-white/45
              hover:text-white/80 uppercase transition-colors"
          >
            <GithubIcon size={14} />
            All Projects
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-3 gap-px bg-white/8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black p-8 group hover:bg-white/3 transition-all duration-300 relative flex flex-col items-center text-center min-h-[300px]"
            >
              {/* Large index number */}
              <div className="absolute top-6 right-7 mono text-xs tracking-[0.3em] text-white/15 select-none">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="text-white/80 mb-6 flex justify-center">
                {(() => {
                  const Icon = projectIconMap[project.icon] || FolderGit2;
                  return <Icon size={24} className="stroke-[1.5]" />;
                })()}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-white mb-4 leading-snug tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-[15px] leading-relaxed mb-6 flex-1 max-w-sm">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.techStack.map((t) => (
                  <span key={t}
                    className="mono px-2.5 py-1 text-[9px] tracking-wider border border-white/12
                      text-white/40 uppercase rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-center gap-4">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 mono text-[10px] tracking-wider border border-white/20 text-white/50
                      px-4 py-1.5 rounded-full hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-250 uppercase">
                    <ExternalLink size={12} /> Demo
                  </a>
                ) : project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 mono text-[10px] tracking-wider border border-white/20 text-white/50
                      px-4 py-1.5 rounded-full hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-250 uppercase">
                    <GithubIcon size={12} /> Code
                  </a>
                ) : (
                  <span className="mono text-[10px] tracking-wider text-white/20 border border-white/5 px-4 py-1.5 rounded-full uppercase select-none">Private</span>
                )}
              </div>

              {/* Bottom border reveal on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/0 group-hover:bg-white/15 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
