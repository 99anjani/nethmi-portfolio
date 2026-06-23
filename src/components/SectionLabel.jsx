export default function SectionLabel({ label, sub }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/60 to-transparent" />
        <span className="font-mono text-xs text-violet-400 uppercase tracking-widest whitespace-nowrap">
          {label}
        </span>
        <div className="h-px w-8 bg-violet-500/30" />
      </div>
      {sub && <p className="text-slate-500 text-sm text-center">{sub}</p>}
    </div>
  );
}
