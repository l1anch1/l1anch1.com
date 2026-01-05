"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, User, FolderOpen, Mail } from "lucide-react";

interface GlassNavbarProps {
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function GlassNavbar({
  showBackButton = true,
  backHref = "#",
  backLabel = "Back to Academic Home",
}: GlassNavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div
        className="
          flex items-center justify-between
          px-4 py-3
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          rounded-2xl
          shadow-lg shadow-black/10
        "
      >
        {/* Left: Back button */}
        <div className="flex items-center gap-3">
          {showBackButton && (
            <motion.a
              href={backHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex items-center gap-2
                px-4 py-2
                bg-white/20 hover:bg-white/30
                border border-white/20
                rounded-full
                text-white text-sm font-medium
                transition-all duration-300
              "
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{backLabel}</span>
            </motion.a>
          )}
        </div>

        {/* Center: Logo / Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <span className="text-white font-semibold tracking-tight">
            Li Anchi
          </span>
        </motion.div>

        {/* Right: Navigation items */}
        <div className="flex items-center gap-1">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" />
          <NavItem icon={<FolderOpen className="w-4 h-4" />} label="Work" />
          <NavItem icon={<User className="w-4 h-4" />} label="About" />
          <NavItem icon={<Mail className="w-4 h-4" />} label="Contact" active />
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
}

function NavItem({ icon, label, active = false, href = "#" }: NavItemProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2
        px-3 py-2
        rounded-xl
        text-sm font-medium
        transition-all duration-300
        ${
          active
            ? "bg-white/20 text-white"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }
      `}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </motion.a>
  );
}

