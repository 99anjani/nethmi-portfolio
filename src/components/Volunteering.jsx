import { VOLUNTEERING } from '../data';
import SectionLabel from './SectionLabel';

export default function Volunteering() {
  return (
    <section className="reveal max-w-6xl mx-auto px-6 py-16">
      <SectionLabel label="Volunteering" />

      <div className="grid sm:grid-cols-2 gap-5">
        {VOLUNTEERING.map((v, i) => (
          <div key={i} className="glass rounded-2xl p-6 card-hover border border-white/0 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center text-lg shrink-0">
              {v.icon}
            </div>
            <div>
              <div className="font-bold text-white text-sm">{v.org}</div>
              <div className="text-rose-400 text-xs font-mono mb-1">{v.role}</div>
              <div className="text-slate-400 text-sm">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
