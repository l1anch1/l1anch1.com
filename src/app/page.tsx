"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Brain,
  Code2,
  Lightbulb,
  Eye,
  Cpu,
  ExternalLink,
  ArrowRight,
  Github,
} from "lucide-react";
import GlassCard, {
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/GlassCard";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Featured projects data (top 3 only)
const featuredProjects = [
  {
    id: "ux-ray",
    title: "UX-Ray",
    descKey: "uxRayDesc",
    gradient: "from-neon-cyan to-neon-teal",
    icon: Eye,
    tags: ["TypeScript", "Gemini API", "Prompt Engineering"],
    demoUrl: "https://ux-ray-ai.vercel.app",
    githubUrl: "https://github.com/l1anch1/ux-ray",
    videoId: "1Gpkwc8N4Zw", // YouTube video ID
    featured: true,
  },
  {
    id: "ragenius",
    title: "RAGenius",
    descKey: "raGeniusDesc",
    gradient: "from-neon-pink to-neon-rose",
    icon: Brain,
    tags: ["Next.js", "TypeScript", "RAG", "LangChain"],
    badge: "engineering",
    githubUrl: "https://github.com/l1anch1/ragenius",
  },
  {
    id: "repohealth",
    title: "RepoHealth",
    descKey: "repoHealthDesc",
    gradient: "from-neon-emerald to-neon-teal",
    icon: Code2,
    tags: ["Python", "PyTorch", "ML/DL"],
    badge: "Research",
    githubUrl: "https://github.com/l1anch1/Repo-Health",
  },
];

export default function Home() {
  const { t, language } = useLanguage();

  // Typing animation state
  const roleText = t("heroRole");
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= roleText.length) {
        setDisplayedText(roleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [roleText, language]);

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
          {/* Status Badge + Portfolio Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-white/80 text-sm">{t("portfolio")}</span>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neon-emerald/10 backdrop-blur-xl rounded-full border border-neon-emerald/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-emerald"></span>
              </span>
              <span className="text-neon-emerald text-sm font-medium">
                {language === "zh" ? "开放合作机会" : "Open to Opportunities"}
              </span>
            </motion.div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t("heroTitle1")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light">
            {t("heroSubtitle")}{" "}
            <span className="text-white/80 font-mono">
              {displayedText}
              <span className={`inline-block w-0.5 h-6 md:h-8 bg-neon-cyan ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
            </span>
          </p>
        </motion.div>

        {/* Featured Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl mb-12"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {t("featuredWorks")}
              </h2>
            </div>
          </div>

          {/* Featured Projects Grid - Hero Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Hero Project (larger) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-2 lg:row-span-2"
            >
              <GlassCard
                intensity="medium"
                padding="none"
                className="h-full min-h-[400px] sm:min-h-[450px] overflow-hidden group"
                hover
              >
                {/* Video Preview Area */}
                <div className={`relative h-64 sm:h-80 bg-gradient-to-br ${featuredProjects[0].gradient}/20 overflow-hidden`}>
                  {/* YouTube Video Embed */}
                  <div className="absolute inset-0 p-4">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                      <iframe
                        src="https://www.youtube.com/embed/1Gpkwc8N4Zw?rel=0&modestbranding=1"
                        title="UX-Ray Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="px-3 py-1.5 bg-neon-cyan/20 backdrop-blur-md rounded-full border border-neon-cyan/30">
                      <span className="text-neon-cyan text-xs font-semibold">★ {t("featuredProject")}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <GlassCardTitle className="text-2xl sm:text-3xl">{featuredProjects[0].title}</GlassCardTitle>
                    <div className="flex gap-2">
                      <motion.a
                        href={featuredProjects[0].githubUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white/70" />
                      </motion.a>
                      <motion.a
                        href={featuredProjects[0].demoUrl}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white/70" />
                      </motion.a>
                    </div>
                  </div>
                  <GlassCardDescription>
                    {t(featuredProjects[0].descKey)}
                  </GlassCardDescription>
                </div>
              </GlassCard>
            </motion.div>

            {/* Secondary Featured Projects */}
            {featuredProjects.slice(1).map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <GlassCard intensity="subtle" padding="lg" hover className="h-full">
                    <div className="flex flex-col gap-3">
                      {/* Header: Icon + Title + Badge */}
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <GlassCardTitle className="text-xl">{project.title}</GlassCardTitle>
                          {project.badge && (
                            <span className={`px-2 py-0.5 text-xs rounded-full ${
                              project.badge === "Research" 
                                ? "bg-neon-cyan/20 text-neon-cyan" 
                                : "bg-neon-pink/20 text-neon-pink"
                            }`}>
                              {project.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Description - Full Width */}
                      <GlassCardDescription className="text-sm">
                        {t(project.descKey)}
                      </GlassCardDescription>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button - View All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group inline-flex items-center gap-3
                  px-8 py-4
                  bg-white/5 hover:bg-white/10
                  backdrop-blur-xl
                  border border-white/20 hover:border-white/30
                  rounded-2xl
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <span className="text-white/80 group-hover:text-white font-medium transition-colors">
                  {t("exploreAllProjects")}
                </span>
                <ArrowRight className="w-5 h-5 text-neon-cyan group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>

        {/* Bottom Row - Skills & Contact */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills / About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <GlassCard intensity="medium" padding="lg" hover className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-indigo to-neon-violet flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <GlassCardTitle className="text-xl">{t("researchInterests")}</GlassCardTitle>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <SkillItem icon={<Brain className="w-4 h-4" />} label={t("humanAI")} />
                <SkillItem icon={<Cpu className="w-4 h-4" />} label={t("llmApps")} />
                <SkillItem icon={<Code2 className="w-4 h-4" />} label={t("aiSE")} />
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
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
                  <span className="text-4xl">👋</span>
                </motion.div>
                <GlassCardTitle className="text-2xl mb-2">{t("letsConnect")}</GlassCardTitle>
                <GlassCardDescription className="mb-6">
                  {t("connectDesc")}
                </GlassCardDescription>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-lg shadow-neon-purple/25"
                  >
                    {t("getInTouch")}
                  </motion.button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <FloatingElements />
      </main>
    </>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
      <span className="text-white/60">{icon}</span>
      <span className="text-white/80 text-sm truncate">{label}</span>
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
