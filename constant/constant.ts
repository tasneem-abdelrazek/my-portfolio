export const NavLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

// Skills Data
export const skillsData = {
  expert: [
    { name: "HTML", percentage: 95, icon: "html5" },
    { name: "CSS", percentage: 95, icon: "css3" },
    { name: "JavaScript", percentage: 90, icon: "javascript" },
    { name: "React", percentage: 90, icon: "react" },
    { name: "Next.js", percentage: 85, icon: "nextjs" },
    { name: "TypeScript", percentage: 80, icon: "typescript" },
    { name: "Tailwind CSS", percentage: 95, icon: "tailwindcss" },
    { name: "Bootstrap", percentage: 95, icon: "bootstrap" },
  ],
  familiar: [
    { name: "React Native", percentage: 70, icon: "react" },
    { name: "Node.js", percentage: 65, icon: "nodejs" },
    { name: "Express", percentage: 60, icon: "express" },
    { name: "Git & GitHub", percentage: 90, icon: "git" },
    { name: "Figma", percentage: 75, icon: "figma" },
    { name: "Firebase", percentage: 90, icon: "firebase" },
    { name: "Jira", percentage: 70, icon: "jira" },
    { name: "AI", percentage: 80, icon: "ai" },
  ]
};

// Services Data
export const servicesData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern web portfolio.",
    image: "/images/portfolio-screen.png",
    features: ["React / Next.js", "Responsive Design", "Performance Optimization"],
    whatsappMessage: "Hello, I'm contacting for web portfolio service."
  },
  {
    id: 2,
    title: "Landing Page",
    description: "One web page for small businesses.",
    image: "/images/landing-page-service.png",
    features: ["React / HTML, CSS, JavaScript", "Bootstrap, Tailwind", "Responsive Design"],
    whatsappMessage: "Hello, I'm contacting for landing page service."
  }
];