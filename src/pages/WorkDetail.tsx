import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/work";
import { ScrollFade } from "../components/ScrollFade";

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  if (!slug) return <Navigate to="/" replace />;
  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const copyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="max-w-[760px] mx-auto px-6 py-12">
      <ScrollFade>
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-accent transition-colors"
          >
            <span>←</span>
            <span>Back to all systems</span>
          </Link>
        </div>

        {/* Header */}
        <header className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-neutral-500">
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{project.context}</span>
            <span>•</span>
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans">
            {project.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-6 flex items-center gap-4 text-xs font-mono">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-accent transition-colors"
                >
                  <span>View Repository</span>
                  <span>↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-accent transition-colors"
                >
                  <span>Live App Demo</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          )}
        </header>
      </ScrollFade>

      {/* Metrics Strip - monochrome */}
      <section className="py-8 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
          Production Impact & Benchmarks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40"
            >
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                {m.label}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-8 border-b border-neutral-200 dark:border-neutral-800 space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          The Engineering Challenge
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* Architecture & Patterns */}
      <section className="py-8 border-b border-neutral-200 dark:border-neutral-800 space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Architecture & System Flow
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {project.architectureSummary}
        </p>

        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40">
          <h3 className="text-xs font-mono text-neutral-500 mb-2.5 font-semibold">
            DESIGN PATTERNS & PRINCIPLES APPLIED:
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300">
            {project.patternsUsed.map((pat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">■</span>
                <span>{pat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Decisions & Trade-Offs */}
      <section className="py-8 border-b border-neutral-200 dark:border-neutral-800 space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Key Technical Trade-offs & Decisions
        </h2>

        <div className="space-y-4">
          {project.decisions.map((dec, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40"
            >
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {dec.title}
              </h3>
              <div className="mt-3 space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-mono text-neutral-500 text-xs shrink-0 w-20">Trade-off:</span>
                  <span className="text-neutral-600 dark:text-neutral-400">{dec.tradeOff}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-mono text-neutral-500 text-xs shrink-0 w-20">Rationale:</span>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{dec.rationale}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippet - Grayscale container with subtle copy button */}
      {project.codeSnippet && (
        <section className="py-8 border-b border-neutral-200 dark:border-neutral-800 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Implementation Artifact ({project.codeSnippet.filename})
            </h2>
            <button
              type="button"
              onClick={copyCode}
              className="text-[11px] font-mono px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-accent transition-colors"
            >
              {copied ? "Copied! ✓" : "Copy Code"}
            </button>
          </div>

          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 text-neutral-100">
            <div className="px-4 py-2 border-b border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
              <span>{project.codeSnippet.filename}</span>
              <span className="uppercase text-[10px] text-neutral-500">{project.codeSnippet.language}</span>
            </div>
            <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto text-neutral-200">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Next / Previous Project Navigation */}
      <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        {prevProject ? (
          <Link
            to={`/work/${prevProject.slug}`}
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
          >
            <span>←</span>
            <span>{prevProject.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/work/${nextProject.slug}`}
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
          >
            <span>{nextProject.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
