"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "all" | "systems" | "ai" | "fullstack";
type SelectableCategory = Exclude<Category, "all">;

interface Project {
  id: string;
  title: string;
  description: { en: string; zh: string };
  thumbnail: string;
  techStack: string[];
  language: string;
  categories: SelectableCategory[];
  metrics?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

const allProjects: Project[] = [
  {
    id: "ragenius",
    title: "RAGenius",
    description: {
      en: "A production-ready knowledge system with a six-stage RAG pipeline, parallel retrieval, TTL model caching, SSE streaming, and containerized deployment. Retrieval recall improved by about 40% and first-token latency fell by about 60%.",
      zh: "生产级智能知识库系统：设计六阶段 RAG Pipeline、并行检索、TTL 模型缓存、SSE 流式问答与容器化部署，检索 Recall 提升约 40%，用户首字响应延迟降低约 60%。",
    },
    thumbnail: "/projects/ragenius.webp",
    techStack: ["Python", "React", "LangChain", "ChromaDB", "Docker", "Nginx"],
    language: "Python / TypeScript",
    categories: ["ai", "fullstack", "systems"],
    metrics: ["+40% Recall", "−60% TTFT", "300+ Clones"],
    githubUrl: "https://github.com/l1anch1/ragenius",
    demoUrl: "https://www.ragenius.xyz/",
    featured: true,
  },
  {
    id: "repohealth",
    title: "RepoHealth",
    description: {
      en: "An open-source repository health and lifespan prediction system built on more than 100,000 GitHub repositories. A hybrid deep-learning model reached R² 0.95+ and won a national third prize in the CCF Open Source Innovation Competition.",
      zh: "基于十万余个 GitHub 仓库的开源健康度量与生命周期预测系统；混合深度学习架构在测试集达到 R² 0.95+，获 CCF 开源创新大赛国家级三等奖。",
    },
    thumbnail: "/projects/repohealth.webp",
    techStack: ["PyTorch", "Transformers", "Cox PH", "Scikit-learn", "Genetic Algorithm"],
    language: "Python",
    categories: ["ai", "systems"],
    metrics: ["100K+ Repos", "R² 0.95+", "National 3rd Prize"],
    githubUrl: "https://github.com/l1anch1/Repo-Health",
    featured: true,
  },
  {
    id: "ux-ray",
    title: "UX-Ray",
    description: {
      en: "A web UI inspection tool that uses multimodal LLM analysis to identify usability issues and turn them into actionable recommendations, with an interactive public demo.",
      zh: "基于多模态大模型分析的 Web UI 审查工具，自动识别可用性问题并生成可执行的改进建议，提供在线交互 Demo。",
    },
    thumbnail: "/projects/ux-ray.webp",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Prompt Engineering"],
    language: "TypeScript",
    categories: ["ai", "fullstack"],
    metrics: ["Live Demo", "Multimodal LLM"],
    githubUrl: "https://github.com/l1anch1/ux-ray",
    demoUrl: "https://ux-ray-ai.vercel.app",
  },
  {
    id: "vibeposter",
    title: "VibePoster",
    description: {
      en: "An editable multimodal poster generator that coordinates Planner, Visual, Layout, and Critic agents with a dynamic object-oriented layout engine and a RAG knowledge base.",
      zh: "多模态可编辑海报生成器，通过 Planner、Visual、Layout 与 Critic 多智能体协作，结合动态 OOP 布局引擎和 RAG 知识库。",
    },
    thumbnail: "/projects/vibeposter.webp",
    techStack: ["FastAPI", "React", "LangGraph", "Pydantic V2", "RAG", "Knowledge Graph"],
    language: "Python / TypeScript",
    categories: ["ai", "fullstack"],
    metrics: ["4-Agent Workflow", "Editable Output"],
    githubUrl: "https://github.com/l1anch1/VibePoster",
  },
  {
    id: "asl-recognition",
    title: "ASL Recognition",
    description: {
      en: "A comparative evaluation framework for American Sign Language alphabet recognition across CNN, Liquid Neural Network, and Vision Transformer architectures, including robustness and interpretability analysis.",
      zh: "美国手语字母识别对比评测框架，从准确率、噪声鲁棒性与可解释性等维度比较 CNN、Liquid Neural Network 与 Vision Transformer。",
    },
    thumbnail: "/projects/asl-recognition.webp",
    techStack: ["PyTorch", "OpenCV", "TorchDyn", "Scikit-learn", "Seaborn"],
    language: "Python",
    categories: ["ai", "systems"],
    metrics: ["CNN vs LNN vs ViT"],
    githubUrl: "https://github.com/l1anch1/ASL-Recognition",
  },
];

const filterKeyMap: Record<Category, string> = {
  all: "filterAll",
  ai: "filterAI",
  systems: "filterSystems",
  fullstack: "filterFullStack",
};

const categories: Category[] = ["all", "ai", "systems", "fullstack"];
const ease = [0.2, 0.7, 0.2, 1] as const;

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<Set<SelectableCategory>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (category: Category) => {
    if (category === "all") {
      setSelectedCategories(new Set());
      return;
    }

    setSelectedCategories((previous) => {
      const next = new Set(previous);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const isCategoryActive = (category: Category) =>
    category === "all" ? selectedCategories.size === 0 : selectedCategories.has(category);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategories.size === 0 || project.categories.some((category) => selectedCategories.has(category));
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        project.title.toLowerCase().includes(query) ||
        project.techStack.some((technology) => technology.toLowerCase().includes(query)) ||
        project.language.toLowerCase().includes(query) ||
        project.description[language].toLowerCase().includes(query)
      );
    });
  }, [language, searchQuery, selectedCategories]);

  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-10">
        <section className="pb-12 pt-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="u-label text-clay"
          >
            {t("allProjects")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.14 }}
            className="mt-3 font-serif text-[52px] font-semibold leading-[1] tracking-[-0.02em] text-ink sm:text-[68px]"
          >
            {t("projectsTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-5 max-w-[70ch] text-[17px] leading-relaxed text-ink-soft"
          >
            {t("projectsSubtitle")}
          </motion.p>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col gap-5 border-t-[3px] border-ink pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = isCategoryActive(category);
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleCategory(category)}
                  className={`border-2 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.06em] transition-colors ${
                    active ? "border-green bg-green text-paper" : "border-rule text-ink hover:border-ink"
                  }`}
                >
                  {active && category !== "all" ? "✓ " : ""}
                  {t(filterKeyMap[category])}
                </button>
              );
            })}
          </div>

          <label className="relative w-full sm:w-72">
            <span className="sr-only">{t("searchProjects")}</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t("searchProjects")}
              className="w-full border-b-2 border-rule bg-transparent py-2.5 font-mono text-[13px] text-ink placeholder:text-faint focus:border-green focus:outline-none"
            />
          </label>
        </motion.div>

        <div className="mt-4 font-mono text-[12px] text-faint">
          {filteredProjects.length} {t("projectCount")}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${Array.from(selectedCategories).join("-")}-${searchQuery}-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectRow key={project.id} project={project} language={language} index={index} t={t} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-y border-rule py-20 text-center font-mono text-[14px] text-faint"
              >
                {t("noResults")}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

function ProjectRow({
  project,
  language,
  index,
  t,
}: {
  project: Project;
  language: "en" | "zh";
  index: number;
  t: (key: string) => string;
}) {
  const primaryUrl = project.demoUrl || project.githubUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease, delay: index * 0.05 }}
      className="group grid grid-cols-1 gap-x-8 gap-y-5 border-b border-rule py-9 md:grid-cols-[300px_minmax(0,1fr)]"
    >
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} ${language === "zh" ? "项目链接" : "project link"}`}
        className="relative block aspect-[16/10] overflow-hidden border border-rule bg-paper-deep"
      >
        <span className="absolute left-3 top-2.5 z-10 font-mono text-[11px] tracking-[0.08em] text-paper mix-blend-difference">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Image
          src={project.thumbnail}
          alt=""
          fill
          priority={index === 0}
          sizes="(min-width: 768px) 300px, 100vw"
          loading={index === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.3] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      </a>

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-serif text-[32px] font-semibold leading-none tracking-[-0.01em] text-ink transition-colors group-hover:text-green sm:text-[36px]">
            {project.title}
          </h2>
          {project.featured && <span className="text-[16px] text-clay">★</span>}
          <span className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.07em] text-faint">
            {project.categories.map((category) => (
              <span key={category}>{t(filterKeyMap[category])}</span>
            ))}
            <span className="text-green">{project.language}</span>
          </span>
        </div>

        <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-ink-soft">{project.description[language]}</p>

        {project.metrics && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span key={metric} className="border border-clay/40 bg-clay/5 px-2 py-1 font-mono text-[11px] text-clay">
                {metric}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-5">
          <span className="max-w-[520px] font-mono text-[11px] leading-relaxed text-faint">
            {project.techStack.join(" · ")}
          </span>
          <span className="flex flex-wrap gap-4">
            {project.githubUrl && <ProjectLink href={project.githubUrl} label={t("viewSource")} />}
            {project.demoUrl && <ProjectLink href={project.demoUrl} label={t("viewDemo")} accent />}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectLink({ href, label, accent = false }: { href: string; label: string; accent?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-mono text-[11px] uppercase tracking-[0.07em] underline underline-offset-4 transition-colors ${
        accent
          ? "text-clay decoration-clay/40 hover:decoration-clay"
          : "text-ink decoration-rule hover:text-green hover:decoration-green"
      }`}
    >
      {label} ↗
    </a>
  );
}
