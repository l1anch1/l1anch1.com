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
        "Built training-task generation and evaluation pipelines for model capabilities including feature implementation, test generation, and repository-level code understanding, with automated environments, multilingual support, and distributed execution.",
        "Designed a four-stage rule-based difficulty funnel for millions of test-generation candidates. The filtered score distribution matched Best-of-N while substantially reducing its inference dependency.",
        "Developed a repository-understanding pipeline that parses documentation and code structure, locates key modules, and produces verifiable facts and QA pairs for tens of thousands of mid-training and RL samples.",
        "Led a frontend Agent-as-a-Judge pipeline that converts prompts and generated web pages into UI tasks and rubrics. A 2K+ black-box benchmark achieved 90%+ human–AI scoring agreement.",
      ],
      zh: [
        "参与 Seed 模型 Coding 能力后训练与评测，建设 Feature Implementation、Test Generation 与仓库级代码理解任务生成和执行链路，完成环境自动构建、多语言支持及分布式并行扩展。",
        "面向百万级 Test Generation 候选任务设计四阶段规则难度漏斗，筛选后模型得分分布与 Best-of-N 基本一致，大幅降低高成本推理依赖。",
        "开发仓库级代码理解 Pipeline，利用 LLM 解析仓库文档与代码结构、定位关键模块，生成可验证事实单元与 QA，支撑万级 Mid-training / RL 样本构建。",
        "主导前端 Agent-as-a-Judge 评测链路，将 Prompt 与生成页面转换为 UI Task 和 Rubrics，并结合执行轨迹与前端 Skills 进行功能和视觉评测；2K+ 样本 Benchmark 人机评一致率达到 90%+。",
      ],
    },
  },
  {
    period: "2025.07 — 2025.10",
    role: { en: "Mitacs Globalink Research Intern", zh: "Mitacs 国际科研实习生" },
    organization: { en: "REALISE Lab · Concordia University", zh: "康考迪亚大学 · REALISE 实验室" },
    location: { en: "Montreal, Canada", zh: "加拿大，蒙特利尔" },
    achievements: {
      en: [
        "Led a prompt-engineering and RAG approach for low-resource library code generation, building a vector store with 5,000+ instruction–code pairs and API documents to address long-tail knowledge gaps.",
        "Designed a Retriever–Generator multi-agent workflow for automated prompt orchestration. Across libraries including Plotly, the approach reduced code-generation errors by up to 25%; the work is being prepared for ASE submission.",
      ],
      zh: [
        "面向低资源库代码生成，主导 Prompt Engineering 与 RAG 优化方案，构建包含 5,000+ 指令—代码对及 API 文档的向量库，缓解模型长尾知识缺失。",
        "设计 Retriever–Generator 多智能体自动编排流，在 Plotly 等低资源可视化库上使代码生成错误率最多降低 25%；相关成果拟投 ASE。",
      ],
    },
  },
  {
    period: "2024.06 — 2025.07",
    role: { en: "Research Assistant", zh: "科研助理" },
    organization: { en: "HCI & IIP Lab · ISCAS", zh: "中国科学院软件研究所 · 人机交互与智能信息处理实验室" },
    location: { en: "Beijing, China", zh: "中国，北京" },
    achievements: {
      en: [
        "Led the interaction module for an LLM-enhanced low-code agent platform, implementing multi-turn conversation and memory with LangChain. Built vertical instruction-tuning data and applied LoRA to Llama 3–8B, improving accuracy by 10%.",
        "Contributed experiment design, data mining, and writing to LLM-assisted question generation research. Built a Neo4j knowledge graph and error-attribution algorithm spanning 100+ concepts; co-authored CHI 2025 and an ongoing CHI 2027 submission.",
      ],
      zh: [
        "主导“LLM 增强型低代码 Agent 构建平台”交互模块，基于 LangChain 实现多轮对话与记忆；构建垂直领域指令微调数据并使用 LLaMA-Factory 对 Llama 3–8B 进行 LoRA 微调，准确率提升 10%。",
        "参与大模型辅助题目生成研究，负责实验设计、数据挖掘和论文撰写；基于 Neo4j 构建覆盖 100+ 知识点的知识图谱及错误归因算法，合著 CHI 2025 论文及 CHI 2027 在投稿件。",
      ],
    },
  },
];

const education = [
  {
    period: "Fall 2026",
    title: { en: "Graduate Admissions", zh: "硕士项目录取" },
    institution: {
      en: "Computer science–related master's offers from Carnegie Mellon University, UCLA, and other programs",
      zh: "已获得卡耐基梅隆大学、加利福尼亚大学洛杉矶分校等校计算机相关硕士项目录取",
    },
    details: { en: "Offers received for Fall 2026", zh: "2026 Fall 硕士项目录取" },
  },
  {
    period: "2022.09 — 2026.07",
    title: { en: "B.S. in Computer Science and Technology", zh: "计算机科学与技术学士" },
    institution: { en: "Beijing University of Technology", zh: "北京工业大学" },
    details: {
      en: "GPA 90.01/100 (3.8/4.0) · Mitacs Globalink Research Award · Academic Excellence Scholarships (2023, 2025) · Innovation & Entrepreneurship Scholarship",
      zh: "GPA 90.01/100（3.8/4.0）· Mitacs 国际科研奖学金 · 校级学习优秀奖学金（2023、2025）· 校级创新创业奖学金",
    },
  },
];

const publications = [
  {
    status: "ACM CHI 2025",
    title: "TutorCraftEase: Enhancing Pedagogical Question Creation with Large Language Models",
    authors: "Kang, W., Zhang, L., Peng, X., Zhang, H., Li, A., et al.",
    venue: {
      en: "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, pp. 1–22.",
      zh: "发表于 2025 CHI Conference on Human Factors in Computing Systems，CCF A 类会议。",
    },
    href: "https://doi.org/10.1145/3706598.3713731",
  },
  {
    status: "UNDER REVIEW · CHI 2027",
    title: "AdaptQuest: Adaptive Pedagogical Question Crafting Tool Driven by Knowledge Graph and Large Language Model",
    authors: "Kang, W., Yang, M., Li, A., Zhang, H., et al.",
    venue: {
      en: "Manuscript under review for ACM CHI 2027.",
      zh: "ACM CHI 2027 在投稿件。",
    },
  },
];

const skillCategories = [
  {
    name: { en: "Languages", zh: "编程语言" },
    skills: ["Python", "C/C++", "JavaScript / TypeScript", "Java", "SQL"],
  },
  {
    name: { en: "AI / ML", zh: "AI / 机器学习" },
    skills: ["PyTorch", "LangChain", "Transformers", "RAG", "LLM Agents", "LoRA"],
  },
  {
    name: { en: "Engineering", zh: "软件工程" },
    skills: ["React", "FastAPI", "Node.js", "MySQL", "Docker", "Nginx", "CI/CD", "Git"],
  },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function AboutPage() {
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
            {language === "zh" ? "背景与经历" : "Background & Experience"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.14 }}
            className="mt-3 font-serif text-[52px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[68px]"
          >
            {language === "zh" ? "关于李桉弛" : "About Anchi"}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="mt-9 grid max-w-[82ch] gap-5"
          >
            <p className="text-[18px] leading-[1.8] text-ink-soft">{t("aboutBio1")}</p>
            <p className="text-[18px] leading-[1.8] text-ink-soft">{t("aboutBio2")}</p>
          </motion.div>
        </section>

        <SectionHeader title={t("education")} label="EDUCATION" />
        <section className="pb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              className="grid gap-3 border-b border-rule py-8 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div className="font-mono text-[12px] uppercase tracking-[0.06em] text-clay">{item.period}</div>
              <div>
                <h3 className="font-serif text-[24px] font-semibold text-ink">{item.title[language]}</h3>
                <p className="mt-1 text-[17px] text-ink-soft">{item.institution[language]}</p>
                <p className="mt-3 max-w-[76ch] font-mono text-[12px] leading-relaxed text-faint">{item.details[language]}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <SectionHeader title={t("experienceLog")} label="EXPERIENCE" />
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
                <h3 className="font-serif text-[26px] font-semibold leading-snug text-ink">{item.organization[language]}</h3>
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

        <SectionHeader title={t("publications")} label="RESEARCH" />
        <section className="pb-16">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              className="grid gap-4 border-b border-rule py-8 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.07em] text-clay">{publication.status}</div>
              <div>
                <h3 className="font-serif text-[23px] font-semibold leading-snug text-ink">{publication.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft">{publication.authors}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-faint">{publication.venue[language]}</p>
                {publication.href && (
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.06em] text-ink underline decoration-rule underline-offset-4 hover:text-green hover:decoration-green"
                  >
                    DOI ↗
                  </a>
                )}
              </div>
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
              <h3 className="mb-4 font-serif text-[20px] font-semibold text-ink">{category.name[language]}</h3>
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

        <section className="mt-16 grid gap-4 border-t border-rule pt-8 font-mono text-[12px] text-faint sm:grid-cols-2">
          <p>{language === "zh" ? "英语：托福 107 / 120；大学英语四、六级" : "English: TOEFL 107 / 120; CET-4 & CET-6"}</p>
          <p className="sm:text-right">LaTeX · Git · CI/CD · Linux</p>
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
