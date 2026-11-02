import { useState } from "react";
import { ScrollFade } from "./ScrollFade";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tejasrh1999@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-b border-neutral-200 dark:border-neutral-800/80">
      <ScrollFade>
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Let's Connect
          </h2>
          <p className="mt-1 text-xs font-mono text-neutral-500">
            Always open to backend architecture discussions, distributed systems, and high-impact opportunities.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-neutral-500 block mb-1">DIRECT INBOX</span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-mono font-medium text-neutral-900 dark:text-neutral-100 hover:text-accent hover:underline decoration-accent transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                {copied ? "Copied! ✓" : "Copy Email"}
              </button>
              <a
                href={`mailto:${email}`}
                className="px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors font-medium"
              >
                Write Email →
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <div>
              <span className="text-neutral-500">Location:</span>{" "}
              <span className="text-neutral-900 dark:text-neutral-200">Bengaluru, India (UTC+5:30)</span>
            </div>
            <div>
              <span className="text-neutral-500">GitHub:</span>{" "}
              <a
                href="https://github.com/Tejastr888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-accent hover:underline decoration-accent transition-colors"
              >
                @Tejastr888
              </a>
            </div>
            <div>
              <span className="text-neutral-500">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/tejastr888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-accent hover:underline decoration-accent transition-colors"
              >
                in/tejastr888
              </a>
            </div>
            <div>
              <span className="text-neutral-500">Resume:</span>{" "}
              <a
                href="https://drive.google.com/file/d/1a5grEIW97pRCyf3lvJT6X2Go3rvr1vnn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-accent hover:underline decoration-accent transition-colors"
              >
                Google Drive ↗
              </a>
            </div>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}
