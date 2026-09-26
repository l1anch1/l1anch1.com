"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    backToAcademic: "Go to Academic Home",
    home: "Home",
    work: "Projects",
    about: "About",
    contact: "Contact",
    
    // Hero
    heroTitle1: "I build and evaluate LLM agents, code intelligence systems, and production-ready AI applications.",
    heroSubtitle: "Anchi Li.",
    heroRole: "AI Engineer · Software Engineer",
    
    // Featured Works (Homepage)
    featuredWorks: "Selected Engineering Work",
    featuredProject: "Featured",
    squintaxDesc: "An intelligent code analysis tool that helps developers understand complex codebases through AI-powered visualization and natural language explanations.",
    uxRayDesc: "A web UI inspection tool that automatically identifies usability issues and provides actionable solutions using computer vision and LLM analysis.",
    research: "Research",
    engineering: "Engineering",
    tutorCraftEaseDesc: "An AI-powered tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
    raGeniusDesc: "Advanced Retrieval-Augmented Generation system for enterprise knowledge management with real-time context understanding.",
    repoHealthDesc: "A data-driven GitHub ecosystem analysis system using ML/DL to analyze repository health metrics and predict project lifespan.",
    vibePosterDesc: "An LLM-based multimodal poster generator with multi-agent workflows and a dynamic OOP layout engine for editable, design-rule-aware poster creation.",
    exploreAllProjects: "Explore All Projects →",
    viewArchive: "View All Projects",
    viewExperience: "View Experience",
    githubProfile: "GitHub Profile",
    
    // Skills
    researchInterests: "Research Interests",
    humanAI: "Human-Centered AI",
    llmApps: "LLM Applications",
    aiSE: "AI for Software Engineering",
    
    // Contact Home
    letsConnect: "Let's Connect",
    connectDesc: "I'm interested in opportunities across AI engineering, software engineering, and applied LLM systems.",
    getInTouch: "Get in Touch",

    // Projects Page
    projectsTitle: "Engineering & Research",
    projectsSubtitle: "Selected systems and studies across LLM applications, AI for software engineering, full-stack development, and machine learning.",
    viewSource: "Source",
    viewDemo: "Demo",
    allProjects: "Project Archive",
    searchProjects: "Search projects...",
    noResults: "No projects found",
    projectCount: "projects",
    
    // Filter categories
    filterAll: "All",
    filterAI: "AI/LLM",
    filterResearch: "Research",
    filterFullStack: "Full-Stack",
    filterExperiments: "Experiments",

    // About Page
    aboutTitle: "> whoami",
    aboutBio1: "I'm a Computer Science graduate from Beijing University of Technology. My work sits at the intersection of LLM systems and software engineering: coding-agent evaluation, repository-level understanding, retrieval pipelines, and production full-stack applications.",
    aboutBio2: "I worked with ByteDance Seed, the Institute of Software at the Chinese Academy of Sciences, and Concordia University's REALISE Lab. I have a CHI 2025 publication and received Fall 2026 master's offers from Carnegie Mellon University, UCLA, and other computer science programs.",
    experienceLog: "Experience",
    education: "Education",
    publications: "Publications",
    techArsenal: "Technical Skills",
    frontend: "Frontend",
    backend: "Backend / Systems",
    aiml: "AI/ML & Data",
    present: "Present",

    // Contact Page
    contactTitle: "Let's Talk",
    contactSubtitle: "For AI engineering, software engineering, research collaboration, or technical discussions.",
    directChannels: "Contact",
    orSendMessage: "Send a message",
    yourName: "your_name",
    yourEmail: "your_email",
    yourMessage: "message_content",
    executeTransmit: "Send Message",
    channelSecure: "Open to engineering opportunities",
    emailCopied: "Email copied to clipboard",
  },
  zh: {
    // Navbar
    backToAcademic: "前往学术主页",
    home: "首页",
    work: "项目",
    about: "关于",
    contact: "联系",
    
    // Hero
    heroTitle1: "构建并评测大模型智能体、代码智能系统与可落地的 AI 应用。",
    heroSubtitle: "李桉弛",
    heroRole: "AI 工程师 · 软件工程师",
    
    // Featured Works (Homepage)
    featuredWorks: "精选工程项目",
    featuredProject: "精选",
    squintaxDesc: "一个智能代码分析工具，通过 AI 驱动的可视化和自然语言解释，帮助开发者理解复杂的代码库。",
    uxRayDesc: "一个网页 UI 审查工具，通过计算机视觉和大模型分析自动识别可用性问题并提供可操作的解决方案。",
    research: "研究",
    engineering: "工程",
    tutorCraftEaseDesc: "一个 AI 驱动的教学系统，可以适应个人学习风格，大规模提供个性化的教育体验。",
    raGeniusDesc: "先进的检索增强生成系统，用于企业知识管理，具有实时上下文理解能力。",
    repoHealthDesc: "基于数据驱动的 GitHub 生态系统分析系统，通过机器学习和深度学习分析仓库健康度指标并预测项目寿命。",
    vibePosterDesc: "基于大模型的多模态海报生成器，采用多智能体工作流与动态 OOP 布局引擎，支持可编辑、设计规则感知的海报创作。",
    exploreAllProjects: "查看全部项目 →",
    viewArchive: "查看全部项目",
    viewExperience: "查看经历",
    githubProfile: "GitHub 主页",
    
    // Skills
    researchInterests: "研究方向",
    humanAI: "以人为本的人工智能",
    llmApps: "大模型应用",
    aiSE: "智能化软件工程",
    
    // Contact Home
    letsConnect: "联系我",
    connectDesc: "关注 AI 工程、软件工程与大模型系统相关的校招、实习及合作机会。",
    getInTouch: "取得联系",

    // Projects Page
    projectsTitle: "工程与研究",
    projectsSubtitle: "围绕大模型应用、智能化软件工程、全栈开发与机器学习的代表性系统和研究成果。",
    viewSource: "源码",
    viewDemo: "演示",
    allProjects: "项目档案",
    searchProjects: "搜索项目...",
    noResults: "未找到项目",
    projectCount: "个项目",
    
    // Filter categories
    filterAll: "全部",
    filterResearch: "研究",
    filterAI: "AI/LLM",
    filterFullStack: "全栈",
    filterExperiments: "实验",

    // About Page
    aboutTitle: "> whoami",
    aboutBio1: "我本科毕业于北京工业大学计算机科学与技术专业，关注大模型系统与软件工程的交叉方向，包括 Coding Agent 评测、仓库级代码理解、检索增强生成与生产级全栈应用。",
    aboutBio2: "我曾在字节跳动 Seed、中国科学院软件研究所与加拿大康考迪亚大学 REALISE 实验室从事工程和研究工作，合著 CHI 2025 论文，并已获得 CMU、UCLA 等校 2026 Fall 计算机相关硕士项目录取。",
    experienceLog: "实习与研究经历",
    education: "教育背景",
    publications: "论文发表",
    techArsenal: "个人技能",
    frontend: "前端",
    backend: "后端 / 系统",
    aiml: "AI/ML & 数据",
    present: "至今",

    // Contact Page
    contactTitle: "保持联系",
    contactSubtitle: "欢迎联系 AI 工程、软件工程、科研合作或其他技术话题。",
    directChannels: "联系方式",
    orSendMessage: "发送消息",
    yourName: "你的姓名",
    yourEmail: "你的邮箱",
    yourMessage: "消息内容",
    executeTransmit: "发送消息",
    channelSecure: "期待工程与研究机会",
    emailCopied: "邮箱已复制到剪贴板",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
