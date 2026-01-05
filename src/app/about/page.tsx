"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Code2,
  Braces,
  Database,
  Brain,
  Cpu,
  Globe,
  Server,
  Layers,
  GitBranch,
  Workflow,
} from "lucide-react";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Experience data
interface Experience {
  period: string;
  role: {
    en: string;
    zh: string;
  };
  organization: {
    en: string;
    zh: string;
  };
  type: "research" | "work" | "education";
  achievements: {
    en: string[];
    zh: string[];
  };
}

const experiences: Experience[] = [
  {
    period: "2024.06 - Present",
    role: {
      en: "Research Assistant",
      zh: "研究助理",
    },
    organization: {
      en: "HCI Lab, University",
      zh: "人机交互实验室",
    },
    type: "research",
    achievements: {
      en: [
        "Leading research on LLM-powered educational interfaces",
        "Published paper on adaptive tutoring systems at CHI",
        "Developed RAG pipeline for knowledge retrieval",
      ],
      zh: [
        "主导大语言模型驱动的教育界面研究",
        "在 CHI 发表自适应教学系统论文",
        "开发知识检索的 RAG 管道",
      ],
    },
  },
  {
    period: "2023.09 - 2024.05",
    role: {
      en: "Full-Stack Developer Intern",
      zh: "全栈开发实习生",
    },
    organization: {
      en: "Tech Startup",
      zh: "科技初创公司",
    },
    type: "work",
    achievements: {
      en: [
        "Architected microservices handling 100K+ daily requests",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built real-time collaboration features with WebSocket",
      ],
      zh: [
        "架构处理日均 10 万+ 请求的微服务系统",
        "实施 CI/CD 管道，部署时间减少 60%",
        "使用 WebSocket 构建实时协作功能",
      ],
    },
  },
  {
    period: "2022.09 - Present",
    role: {
      en: "B.S. in Computer Science",
      zh: "计算机科学学士",
    },
    organization: {
      en: "University",
      zh: "大学",
    },
    type: "education",
    achievements: {
      en: [
        "GPA: 3.9/4.0, Dean's List",
        "Coursework: HCI, ML, Distributed Systems, Compilers",
        "Teaching Assistant for Data Structures & Algorithms",
      ],
      zh: [
        "GPA: 3.9/4.0，院长名单",
        "课程：人机交互、机器学习、分布式系统、编译原理",
        "数据结构与算法课程助教",
      ],
    },
  },
];

// Skills data
interface SkillCategory {
  name: {
    en: string;
    zh: string;
  };
  key: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: { en: "Frontend", zh: "前端" },
    key: "frontend",
    icon: <Globe className="w-5 h-5" />,
    color: "from-neon-cyan to-neon-teal",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    name: { en: "Backend / Systems", zh: "后端 / 系统" },
    key: "backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-neon-purple to-neon-violet",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    name: { en: "AI/ML & Data", zh: "AI/ML & 数据" },
    key: "aiml",
    icon: <Brain className="w-5 h-5" />,
    color: "from-neon-pink to-neon-rose",
    skills: ["PyTorch", "LangChain", "OpenAI API", "Pinecone", "HuggingFace", "pandas"],
  },
];

// Type icons mapping
const typeIcons = {
  research: GraduationCap,
  work: Briefcase,
  education: Code2,
};

const typeColors = {
  research: "text-neon-cyan",
  work: "text-neon-purple",
  education: "text-neon-pink",
};

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <>
      <GlassNavbar />

      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center">
        {/* Section 1: Bio */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl mb-20"
        >
          {/* Header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <Terminal className="w-4 h-4 text-neon-cyan" />
              <span className="text-white/80 text-sm font-mono">{t("aboutSubtitle")}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent font-mono">
                {t("aboutTitle")}
              </span>
            </h1>
          </div>

          {/* Bio Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 sm:p-8"
          >
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("aboutBio1")}
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              {t("aboutBio2")}
            </p>
          </motion.div>
        </motion.section>

        {/* Section 2: Experience Log */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl mb-20"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              {t("experienceLog")}
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[140px] sm:left-[180px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink opacity-30" />

            {/* Entries */}
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const TypeIcon = typeIcons[exp.type];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex gap-4 sm:gap-6"
                  >
                    {/* Date - Monospace */}
                    <div className="w-[120px] sm:w-[160px] flex-shrink-0 text-right">
                      <span className="text-white/50 text-xs sm:text-sm font-mono">
                        {exp.period.includes("Present") 
                          ? exp.period.replace("Present", t("present"))
                          : exp.period}
                      </span>
                    </div>

                    {/* Dot on timeline */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${
                        exp.type === "research" ? "from-neon-cyan to-neon-teal" :
                        exp.type === "work" ? "from-neon-purple to-neon-violet" :
                        "from-neon-pink to-neon-rose"
                      } ring-4 ring-dark-900`} />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-white/10 ${typeColors[exp.type]}`}>
                          <TypeIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">
                            {exp.role[language]}
                          </h3>
                          <p className="text-white/50 text-sm">
                            {exp.organization[language]}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {exp.achievements[language].map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                            <span className="text-neon-cyan font-mono mt-1">→</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Tech Arsenal */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-4xl"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-teal flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              {t("techArsenal")}
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5 hover:bg-white/10 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-white font-semibold">
                    {category.name[language]}
                  </h3>
                </div>

                {/* Skills as Terminal Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-2.5 py-1
                        bg-white/5
                        border border-white/10
                        rounded-md
                        text-xs font-mono text-white/70
                        hover:bg-white/10 hover:text-neon-cyan hover:border-neon-cyan/30
                        transition-all cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Floating Elements */}
        <FloatingElements />
      </main>
    </>
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

