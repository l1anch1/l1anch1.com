"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Code2,
  Brain,
  Globe,
  Server,
  Layers,
  GitBranch,
  Plane,
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
  type: "research" | "work" | "education" | "intern";
  achievements: {
    en: string[];
    zh: string[];
  };
}

const experiences: Experience[] = [
  {
    period: "2025.07 - 2025.10",
    role: {
      en: "Mitacs Globalink Research Intern",
      zh: "Mitacs Globalink 研究实习生",
    },
    organization: {
      en: "REALISE Lab, University of Concordia, Canada",
      zh: "REALISE 实验室，康考迪亚大学，加拿大",
    },
    type: "intern",
    achievements: {
      en: [
        "Conducting AI4SE research on LLM-powered low-resource code generation",
        "Collaborating with international research team",
        "Funded by Mitacs Globalink Research Internship program",
      ],
      zh: [
        "开展 LLM 辅助低资源代码生成的 AI4SE 研究",
        "与国际研究团队合作",
        "获 Mitacs Globalink 研究实习项目资助",
      ],
    },
  },
  {
    period: "2024.06 - Present",
    role: {
      en: "Research Assistant",
      zh: "研究助理",
    },
    organization: {
      en: "HCI & IIP Lab, ISCAS, China",
      zh: "人机交互与智能信息处理实验室，中国科学院软件研究所，中国",
    },
    type: "research",
    achievements: {
      en: [
        "fine-tuned the Llama LLM and developed an agent application",
        "leading research on LLM-based educational system, published papers at CHI'25 CHI'26",
        "Developed dynamic knowledge graphs to identify knowledge gaps",
      ],
      zh: [
        "参与Llama大模型微调与智能体应用开发",
        "主导大语言模型驱动的教育系统研究，发表 CHI'25 CHI'26 论文",
        "开发动态知识图谱以归因知识薄弱环节",
      ],
    },
  },
  {
    period: "2022.09 - Present",
    role: {
      en: "B.S. in Computer Science and Technology",
      zh: "计算机科学与技术学士",
    },
    organization: {
      en: "Beijing University of Technology",
      zh: "北京工业大学",
    },
    type: "education",
    achievements: {
      en: [
        "GPA: 3.8/4.0, Academic Excellence Scholarship",
        "Coursework: HCI, DL, Big Data, Compilers, Operating Systems, etc.",
      ],
      zh: [
        "GPA: 3.8/4.0，优秀学生奖学金",
        "课程：人机交互、深度学习、大数据、编译原理、操作系统等",
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
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    name: { en: "Backend / Systems", zh: "后端 / 系统" },
    key: "backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-neon-purple to-neon-violet",
    skills: ["Node.js", "Python", "C/C++", "FastAPI",  "Chroma DB", "Docker"],
  },
  {
    name: { en: "AI/ML & Data", zh: "AI/ML & 数据" },
    key: "aiml",
    icon: <Brain className="w-5 h-5" />,
    color: "from-neon-pink to-neon-rose",
    skills: ["PyTorch", "LangChain", "RAG", "HuggingFace", "Scikit-Learn", "pandas"],
  },
];

// Type icons mapping
const typeIcons = {
  research: GraduationCap,
  work: Briefcase,
  education: Code2,
  intern: Plane,
};

const typeColors = {
  research: "text-neon-cyan",
  work: "text-neon-purple",
  education: "text-neon-pink",
  intern: "text-neon-emerald",
};

const dotColors = {
  research: "from-neon-cyan to-neon-teal",
  work: "from-neon-purple to-neon-violet",
  education: "from-neon-pink to-neon-rose",
  intern: "from-neon-emerald to-neon-teal",
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
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${dotColors[exp.type]} ring-4 ring-dark-900`} />
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
      <div className="absolute top-[20%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 rotate-12" />
      <div className="absolute top-[30%] right-[8%] w-16 sm:w-20 h-16 sm:h-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 -rotate-6" />
      <div className="absolute bottom-[25%] left-[3%] w-20 sm:w-24 h-20 sm:h-24 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/10 rotate-45" />
    </div>
  );
}
