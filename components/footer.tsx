import { getSettings } from "@/sanity/lib/queries";

export async function Footer() {
  const s = await getSettings();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>{s?.name}</span>
        <span>Press <kbd style={{ font: "inherit", color: "var(--color-ink)" }}>⌘K</kbd> to jump anywhere</span>
      </div>
    </footer>
  );
}
