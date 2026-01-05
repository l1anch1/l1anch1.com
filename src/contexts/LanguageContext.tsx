"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    backToAcademic: "Back to Academic Home",
    home: "Home",
    work: "Projects",
    about: "About",
    contact: "Contact",
    
    // Hero
    portfolio: "Portfolio 2026",
    heroTitle1: "Designing the",
    heroTitle2: "Future Interface",
    heroSubtitle: "Li Anchi.",
    heroRole: "HCI Researcher & AI Engineer.",
    
    // Featured Works (Homepage)
    featuredWorks: "Selected Highlights",
    featuredProject: "Featured",
    squintaxDesc: "An intelligent code analysis tool that helps developers understand complex codebases through AI-powered visualization and natural language explanations.",
    research: "Research",
    engineering: "Engineering",
    tutorCraftEaseDesc: "An AI-powered tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
    raGeniusDesc: "Advanced Retrieval-Augmented Generation system for enterprise knowledge management with real-time context understanding.",
    exploreAllProjects: "Explore All Projects →",
    viewArchive: "View Complete Archive",
    
    // Skills
    researchInterests: "Research Interests",
    humanAI: "Human-AI Interaction",
    creativeCoding: "Creative Coding",
    llmApps: "LLM Applications",
    generativeUI: "Generative UI",
    
    // Contact Home
    letsConnect: "Let's Connect",
    connectDesc: "Interested in collaboration or just want to chat about HCI and AI?",
    getInTouch: "Get in Touch",

    // Projects Page
    projectsTitle: "Code Repository",
    projectsSubtitle: "A complete archive of academic research, AI experiments, hackathon wins, and open-source contributions.",
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
    aboutSubtitle: "CS Senior • HCI Researcher • Full-Stack Developer",
    aboutBio1: "I'm a Computer Science senior with a passion for bridging the gap between academic research and real-world software engineering. My journey began with a fascination for how humans interact with technology, leading me to pursue research in Human-Computer Interaction while simultaneously building production-ready applications.",
    aboutBio2: "Currently, I serve as a Research Assistant exploring the intersection of Large Language Models and educational technology. Beyond research, I architect full-stack systems that solve real problems—from AI-powered code analysis tools to scalable knowledge management platforms. I believe the best innovations come from deeply understanding both the theory and the craft.",
    experienceLog: "Experience.log",
    techArsenal: "Tech Arsenal",
    frontend: "Frontend",
    backend: "Backend / Systems",
    aiml: "AI/ML & Data",
    present: "Present",

    // Contact Page
    contactTitle: "Establish Connection",
    contactSubtitle: "Open channel for collaboration, opportunities, or technical discussions.",
    directChannels: "Direct Channels",
    orSendMessage: "Or transmit a message",
    yourName: "your_name",
    yourEmail: "your_email",
    yourMessage: "message_content",
    executeTransmit: "> Execute Transmit",
    channelSecure: "// All channels secured",
    emailCopied: "Email copied to clipboard",
  },
  zh: {
    // Navbar
    backToAcademic: "返回学术主页",
    home: "首页",
    work: "项目",
    about: "关于",
    contact: "联系",
    
    // Hero
    portfolio: "作品集 2026",
    heroTitle1: "设计",
    heroTitle2: "未来交互",
    heroSubtitle: "李桉弛",
    heroRole: "人机交互研究员 & AI工程师",
    
    // Featured Works (Homepage)
    featuredWorks: "精选作品",
    featuredProject: "精选",
    squintaxDesc: "一个智能代码分析工具，通过 AI 驱动的可视化和自然语言解释，帮助开发者理解复杂的代码库。",
    research: "研究",
    engineering: "工程",
    tutorCraftEaseDesc: "一个 AI 驱动的教学系统，可以适应个人学习风格，大规模提供个性化的教育体验。",
    raGeniusDesc: "先进的检索增强生成系统，用于企业知识管理，具有实时上下文理解能力。",
    exploreAllProjects: "查看全部项目 →",
    viewArchive: "浏览完整档案",
    
    // Skills
    researchInterests: "研究方向",
    humanAI: "人机交互",
    creativeCoding: "创意编程",
    llmApps: "大模型应用",
    generativeUI: "生成式界面",
    
    // Contact Home
    letsConnect: "联系我",
    connectDesc: "对合作感兴趣，或者想聊聊人机交互和 AI？",
    getInTouch: "取得联系",

    // Projects Page
    projectsTitle: "代码仓库",
    projectsSubtitle: "学术研究、AI 实验、黑客松获奖作品与开源贡献的完整档案",
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
    aboutSubtitle: "计算机大四 • 人机交互研究员 • 全栈开发者",
    aboutBio1: "我是一名计算机科学大四学生，热衷于连接学术研究与实际软件工程之间的桥梁。我的旅程始于对人机交互的着迷，这引导我在追求人机交互研究的同时，构建生产级应用程序。",
    aboutBio2: "目前，我作为研究助理探索大语言模型与教育技术的交叉领域。在研究之外，我构建解决实际问题的全栈系统——从 AI 驱动的代码分析工具到可扩展的知识管理平台。我相信最好的创新来自对理论和实践的深刻理解。",
    experienceLog: "经历日志",
    techArsenal: "技术栈",
    frontend: "前端",
    backend: "后端 / 系统",
    aiml: "AI/ML & 数据",
    present: "至今",

    // Contact Page
    contactTitle: "建立连接",
    contactSubtitle: "开放合作、机会或技术讨论的通道",
    directChannels: "直接通道",
    orSendMessage: "或发送消息",
    yourName: "你的姓名",
    yourEmail: "你的邮箱",
    yourMessage: "消息内容",
    executeTransmit: "> 执行发送",
    channelSecure: "// 所有通道已加密",
    emailCopied: "邮箱已复制到剪贴板",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

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
