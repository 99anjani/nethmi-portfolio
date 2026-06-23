import { EXPERIENCE } from '../data';
import SectionLabel from './SectionLabel';

export default function Experience() {
  return (
    <section id="experience" className="reveal max-w-6xl mx-auto px-6 py-28">
      <SectionLabel label="Work Experience" />

      <div className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-8 card-hover border border-violet-500/20 glow-violet"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center text-xs font-mono text-violet-400 border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 rounded-full mb-2">
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="text-violet-400 font-semibold mt-0.5">{exp.company}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-slate-400 bg-white/5 border border-white/[0.08] px-3 py-1.5 rounded-lg">
                  {exp.period}
                </div>
                <div className="text-slate-600 text-xs mt-1">{exp.location}</div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-6">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono bg-white/5 text-slate-400 border border-white/10 px-2.5 py-1 rounded-lg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
