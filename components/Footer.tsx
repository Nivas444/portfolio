"use client";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
        <div className="text-white/20 mono text-[9px] tracking-widest uppercase text-center">
          © {year} Nivas M. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
