import { ScrollFade } from "./ScrollFade";

export function Hero() {
  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="flex flex-col gap-6">
          {/* Status badge with tiny accent dot and subtle accent left border */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono w-fit bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Software Engineer at Soft Suave • Bengaluru, India</span>
          </div>

          <div className="space-y-3">
            {/* One thin accent detail line */}
            <div className="w-8 h-[2px] bg-accent rounded-full" aria-hidden="true" />

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans">
              Tejas R
            </h1>
            <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 tracking-tight leading-snug">
              Backend engineer crafting resilient Java & Spring Boot microservices, high-throughput Kafka pipelines, and tuned PostgreSQL datastores.
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            I think in high-level architecture, low-level design patterns (Strategy, Factory, Adapter, Outbox), and failure isolation with Resilience4j. 
            Currently diving deep into <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Spring AI</strong> and the <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Model Context Protocol (MCP)</strong>.
            Competitive programmer with <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">320+ LeetCode</span> problems solved.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
            <a
              href="https://github.com/Tejastr888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/tejastr888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/tejasacharya078/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-accent transition-colors"
            >
              <span className="font-bold">LC</span>
              <span>LeetCode (320+)</span>
            </a>

            <a
              href="mailto:tejasrh1999@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1a5grEIW97pRCyf3lvJT6X2Go3rvr1vnn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-accent hover:underline decoration-accent transition-colors font-medium ml-auto"
            >
              <span>Resume ↗</span>
            </a>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}
