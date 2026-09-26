"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAILJS_SERVICE_ID = "service_8r0861c";
const EMAILJS_TEMPLATE_ID = "template_9ey05va";
const EMAILJS_PUBLIC_KEY = "RgwDMSMAyDhc6zUfC";

const channels = [
  { name: "Email", value: "l1anch1@outlook.com", href: "mailto:l1anch1@outlook.com", copyable: true },
  { name: "GitHub", value: "@l1anch1", href: "https://github.com/l1anch1", copyable: false },
  { name: "LinkedIn", value: "Anchi Li", href: "https://www.linkedin.com/in/anchi-li-b2992a373", copyable: false },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("l1anch1@outlook.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsSubmitting(false);
      setError(
        language === "zh"
          ? "发送失败，请稍后重试或直接使用邮箱联系。"
          : "Failed to send. Please try again or contact me directly by email."
      );
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-10">
        {/* ── Header ── */}
        <section className="pt-10 pb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="u-label"
          >
            {t("channelSecure")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="mt-3 font-serif text-[52px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[64px]"
          >
            {t("contactTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="mt-5 max-w-[52ch] text-[17px] text-ink-soft"
          >
            {t("contactSubtitle")}
          </motion.p>
        </section>

        <div className="grid grid-cols-1 gap-12 border-t-[3px] border-ink pt-12 md:grid-cols-[1fr_1px_1.1fr] md:gap-12">
          {/* ── Channels ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <h2 className="mb-6 font-serif text-[20px] font-semibold text-ink">
              {t("directChannels")}
            </h2>
            <div>
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center justify-between border-b border-rule py-5"
                >
                  <div>
                    <div className="u-label mb-1">{channel.name}</div>
                    <a
                      href={channel.href}
                      target={channel.copyable ? undefined : "_blank"}
                      rel={channel.copyable ? undefined : "noopener noreferrer"}
                      className="font-serif text-[22px] text-ink transition-colors hover:text-green"
                    >
                      {channel.value}
                    </a>
                  </div>
                  {channel.copyable ? (
                    <button
                      onClick={copyEmail}
                      className="font-mono text-[11px] uppercase tracking-[0.08em] text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:decoration-clay"
                    >
                      {copiedEmail ? t("emailCopied") : language === "zh" ? "复制" : "Copy"}
                    </button>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-green hover:decoration-green"
                    >
                      {language === "zh" ? "打开" : "Open"} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden bg-rule md:block" />

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.38 }}
          >
            <h2 className="mb-6 font-serif text-[20px] font-semibold text-ink">
              {t("orSendMessage")}
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <Field label={t("yourName")}>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b-2 border-rule bg-transparent py-2.5 font-mono text-[14px] text-ink placeholder:text-faint focus:border-green focus:outline-none"
                  placeholder="..."
                />
              </Field>

              <Field label={t("yourEmail")}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b-2 border-rule bg-transparent py-2.5 font-mono text-[14px] text-ink placeholder:text-faint focus:border-green focus:outline-none"
                  placeholder="..."
                />
              </Field>

              <Field label={t("yourMessage")}>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full resize-none border-b-2 border-rule bg-transparent py-2.5 font-mono text-[14px] text-ink placeholder:text-faint focus:border-green focus:outline-none"
                  placeholder="..."
                />
              </Field>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-4 border-clay bg-clay/10 px-4 py-3 font-mono text-[13px] text-clay"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`btn-ink mt-1 justify-center py-4 disabled:cursor-not-allowed disabled:opacity-70 ${
                  submitted ? "!bg-green" : ""
                }`}
              >
                {isSubmitting
                  ? language === "zh"
                    ? "发送中..."
                    : "Sending..."
                  : submitted
                  ? language === "zh"
                    ? "✓ 已发送"
                    : "✓ Sent"
                  : t("executeTransmit")}
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <SiteFooter className="mt-16" />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="u-label mb-2 block">{label}</span>
      {children}
    </label>
  );
}
