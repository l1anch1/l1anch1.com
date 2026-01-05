"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Zap,
} from "lucide-react";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Contact channels
const channels = [
  {
    name: "Email",
    value: "lianchi@example.com",
    href: "mailto:lianchi@example.com",
    icon: Mail,
    color: "from-neon-cyan to-neon-teal",
    copyable: true,
  },
  {
    name: "GitHub",
    value: "@l1anch1",
    href: "https://github.com/l1anch1",
    icon: Github,
    color: "from-neon-purple to-neon-violet",
    copyable: false,
  },
  {
    name: "LinkedIn",
    value: "Li Anchi",
    href: "https://linkedin.com/in/lianchi",
    icon: Linkedin,
    color: "from-neon-blue to-neon-indigo",
    copyable: false,
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("lianchi@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <GlassNavbar />

      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
          >
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-white/80 text-sm font-mono">{t("channelSecure")}</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              {t("contactTitle")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60">
            {t("contactSubtitle")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-neon-cyan" />
              {t("directChannels")}
            </h2>

            <div className="space-y-4">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <ChannelCard
                    channel={channel}
                    onCopy={channel.copyable ? copyEmail : undefined}
                    copied={channel.copyable ? copiedEmail : false}
                    t={t}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-neon-purple" />
              {t("orSendMessage")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                  {t("yourName")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="
                    w-full px-4 py-3
                    bg-white/5 backdrop-blur-xl
                    border-b-2 border-white/20
                    rounded-t-lg
                    text-white font-mono
                    placeholder:text-white/30
                    focus:outline-none focus:border-neon-cyan
                    transition-colors
                  "
                  placeholder="> enter name..."
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                  {t("yourEmail")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="
                    w-full px-4 py-3
                    bg-white/5 backdrop-blur-xl
                    border-b-2 border-white/20
                    rounded-t-lg
                    text-white font-mono
                    placeholder:text-white/30
                    focus:outline-none focus:border-neon-cyan
                    transition-colors
                  "
                  placeholder="> enter email..."
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                  {t("yourMessage")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="
                    w-full px-4 py-3
                    bg-white/5 backdrop-blur-xl
                    border-b-2 border-white/20
                    rounded-t-lg
                    text-white font-mono
                    placeholder:text-white/30
                    focus:outline-none focus:border-neon-cyan
                    transition-colors
                    resize-none
                  "
                  placeholder="> compose message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full py-4 mt-4
                  rounded-xl
                  font-mono font-medium
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${submitted
                    ? "bg-neon-emerald/20 border border-neon-emerald/30 text-neon-emerald"
                    : "bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-lg hover:shadow-neon-purple/25"
                  }
                  disabled:opacity-70 disabled:cursor-not-allowed
                `}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Transmitting...</span>
                  </>
                ) : submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-5 h-5" />
                    <span>{t("executeTransmit")}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <FloatingElements />
      </main>
    </>
  );
}

interface ChannelCardProps {
  channel: {
    name: string;
    value: string;
    href: string;
    icon: React.ElementType;
    color: string;
    copyable: boolean;
  };
  onCopy?: () => void;
  copied: boolean;
  t: (key: string) => string;
}

function ChannelCard({ channel, onCopy, copied, t }: ChannelCardProps) {
  const Icon = channel.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="
        group relative
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-5
        overflow-hidden
        hover:border-white/20
        hover:shadow-lg hover:shadow-neon-purple/10
        transition-all duration-300
      "
    >
      {/* Gradient glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Info */}
          <div>
            <p className="text-white/50 text-sm mb-0.5">{channel.name}</p>
            <p className={`text-white font-medium ${channel.copyable ? "font-mono" : ""}`}>
              {channel.value}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {channel.copyable && onCopy && (
            <motion.button
              onClick={onCopy}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="
                p-2.5 rounded-xl
                bg-white/10 hover:bg-white/20
                text-white/60 hover:text-white
                transition-colors
              "
              title={copied ? t("emailCopied") : "Copy email"}
            >
              {copied ? (
                <Check className="w-4 h-4 text-neon-emerald" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.button>
          )}

          <motion.a
            href={channel.href}
            target={channel.copyable ? undefined : "_blank"}
            rel={channel.copyable ? undefined : "noopener noreferrer"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              p-2.5 rounded-xl
              bg-gradient-to-br from-white/10 to-white/5
              hover:from-white/20 hover:to-white/10
              text-white/60 hover:text-white
              transition-all
            "
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 rotate-12"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[8%] w-16 sm:w-20 h-16 sm:h-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 -rotate-6"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[3%] w-20 sm:w-24 h-20 sm:h-24 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/10 rotate-45"
      />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[5%] w-10 sm:w-14 h-10 sm:h-14 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 -rotate-12"
      />
    </div>
  );
}

