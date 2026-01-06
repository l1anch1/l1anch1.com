"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, User, FolderOpen, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface GlassNavbarProps {
  showBackButton?: boolean;
  backHref?: string;
}

export default function GlassNavbar({
  showBackButton = true,
  backHref = "https://l1anch1.github.io",
}: GlassNavbarProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-4 sm:px-6 py-3
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          rounded-2xl
          shadow-lg shadow-black/10
        "
      >
        {/* Left: Back button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {showBackButton && (
            <motion.a
              href={backHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex items-center gap-1.5
                px-3 py-1.5
                bg-white/20 hover:bg-white/30
                border border-white/20
                rounded-full
                text-white text-xs sm:text-sm font-medium
                transition-all duration-300
              "
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t("backToAcademic")}</span>
            </motion.a>
          )}
        </div>

        {/* Center: Logo / Name - Hidden on mobile to save space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden sm:block absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/" className="text-white font-semibold tracking-tight text-sm hover:text-white/80 transition-colors">
            {language === "zh" ? "李桉弛" : "Li Anchi"}
          </Link>
        </motion.div>

        {/* Right: Navigation items + Language toggle */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <NavItem icon={<Home className="w-4 h-4" />} label={t("home")} href="/" />
          <NavItem icon={<FolderOpen className="w-4 h-4" />} label={t("work")} href="/projects" />
          <NavItem icon={<User className="w-4 h-4" />} label={t("about")} href="/about" className="hidden sm:flex" />
          <NavItem icon={<Mail className="w-4 h-4" />} label={t("contact")} href="/contact" className="hidden sm:flex" />
          
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-1.5
              ml-1 sm:ml-2 px-2.5 py-1.5
              bg-gradient-to-r from-neon-purple/30 to-neon-cyan/30
              hover:from-neon-purple/50 hover:to-neon-cyan/50
              border border-white/20
              rounded-full
              text-white text-xs font-medium
              transition-all duration-300
            "
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === "en" ? "中" : "EN"}</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  className?: string;
}

function NavItem({ icon, label, active = false, href = "#", className = "" }: NavItemProps) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-1.5
          px-2 sm:px-2.5 py-1.5
          rounded-xl
          text-xs sm:text-sm font-medium
          transition-all duration-300
          cursor-pointer
          ${
            active
              ? "bg-white/20 text-white"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }
          ${className}
        `}
      >
        {icon}
        <span className="hidden lg:inline">{label}</span>
      </motion.span>
    </Link>
  );
}
