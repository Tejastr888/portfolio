import { Link } from "react-router-dom";
import { type Project } from "../data/work";
import { ScrollFade } from "./ScrollFade";

interface WorkCardProps {
  project: Project;
  index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
  return (
    <ScrollFade delay={index * 0.08}>
      <article className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 sm:p-7 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">0{index + 1}</span>
            <span>/</span>
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">{project.role}</span>
          </div>
          <span>{project.period}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
          <Link to={`/work/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.tagline}
        </p>

        {/* Highlight Metrics - pure monochrome */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 font-mono text-xs">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-2 rounded bg-neutral-50 dark:bg-neutral-800/40">
                <span className="text-[10px] text-neutral-500 block truncate">{m.label}</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags - pure monochrome */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="relative z-10 mt-6 flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-xs font-mono">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium group-hover:text-accent hover:underline decoration-accent transition-colors"
          >
            <span>Read Architecture Case Study</span>
            <span>→</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-accent transition-colors"
                title="View GitHub Repository"
              >
                Code ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-accent transition-colors"
                title="View Live Application"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollFade>
  );
}
