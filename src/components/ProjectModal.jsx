import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  FileText, 
  Maximize2 
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl glass-panel bg-[#0C111A] border border-slate-700/80 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090D14]/90 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.dataset.size}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Headline */}
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Dataset Source: <strong className="text-slate-200">{project.dataset.source}</strong></span>
              <span>•</span>
              <span>Type: <strong className="text-slate-200">{project.dataset.type}</strong></span>
            </p>
          </div>

          {/* Real Dashboard Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-xs text-white backdrop-blur-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Resolution</span>
              </a>
            </div>
          </div>

          {/* Real Extracted KPIs Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Verified Performance Indicators (KPIs)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.kpis.map((kpi, kIdx) => (
                <div
                  key={kIdx}
                  className={`p-4 rounded-xl border ${
                    kpi.highlight
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-200'
                  }`}
                >
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {kpi.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold block">
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Case Study Breakdown (4-Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Problem Statement */}
            <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold font-display mb-2">
                <Target className="w-4 h-4" />
                <span>Business Problem & Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* 2. Tools & Tech Stack */}
            <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold font-display mb-2">
                <Layers className="w-4 h-4" />
                <span>Tools & Architecture</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-emerald-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 3. Methodology & Analysis */}
          <div className="p-6 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800">
            <h4 className="flex items-center gap-2 text-white text-sm font-bold font-display mb-4">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Analytical Methodology & Execution</span>
            </h4>
            <ul className="space-y-2.5">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Key Insights & Findings */}
          <div className="p-6 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800">
            <h4 className="flex items-center gap-2 text-white text-sm font-bold font-display mb-4">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Data-Driven Insights Discovered</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-emerald-400 text-base leading-none font-bold">✦</span>
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Strategic Recommendations */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/70 to-slate-900/50 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-300 font-display font-bold text-sm mb-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Actionable Business Recommendation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.businessRecommendations}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
