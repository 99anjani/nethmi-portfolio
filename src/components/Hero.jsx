import { useState, useEffect } from "react";
import { ME } from "../data";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  /* Typewriter effect */
  useEffect(() => {
    const role = ME.roles[roleIdx];

    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ME.roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Photo */}
          <div className="shrink-0 flex flex-col items-center gap-3">
            <div
              className="photo-ring shadow-lg"
              style={{ width: 200, height: 200 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                {ME.photoUrl ? (
                  <img
                    src={ME.photoUrl}
                    alt="Nethmi Anjani"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 px-4 text-center">
                    <span className="text-5xl">👩‍💻</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Open badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400
              border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-full mb-5"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse inline-block" />
              Open to opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="grad-text">Nethmi</span>
            </h1>

            {/* Typewriter */}
            <div
              className="text-xl md:text-2xl font-semibold text-slate-300 mb-2 h-9
              flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="text-violet-400 font-mono text-lg">&gt;</span>
              <span>{displayed}</span>
              <span className="w-0.5 h-6 bg-violet-400 animate-blink inline-block" />
            </div>

            <p className="text-slate-400 text-base leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
              {ME.tagline}
            </p>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {ME.openTo.map((r) => (
                <span
                  key={r}
                  className="text-xs font-mono bg-white/5 text-slate-400 border border-white/10
                  hover:border-violet-500/50 hover:text-violet-300 px-3 py-1.5 rounded-full
                  transition-all duration-200 cursor-default"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400
                text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200
                shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                View My Work ↓
              </a>

              <a
                href={`mailto:${ME.email}`}
                className="glass hover:bg-white/10 text-slate-200 hover:text-white px-7 py-3
                rounded-xl font-semibold transition-all duration-200 border border-white/10"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-8 mt-7 justify-center lg:justify-start">
              <a
                href={ME.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-violet-400 transition-colors text-sm font-mono"
              >
                GitHub ↗
              </a>

              <a
                href={ME.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-violet-400 transition-colors text-sm font-mono"
              >
                LinkedIn ↗
              </a>

              <a
                href={`mailto:${ME.email}`}
                className="text-slate-500 hover:text-violet-400 transition-colors text-sm font-mono"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 text-2xl animate-bounce">
        ↓
      </div>
    </section>
  );
}