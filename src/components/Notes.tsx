import { ScrollFade } from "./ScrollFade";

interface UpcomingTopic {
  title: string;
  tag: string;
  summary: string;
}

const upcomingTopics: UpcomingTopic[] = [
  {
    title: "Preventing Dual-Write Inconsistencies: Practical Outbox Pattern with Spring Boot & Kafka",
    tag: "Distributed Systems",
    summary: "How to safely coordinate PostgreSQL transactions and Kafka message publication without distributed 2PC bottlenecks."
  },
  {
    title: "PostgreSQL Row Lock Contention: Optimistic vs Pessimistic Concurrency in High-Throughput APIs",
    tag: "PostgreSQL",
    summary: "Benchmarking @Version optimistic checks against Redis Lua reservations under 5,000 req/s flash sale simulations."
  },
  {
    title: "Building MCP Tools with Spring AI: A Java Backend Perspective",
    tag: "Spring AI & MCP",
    summary: "Creating discoverable, type-safe agent tool adapters leveraging Spring Boot 3.3 and the Model Context Protocol."
  }
];

export function Notes() {
  return (
    <section id="notes" className="py-16 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Engineering Notes
            </h2>
            <p className="mt-1 text-xs font-mono text-neutral-500">
              Deep dives on backend systems, concurrency, and architecture
            </p>
          </div>
          <span className="font-mono text-xs text-neutral-500">Scaffolded</span>
        </div>

        <div className="space-y-4">
          {upcomingTopics.map((topic) => (
            <div
              key={topic.title}
              className="p-5 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/40 dark:bg-neutral-900/20"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {topic.tag}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">In Draft</span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {topic.title}
              </h3>
              <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {topic.summary}
              </p>
            </div>
          ))}
        </div>
      </ScrollFade>
    </section>
  );
}
