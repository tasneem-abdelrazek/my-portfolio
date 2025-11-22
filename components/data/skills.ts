export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface SkillsData {
  expert: Skill[];
  familiar: Skill[];
}

export const skillsData: SkillsData = {
  expert: [
    { name: "HTML5", percentage: 95, icon: "html5" },
    { name: "CSS3", percentage: 95, icon: "css3" },
    { name: "JavaScript", percentage: 90, icon: "javascript" },
    { name: "TypeScript", percentage: 80, icon: "typescript" },
    { name: "React.js", percentage: 95, icon: "react" },
    { name: "Next.js", percentage: 85, icon: "nextjs" },
    { name: "Tailwind CSS", percentage: 95, icon: "tailwindcss" },
    { name: "Bootstrap", percentage: 95, icon: "bootstrap" },
  ],
  familiar: [
    { name: "React Native", percentage: 70, icon: "react" },
    { name: "Node.js", percentage: 65, icon: "nodejs" },
    { name: "Express", percentage: 60, icon: "express" },
    { name: "Git & GitHub", percentage: 95, icon: "git" },
    { name: "Figma", percentage: 75, icon: "figma" },
    { name: "Firebase", percentage: 95, icon: "firebase" },
    { name: "Jira", percentage: 80, icon: "jira" },
    { name: "AI Tools", percentage: 85, icon: "ai" },
  ]
};

// Icon mapping for skills
export const skillIconMap: Record<string, any> = {
  html5: "FaHtml5",
  css3: "FaCss3Alt",
  javascript: "FaJsSquare",
  react: "FaReact",
  nextjs: "SiNextdotjs",
  typescript: "SiTypescript",
  tailwindcss: "SiTailwindcss",
  bootstrap: "FaBootstrap",
  nodejs: "FaNode",
  express: "SiExpress",
  git: "FaGitAlt",
  figma: "FaFigma",
  firebase: "SiFirebase",
  jira: "SiJira",
  ai: "SiOpenai",
  mongodb: "SiMongodb",
  redux: "SiRedux",
};