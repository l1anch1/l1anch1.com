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
    work: "Work",
    about: "About",
    contact: "Contact",
    
    // Hero
    portfolio: "Portfolio 2024",
    heroTitle1: "Designing the",
    heroTitle2: "Future Interface",
    heroSubtitle: "Li Anchi.",
    heroRole: "HCI Researcher & AI Engineer.",
    
    // Projects
    featuredProject: "Featured Project",
    squintaxDesc: "An intelligent code analysis tool that helps developers understand complex codebases through AI-powered visualization and natural language explanations.",
    research: "Research",
    engineering: "Engineering",
    tutorCraftEaseDesc: "An AI-powered tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
    raGeniusDesc: "Advanced Retrieval-Augmented Generation system for enterprise knowledge management with real-time context understanding.",
    
    // Skills
    researchInterests: "Research Interests",
    humanAI: "Human-AI Interaction",
    creativeCoding: "Creative Coding",
    llmApps: "LLM Applications",
    generativeUI: "Generative UI",
    
    // Contact
    letsConnect: "Let's Connect",
    connectDesc: "Interested in collaboration or just want to chat about HCI and AI?",
    getInTouch: "Get in Touch",
  },
  zh: {
    // Navbar
    backToAcademic: "返回学术主页",
    home: "首页",
    work: "作品",
    about: "关于",
    contact: "联系",
    
    // Hero
    portfolio: "作品集 2024",
    heroTitle1: "设计",
    heroTitle2: "未来交互",
    heroSubtitle: "李桉弛",
    heroRole: "人机交互研究员 & AI工程师",
    
    // Projects
    featuredProject: "精选项目",
    squintaxDesc: "一个智能代码分析工具，通过 AI 驱动的可视化和自然语言解释，帮助开发者理解复杂的代码库。",
    research: "研究",
    engineering: "工程",
    tutorCraftEaseDesc: "一个 AI 驱动的教学系统，可以适应个人学习风格，大规模提供个性化的教育体验。",
    raGeniusDesc: "先进的检索增强生成系统，用于企业知识管理，具有实时上下文理解能力。",
    
    // Skills
    researchInterests: "研究方向",
    humanAI: "人机交互",
    creativeCoding: "创意编程",
    llmApps: "大模型应用",
    generativeUI: "生成式界面",
    
    // Contact
    letsConnect: "联系我",
    connectDesc: "对合作感兴趣，或者想聊聊人机交互和 AI？",
    getInTouch: "取得联系",
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

