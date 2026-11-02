import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projects } from "../data/work";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Case Study" | "External" | "Preference";
  hint?: string;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { toggle, theme } = useTheme();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    {
      id: "nav-work",
      title: "Jump to Selected Work",
      category: "Navigation",
      hint: "#work",
      action: () => {
        navigate("/#work");
        const el = document.getElementById("work");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-exp",
      title: "Jump to Work Experience",
      category: "Navigation",
      hint: "#experience",
      action: () => {
        navigate("/#experience");
        const el = document.getElementById("experience");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-stack",
      title: "Jump to Technical Stack",
      category: "Navigation",
      hint: "#stack",
      action: () => {
        navigate("/#stack");
        const el = document.getElementById("stack");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-contact",
      title: "Jump to Contact",
      category: "Navigation",
      hint: "#contact",
      action: () => {
        navigate("/#contact");
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    ...projects.map((p) => ({
      id: `case-${p.slug}`,
      title: `Case Study: ${p.title}`,
      category: "Case Study" as const,
      hint: `/work/${p.slug}`,
      action: () => {
        navigate(`/work/${p.slug}`);
      }
    })),
    {
      id: "theme-toggle",
      title: `Toggle Theme (${theme === "dark" ? "Light" : "Dark"} Mode)`,
      category: "Preference",
      hint: "T",
      action: () => toggle()
    },
    {
      id: "ext-github",
      title: "GitHub Profile (@Tejastr888)",
      category: "External",
      hint: "github.com",
      action: () => window.open("https://github.com/Tejastr888", "_blank")
    },
    {
      id: "ext-linkedin",
      title: "LinkedIn Profile (in/tejastr888)",
      category: "External",
      hint: "linkedin.com",
      action: () => window.open("https://linkedin.com/in/tejastr888", "_blank")
    },
    {
      id: "ext-leetcode",
      title: "LeetCode Profile (320+ Solved)",
      category: "External",
      hint: "leetcode.com",
      action: () => window.open("https://leetcode.com/u/tejasacharya078/", "_blank")
    },
    {
      id: "ext-resume",
      title: "View Resume (Google Drive)",
      category: "External",
      hint: "drive.google.com",
      action: () =>
        window.open(
          "https://drive.google.com/file/d/1a5grEIW97pRCyf3lvJT6X2Go3rvr1vnn/view?usp=sharing",
          "_blank"
        )
    }
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: CommandItem) => {
    item.action();
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-neutral-200 dark:border-neutral-800">
          <svg
            className="w-4 h-4 text-neutral-400 mr-2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, case study, or section..."
            className="w-full py-3.5 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-[11px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-neutral-400">
              No matching commands found
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors ${isSelected
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-l-2 border-accent pl-2.5"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 pl-3"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 w-16">
                      {item.category}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {item.hint && (
                    <span className="font-mono text-[10px] text-neutral-400">
                      {item.hint}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Navigate with ↑ ↓ and Enter</span>
          <span>Cmd+K</span>
        </div>
      </div>
    </div>
  );
}
