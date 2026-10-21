import React from 'react';
import { highImpactStats } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function MetricsRibbon() {
  return (
    <section className="relative py-10 border-y border-slate-800/80 bg-[#0A0E17]/80 backdrop-blur-md overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {highImpactStats.map((item, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>{item.label}</span>
                <span className="text-emerald-400 font-semibold group-hover:scale-110 transition-transform">
                  ✦
                </span>
              </div>

              {/* Big metric value */}
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                {item.value}
              </div>

              {/* Micro badge / context */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90 font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
