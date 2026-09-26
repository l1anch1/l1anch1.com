"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface SiteNavProps {
  showBackButton?: boolean;
  backHref?: string;
}

const links = [
  { href: "/", key: "home" },
  { href: "/projects", key: "work" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export default function SiteNav({
  showBackButton = true,
  backHref = "https://l1anch1.github.io",
}: SiteNavProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative z-10 mx-auto flex max-w-[1080px] flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-10"
    >
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="font-serif text-[23px] font-bold tracking-tight text-ink"
        >
          Anchi Li<span className="text-clay">.</span>
        </Link>
        {showBackButton && (
          <a
            href={backHref}
            className="hidden u-label transition-colors hover:text-green sm:inline"
          >
            {t("backToAcademic")} →
          </a>
        )}
      </div>

      <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`relative px-0 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 sm:px-3 sm:text-[13px] ${
                active
                  ? "text-ink"
                  : "text-ink-soft hover:text-clay"
              }`}
            >
              {t(link.key)}
              {active && (
                <motion.span
                  layoutId="active-navigation"
                  className="absolute inset-x-0 bottom-0 h-px bg-clay sm:inset-x-3"
                  transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                />
              )}
            </Link>
          );
        })}
        <button
          onClick={toggleLanguage}
          className="px-0 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-clay transition-colors duration-200 hover:text-green sm:ml-2 sm:px-3 sm:text-[13px]"
          aria-label="Toggle language"
        >
          {language === "en" ? "中 / EN" : "EN / 中"}
        </button>
      </div>
    </motion.nav>
  );
}
