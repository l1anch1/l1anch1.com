"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Code2,
  Lightbulb,
  GraduationCap,
  Cpu,
  ExternalLink,
  Play,
} from "lucide-react";
import GlassCard, {
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/GlassCard";
import BentoGrid, { BentoItem } from "@/components/ui/BentoGrid";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <GlassNavbar />

      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-white/80 text-sm">{t("portfolio")}</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t("heroTitle1")}{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              {t("heroTitle2")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light">
            {t("heroSubtitle")}{" "}
            <span className="text-white/80">{t("heroRole")}</span>
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid>
          {/* Squintax - Hero Project Card */}
          <BentoItem colSpan={2} rowSpan={2} delay={0.1}>
            <GlassCard
              intensity="medium"
              padding="none"
              className="h-full min-h-[350px] sm:min-h-[400px] overflow-hidden group"
              hover
            >
              {/* Demo Preview Area */}
              <div className="relative h-48 sm:h-64 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 overflow-hidden">
                {/* Placeholder for Demo GIF - shows abstract UI mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Mock IDE interface */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-neon-rose/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neon-emerald/80" />
                    </div>
                    <div className="absolute top-10 left-4 right-4 space-y-2">
                      <div className="h-2 w-3/4 bg-white/20 rounded" />
                      <div className="h-2 w-1/2 bg-neon-purple/40 rounded" />
                      <div className="h-2 w-2/3 bg-white/15 rounded" />
                      <div className="h-2 w-1/3 bg-neon-cyan/30 rounded" />
                    </div>
                  </motion.div>
                </div>

                {/* Play button overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                        <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-white/50 text-xs sm:text-sm">{t("featuredProject")}</span>
                    </div>
                    <GlassCardTitle className="text-2xl sm:text-3xl">Squintax</GlassCardTitle>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                  </motion.a>
                </div>
                <GlassCardDescription className="text-sm sm:text-base">
                  {t("squintaxDesc")}
                </GlassCardDescription>
              </div>
            </GlassCard>
          </BentoItem>

          {/* TutorCraftEase */}
          <BentoItem colSpan={2} delay={0.2}>
            <GlassCard intensity="subtle" padding="lg" hover className="h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-teal flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <GlassCardTitle className="text-xl sm:text-2xl">TutorCraftEase</GlassCardTitle>
                    <span className="px-2 py-0.5 text-xs bg-neon-cyan/20 text-neon-cyan rounded-full">
                      {t("research")}
                    </span>
                  </div>
                  <GlassCardDescription className="mb-3 sm:mb-4 text-sm sm:text-base">
                    {t("tutorCraftEaseDesc")}
                  </GlassCardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Tag>LLM</Tag>
                    <Tag>Education</Tag>
                    <Tag>HCI</Tag>
                  </div>
                </div>
              </div>
            </GlassCard>
          </BentoItem>

          {/* RAGenius */}
          <BentoItem colSpan={2} delay={0.3}>
            <GlassCard intensity="subtle" padding="lg" hover className="h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-neon-pink to-neon-rose flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <GlassCardTitle className="text-xl sm:text-2xl">RAGenius</GlassCardTitle>
                    <span className="px-2 py-0.5 text-xs bg-neon-pink/20 text-neon-pink rounded-full">
                      {t("engineering")}
                    </span>
                  </div>
                  <GlassCardDescription className="mb-3 sm:mb-4 text-sm sm:text-base">
                    {t("raGeniusDesc")}
                  </GlassCardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Tag>RAG</Tag>
                    <Tag>Vector DB</Tag>
                    <Tag>NLP</Tag>
                  </div>
                </div>
              </div>
            </GlassCard>
          </BentoItem>

          {/* Skills / About Card */}
          <BentoItem colSpan={2} delay={0.4}>
            <GlassCard intensity="medium" padding="lg" hover className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-neon-indigo to-neon-violet flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <GlassCardTitle className="text-lg sm:text-xl">{t("researchInterests")}</GlassCardTitle>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <SkillItem icon={<Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />} label={t("humanAI")} />
                <SkillItem icon={<Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />} label={t("creativeCoding")} />
                <SkillItem icon={<Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />} label={t("llmApps")} />
                <SkillItem icon={<Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />} label={t("generativeUI")} />
              </div>
            </GlassCard>
          </BentoItem>

          {/* Contact CTA */}
          <BentoItem colSpan={2} delay={0.5}>
            <GlassCard intensity="strong" padding="lg" hover className="h-full">
              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="inline-block mb-4"
                >
                  <span className="text-3xl sm:text-4xl">👋</span>
                </motion.div>
                <GlassCardTitle className="text-xl sm:text-2xl mb-2">{t("letsConnect")}</GlassCardTitle>
                <GlassCardDescription className="mb-4 sm:mb-6 text-sm sm:text-base">
                  {t("connectDesc")}
                </GlassCardDescription>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm sm:text-base font-medium shadow-lg shadow-neon-purple/25"
                >
                  {t("getInTouch")}
                </motion.button>
              </div>
            </GlassCard>
          </BentoItem>
        </BentoGrid>

        {/* Floating decorative elements */}
        <FloatingElements />
      </main>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 sm:px-3 py-1 text-xs text-white/70 bg-white/10 rounded-full border border-white/10">
      {children}
    </span>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/5 rounded-xl border border-white/10">
      <span className="text-white/60">{icon}</span>
      <span className="text-white/80 text-xs sm:text-sm truncate">{label}</span>
    </div>
  );
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 rotate-12"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[8%] w-16 sm:w-20 h-16 sm:h-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 -rotate-6"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[25%] left-[3%] w-20 sm:w-24 h-20 sm:h-24 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/10 rotate-45"
      />
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] right-[5%] w-10 sm:w-14 h-10 sm:h-14 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 -rotate-12"
      />
    </div>
  );
}
