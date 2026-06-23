import { useState } from 'react';
import { PROJECTS, PROJECT_TAGS, TAG_STYLE } from '../data';
import SectionLabel from './SectionLabel';
import ImageLightbox from './ImageLightBox'
import { Link } from "react-router-dom";

function ProjectCard({ p, onOpenScreenshots }) {
  const hasShots = p.screenshots && p.screenshots.length > 0;
  return (
    <div
      className={`glass rounded-2xl p-7 card-hover border flex flex-col h-full ${
        p.highlight ? 'border-violet-500/35 glow-sm' : 'border-white/0'
      }`}
    >
      {p.highlight && (
        <span className="self-start text-xs font-mono bg-violet-500/20 text-violet-400 border border-violet-500/30 px-2.5 py-1 rounded-full mb-4">
          ✦ Featured
        </span>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
              TAG_STYLE[tag] || 'bg-slate-500/15 text-slate-400 border-slate-500/30'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-base font-bold text-white mb-1">{p.name}</h3>
      <div className="text-xs text-slate-500 font-mono mb-3">{p.role}</div>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono bg-white/5 text-slate-500 border border-white/[0.08] px-2 py-0.5 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-5 mt-auto">
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors font-mono">
            ⟨ Code ⟩
          </a>
        )}

        {p.live && p.live !== '#' ? (
          <a href={p.live} target="_blank" rel="noreferrer" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
            ↗ Live Demo
          </a>
        ) : hasShots ? (
          <Link to={`/projects/${p.slug}`} className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
            🖼 View Screenshots
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    activeTag === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="reveal max-w-6xl mx-auto px-6 py-28">
      <SectionLabel
        label="Projects"
        sub="Spanning AI/ML research, data analytics, and full-stack engineering"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {PROJECT_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs font-mono px-4 py-2 rounded-full border transition-all duration-200 ${
              activeTag === tag
                ? 'tab-active'
                : 'glass text-slate-400 border-white/10 hover:border-violet-500/30 hover:text-slate-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((p, i) => (
          <ProjectCard key={i} p={p} onOpenScreenshots={setActiveProject} />
        ))}
      </div>
      {activeProject && (
        <ImageLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
