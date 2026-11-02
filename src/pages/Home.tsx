import { Hero } from "../components/Hero";
import { StatsStrip } from "../components/StatsStrip";
import { WorkCard } from "../components/WorkCard";
import { Experience } from "../components/Experience";
import { StackList } from "../components/StackList";
import { Notes } from "../components/Notes";
import { Contact } from "../components/Contact";
import { projects } from "../data/work";
import { ScrollFade } from "../components/ScrollFade";

export function HomePage() {
  return (
    <div className="max-w-[760px] mx-auto px-6">
      <Hero />
      <StatsStrip />

      {/* Selected Work Section */}
      <section id="work" className="py-16 border-b border-neutral-200 dark:border-neutral-800/80">
        <ScrollFade>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Selected Work & Case Studies
              </h2>
              <p className="mt-1 text-xs font-mono text-neutral-500">
                Architectural breakdowns, design decisions, and production systems
              </p>
            </div>
            <span className="font-mono text-xs text-neutral-400">4 Featured Systems</span>
          </div>
        </ScrollFade>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <Experience />
      <StackList />
      <Notes />
      <Contact />
    </div>
  );
}
