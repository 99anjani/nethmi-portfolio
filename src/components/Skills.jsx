import { useState, useEffect, useRef } from 'react';
import { SKILLS, SOFT_SKILLS } from '../data';
import SectionLabel from './SectionLabel';

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = Object.keys(SKILLS);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="reveal max-w-6xl mx-auto px-6 py-28">
      <SectionLabel
        label="Skills"
        sub="Technical skills across Software Engineering, AI/ML, Data Analysis & Business Analysis"
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs font-mono px-4 py-2 rounded-full border transition-all duration-200 ${
              active === c
                ? 'tab-active'
                : 'glass text-slate-400 border-white/10 hover:border-violet-500/30 hover:text-slate-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Bar chart panel */}
      <div className="glass rounded-2xl p-8 border border-white/5 mb-6">
        <div className="grid md:grid-cols-2 gap-x-12">
          {SKILLS[active].map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div className="glass rounded-2xl p-7 border border-white/5">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
          Professional Skills
        </div>
        <div className="flex flex-wrap gap-3">
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              className="text-sm bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-slate-300
                         border border-white/10 hover:border-violet-400/50 px-4 py-2 rounded-xl
                         transition-all duration-200 cursor-default hover:-translate-y-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
