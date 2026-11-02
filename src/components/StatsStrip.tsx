import { useEffect, useState } from "react";
import { fetchStats, type StatsData, fallbackStats } from "../lib/stats";
import { ScrollFade } from "./ScrollFade";

export function StatsStrip() {
  const [stats, setStats] = useState<StatsData>(fallbackStats);

  useEffect(() => {
    fetchStats().then(setStats);
  }, []);

  return (
    <section className="py-8 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs">
          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80">
            <span className="text-neutral-500 block text-[11px] mb-1">LEETCODE SOLVED</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {stats.leetcode.totalSolved}+
              </span>
              <span className="text-[10px] text-neutral-500 font-medium">
                {stats.leetcode.ranking}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-neutral-500">
              <span className="text-neutral-700 dark:text-neutral-300">{stats.leetcode.easy}E</span>
              <span>•</span>
              <span className="text-neutral-700 dark:text-neutral-300">{stats.leetcode.medium}M</span>
              <span>•</span>
              <span className="text-neutral-700 dark:text-neutral-300">{stats.leetcode.hard}H</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80">
            <span className="text-neutral-500 block text-[11px] mb-1">PROD MICROSERVICES</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                ~3
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 text-xs">years</span>
            </div>
            <p className="mt-2 text-[10px] text-neutral-500">
              Spring Boot & Kafka
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80">
            <span className="text-neutral-500 block text-[11px] mb-1">GITHUB REPOSITORIES</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {stats.github.publicRepos}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 text-xs">public</span>
            </div>
            <p className="mt-2 text-[10px] text-neutral-500">
              {stats.github.yearContributions}+ yearly commits
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80">
            <span className="text-neutral-500 block text-[11px] mb-1">ARCHITECTURE CORE</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 truncate">
                HLD & LLD
              </span>
            </div>
            <p className="mt-2 text-[10px] text-neutral-500 truncate">
              Strategy • Outbox • Circuit
            </p>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}
