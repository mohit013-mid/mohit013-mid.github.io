import { useEffect, useState } from "react";
import { navItems, personal } from "../data/personal";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import type { Theme } from "../hooks/useTheme";
import { ui } from "../lib/icons";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

interface Props { theme: Theme; onToggleTheme: () => void }

const ids = navItems.map((n) => n.id);

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const surface = scrolled || open ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${surface}`}>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight" aria-label={`${personal.name}, back to top`}>
          <span aria-hidden="true" className="inline-block h-5 w-2 bg-accent" />
          {personal.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const current = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "location" : undefined}
                  className={`relative block px-3 py-2 text-sm transition-colors ${current ? "text-fg" : "text-muted hover:text-fg"}`}
                >
                  {item.label}
                  {current && <span aria-hidden="true" className="absolute inset-x-3 -bottom-px h-px bg-accent-text" />}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <SocialLinks className="hidden lg:flex" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <ui.X size={20} aria-hidden="true" /> : <ui.Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`block border-l-2 py-3 pl-4 text-base ${active === item.id ? "border-accent-text text-fg" : "border-transparent text-muted"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3"><SocialLinks withEmail /></li>
          </ul>
        </div>
      )}
    </header>
  );
}
