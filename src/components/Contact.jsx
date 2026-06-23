import { ME } from '../data';
import SectionLabel from './SectionLabel';

export default function Contact() {
  return (
    <section id="contact" className="reveal max-w-6xl mx-auto px-6 py-28 text-center">
      <SectionLabel label="Let's Connect" />

      <div className="glass rounded-3xl p-12 max-w-2xl mx-auto glow-violet border border-violet-500/15">
        <div className="text-5xl mb-5">👋</div>
        <h2 className="text-3xl font-bold text-white mb-3">Open to New Opportunities</h2>
        <p className="text-slate-400 mb-2">
          Whether it's an SE, AI, Data, or BA role — I'd love to chat.
        </p>
        <p className="text-slate-500 text-sm mb-9 font-mono">{ME.location}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${ME.email}`}
            className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400
                       text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200
                       shadow-xl shadow-violet-500/25"
          >
            ✉️ Send Email
          </a>
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass hover:bg-white/10 text-slate-300 hover:text-white px-8 py-3.5
                       rounded-xl font-semibold transition-all duration-200 border border-white/10"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-8 pt-7 border-t border-white/[0.08] flex justify-center gap-8">
          <a
            href={ME.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors text-sm font-mono"
          >
            GitHub ↗
          </a>
         {/* <span className="text-slate-600 text-sm font-mono">{ME.phone}</span> */}
        </div>
      </div>
    </section>
  );
}
