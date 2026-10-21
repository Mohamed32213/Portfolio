import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { 
  BarChart3, 
  Database, 
  Code2, 
  Check, 
  Star, 
  Layers, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const tabOptions = ['All', 'BI & Visualization', 'Databases & Querying', 'Programming & Science'];

  const filterCategory = (categoryName) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'BI & Visualization' && categoryName.includes('Business Intelligence')) return true;
    if (activeTab === 'Databases & Querying' && categoryName.includes('Databases')) return true;
    if (activeTab === 'Programming & Science' && categoryName.includes('Programming')) return true;
    return false;
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 bg-[#090D14]">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 glow-emerald-radial opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Tools, Technologies &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Analytical Matrix
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Honest, verified proficiency ratings backed by real enterprise datasets, DAX measures, and ETL pipelines.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900/90 border border-slate-800">
            {tabOptions.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {skillsCategories.filter((c) => filterCategory(c.category)).map((cat, idx) => (
            <div key={idx} className="space-y-5">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-800/80 pb-3">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {cat.description}
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const percentage = (skill.level / skill.max) * 100;
                  return (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-0.5"
                    >
                      {/* Name & Rating Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <h4 className="font-display font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                            {skill.name}
                          </h4>
                          {skill.level === 5 && (
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              Top Mastery
                            </span>
                          )}
                        </div>

                        {/* Numeric & Visual Rating */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            {skill.level}/{skill.max}
                          </span>
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(skill.max)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < skill.level ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden mb-4">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:from-emerald-400 group-hover:to-emerald-200 transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                      {/* Micro Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Additional Competencies Banner */}
        <div className="mt-14 p-6 rounded-3xl glass-panel bg-gradient-to-r from-[#0C121D] to-[#0A0E17] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-white text-base flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Additional Core Competencies
            </h4>
            <p className="text-xs text-slate-400">
              End-to-End Analytics Workflow, Exploratory Data Analysis (EDA), Relational Integrity, and Stakeholder Reporting.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['ETL Pipelines', 'Data Cleansing', 'KPI Architecture', 'Analytical Storytelling', 'ICPC Algorithms'].map((badge, bIdx) => (
              <span
                key={bIdx}
                className="text-xs font-mono font-medium px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/25 text-emerald-300"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
