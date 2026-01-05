"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Terminal, 
  Brain, 
  Globe, 
  Search,
  Sparkles,
  FlaskConical,
  GitFork,
  Star,
} from "lucide-react";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Project categories
type Category = "all" | "research" | "ai" | "fullstack" | "experiments";

// Project data type
interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    zh: string;
  };
  thumbnail: string;
  techStack: string[];
  language: string; // Primary language
  category: Exclude<Category, "all">;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
}

// Comprehensive project data
const allProjects: Project[] = [
  // Featured Projects
  {
    id: "squintax",
    title: "Squintax",
    description: {
      en: "An intelligent code analysis tool that helps developers understand complex codebases through AI-powered visualization and natural language explanations.",
      zh: "一个智能代码分析工具，通过 AI 驱动的可视化和自然语言解释，帮助开发者理解复杂的代码库。",
    },
    thumbnail: "from-neon-purple to-neon-pink",
    techStack: ["Next.js", "TypeScript", "LangChain", "GPT-4", "D3.js"],
    language: "TypeScript",
    category: "ai",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: true,
    stars: 128,
    forks: 24,
  },
  {
    id: "tutorcraftease",
    title: "TutorCraftEase",
    description: {
      en: "An AI-powered tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
      zh: "一个 AI 驱动的教学系统，可以适应个人学习风格，大规模提供个性化的教育体验。",
    },
    thumbnail: "from-neon-cyan to-neon-teal",
    techStack: ["Python", "FastAPI", "LLM", "React", "PostgreSQL"],
    language: "Python",
    category: "research",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: true,
    stars: 86,
  },
  {
    id: "ragenius",
    title: "RAGenius",
    description: {
      en: "Advanced Retrieval-Augmented Generation system for enterprise knowledge management with real-time context understanding.",
      zh: "先进的检索增强生成系统，用于企业知识管理，具有实时上下文理解能力。",
    },
    thumbnail: "from-neon-pink to-neon-rose",
    techStack: ["Python", "LangChain", "Pinecone", "Redis", "FastAPI"],
    language: "Python",
    category: "ai",
    githubUrl: "https://github.com",
    featured: true,
    stars: 64,
    forks: 12,
  },
  // Full-Stack Projects
  {
    id: "glassui",
    title: "GlassUI Kit",
    description: {
      en: "A comprehensive glassmorphism component library for React, featuring iOS/VisionOS-inspired design system with Framer Motion animations.",
      zh: "一个全面的玻璃拟态 React 组件库，采用 iOS/VisionOS 风格设计系统和 Framer Motion 动画。",
    },
    thumbnail: "from-neon-indigo to-neon-violet",
    techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    language: "TypeScript",
    category: "fullstack",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    stars: 256,
    forks: 48,
  },
  {
    id: "devboard",
    title: "DevBoard",
    description: {
      en: "A real-time collaborative dashboard for development teams. Features kanban boards, sprint planning, and GitHub integration.",
      zh: "面向开发团队的实时协作仪表板，具有看板、冲刺规划和 GitHub 集成功能。",
    },
    thumbnail: "from-neon-emerald to-neon-teal",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "WebSocket", "Docker"],
    language: "TypeScript",
    category: "fullstack",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    stars: 42,
  },
  // Research Projects
  {
    id: "hci-gestures",
    title: "GestureFlow",
    description: {
      en: "Research prototype for gesture-based UI navigation. Uses MediaPipe for hand tracking and custom ML models for gesture recognition.",
      zh: "基于手势的 UI 导航研究原型。使用 MediaPipe 进行手部追踪和自定义 ML 模型进行手势识别。",
    },
    thumbnail: "from-neon-orange to-neon-amber",
    techStack: ["Python", "MediaPipe", "TensorFlow", "React"],
    language: "Python",
    category: "research",
    githubUrl: "https://github.com",
  },
  {
    id: "llm-eval",
    title: "LLM-Eval Framework",
    description: {
      en: "A comprehensive evaluation framework for comparing LLM performance across multiple dimensions: accuracy, latency, and cost efficiency.",
      zh: "一个全面的 LLM 评估框架，用于比较多个维度的性能：准确性、延迟和成本效益。",
    },
    thumbnail: "from-neon-blue to-neon-indigo",
    techStack: ["Python", "PyTorch", "Weights & Biases", "Docker"],
    language: "Python",
    category: "research",
    githubUrl: "https://github.com",
    stars: 156,
    forks: 32,
  },
  // AI/LLM Projects
  {
    id: "chatbot-factory",
    title: "Chatbot Factory",
    description: {
      en: "No-code platform for creating custom chatbots. Supports multiple LLM backends and integrates with popular messaging platforms.",
      zh: "创建自定义聊天机器人的无代码平台。支持多种 LLM 后端，并与流行的消息平台集成。",
    },
    thumbnail: "from-neon-fuchsia to-neon-purple",
    techStack: ["Next.js", "OpenAI", "Anthropic", "Supabase"],
    language: "TypeScript",
    category: "ai",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    stars: 89,
  },
  {
    id: "code-review-ai",
    title: "CodeReview AI",
    description: {
      en: "GitHub Action that automatically reviews PRs using GPT-4. Provides actionable feedback on code quality, security, and best practices.",
      zh: "使用 GPT-4 自动审查 PR 的 GitHub Action。提供关于代码质量、安全性和最佳实践的可操作反馈。",
    },
    thumbnail: "from-neon-lime to-neon-emerald",
    techStack: ["TypeScript", "GitHub Actions", "GPT-4", "Node.js"],
    language: "TypeScript",
    category: "ai",
    githubUrl: "https://github.com",
    stars: 324,
    forks: 67,
  },
  // Experiments / Hackathon
  {
    id: "hackathon-voiceai",
    title: "VoiceCanvas",
    description: {
      en: "🏆 HackMIT 2024 Winner - Voice-controlled digital canvas using Whisper + Stable Diffusion. Real-time voice-to-art generation.",
      zh: "🏆 HackMIT 2024 获奖作品 - 使用 Whisper + Stable Diffusion 的语音控制数字画布。实时语音转艺术生成。",
    },
    thumbnail: "from-neon-gold to-neon-orange",
    techStack: ["Python", "Whisper", "Stable Diffusion", "FastAPI"],
    language: "Python",
    category: "experiments",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "terminal-portfolio",
    title: "Terminal Portfolio",
    description: {
      en: "Interactive terminal-style portfolio website. Supports custom commands, themes, and ASCII art. Built as a fun weekend project.",
      zh: "交互式终端风格的作品集网站。支持自定义命令、主题和 ASCII 艺术。作为周末趣味项目构建。",
    },
    thumbnail: "from-neon-gray to-neon-slate",
    techStack: ["React", "TypeScript", "xterm.js"],
    language: "TypeScript",
    category: "experiments",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    stars: 178,
    forks: 41,
  },
  {
    id: "pixel-art-gen",
    title: "PixelForge",
    description: {
      en: "AI-powered pixel art generator. Converts photos or prompts into retro-style pixel art with customizable palettes.",
      zh: "AI 驱动的像素艺术生成器。将照片或提示转换为复古风格的像素艺术，支持自定义调色板。",
    },
    thumbnail: "from-neon-red to-neon-pink",
    techStack: ["Python", "PyTorch", "Gradio", "PIL"],
    language: "Python",
    category: "experiments",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    stars: 92,
  },
];

// Category config
const categories: { key: Category; icon: React.ElementType; gradient: string }[] = [
  { key: "all", icon: Sparkles, gradient: "from-white/20 to-white/10" },
  { key: "ai", icon: Brain, gradient: "from-neon-purple to-neon-pink" },
  { key: "research", icon: FlaskConical, gradient: "from-neon-cyan to-neon-teal" },
  { key: "fullstack", icon: Globe, gradient: "from-neon-indigo to-neon-violet" },
  { key: "experiments", icon: FlaskConical, gradient: "from-neon-orange to-neon-amber" },
];

// Filter key mapping for translations
const filterKeyMap: Record<Category, string> = {
  all: "filterAll",
  ai: "filterAI",
  research: "filterResearch",
  fullstack: "filterFullStack",
  experiments: "filterExperiments",
};

// Category icons for cards
const categoryIcons: Record<Exclude<Category, "all">, React.ElementType> = {
  research: FlaskConical,
  ai: Brain,
  fullstack: Globe,
  experiments: FlaskConical,
};

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      if (activeCategory !== "all" && project.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
          project.language.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <GlassNavbar />

      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8 sm:mb-12 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
          >
            <Terminal className="w-4 h-4 text-neon-cyan" />
            <span className="text-white/80 text-sm font-mono">{t("allProjects")}</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              {t("projectsTitle")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto">
            {t("projectsSubtitle")}
          </p>
        </motion.div>

        {/* Filter Bar & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-6xl mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <motion.button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-2
                      px-4 py-2
                      rounded-xl
                      text-sm font-medium
                      transition-all duration-300
                      ${isActive
                        ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t(filterKeyMap[cat.key])}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchProjects")}
                className="
                  w-full
                  pl-10 pr-4 py-2.5
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-xl
                  text-white text-sm font-mono
                  placeholder:text-white/30
                  focus:outline-none focus:border-neon-cyan/50
                  transition-colors
                "
              />
            </div>
          </div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-white/40 text-sm font-mono"
          >
            {filteredProjects.length} {t("projectCount")}
          </motion.div>
        </motion.div>

        {/* Projects Grid - Dense Layout */}
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filteredProjects.map((project, index) => (
                  <CompactProjectCard
                    key={project.id}
                    project={project}
                    language={language}
                    delay={0.05 * index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Search className="w-8 h-8 text-white/30" />
                </div>
                <p className="text-white/50 text-lg">{t("noResults")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating decorative elements */}
        <FloatingElements />
      </main>
    </>
  );
}

interface CompactProjectCardProps {
  project: Project;
  language: "en" | "zh";
  delay: number;
}

function CompactProjectCard({ project, language, delay }: CompactProjectCardProps) {
  const CategoryIcon = categoryIcons[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      <div
        className="
          h-full
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-xl
          overflow-hidden
          transition-all duration-300
          hover:bg-white/10
          hover:border-white/20
          hover:shadow-lg hover:shadow-neon-purple/5
        "
      >
        {/* Compact Thumbnail */}
        <div className={`relative h-24 bg-gradient-to-br ${project.thumbnail} overflow-hidden`}>
          {/* Language Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-0.5 bg-black/40 backdrop-blur-md rounded text-white text-[10px] font-mono font-medium">
              {project.language}
            </span>
          </div>

          {/* Featured / Stats */}
          <div className="absolute top-2 right-2 flex items-center gap-1">
            {project.featured && (
              <span className="px-1.5 py-0.5 bg-neon-cyan/30 backdrop-blur-md rounded text-neon-cyan text-[10px] font-medium">
                ★
              </span>
            )}
          </div>

          {/* Category icon */}
          <div className="absolute bottom-2 right-2">
            <div className="w-6 h-6 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-center">
              <CategoryIcon className="w-3 h-3 text-white/70" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors truncate">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-xs leading-relaxed mb-2 line-clamp-2">
            {project.description[language]}
          </p>

          {/* Tech Stack - Compact terminal style */}
          <div className="flex flex-wrap gap-1 mb-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-neon-cyan/70"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Stats & Links Row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            {/* Stats */}
            <div className="flex items-center gap-2">
              {project.stars && (
                <span className="flex items-center gap-0.5 text-white/40 text-[10px]">
                  <Star className="w-3 h-3" />
                  {project.stars}
                </span>
              )}
              {project.forks && (
                <span className="flex items-center gap-0.5 text-white/40 text-[10px]">
                  <GitFork className="w-3 h-3" />
                  {project.forks}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-1">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-3 h-3" />
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              )}
            </div>
          </div>
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
    </div>
  );
}
