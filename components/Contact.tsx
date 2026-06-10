"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { LinkedinIcon, GithubIcon } from "./icons";

// Official Gmail icon path
function GmailLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M20 4H18V9L12 13.5L6 9V4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H6V10.5L12 15L18 10.5V20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" />
    </svg>
  );
}

// Official WhatsApp icon path
function WhatsAppLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.507 0 9.961-4.45 9.964-9.943.003-2.66-1.03-5.163-2.909-7.045C16.44 1.734 13.94 1.7 12.01 1.7c-5.505 0-9.957 4.452-9.96 9.943-.001 1.914.537 3.738 1.558 5.27l-.99 3.619 3.733-.979z" />
      <path d="M17.07 14.18c-.274-.137-1.623-.8-1.872-.892-.25-.092-.43-.137-.61.137-.18.274-.697.892-.857 1.074-.16.183-.32.206-.594.068-1.5-.75-2.614-1.3-3.663-3.11-.274-.473.274-.44.787-1.46.08-.163.04-.3-.02-.438-.06-.137-.53-1.28-.73-1.75-.19-.466-.39-.4-.53-.408-.14-.008-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.18.86 2.33.98 2.49.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.27-.18-.54-.31z" />
    </svg>
  );
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, "");
  const whatsappMessage = encodeURIComponent("Hello Nivas, I saw your portfolio and would love to connect!");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-16 md:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-white/8" />
          <span className="mono text-xs tracking-[0.3em] text-white/40 uppercase">06 / Contact</span>
          <div className="w-12 h-px bg-white/8" />
        </motion.div>

        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <h2 className="text-[clamp(3.5rem,8.5vw,7rem)] font-black leading-[1.0] tracking-tight text-white mb-6 select-none">
            Let&apos;s Build{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}>
              Something.
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mt-4">
            I&apos;m always open to discussing new technology initiatives, edge AI integrations, AI agent workflows, or consulting opportunities. Let&apos;s build the future together.
          </p>
        </motion.div>

        {/* Contact options side-by-side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in"
        >
          {/* Email (Gmail) */}
          <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-between text-center min-h-[200px]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer mt-4"
            >
              <GmailLogo size={32} />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full mono text-[10px] tracking-widest uppercase border border-white/25 text-white/75 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-200 py-3 rounded-full font-black mb-2"
            >
              Send Email
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-between text-center min-h-[200px]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer mt-4"
            >
              <WhatsAppLogo size={32} />
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full mono text-[10px] tracking-widest uppercase border border-white/25 text-white/75 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-200 py-3 rounded-full font-black mb-2"
            >
              WhatsApp
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-between text-center min-h-[200px]">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer mt-4"
            >
              <LinkedinIcon size={28} className="stroke-[1.5]" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full mono text-[10px] tracking-widest uppercase border border-white/25 text-white/75 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-200 py-3 rounded-full font-black mb-2"
            >
              View Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-between text-center min-h-[200px]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer mt-4"
            >
              <GithubIcon size={28} className="stroke-[1.5]" />
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-full mono text-[10px] tracking-widest uppercase border border-white/25 text-white/75 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-200 py-3 rounded-full font-black mb-2"
            >
              View Code
            </a>
          </div>
        </motion.div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="mono text-xs tracking-widest text-white/40 uppercase text-center">
            Open to Remote Worldwide & Relocation
          </span>
          <div className="w-8 h-px bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
