const footerLinks = [
  { label: "Academic", href: "https://l1anch1.github.io", external: true },
  { label: "GitHub", href: "https://github.com/l1anch1", external: true },
  { label: "Email", href: "mailto:l1anch1@outlook.com", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anchi-li-b2992a373",
    external: true,
  },
] as const;

interface SiteFooterProps {
  className?: string;
}

export default function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer
      className={`mx-auto flex max-w-[1080px] flex-col gap-4 border-t border-ink/70 px-6 py-7 font-mono text-[12px] tracking-[0.04em] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-10 ${className}`}
    >
      <span>© 2026 Anchi Li · AI &amp; Software Engineering</span>
      <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-ink-soft transition-colors duration-200 hover:text-clay"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
