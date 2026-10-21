import React from 'react';
import { educationAndExperience } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function Timeline() {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="timeline" className="relative py-28 px-4 sm:px-6 bg-[#090D14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 glow-bronze-radial opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Career Milestones</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Experience, Training &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Education
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            A rigorous trajectory blending theoretical computer science with applied government and industry fellowships.
          </p>
        </div>

        {/* Timeline Vertical Track */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
          {educationAndExperience.map((item, idx) => {
            const IconComponent = getIcon(item.type);
            const isOngoing = item.status && item.status.includes('Progress');

            return (
              <div key={idx} className="relative group">
                
                {/* Node on vertical line */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isOngoing
                    ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-900 border-slate-700 text-slate-300 group-hover:border-emerald-400 group-hover:text-emerald-400'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-3xl glass-panel bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
                  
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className={`text-[11px] font-mono px-3 py-0.5 rounded-full border ${
                      isOngoing
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 animate-pulse'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mt-1 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-semibold text-slate-200">{item.organization}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{item.issuer}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
