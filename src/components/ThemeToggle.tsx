import { ui } from "../lib/icons";
import type { Theme } from "../hooks/useTheme";

interface Props { theme: Theme; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: Props) {
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? ui.Sun : ui.Moon;
  return (
    <button type="button" className="icon-btn" onClick={onToggle} aria-label={`Switch to ${next} theme`}>
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
