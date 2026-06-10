"use client";

import { useEffect, useRef } from "react";

export function CircuitBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Animate random paths
    const paths = svg.querySelectorAll(".circuit-path");
    paths.forEach((path, i) => {
      const len = (path as SVGPathElement).getTotalLength?.() ?? 500;
      const el = path as SVGPathElement;
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      el.style.animation = `circuit-flow ${4 + (i % 5) * 1.2}s linear ${i * 0.8}s infinite`;
    });
  }, []);

  return (
    <div className="circuit-bg">
      {/* Main circuit SVG — fills entire viewport */}
      <svg
        ref={svgRef}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes circuit-flow {
              0% { stroke-dashoffset: var(--len, 1000); opacity: 0; }
              5% { opacity: 0.3; }
              90% { opacity: 0.3; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            @keyframes node-pulse {
              0%, 100% { r: 2; opacity: 0.1; }
              50% { r: 4; opacity: 0.35; }
            }
            @keyframes node-pulse-lg {
              0%, 100% { r: 3; opacity: 0.08; }
              50% { r: 6; opacity: 0.25; }
            }
          `}</style>
        </defs>

        {/* ── Grid dots ─────────────────────────────────── */}
        {Array.from({ length: 30 }, (_, col) =>
          Array.from({ length: 20 }, (_, row) => (
            <circle
              key={`dot-${col}-${row}`}
              cx={col * 50 + 10}
              cy={row * 50 + 10}
              r="1"
              fill="rgba(255,255,255,0.06)"
            />
          ))
        )}

        {/* ── Horizontal traces ──────────────────────────── */}
        <path className="circuit-path" d="M0 80 H200 V120 H450 V80 H700" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" style={{"--len":"700"} as React.CSSProperties} />
        <path className="circuit-path" d="M900 80 H1100 V120 H1440" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" style={{"--len":"540","animationDelay":"1s"} as React.CSSProperties} />
        <path className="circuit-path" d="M0 200 H100 V240 H350 V200 H600 V240 H900" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" style={{"--len":"900","animationDelay":"2.5s"} as React.CSSProperties} />
        <path className="circuit-path" d="M1000 200 H1200 V160 H1440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"440","animationDelay":"0.5s"} as React.CSSProperties} />
        <path className="circuit-path" d="M0 350 H80 V320 H250 V380 H500 V350 H800" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" style={{"--len":"800","animationDelay":"3s"} as React.CSSProperties} />
        <path className="circuit-path" d="M850 350 H1050 V320 H1300 V380 H1440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"590","animationDelay":"1.8s"} as React.CSSProperties} />
        <path className="circuit-path" d="M0 500 H150 V540 H400 V500 H700 V460 H950" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" style={{"--len":"950","animationDelay":"4s"} as React.CSSProperties} />
        <path className="circuit-path" d="M1000 500 H1200 V540 H1440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"440","animationDelay":"2s"} as React.CSSProperties} />
        <path className="circuit-path" d="M0 650 H300 V620 H600 V680 H900 V650 H1100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" style={{"--len":"1100","animationDelay":"1.2s"} as React.CSSProperties} />
        <path className="circuit-path" d="M1150 650 H1340 V620 H1440" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" style={{"--len":"290","animationDelay":"3.5s"} as React.CSSProperties} />
        <path className="circuit-path" d="M0 800 H200 V780 H450 V820 H700 V800 H1000 V820 H1440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"1440","animationDelay":"5s"} as React.CSSProperties} />

        {/* ── Vertical traces ────────────────────────────── */}
        <path className="circuit-path" d="M150 0 V80 M150 200 V350 M150 500 V650" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" style={{"--len":"580","animationDelay":"0.8s"} as React.CSSProperties} />
        <path className="circuit-path" d="M350 0 V200 M350 350 V500 M350 650 V900" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"700","animationDelay":"2.2s"} as React.CSSProperties} />
        <path className="circuit-path" d="M600 0 V80 M600 200 V350 M600 500 V900" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" style={{"--len":"730","animationDelay":"1.5s"} as React.CSSProperties} />
        <path className="circuit-path" d="M900 0 V200 M900 350 V650 M900 800 V900" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"700","animationDelay":"3.8s"} as React.CSSProperties} />
        <path className="circuit-path" d="M1150 0 V80 M1150 200 V500 M1150 650 V900" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" style={{"--len":"730","animationDelay":"0.3s"} as React.CSSProperties} />
        <path className="circuit-path" d="M1340 0 V160 M1340 350 V620 M1340 800 V900" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" style={{"--len":"530","animationDelay":"2.8s"} as React.CSSProperties} />

        {/* ── IC chip outlines ───────────────────────────── */}
        <rect x="180" y="60" width="80" height="40" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="220" y="85" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace">MCU</text>
        {/* IC pins left */}
        <path d="M180 70 H170 M180 80 H170 M180 90 H170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        {/* IC pins right */}
        <path d="M260 70 H270 M260 80 H270 M260 90 H270" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        <rect x="542" y="188" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="570" y="206" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace">GPU</text>
        <path d="M542 196 H534 M542 204 H534 M542 212 H534" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <path d="M598 196 H606 M598 204 H606 M598 212 H606" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        <rect x="835" y="336" width="70" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="870" y="354" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">JETSON</text>
        <path d="M835 344 H826 M835 352 H826 M835 360 H826" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M905 344 H914 M905 352 H914 M905 360 H914" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* ── Web / IoT / AI tech labels ──────────────────── */}
        {/* Web tech – React */}
        <rect x="380" y="460" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="408" y="478" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">REACT</text>
        <path d="M380 468 H372 M380 476 H372 M380 484 H372" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M436 468 H444 M436 476 H444 M436 484 H444" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* Web tech – Node */}
        <rect x="1080" y="480" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="1108" y="498" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">NODE</text>
        <path d="M1080 488 H1072 M1080 496 H1072 M1080 504 H1072" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M1136 488 H1144 M1136 496 H1144 M1136 504 H1144" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* IoT – MQTT */}
        <rect x="680" y="720" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="708" y="738" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">MQTT</text>
        <path d="M680 728 H672 M680 736 H672 M680 744 H672" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M736 728 H744 M736 736 H744 M736 744 H744" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* AI – Neural Net */}
        <rect x="240" y="620" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="268" y="638" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">NN</text>
        <path d="M240 628 H232 M240 636 H232 M240 644 H232" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M296 628 H304 M296 636 H304 M296 644 H304" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* AI – LLM */}
        <rect x="1200" y="300" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="1228" y="318" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">LLM</text>
        <path d="M1200 308 H1192 M1200 316 H1192 M1200 324 H1192" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M1256 308 H1264 M1256 316 H1264 M1256 324 H1264" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* AI – YOLO */}
        <rect x="50" y="710" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="78" y="728" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">YOLO</text>
        <path d="M50 718 H42 M50 726 H42 M50 734 H42" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M106 718 H114 M106 726 H114 M106 734 H114" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* IoT – EDGE */}
        <rect x="960" y="560" width="56" height="28" rx="3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="988" y="578" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">EDGE</text>
        <path d="M960 568 H952 M960 576 H952 M960 584 H952" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M1016 568 H1024 M1016 576 H1024 M1016 584 H1024" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        <rect x="1080" y="60" width="80" height="40" rx="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
        <text x="1120" y="85" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.25)" fontFamily="JetBrains Mono, monospace">RasPi</text>
        <path d="M1080 70 H1068 M1080 80 H1068 M1080 90 H1068" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M1160 70 H1172 M1160 80 H1172 M1160 90 H1172" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />

        {/* ── Capacitors / resistors ─────────────────────── */}
        {/* Capacitor at 350,350 */}
        <rect x="345" y="340" width="10" height="20" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
        <rect x="359" y="340" width="10" height="20" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.05)" />

        {/* Resistor at 600,500 */}
        <rect x="590" y="494" width="30" height="12" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
        <path d="M580 500 H590 M620 500 H630" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        {/* Capacitor at 900,650 */}
        <rect x="895" y="640" width="10" height="20" rx="1" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
        <rect x="909" y="640" width="10" height="20" rx="1" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(255,255,255,0.05)" />

        {/* ── Animated pulsing nodes at intersections ────── */}
        {[
          [150, 80], [150, 200], [150, 350], [150, 500],
          [350, 200], [350, 500], [350, 650],
          [600, 80], [600, 350], [600, 500],
          [900, 200], [900, 350], [900, 650],
          [1150, 80], [1150, 500],
          [1340, 160], [1340, 350],
        ].map(([cx, cy], i) => (
          <circle
            key={`node-${i}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            style={{
              animation: `node-pulse ${2 + (i % 4) * 0.7}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}

        {/* ── Small IoT device icons ─────────────────────── */}
        {/* Camera icon at 1200,200 */}
        <rect x="1195" y="155" width="24" height="18" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <circle cx="1207" cy="164" r="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <rect x="1210" y="155" width="8" height="5" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        {/* WiFi signal at 80,500 */}
        <path d="M68 510 Q80 498 92 510" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M62 516 Q80 494 98 516" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="520" r="2" fill="rgba(255,255,255,0.3)" />

        {/* Sensor/node at 450,800 */}
        <circle cx="450" cy="800" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <circle cx="450" cy="800" r="3" fill="rgba(255,255,255,0.15)" />
        <path d="M450 792 V788 M450 808 V812 M442 800 H438 M458 800 H462" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Arrow/signal at 700, 350 */}
        <path d="M680 340 L700 350 L680 360 M695 350 H730" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Radial gradient vignette to fade edges */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
      }} />
    </div>
  );
}
