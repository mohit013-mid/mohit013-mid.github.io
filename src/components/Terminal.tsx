import { useEffect, useState } from "react";
import { terminalScript, type TerminalLine, type TerminalTone } from "../data/personal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Progress { line: number; char: number }

const toneClass: Record<TerminalTone, string> = {
  plain: "text-fg",
  ok: "text-accent-text",
  info: "text-sky",
};

/** Decorative terminal that types out the script from data/personal.ts. */
export function Terminal({ lines = terminalScript }: { lines?: readonly TerminalLine[] }) {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState<Progress>({ line: 0, char: 0 });
  const { line, char } = reduced ? { line: lines.length, char: 0 } : progress;

  useEffect(() => {
    if (reduced || line >= lines.length) return;
    const current = lines[line];
    const typing = current.kind === "cmd" && char < current.text.length;
    const delay = typing ? 32 : current.kind === "cmd" ? 380 : 220;
    const id = window.setTimeout(() => {
      setProgress(typing ? { line, char: char + 1 } : { line: line + 1, char: 0 });
    }, delay);
    return () => window.clearTimeout(id);
  }, [line, char, lines, reduced]);

  return (
    <div aria-hidden="true" className="panel overflow-hidden shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-muted">mohit@dev: ~/backend</span>
      </div>
      <div className="min-h-[17rem] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => {
          if (i > line) return null;
          const active = i === line;
          if (l.kind === "cmd") {
            const text = active ? l.text.slice(0, char) : l.text;
            return (
              <p key={i} className="break-words">
                <span className="text-accent-text">$ </span>
                <span>{text}</span>
                {active && <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-fg" />}
              </p>
            );
          }
          if (active) return null;
          return (
            <p key={i} className={`break-words ${toneClass[l.tone ?? "plain"]}`}>{l.text}</p>
          );
        })}
        {line >= lines.length && (
          <p>
            <span className="text-accent-text">$ </span>
            <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-fg" />
          </p>
        )}
      </div>
    </div>
  );
}
