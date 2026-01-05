"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Terminal, 
  Brain, 
  Globe, 
  Search,
  Sparkles,
  FlaskConical,
  Eye,
  Check,
  GraduationCap,
} from "lucide-react";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Project categories
type Category = "all" | "research" | "ai" | "fullstack";

// Project data type
interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    zh: string;
  };
  thumbnail?: string; // Image path like "/projects/xxx.png"
  gradient: string;   // Fallback gradient
  techStack: string[];
  language: string;
  categories: Exclude<Category, "all">[]; // 支持多个分类
  githubUrl?: string;
  academicUrl?: string; // 学术论文链接
  demoUrl?: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
}

// Project data - Only TypeScript projects + UX-Ray
const allProjects: Project[] = [
  {
    id: "squintax",
    title: "Squintax",
    description: {
      en: "An intelligent code analysis tool that helps developers understand complex codebases through AI-powered visualization and natural language explanations.",
      zh: "一个智能代码分析工具，通过 AI 驱动的可视化和自然语言解释，帮助开发者理解复杂的代码库。",
    },
    thumbnail: "/projects/squintax.png",
    gradient: "from-neon-purple to-neon-pink",
    techStack: ["Next.js", "TypeScript", "LangChain", "GPT-4", "D3.js"],
    language: "TypeScript",
    categories: ["ai", "fullstack"], // AI + 全栈
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: true,
    stars: 128,
    forks: 24,
  },
  {
    id: "ux-ray",
    title: "UX-Ray",
    description: {
      en: "A web UI inspection tool that automatically identifies usability issues and provides actionable solutions using LLM vision analysis.",
      zh: "一个网页 UI 审查工具，通过大模型视觉分析自动识别可用性问题并提供可操作的解决方案。",
    },
    thumbnail: "/projects/ux-ray.png",
    gradient: "from-neon-cyan to-neon-teal",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Prompt Engineering"],
    language: "TypeScript",
    categories: ["ai", "fullstack"], // AI + 全栈
    githubUrl: "https://github.com/l1anch1/ux-ray",
    demoUrl: "https://ux-ray-ai.vercel.app",
    featured: true,
    stars: 86,
    forks: 15,
  },
  {
    id: "tutorcraftease",
    title: "TutorCraftEase",
    description: {
      en: "An AI-powered tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
      zh: "一个 AI 驱动的教学系统，可以适应个人学习风格，大规模提供个性化的教育体验。",
    },
    thumbnail: "/projects/tutorcraftease.png",
    gradient: "from-neon-indigo to-neon-violet",
    techStack: ["React", "JavaScript", "OpenAI API"],
    language: "JavaScript",
    categories: ["research", "ai"], // 研究 + AI
    //githubUrl: "https://github.com",
    academicUrl: "https://doi.org/10.1145/3706598.3713731",
    featured: true,
    //stars: 92,
  },
  {
    id: "ragenius",
    title: "RAGenius",
    description: {
      en: "Advanced Retrieval-Augmented Generation system for personal or enterprise knowledge management with real-time context understanding and generation.",
      zh: "先进的检索增强生成系统，用于个人或企业知识管理，具有实时上下文理解与生成能力。",
    },
    thumbnail: "/projects/ragenius.png",
    gradient: "from-neon-pink to-neon-rose",
    techStack: ["Next.js", "TypeScript", "LangChain", "Chroma DB", "FastAPI"],
    language: "TypeScript",
    categories: ["ai", "fullstack"], // AI + 全栈
    githubUrl: "https://github.com/l1anch1/ragenius",
    demoUrl: "https://ragenius.xyz",
    featured: true,
    //stars: 64,
    //forks: 12,
  },
  {
    id: "repohealth",
    title: "RepoHealth",
    description: {
      en: "A data-driven GitHub ecosystem analysis system that leverages machine learning and deep learning to analyze repository health metrics and predict lifespan.",
      zh: "基于数据驱动的GitHub生态系统分析系统，通过机器学习和深度学习技术分析约9.6万条仓库的健康度指标并预测项目寿命，为开源项目可持续性和生态系统动态提供数据洞察。",
    },
    thumbnail: "/projects/repohealth.png",
    gradient: "from-neon-emerald to-neon-teal",
    techStack: ["Juyter", "transformers", "PyTorch", "scikit-learn", "seaborn"],
    language: "Python",
    categories: ["ai", "research"], // AI + 研究
    githubUrl: "https://github.com/l1anch1/Repo-Health",
    featured: true,
    //stars: 64,
    //forks: 12,
  },
  {
    id: "asl-recognition",
    title: "ASL-Recognition",
    description: {
      en: "A multi-dimensional comparative evaluation framework for American Sign Language (ASL) alphabet recognition, benchmarking CNN, Liquid NN, and ViT architectures across accuracy, noise robustness, and feature representation interpretability.",
      zh: "一个多维度的比较评估框架，用于美国手语（ASL）字母识别，在准确率、噪声鲁棒性和特征表示可解释性方面对比CNN、Liquid NN和ViT架构。",
    },
    thumbnail: "/projects/asl-recognition.png",
    gradient: "from-neon-orange to-neon-amber",
    techStack: [ "PyTorch", "OpenCV", "TorchDyn", "scikit-learn", "seaborn"],
    language: "Python",
    categories: ["ai", "research"], // AI + 研究
    githubUrl: "https://github.com/l1anch1/ASL-Recognition",
    featured: true,
    //stars: 64,
    //forks: 12,
  },
];

// Filter key mapping for translations
const filterKeyMap: Record<Category, string> = {
  all: "filterAll",
  ai: "filterAI",
  research: "filterResearch",
  fullstack: "filterFullStack",
};

// Category config
const categories: { key: Category; icon: React.ElementType; gradient: string }[] = [
  { key: "all", icon: Sparkles, gradient: "from-white/20 to-white/10" },
  { key: "ai", icon: Brain, gradient: "from-neon-purple to-neon-pink" },
  { key: "research", icon: FlaskConical, gradient: "from-neon-cyan to-neon-teal" },
  { key: "fullstack", icon: Globe, gradient: "from-neon-indigo to-neon-violet" },
];

// Category icons for cards
const categoryIcons: Record<Exclude<Category, "all">, React.ElementType> = {
  research: Eye,
  ai: Brain,
  fullstack: Globe,
};

// Categories that can be selected (excluding "all")
type SelectableCategory = Exclude<Category, "all">;

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<Set<SelectableCategory>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle category selection
  const toggleCategory = (category: Category) => {
    if (category === "all") {
      // "All" clears all selections (shows everything)
      setSelectedCategories(new Set());
    } else {
      setSelectedCategories((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(category)) {
          newSet.delete(category);
        } else {
          newSet.add(category);
        }
        return newSet;
      });
    }
  };

  // Check if a category is active
  const isCategoryActive = (category: Category) => {
    if (category === "all") {
      return selectedCategories.size === 0;
    }
    return selectedCategories.has(category);
  };

  // Filter projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // If categories selected, check if project has any matching category
      if (selectedCategories.size > 0) {
        const hasMatchingCategory = project.categories.some(cat => selectedCategories.has(cat));
        if (!hasMatchingCategory) return false;
      }
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
  }, [selectedCategories, searchQuery]);

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
            {/* Category Filters - Multi-select */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = isCategoryActive(cat.key);
                const showCheck = cat.key !== "all" && isActive;
                return (
                  <motion.button
                    key={cat.key}
                    onClick={() => toggleCategory(cat.key)}
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
                    {showCheck ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
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

        {/* Projects Grid */}
        <div className="w-full max-w-7xl">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${Array.from(selectedCategories).join("-")}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredProjects.map((project, index) => (
                  <CompactProjectCard
                    key={project.id}
                    project={project}
                    language={language}
                    delay={0.1 * index}
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
  // 使用第一个分类的图标
  const CategoryIcon = categoryIcons[project.categories[0]];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <div
        className="
          h-full
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          transition-all duration-300
          hover:bg-white/10
          hover:border-white/20
          hover:shadow-lg hover:shadow-neon-purple/10
        "
      >
        {/* Thumbnail */}
        <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Image thumbnail (if available) */}
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Hide image on error, showing gradient fallback
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}

          {/* Category icon */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="w-8 h-8 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center">
              <CategoryIcon className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title & Language */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
              {project.title}
            </h3>
            <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-mono text-white/60">
              {project.language}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description[language]}
          </p>

          {/* Tech Stack & Links */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 flex-1 mr-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-neon-cyan/80"
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

            {/* Links */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    p-2 rounded-xl
                    bg-white/10 border border-white/20
                    text-white/80 hover:text-white
                    hover:bg-white/20 hover:border-white/30
                    shadow-sm hover:shadow-md hover:shadow-white/5
                    transition-all duration-200
                  "
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {project.academicUrl && (
                <motion.a
                  href={project.academicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    p-2 rounded-xl
                    bg-white/10 border border-white/20
                    text-white/80 hover:text-white
                    hover:bg-white/20 hover:border-white/30
                    shadow-sm hover:shadow-md hover:shadow-white/5
                    transition-all duration-200
                  "
                  title="Academic Paper"
                >
                  <GraduationCap className="w-4 h-4" />
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    relative overflow-hidden
                    flex items-center gap-1.5
                    px-3 py-1.5 rounded-xl
                    bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink
                    text-white text-xs font-semibold
                    shadow-lg shadow-neon-purple/30
                    hover:shadow-xl hover:shadow-neon-cyan/40
                    transition-all duration-300
                    before:absolute before:inset-0
                    before:bg-gradient-to-r before:from-white/20 before:to-transparent
                    before:opacity-0 before:hover:opacity-100
                    before:transition-opacity
                  "
                >
                  <span>Try it Now</span>
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
      <div className="absolute top-[20%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 rotate-12" />
      <div className="absolute top-[30%] right-[8%] w-16 sm:w-20 h-16 sm:h-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 -rotate-6" />
      <div className="absolute bottom-[25%] left-[3%] w-20 sm:w-24 h-20 sm:h-24 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/10 rotate-45" />
    </div>
  );
}
