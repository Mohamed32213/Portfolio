import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  ArrowUpRight, 
  Layers, 
  Database, 
  TrendingUp, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Retail & Commercial', 'Customer Operations', 'Supply Chain', 'Media'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Retail & Commercial' && (p.category.includes('Retail') || p.category.includes('FMCG'))) return true;
    if (activeFilter === 'Customer Operations' && p.category.includes('Customer')) return true;
    if (activeFilter === 'Supply Chain' && p.category.includes('Supply Chain')) return true;
    if (activeFilter === 'Media' && p.category.includes('Media')) return true;
    return true;
  });

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 bg-[#080A0F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-emerald-radial opacity-25 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Production Case Studies</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Featured Projects &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Executive Dashboards
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Real enterprise data transformed into interactive decision cockpits. Built with Power BI, DAX, Excel, and SQL.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900/90 border border-slate-800">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl glass-panel bg-[#0C111A]/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl overflow-hidden group hover:-translate-y-1"
            >
              
              {/* Dashboard Preview Thumbnail */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C111A] via-transparent to-transparent opacity-80"></div>

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/75 border border-white/10 text-emerald-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold text-xs shadow-lg shadow-emerald-500/30">
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-6">
                
                <div>
                  {/* Dataset meta */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.dataset.size}</span>
                    <span>•</span>
                    <span>{project.dataset.source}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Business problem summary */}
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Key KPIs Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
                  {project.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block truncate">
                        {kpi.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-white block mt-0.5">
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer: Tools + Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-105 active:scale-100"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
