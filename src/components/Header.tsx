import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-[760px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-accent transition-colors"
        >
          {/* Tiny accent status dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" title="Available for backend challenges" />
          <span className="tracking-tight">tejas.dev</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <a
            href={getHref("#work")}
            className="px-2.5 py-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            work
          </a>
          <a
            href={getHref("#experience")}
            className="px-2.5 py-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            exp
          </a>
          <a
            href={getHref("#stack")}
            className="px-2.5 py-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            stack
          </a>
          <a
            href={getHref("#contact")}
            className="px-2.5 py-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            contact
          </a>

          <div className="w-px h-3.5 bg-neutral-200 dark:bg-neutral-800 mx-1" />

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-command-palette"));
            }}
            className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            title="Command Menu (Cmd+K)"
          >
            <span>⌘K</span>
          </button>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
