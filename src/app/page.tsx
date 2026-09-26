"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturedProject {
  id: string;
  title: string;
  description: { en: string; zh: string };
  metric: string;
  metricLabel: { en: string; zh: string };
  stack: string;
  href: string;
  linkLabel: { en: string; zh: string };
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "ragenius",
    title: "RAGenius",
    description: {
      en: "A production-ready knowledge system with a six-stage retrieval pipeline, concurrent execution, model caching, SSE streaming, and containerized deployment.",
      zh: "生产级智能知识库系统，包含六阶段检索链路、并发执行、模型缓存、SSE 流式问答与容器化部署。",
    },
    metric: "+40%",
    metricLabel: { en: "retrieval recall", zh: "检索召回率" },
    stack: "Python · React · LangChain · Docker",
    href: "https://github.com/l1anch1/ragenius",
    linkLabel: { en: "Source & case study", zh: "源码与技术说明" },
  },
  {
    id: "repohealth",
    title: "RepoHealth",
    description: {
      en: "A repository health and lifespan analysis system built from more than 100,000 GitHub repositories, combining survival analysis and deep learning.",
      zh: "基于十万余个 GitHub 仓库构建的开源健康度量与生命周期预测系统，结合生存分析与深度学习。",
    },
    metric: "R² 0.95+",
    metricLabel: { en: "best test score", zh: "最佳测试集得分" },
    stack: "PyTorch · Transformers · Survival Analysis",
    href: "https://github.com/l1anch1/Repo-Health",
    linkLabel: { en: "View source", zh: "查看源码" },
  },
  {
    id: "tutorcraftease",
    title: "TutorCraftEase",
    description: {
      en: "An LLM-assisted pedagogical question authoring system with knowledge-graph-based gap diagnosis, published at ACM CHI 2025.",
      zh: "大模型辅助教学题目生成系统，结合知识图谱进行薄弱点诊断，成果发表于 ACM CHI 2025。",
    },
    metric: "CHI ’25",
    metricLabel: { en: "peer-reviewed paper", zh: "同行评审论文" },
    stack: "LLM · Knowledge Graph · HCI",
    href: "https://doi.org/10.1145/3706598.3713731",
    linkLabel: { en: "Read paper", zh: "查看论文" },
  },
];

const experience = [
  {
    organization: "ByteDance Seed",
    period: "2026.03 — 2026.06",
    role: { en: "Algorithm Engineering Intern · Code Evaluation", zh: "算法实习生 · 代码评测" },
    impact: {
      en: "Built distributed pipelines for coding-agent evaluation, repository understanding, and frontend Agent-as-a-Judge; a 2K+ benchmark achieved 90%+ human–AI scoring agreement.",
      zh: "建设 Coding Agent 评测、仓库级理解与前端 Agent-as-a-Judge 分布式链路；2K+ 样本 Benchmark 人机评一致率达 90%+。",
    },
  },
  {
    organization: "REALISE Lab · Concordia University",
    period: "2025.07 — 2025.10",
    role: { en: "Mitacs Globalink Research Intern", zh: "Mitacs 国际科研实习生" },
    impact: {
      en: "Designed a RAG and multi-agent workflow for low-resource library code generation, reducing errors by up to 25%.",
      zh: "为低资源库代码生成设计 RAG 与多智能体工作流，代码生成错误率最多降低 25%。",
    },
  },
  {
    organization: "ISCAS · HCI & IIP Lab",
    period: "2024.06 — 2025.07",
    role: { en: "Research Assistant", zh: "科研助理" },
    impact: {
      en: "Developed LLM agents, instruction-tuning data, and dynamic knowledge graphs; co-authored CHI 2025 and ongoing CHI research.",
      zh: "研发大模型智能体、指令微调数据与动态知识图谱，合著 CHI 2025 论文并持续开展 CHI 相关研究。",
    },
  },
];

const proofPoints = [
  { value: "90%+", en: "Human–AI agreement", zh: "人机评分一致率" },
  { value: "100K+", en: "Repositories analyzed", zh: "分析代码仓库" },
  { value: "+40%", en: "Retrieval recall", zh: "检索召回提升" },
  { value: "CHI ’25", en: "Published research", zh: "论文发表" },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-10">
        <section className="pb-16 pt-12 sm:pb-20 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="u-label text-clay"
          >
            {t("heroRole")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="relative mt-5 max-w-[960px]"
          >
            <h1 className="relative z-[2] font-serif text-[14vw] font-semibold leading-[0.9] tracking-[-0.045em] text-ink sm:text-[82px] lg:text-[96px]">
              {language === "zh" ? "AI 系统 × 软件工程" : "AI Systems × Software Engineering"}
            </h1>
            <span
              aria-hidden
              className="pointer-events-none absolute left-[5px] top-[5px] z-[1] font-serif text-[14vw] font-semibold leading-[0.9] tracking-[-0.045em] text-green opacity-45 sm:text-[82px] lg:text-[96px]"
            >
              {language === "zh" ? "AI 系统 × 软件工程" : "AI Systems × Software Engineering"}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.26 }}
            className="mt-9 max-w-[720px] text-[19px] leading-[1.75] text-ink-soft sm:text-[21px]"
          >
            <span className="font-semibold text-ink">{language === "zh" ? "李桉弛" : "Anchi Li"}</span>
            {language === "zh" ? " — " : " — "}
            {t("heroTitle1")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/projects" className="btn-ink group">
              {t("viewArchive")}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/about" className="btn-outline group">
              {t("viewExperience")}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="https://github.com/l1anch1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-clay hover:decoration-clay"
            >
              {t("githubProfile")} ↗
            </a>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label={language === "zh" ? "关键成果" : "Selected impact"}
          className="grid grid-cols-2 border-y-[3px] border-ink md:grid-cols-4"
        >
          {proofPoints.map((item, index) => (
            <div
              key={item.value + item.en}
              className={`py-6 pr-4 md:px-5 ${
                index % 2 === 1 ? "border-l border-rule" : ""
              } ${index > 1 ? "border-t border-rule md:border-t-0" : ""} ${
                index > 0 && index % 2 === 0 ? "md:border-l" : ""
              }`}
            >
              <div className="font-serif text-[34px] font-semibold leading-none text-clay sm:text-[42px]">
                {item.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.06em] text-faint">
                {item[language]}
              </div>
            </div>
          ))}
        </motion.section>

        <section className="pt-20">
          <div className="mb-2 flex items-center gap-4 border-t-[3px] border-ink pt-3.5">
            <h2 className="font-serif text-[28px] font-semibold text-ink">{t("featuredWorks")}</h2>
            <span className="flex-1" />
            <span className="font-mono text-[12px] tracking-[0.08em] text-clay">SELECTED / 03</span>
          </div>

          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease, delay: index * 0.06 }}
              className="group grid gap-4 border-b border-rule py-9 md:grid-cols-[72px_minmax(0,1fr)_180px] md:items-start"
            >
              <span className="font-mono text-[14px] text-clay">0{index + 1}</span>
              <div>
                <h3 className="font-serif text-[42px] font-semibold leading-none tracking-[-0.02em] text-ink transition-colors group-hover:text-green sm:text-[52px]">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-ink-soft">
                  {project.description[language]}
                </p>
                <p className="mt-4 font-mono text-[11px] text-faint">{project.stack}</p>
              </div>
              <div className="md:text-right">
                <div className="font-serif text-[28px] font-semibold text-clay">{project.metric}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-faint">
                  {project.metricLabel[language]}
                </div>
                <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink underline decoration-rule underline-offset-4 group-hover:text-green group-hover:decoration-green">
                  {project.linkLabel[language]} ↗
                </div>
              </div>
            </motion.a>
          ))}

          <Link href="/projects" className="btn-ink mt-8">
            {t("viewArchive")} →
          </Link>
        </section>

        <section className="pt-20">
          <div className="mb-2 flex items-center gap-4 border-t-[3px] border-ink pt-3.5">
            <h2 className="font-serif text-[28px] font-semibold text-ink">{t("experienceLog")}</h2>
            <span className="flex-1" />
            <span className="font-mono text-[12px] tracking-[0.08em] text-clay">2024 — 2026</span>
          </div>

          {experience.map((item, index) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease, delay: index * 0.05 }}
              className="grid gap-3 border-b border-rule py-7 md:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div>
                <div className="font-serif text-[20px] font-semibold text-ink">{item.organization}</div>
                <div className="mt-1 font-mono text-[11px] text-faint">{item.period}</div>
              </div>
              <div>
                <div className="font-mono text-[12px] uppercase tracking-[0.06em] text-green">
                  {item.role[language]}
                </div>
                <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-soft">
                  {item.impact[language]}
                </p>
              </div>
            </motion.div>
          ))}

          <Link href="/about" className="btn-outline mt-8">
            {t("viewExperience")} →
          </Link>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease }}
          className="mt-20 grid gap-8 border-t-[3px] border-ink py-12 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <span className="u-label">{t("letsConnect")}</span>
            <h2 className="mt-3 max-w-[680px] font-serif text-[34px] font-semibold leading-[1.2] text-ink sm:text-[44px]">
              {t("connectDesc")}
            </h2>
          </div>
          <Link href="/contact" className="btn-ink w-fit">
            {t("getInTouch")} →
          </Link>
        </motion.section>
      </main>

      <SiteFooter />
    </>
  );
}
