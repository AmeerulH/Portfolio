"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Command as CmdIcon } from "lucide-react";

export type PaletteItem = {
  id: string;
  label: string;
  hint?: string;
  group: "Go to" | "Work" | "Elsewhere" | "Actions";
  href?: string;
  external?: boolean;
  copy?: string;
};

const GROUPS: PaletteItem["group"][] = ["Go to", "Work", "Elsewhere", "Actions"];

export function Palette({ items }: { items: PaletteItem[] }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const run = useCallback(
    async (item: PaletteItem) => {
      if (item.copy) {
        await navigator.clipboard.writeText(item.copy);
        setNote(`Copied ${item.copy}`);
        setTimeout(() => setOpen(false), 600);
        return;
      }
      setOpen(false);
      if (!item.href) return;
      if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
      else if (item.href.endsWith(".pdf")) window.location.href = item.href;
      else router.push(item.href);
    },
    [router],
  );

  return (
    <>
      <button className="kbd-btn press" onClick={() => setOpen(true)} aria-label="Open command palette" aria-keyshortcuts="Meta+K Control+K">
        <CmdIcon size={14} aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline">⌘K</kbd>
      </button>
      {open && (
        <div className="palette-overlay" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
          <Command className="palette" label="Command palette" loop onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
            <Command.Input autoFocus placeholder="Jump to a project, section or link" />
            <Command.List>
              <Command.Empty>No match. Try a project name.</Command.Empty>
              {GROUPS.map((g) => {
                const group = items.filter((i) => i.group === g);
                return group.length ? (
                  <Command.Group key={g} heading={g}>
                    {group.map((i) => (
                      <Command.Item key={i.id} value={`${i.label} ${i.hint ?? ""}`} onSelect={() => run(i)}>
                        <span>{i.label}</span>
                        {i.hint && <span>{i.hint}</span>}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ) : null;
              })}
            </Command.List>
            <div role="status" aria-live="polite" className="label" style={{ padding: note ? "0.75rem 1rem" : 0 }}>{note}</div>
          </Command>
        </div>
      )}
    </>
  );
}
