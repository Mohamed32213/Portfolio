import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  FileSearch,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const coreStrengths = [
    {
      title: "Root-Cause Discovery",
      desc: "Investigating the fundamental drivers behind performance dips (like B.LABAN end-of-month sales drops or MISUO delivery delays).",
      icon: FileSearch,
      color: "emerald"
    },
    {
      title: "Complex Data Modeling",
      desc: "Architecting scalable star schemas and multi-table relational models (mastered in Salla 4+ relational tables project).",
      icon: Cpu,
      color: "amber"
    },
    {
      title: "Advanced DAX & KPIs",
      desc: "Writing custom time-intelligence DAX measures, YoY variance, service-level adherence, and cohort retention.",
      icon: TrendingUp,
      color: "emerald"
    },
    {
      title: "Algorithmic Problem Solving",
      desc: "Leveraging 100+ solved competitive programming problems (ICPC) for algorithmic rigor, speed, and analytical precision.",
      icon: Sparkles,
      color: "amber"
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 bg-[#080A0F]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>About Mohamed</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Driven by curiosity.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Grounded in data.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Bridging computer science principles with executive business intelligence to solve real operational bottlenecks.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo & Identity Card (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel bg-[#0D121B] border border-slate-700/80 p-3 shadow-2xl">
                
                {/* Photo frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.avatar || "./assets/mohamed_ragab_new.jpg"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D121B] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{personalInfo.name}</div>
                      <div className="text-[11px] font-mono text-emerald-400">Junior Data Analyst</div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>

                {/* Quick Academic Badges */}
                <div className="p-3 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fayoum University — Faculty of Computers & AI (CS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>DEPI Fellow (Ministry of Communications & IT)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Narrative & Philosophy (Right) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a third-year Computer Science student at <strong className="text-white">Fayoum University</strong> with a dedicated specialization in <strong className="text-emerald-300">Data Analysis and Business Intelligence</strong>.
              </p>
              <p>
                What excites me most isn't just cleaning rows or drawing colorful charts—it is the <strong className="text-white">investigative thrill</strong> of analyzing an operational problem, peeling back layers of ambiguity, and discovering the exact root cause behind business anomalies.
              </p>
              <p>
                Having completed a specialized Data Analysis diploma under Eng. Mazen and currently reaching the final phase of the prestigious <strong className="text-white">Digital Egypt Pioneers Initiative (DEPI)</strong> by Egypt's Ministry of Communications, I have gained hands-on experience stress-testing real datasets containing tens of thousands of rows.
              </p>
            </div>

            {/* Core Strengths 2x2 Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-panel bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-white text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick quote / takeaway */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900/50 border-l-4 border-emerald-500 text-xs sm:text-sm text-slate-300 italic">
              "Data without context is just noise. My mission is to turn data into strategic decisions that executives can trust and act upon immediately."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
