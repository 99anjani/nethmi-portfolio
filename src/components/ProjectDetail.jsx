import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, TAG_STYLE } from "../data";

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-32 text-center">
                <p className="text-slate-400 mb-6">Project not found.</p>
                <Link
                    to="/"
                    className="text-violet-400 hover:text-violet-300 font-mono text-sm"
                >
                    ← Back to home
                </Link>
            </div>
        );
    }

    const shots = project.screenshots || [];

    return (
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm mb-10"
            >
                <ArrowLeft size={16} />
                Back
            </button>

            {/* Header */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${TAG_STYLE[tag] ||
                            "bg-slate-500/15 text-slate-400 border-slate-500/30"
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">{project.name}</h1>

            <div className="text-sm text-slate-500 font-mono mb-6">
                {project.role}
            </div>

            <p className="text-slate-300 leading-relaxed max-w-2xl mb-6">
                {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs font-mono bg-white/5 text-slate-400 border border-white/[0.08] px-2.5 py-1 rounded-md"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-6 mb-12">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-300 hover:text-white font-mono"
                    >
                        ⟨ View Code ⟩
                    </a>
                )}

                {project.live && project.live !== "#" && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-violet-400 hover:text-violet-300 font-mono"
                    >
                        ↗ Live Demo
                    </a>
                )}
            </div>

            {/* Screenshots */}
            {shots.length > 0 ? (
                <div>
                    <h2 className="text-sm font-mono text-slate-500 mb-4">
                        Screenshots
                    </h2>

                    <div className="relative">
                        <img
                            src={shots[index].src}
                            alt={shots[index].caption || "Screenshot"}
                            className="w-full rounded-2xl border border-white/10"
                        />

                        {shots.length > 1 && (
                            <>
                                <button
                                    onClick={() =>
                                        setIndex((i) => (i - 1 + shots.length) % shots.length)
                                    }
                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <button
                                    onClick={() =>
                                        setIndex((i) => (i + 1) % shots.length)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>

                    {shots[index].caption && (
                        <p className="text-slate-400 text-sm mt-3">
                            {shots[index].caption}
                        </p>
                    )}

                    {shots.length > 1 && (
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {shots.map((shot, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`w-20 h-14 rounded-md overflow-hidden border-2 ${i === index
                                            ? "border-violet-500"
                                            : "border-white/10 opacity-60"
                                        }`}
                                >
                                    <img
                                        src={shot.src}
                                        alt={shot.caption || `Screenshot ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-slate-500 text-sm">
                    No screenshots available for this project yet.
                </p>
            )}
        </div>
    );
}