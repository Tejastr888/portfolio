import { experiences } from "../data/experience";
import { ScrollFade } from "./ScrollFade";

export function Experience() {
  return (
    <section id="experience" className="py-16 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Work Experience
            </h2>
            <p className="mt-1 text-xs font-mono text-neutral-500">
              Production backend engineering & distributed systems
            </p>
          </div>
          <span className="font-mono text-xs text-neutral-400">~3 Years Total</span>
        </div>

        <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Timeline marker - clean monochrome */}
              <div
                className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral-950 transition-colors ${
                  exp.current
                    ? "bg-neutral-900 dark:bg-neutral-100 ring-4 ring-neutral-200 dark:ring-neutral-800"
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-accent transition-colors">
                    {exp.company}
                  </div>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  {exp.period} • {exp.location}
                </div>
              </div>

              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {exp.summary}
              </p>

              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-1 select-none">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollFade>
    </section>
  );
}
