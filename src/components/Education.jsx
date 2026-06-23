import { EDUCATION } from '../data';
import SectionLabel from './SectionLabel';

export default function Education() {
  return (
    <section id="education" className="reveal max-w-6xl mx-auto px-6 py-28">
      <SectionLabel label="Education" />

      <div className="space-y-5">
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-7 card-hover border border-white/0 flex gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-2xl shrink-0">
              {edu.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <div className="text-violet-400 font-medium text-sm mt-0.5">{edu.school}</div>
                </div>
                <span className="font-mono text-xs text-slate-500 bg-white/5 border border-white/[0.08] px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <p className="text-slate-400 text-sm mt-3">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
