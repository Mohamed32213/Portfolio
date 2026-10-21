import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  ChevronRight, 
  ChevronLeft,
  Database,
  BarChart3,
  Award,
  Layers
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from './SocialIcons';

const stationsData = [
  {
    id: 1,
    year: "2022",
    location: "FAYOUM UNIVERSITY",
    title: "Started Computer Science & AI",
    subtitle: "Faculty of Computers & AI",
    badge: "Foundation",
    description: "Built deep fundamentals in data structures, algorithms, relational databases, and competitive programming with ICPC.",
    icon: Database,
    stats: [
      { label: "Focus", val: "CS & Algorithms" },
      { label: "ICPC Problems", val: "100+ Solved" }
    ]
  },
  {
    id: 2,
    year: "2024",
    location: "CAIRO / REMOTE",
    title: "Completed Professional Data Diploma",
    subtitle: "Under Eng. Mazen Mentorship",
    badge: "Data Mastery",
    description: "Mastered end-to-end data modeling, DAX calculations, advanced Excel workflows, and Power BI report architecture.",
    icon: BarChart3,
    stats: [
      { label: "Rating", val: "5/5 Excel & BI" },
      { label: "Competencies", val: "DAX & Star Schema" }
    ]
  },
  {
    id: 3,
    year: "2026",
    location: "MINISTRY OF COMMUNICATIONS",
    title: "Enrolled in DEPI Fellowship",
    subtitle: "Digital Egypt Pioneers Initiative",
    badge: "Government Fellowship",
    description: "Selected for intensive enterprise data analytics training by Egypt's MCIT. 4 months completed, 2 months to final certification.",
    icon: Award,
    stats: [
      { label: "Duration", val: "6 Months Intensive" },
      { label: "Status", val: "4 Mo Completed" }
    ]
  },
  {
    id: 4,
    year: "ACTIVE",
    location: "GLOBAL & FREELANCE",
    title: "Enterprise BI Case Studies",
    subtitle: "Real-world Commercial Analytics",
    badge: "Production Impact",
    description: "Built 5 complete enterprise analytics solutions covering Adidas ($900M revenue), Salla (3M calls), B.LABAN, and MISUO.",
    icon: Layers,
    stats: [
      { label: "Revenue Analyzed", val: "$900M+" },
      { label: "Calls Handled", val: "3.0M Records" }
    ]
  }
];

export default function Hero() {
  const [activeStationIndex, setActiveStationIndex] = useState(3); // Start at current active station
  const currentStation = stationsData[activeStationIndex];

  const handleNext = () => {
    setActiveStationIndex((prev) => (prev + 1) % stationsData.length);
  };

  const handlePrev = () => {
    setActiveStationIndex((prev) => (prev - 1 + stationsData.length) % stationsData.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-emerald-radial opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-80 h-80 glow-bronze-radial opacity-40 pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Bio, Title, CTA */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{personalInfo.status.badgeText}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-white">
              Mohamed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                Ragab
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl sm:text-2xl md:text-3xl font-display font-semibold text-emerald-400">
              <span>Junior Data Analyst & BI Specialist</span>
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-300 tracking-wide pt-1">
              {personalInfo.tagline}
            </p>
          </div>

          {/* High-Impact Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Computer Science student at <strong className="text-white font-semibold">Fayoum University</strong> and <strong className="text-white font-semibold">DEPI Fellow</strong>. I specialize in turning ambiguous, fragmented datasets into{' '}
            <span className="text-emerald-300 font-medium">executive dashboards</span>,{' '}
            <span className="text-emerald-300 font-medium">operational root-cause insights</span>, and{' '}
            <span className="text-emerald-300 font-medium">data-driven revenue growth</span>.
          </p>

          {/* CTAs: Case studies, Resume */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Mohamed_Ragab_Data_Analyst_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/50 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-400 hover:text-emerald-300 font-medium text-sm transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Icons Matrix */}
          <div className="flex items-center gap-2.5 pt-2">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Direct Email"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive "Stations" Card (Inspired by reference) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-3xl p-5 sm:p-6 glass-panel bg-[#080E18]/95 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden">
            
            {/* Top station header with counter and next/prev controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                  {currentStation.id}/{stationsData.length} stations
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    2022 → now
                  </span>
                </div>
              </div>

              {/* Navigation stepper button (NEXT like the reference) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs font-mono transition-colors"
                  aria-label="Previous station"
                >
                  PREV
                </button>
                <button
                  onClick={handleNext}
                  className="px-3.5 py-1 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-sm shadow-emerald-500/30 flex items-center gap-1"
                  aria-label="Next station"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Artistic SVG Landscape (Pyramids, Nile, Night Sky, Winding Route) */}
            <div className="relative rounded-2xl overflow-hidden my-4 border border-slate-800/90 bg-[#050D17]">
              <svg 
                className="w-full h-44 sm:h-52 select-none" 
                viewBox="0 0 460 210" 
                fill="none" 
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Night Sky Gradient */}
                <rect width="460" height="210" fill="url(#night-sky-grad)" />

                {/* Stars in sky */}
                {[
                  { cx: 30, cy: 20, r: 1 },
                  { cx: 75, cy: 35, r: 1.2 },
                  { cx: 120, cy: 18, r: 0.9 },
                  { cx: 180, cy: 28, r: 1.4 },
                  { cx: 220, cy: 15, r: 1 },
                  { cx: 260, cy: 40, r: 1.1 },
                  { cx: 340, cy: 22, r: 1.3 },
                  { cx: 380, cy: 35, r: 0.9 },
                  { cx: 430, cy: 20, r: 1.2 },
                ].map((star, sIdx) => (
                  <circle
                    key={sIdx}
                    cx={star.cx}
                    cy={star.cy}
                    r={star.r}
                    fill="#ffffff"
                    opacity={sIdx % 2 === 0 ? "0.8" : "0.5"}
                    pointerEvents="none"
                  />
                ))}

                {/* Crescent Moon */}
                <g pointerEvents="none" transform="translate(415, 25)">
                  <circle cx="10" cy="10" r="10" fill="#fef08a" opacity="0.9" />
                  <circle cx="7" cy="7" r="9" fill="#071322" />
                </g>

                {/* Distant Desert Horizon & Pyramids */}
                <path
                  d="M 230 145 L 285 75 L 340 145 Z"
                  fill="url(#pyramid-grad-1)"
                  stroke="#78350f"
                  strokeWidth="0.8"
                  pointerEvents="none"
                />
                <path
                  d="M 285 75 L 340 145 L 315 145 Z"
                  fill="#92400e"
                  opacity="0.3"
                  pointerEvents="none"
                />

                <path
                  d="M 330 145 L 375 90 L 420 145 Z"
                  fill="url(#pyramid-grad-2)"
                  stroke="#78350f"
                  strokeWidth="0.8"
                  pointerEvents="none"
                />
                <path
                  d="M 375 90 L 420 145 L 398 145 Z"
                  fill="#78350f"
                  opacity="0.35"
                  pointerEvents="none"
                />

                {/* Nile River Curve */}
                <path
                  d="M 195 0 C 190 50, 220 90, 205 130 C 190 170, 160 190, 150 210"
                  stroke="#0284c7"
                  strokeWidth="24"
                  strokeLinecap="round"
                  opacity="0.35"
                  pointerEvents="none"
                />
                <path
                  d="M 195 0 C 190 50, 220 90, 205 130 C 190 170, 160 190, 150 210"
                  stroke="#38bdf8"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.6"
                  pointerEvents="none"
                />

                {/* Palm Trees along Nile */}
                {[
                  { x: 180, y: 80 },
                  { x: 228, y: 110 },
                  { x: 165, y: 155 },
                  { x: 300, y: 140 },
                ].map((tree, tIdx) => (
                  <g key={tIdx} transform={`translate(${tree.x}, ${tree.y})`} pointerEvents="none" opacity="0.65">
                    {/* Trunk */}
                    <line x1="0" y1="0" x2="2" y2="16" stroke="#52525b" strokeWidth="2" strokeLinecap="round" />
                    {/* Leaves */}
                    <path d="M 0 0 C -6 -5, -10 2, -12 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M 0 0 C 6 -5, 10 2, 12 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M 0 0 C -4 -8, 4 -8, 0 0" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </g>
                ))}

                {/* The Highway / Learning Route Curve */}
                <path
                  d="M 35 175 C 90 175, 100 120, 165 115 C 230 110, 225 165, 295 155 C 360 145, 375 90, 415 75"
                  stroke="#0f2137"
                  strokeWidth="8"
                  strokeLinecap="round"
                  pointerEvents="none"
                />
                <path
                  d="M 35 175 C 90 175, 100 120, 165 115 C 230 110, 225 165, 295 155 C 360 145, 375 90, 415 75"
                  stroke="url(#road-glow)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  pointerEvents="none"
                />

                {/* Station Nodes Definition */}
                {[
                  { cx: 45, cy: 175, idx: 0, year: "2022" },
                  { cx: 165, cy: 115, idx: 1, year: "2024" },
                  { cx: 295, cy: 155, idx: 2, year: "2026" },
                  { cx: 415, cy: 75, idx: 3, year: "NOW" },
                ].map((node) => {
                  const isSelected = activeStationIndex === node.idx;
                  return (
                    <g key={node.idx}>
                      {/* Invisible stable large hit area circle (Never jitters!) */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r="22"
                        fill="transparent"
                        className="cursor-pointer"
                        onClick={() => setActiveStationIndex(node.idx)}
                      />

                      {/* Visual Outer Halo Ring (Pointer events disabled) */}
                      {isSelected && (
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="15"
                          fill="rgba(16, 185, 129, 0.2)"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="2 2"
                          pointerEvents="none"
                        />
                      )}

                      {/* Station Core Node */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={isSelected ? 8 : 5}
                        fill={isSelected ? "#10b981" : "#ffffff"}
                        stroke={isSelected ? "#00f5a0" : "#64748b"}
                        strokeWidth={isSelected ? "3" : "1.5"}
                        pointerEvents="none"
                        className="transition-all duration-300"
                      />

                      {/* Station Year Label */}
                      <text
                        x={node.cx}
                        y={node.cy + 18}
                        textAnchor="middle"
                        fill={isSelected ? "#34d399" : "#94a3b8"}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight={isSelected ? "bold" : "normal"}
                        pointerEvents="none"
                      >
                        {node.year}
                      </text>
                    </g>
                  );
                })}

                {/* Active Capsule Marker on Road (Like the reference green capsule) */}
                {(() => {
                  const nodeCoords = [
                    { x: 45, y: 175 },
                    { x: 165, y: 115 },
                    { x: 295, y: 155 },
                    { x: 415, y: 75 },
                  ][activeStationIndex];

                  return (
                    <g 
                      transform={`translate(${nodeCoords.x - 22}, ${nodeCoords.y - 28})`} 
                      pointerEvents="none"
                      className="transition-all duration-500 ease-out"
                    >
                      <rect
                        width="44"
                        height="18"
                        rx="9"
                        fill="#10b981"
                        stroke="#34d399"
                        strokeWidth="1"
                        className="shadow-lg"
                      />
                      <text
                        x="22"
                        y="12"
                        textAnchor="middle"
                        fill="#022c22"
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {currentStation.year}
                      </text>
                    </g>
                  );
                })()}

                {/* SVG Definitions */}
                <defs>
                  <linearGradient id="night-sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#040A12" />
                    <stop offset="60%" stopColor="#071322" />
                    <stop offset="100%" stopColor="#0B1C30" />
                  </linearGradient>

                  <linearGradient id="pyramid-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#78350f" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="pyramid-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#78350f" stopOpacity="0.15" />
                  </linearGradient>

                  <linearGradient id="road-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#00f5a0" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Active Station Card Detail (Dynamic Reveal - Like reference overlay card) */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 relative overflow-hidden transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-emerald-400 tracking-wider">
                  {currentStation.year} • {currentStation.location}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {currentStation.badge}
                </span>
              </div>

              <h4 className="font-display font-bold text-white text-base mb-1">
                {currentStation.title}
              </h4>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                {currentStation.description}
              </p>

              {/* Mini telemetry stats */}
              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-slate-900">
                {currentStation.stats.map((stat, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-900/70 border border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 block">{stat.label}</span>
                    <span className="text-xs font-mono font-bold text-white">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Controls Note */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Interactive Journey Matrix
              </span>
              <span>Click nodes or NEXT</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
