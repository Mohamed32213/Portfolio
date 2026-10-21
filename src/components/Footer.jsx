import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Clock, Sparkles } from 'lucide-react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateEgyptTime = () => {
      const now = new Date();
      // Egypt timezone is UTC+2 or UTC+3 depending on daylight savings; Intl handles it accurately
      const options = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(now));
    };

    updateEgyptTime();
    const interval = setInterval(updateEgyptTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-slate-800/80 bg-[#06080C] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-display font-bold text-xs">
            MR
          </div>
          <div>
            <div className="text-slate-200 font-semibold font-display">
              {personalInfo.name} — Data Analyst
            </div>
            <div className="text-slate-500 font-mono text-[11px]">
              © {new Date().getFullYear()} All rights reserved. Handcrafted with precision.
            </div>
          </div>
        </div>

        {/* Center: Live Local Egypt Time Widget */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono text-[11px] text-slate-300">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Fayoum, Egypt (UTC+3)</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-300 font-bold">{currentTime || '08:45 PM'}</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
