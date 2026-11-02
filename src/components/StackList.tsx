import { stackGroups } from "../data/stack";
import { ScrollFade } from "./ScrollFade";

export function StackList() {
  return (
    <section id="stack" className="py-16 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Technical Stack & Architecture
          </h2>
          <p className="mt-1 text-xs font-mono text-neutral-500">
            Tools, protocols, and patterns I leverage in production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
                <span>{group.category}</span>
              </h3>
              <p className="text-[11px] text-neutral-500 font-mono mt-0.5 mb-3">
                {group.description}
              </p>

              <div className="space-y-2 font-mono text-xs">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0"
                  >
                    <span
                      className={`font-medium ${
                        item.highlight
                          ? "text-neutral-900 dark:text-neutral-100 font-semibold"
                          : "text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="text-[11px] text-neutral-500">
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollFade>
    </section>
  );
}
