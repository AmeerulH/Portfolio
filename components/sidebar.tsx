"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/experience": {
    name: "experience",
  },
  "/portfolio": {
    name: "portfolio",
  },
  "/contact": {
    name: "contact",
  },
};

function Logo() {
  return (
    <Link aria-label="Ameerul Hady" href="/">
      <motion.div
        animate={{
          scale: [1, 2, 2],
          rotate: [0, 0, 360],
          borderRadius: ["0%", "0%", "50%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5],
        }}
        className="bg-[#71a75d] text-black h-[2rem] w-[2rem] flex items-center justify-center"
      >
        <p>A</p>
      </motion.div>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start max-md:hidden">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative max-sm:overflow-y-scroll"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 sm:pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-[#405139] rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
