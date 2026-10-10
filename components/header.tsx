import Link from "next/link";
import { getProjects, getSettings } from "@/sanity/lib/queries";
import { availabilityLabel, modelNumber } from "@/lib/format";
import { Palette, type PaletteItem } from "./palette";
import { Nav } from "./nav";

export async function Header() {
  const [settings, projects] = await Promise.all([getSettings(), getProjects()]);

  const items: PaletteItem[] = [
    { id: "home", label: "Home", group: "Go to", href: "/" },
    { id: "work", label: "All work", group: "Go to", href: "/work" },
    { id: "experience", label: "Experience", group: "Go to", href: "/#experience" },
    { id: "resume", label: "Resume", group: "Go to", href: "/resume" },
    { id: "contact", label: "Contact", group: "Go to", href: "/#contact" },
    ...projects.map((p, i) => ({ id: p._id, label: p.title, hint: modelNumber(i), group: "Work" as const, href: `/work/${p.slug}` })),
    ...(settings?.socials ?? []).map((s) => ({ id: s._key, label: s.label, hint: "Opens in new tab", group: "Elsewhere" as const, href: s.url, external: true })),
    ...(settings?.email ? [{ id: "copy-email", label: "Copy email address", hint: settings.email, group: "Actions" as const, copy: settings.email }] : []),
    { id: "pdf", label: "Download resume (PDF)", group: "Actions", href: "/resume.pdf" },
  ];

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="wordmark" aria-label={`${settings?.name ?? "Home"}, home`}>
          {settings?.name ?? "Ameerul Hady"}
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(0.75rem, 2vw, 1.75rem)" }}>
          <Nav />
          {settings?.availability && (
            <span className="label hidden lg:inline-flex" style={{ alignItems: "center", gap: "0.5rem" }}>
              <span className="lamp" data-state={settings.availability} aria-hidden />
              {availabilityLabel[settings.availability]}
            </span>
          )}
          <Palette items={items} />
        </div>
      </div>
    </header>
  );
}
