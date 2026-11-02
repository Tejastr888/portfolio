export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 text-xs font-mono text-neutral-500 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Tejas R — Backend Engineer</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Tejastr888/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-200 hover:underline"
          >
            Source
          </a>
          <span>•</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-neutral-900 dark:hover:text-neutral-200 hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
