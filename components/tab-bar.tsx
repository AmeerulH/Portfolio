"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, History, LayoutGrid, Mail } from "lucide-react";

const tabs = [
  { href: "/work", label: "Work", Icon: LayoutGrid },
  { href: "/#experience", label: "Experience", Icon: History },
  { href: "/resume", label: "Resume", Icon: FileText },
  { href: "/#contact", label: "Contact", Icon: Mail },
];

/** Phones only. The four destinations sit where a thumb rests. */
export function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar" aria-label="Primary, mobile">
      {tabs.map(({ href, label, Icon }) => {
        const current = href === "/work" ? path.startsWith("/work") : path === href;
        return (
          <Link key={href} href={href} className="press" aria-current={current ? "page" : undefined}>
            <Icon size={20} strokeWidth={1.75} aria-hidden />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
