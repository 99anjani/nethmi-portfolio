import { ME, SOFT_SKILLS } from '../data';
import SectionLabel from './SectionLabel';

export default function About() {
  return (
    <section id="about" className="reveal max-w-6xl mx-auto px-6 py-28">
      <SectionLabel label="About Me" />

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Bio */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-white mb-5">
            Turning data &amp; code into{' '}
            <span className="grad-text">real impact</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-6">{ME.about}</p>
          <div className="space-y-3 text-sm">
            {[
              ['📍', 'Location', ME.location],
              ['📧', 'Email',    ME.email],
              ['📞', 'Phone',    ME.phone],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex items-center gap-3">
                <span>{icon}</span>
                <span className="text-slate-500 font-mono w-16">{label}</span>
                <span className="text-slate-300">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats + Soft skills */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {ME.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center card-hover border border-white/0">
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold grad-text">{s.val}</div>
                <div className="text-slate-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-5 border border-white/0">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
              Professional Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-white/5 text-slate-400 border border-white/[0.08] px-2.5 py-1 rounded-lg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
