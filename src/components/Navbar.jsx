import { useState, useEffect } from 'react';
import { ME } from '../data/index';

const NAV_LINKS = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-2xl' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-violet-400 font-bold text-lg tracking-tight hover:text-violet-300 transition-colors">
          &lt;NA /&gt;
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link text-slate-400 hover:text-white"
            >
              {l}
            </a>
          ))}
          <a
            href={`mailto:${ME.email}`}
            className="text-sm bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white px-5 py-2 rounded-xl transition-all duration-200 font-medium shadow-lg shadow-violet-500/20"
          >
            Hire Me ✦
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 pb-5 pt-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-slate-300 hover:text-white border-b border-white/5 last:border-0 transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href={`mailto:${ME.email}`}
            className="block mt-4 text-center bg-violet-600 hover:bg-violet-500 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
