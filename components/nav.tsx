"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Primary">
      {links.map((l) => (
        <Link key={l.href} href={l.href} aria-current={path === l.href || (l.href === "/work" && path.startsWith("/work")) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
