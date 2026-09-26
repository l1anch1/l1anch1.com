"use client";

import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  period: string;
  role: { en: string; zh: string };
  organization: { en: string; zh: string };
  location: { en: string; zh: string };
  achievements: { en: string[]; zh: string[] };
}

const experiences: Experience[] = [
  {
    period: "2026.03 — 2026.06",
    role: { en: "Algorithm Engineering Intern · Code Evaluation", zh: "算法实习生 · 代码评测" },
    organization: { en: "ByteDance · Seed", zh: "字节跳动 · Seed" },
    location: { en: "Beijing, China", zh: "中国，北京" },
    achievements: {
      en: [
        "Built task-generation and evaluation pipelines for feature implementation, test generation, and repository-level code understanding, including automated environments, multilingual support, and distributed execution.",
        "Designed a four-stage rule-based difficulty funnel for millions of test-generation candidates. The filtered score distribution matched Best-of-N while substantially reducing its inference dependency.",
        "Developed a repository-understanding pipeline that parses documentation and code structure, locates key modules, and produces verifiable facts and QA pairs for tens of thousands of mid-training and RL samples.",
        "Led a frontend Agent-as-a-Judge pipeline that converts prompts and generated pages into UI tasks and rubrics. A 2K+ black-box benchmark achieved 90%+ human–AI scoring agreement.",
      ],
      zh: [
        "建设 Feature Implementation、Test Generation 与仓库级代码理解任务生成和执行链路，完成环境自动构建、多语言支持及分布式并行扩展。",
        "面向百万级 Test Generation 候选任务设计四阶段规则难度漏斗，筛选后模型得分分布与 Best-of-N 基本一致，大幅降低高成本推理依赖。",
        "开发仓库级代码理解 Pipeline，利用 LLM 解析仓库文档与代码结构、定位关键模块，生成可验证事实单元与 QA，支撑万级 Mid-training / RL 样本构建。",
        "主导前端 Agent-as-a-Judge 评测链路，将 Prompt 与生成页面转换为 UI Task 和 Rubrics，并结合执行轨迹与前端 Skills 评估功能和视觉质量；2K+ 样本 Benchmark 人机评一致率达到 90%+。",
      ],
    },
  },
  {
    period: "2025.07 — 2025.10",
    role: { en: "LLM Systems Research Intern", zh: "大模型系统科研实习生" },
    organization: { en: "REALISE Lab · Concordia University", zh: "康考迪亚大学 · REALISE 实验室" },
    location: { en: "Montreal, Canada", zh: "加拿大，蒙特利尔" },
    achievements: {
      en: [
        "Built a retrieval system with 5,000+ instruction–code pairs and API documents to address long-tail knowledge gaps in low-resource library code generation.",
        "Designed a Retriever–Generator multi-agent workflow for automated prompt orchestration, reducing code-generation errors by up to 25% across libraries including Plotly.",
      ],
      zh: [
        "构建包含 5,000+ 指令—代码对及 API 文档的检索系统，缓解低资源库代码生成中的长尾知识缺失。",
        "设计 Retriever–Generator 多智能体自动编排流，在 Plotly 等低资源可视化库上使代码生成错误率最多降低 25%。",
      ],
    },
  },
  {
    period: "2024.06 — 2025.07",
    role: { en: "LLM Application Engineer · Research Assistant", zh: "大模型应用工程 · 科研助理" },
    organization: { en: "HCI & IIP Lab · ISCAS", zh: "中国科学院软件研究所 · 人机交互与智能信息处理实验室" },
    location: { en: "Beijing, China", zh: "中国，北京" },
    achievements: {
      en: [
        "Led the interaction module for an LLM-enhanced low-code agent platform, implementing multi-turn conversation and memory with LangChain and integrating it with the wider system.",
        "Built vertical instruction-tuning data and applied LoRA to Llama 3–8B, improving instruction-following accuracy by 10%. Implemented a Neo4j knowledge graph and error-attribution pipeline spanning 100+ concepts.",
      ],
      zh: [
        "主导 LLM 增强型低代码 Agent 平台的交互模块，基于 LangChain 实现多轮对话与记忆，并完成跨模块联调。",
        "构建垂直领域指令微调数据并使用 LoRA 微调 Llama 3–8B，使指令跟随准确率提升 10%；实现覆盖 100+ 知识点的 Neo4j 知识图谱与错误归因 Pipeline。",
      ],
    },
  },
];

const principles = [
  {
    number: "01",
    title: { en: "Evaluation first", zh: "评测先行" },
    description: {
      en: "Define executable checks, benchmark design, and failure modes before optimizing model behavior.",
      zh: "在优化模型行为之前，先定义可执行验证、Benchmark 设计与失败模式。",
    },
  },
  {
    number: "02",
    title: { en: "Systems over demos", zh: "系统而非 Demo" },
    description: {
      en: "Connect data production, model calls, orchestration, observability, and interfaces into repeatable pipelines.",
      zh: "将数据生产、模型调用、任务编排、可观测性与交互界面连接成可重复运行的 Pipeline。",
    },
  },
  {
    number: "03",
    title: { en: "Measure the bottleneck", zh: "量化系统瓶颈" },
    description: {
      en: "Use profiling, controlled experiments, and quality metrics to decide what to improve next.",
      zh: "通过性能分析、受控实验与质量指标决定下一步优化方向。",
    },
  },
];

const skillCategories = [
  {
    name: { en: "Languages", zh: "编程语言" },
    skills: ["Python", "C/C++", "JavaScript / TypeScript", "Java", "SQL"],
  },
  {
    name: { en: "AI Systems", zh: "AI 系统" },
    skills: ["PyTorch", "LangChain", "Transformers", "RAG", "LLM Agents", "LoRA", "Evaluation"],
  },
  {
    name: { en: "Production", zh: "工程化" },
    skills: ["React", "FastAPI", "Node.js", "MySQL", "Docker", "Nginx", "CI/CD", "Git"],
  },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function ExperiencePage() {
  const { language, t } = useLanguage();

  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-10">
        <section className="pb-16 pt-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            className="u-label text-clay"
          >
            {language === "zh" ? "构建、评测、部署" : "BUILD · EVALUATE · SHIP"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.14 }}
            className="mt-3 max-w-[850px] font-serif text-[52px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[68px]"
          >
            {language === "zh" ? "工程经历与方法" : "Engineering Experience"}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="mt-9 grid max-w-[82ch] gap-5"
          >
            <p className="text-[18px] leading-[1.8] text-ink-soft">{t("aboutBio1")}</p>
            <p className="text-[18px] leading-[1.8] text-ink-soft">{t("aboutBio2")}</p>
            <a
              href="https://l1anch1.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-mono text-[12px] uppercase tracking-[0.07em] text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
            >
              {language === "zh" ? "前往学术主页：论文、学术 CV 与研究方向" : "Academic profile: publications, CV & research"} ↗
            </a>
          </motion.div>
        </section>

        <SectionHeader title={t("experienceLog")} label="2024 — 2026" />
        <section className="pb-16">
          {experiences.map((item, index) => (
            <motion.article
              key={item.organization.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease, delay: index * 0.05 }}
              className="grid gap-5 border-b border-rule py-9 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div className="font-mono text-[12px] uppercase tracking-[0.05em] text-faint">
                <div className="text-clay">{item.period}</div>
                <div className="mt-2">{item.location[language]}</div>
              </div>
              <div>
                <h2 className="font-serif text-[26px] font-semibold leading-snug text-ink">{item.organization[language]}</h2>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.05em] text-green">{item.role[language]}</p>
                <ul className="mt-5 grid gap-3">
                  {item.achievements[language].map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span aria-hidden className="font-mono text-clay">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </section>

        <SectionHeader title={language === "zh" ? "工程方法" : "How I Build"} label="PRINCIPLES" />
        <section className="grid gap-0 pb-16 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              className="border-b border-rule py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-[12px] text-clay">{principle.number}</span>
              <h2 className="mt-3 font-serif text-[24px] font-semibold text-ink">{principle.title[language]}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{principle.description[language]}</p>
            </motion.article>
          ))}
        </section>

        <SectionHeader title={t("techArsenal")} label="STACK" />
        <section className="grid gap-10 pb-4 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name.en}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease, delay: index * 0.06 }}
            >
              <h2 className="mb-4 font-serif text-[20px] font-semibold text-ink">{category.name[language]}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="border border-rule px-2.5 py-1 font-mono text-[12px] text-ink-soft">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <SiteFooter className="mt-16" />
    </>
  );
}

function SectionHeader({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex items-center gap-4 border-t-[3px] border-ink pt-3.5">
      <h2 className="font-serif text-[28px] font-semibold text-ink">{title}</h2>
      <span className="flex-1" />
      <span className="font-mono text-[12px] tracking-[0.08em] text-clay">{label}</span>
    </div>
  );
}
