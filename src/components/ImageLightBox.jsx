import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightBox({ project, onClose }) {
    const [index, setIndex] = useState(0);
    const shots = project.screenshots;

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % shots.length);
            if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + shots.length) % shots.length);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [shots.length, onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-slate-300 hover:text-white"
            >
                <X size={28} />
            </button>

            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="text-center mb-3 text-slate-300 font-mono text-sm">
                    {project.name} — {index + 1} / {shots.length}
                </div>

                <div className="relative">
                    {shots.length > 1 && (
                        <button
                            onClick={() => setIndex((i) => (i - 1 + shots.length) % shots.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                        >
                            <ChevronLeft size={22} />
                        </button>
                    )}

                    <img
                        src={shots[index].src}
                        alt={shots[index].caption}
                        className="w-full max-h-[75vh] object-contain rounded-xl border border-white/10"
                    />

                    {shots.length > 1 && (
                        <button
                            onClick={() => setIndex((i) => (i + 1) % shots.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                        >
                            <ChevronRight size={22} />
                        </button>
                    )}
                </div>

                {shots[index].caption && (
                    <p className="text-center text-slate-400 text-sm mt-3">{shots[index].caption}</p>
                )}

                {/* thumbnail strip */}
                {shots.length > 1 && (
                    <div className="flex gap-2 justify-center mt-4 flex-wrap">
                        {shots.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-14 h-9 rounded-md overflow-hidden border-2 ${i === index ? 'border-violet-500' : 'border-white/10 opacity-60'
                                    }`}
                            >
                                <img src={s.src} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}