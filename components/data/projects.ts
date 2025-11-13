import { IconType } from "react-icons";
import { 
  FaShoppingBag, 
  FaUserAstronaut, 
  FaFilm, 
  FaUserTie, 
  FaHospitalAlt, 
  FaTasks, 
  FaChartBar, 
  FaGraduationCap, 
  FaMagic, 
  FaCoffee 
} from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  icon: IconType;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Creative Portfolio",
    description: "Personal portfolio with animations and 3D effects.",
    image: "/images/portfolio-screen.png",
    tags: ["Next.js", "Animations", "3D"],
    github: "https://github.com/tasneem-abdelrazek/my-portfolio",
    demo: "https://my-portfolio-nu-snowy-64.vercel.app/",
    icon: FaUserAstronaut,
  },
  {
    id: 2,
    title: "Forever E-Commerce Platform",
    description: "Modern online shopping website with smooth UX.",
    image: "/images/forever-screen.png",
    tags: ["React.js", "Tailwind"],
    github: "https://github.com/tasneem-abdelrazek/forever-e-commerce",
    demo: "https://forever-e-commerce-six.vercel.app/",
    icon: FaShoppingBag,
  },
  {
    id: 3,
    title: "Movie Website",
    description: "Movie app with API, search, and dark mode.",
    image: "/images/movie-screen.png",
    tags: ["React.js", "Redux", "3D"],
    github: "https://github.com/tasneem-abdelrazek/movie-app",
    demo: "https://movie-app-lemon-xi-44.vercel.app/",
    icon: FaFilm,
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Classic portfolio built with React class components.",
    image: "/images/portfolio-class-screen.png",
    tags: ["React.js", "Class Component", "Bootstrap"],
    github: "https://github.com/tasneem-abdelrazek/portfolio",
    demo: "https://portfolio-six-delta-82.vercel.app/",
    icon: FaUserTie,
  },
  {
    id: 5,
    title: "Hosto",
    description: "Landing page with clean design and quality achieved.",
    image: "/images/hosto-screen.png",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/tasneem-abdelrazek/hosto",
    demo: "https://tasneem-abdelrazek.github.io/hosto/",
    icon: FaHospitalAlt,
  },
  {
    id: 6,
    title: "ToTasky",
    description: "Landing page for a task management tool.",
    image: "/images/totasky-screen.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/tasneem-abdelrazek/totasky-landing-page",
    demo: "https://tasneem-abdelrazek.github.io/totasky-landing-page/",
    icon: FaTasks,
  },
  {
    id: 7,
    title: "Dashboard Template",
    description: "Admin dashboard with charts and stats.",
    image: "/images/dashboard-screen.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
    github: "https://github.com/tasneem-abdelrazek/dashboard-template",
    demo: "https://tasneem-abdelrazek.github.io/dashboard-template/",
    icon: FaChartBar,
  },
  {
    id: 8,
    title: "Monac",
    description: "Simple e-learning website.",
    image: "/images/monac-screen.png",
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/tasneem-abdelrazek/monac",
    demo: "https://tasneem-abdelrazek.github.io/monac/",
    icon: FaGraduationCap,
  },
  {
    id: 9,
    title: "WizardZ",
    description: "Creative agency landing page with animation.",
    image: "/images/wizard-screen.png",
    tags: ["HTML5", "CSS3", "Animations"],
    github: "https://github.com/tasneem-abdelrazek/wizardz",
    demo: "https://tasneem-abdelrazek.github.io/wizardz/",
    icon: FaMagic,
  },
  {
    id: 10,
    title: "Coffee",
    description: "Coffee shop landing page with grid layout.",
    image: "/images/coffee-screen.png",
    tags: ["HTML5", "CSS3", "Grid CSS"],
    github: "https://github.com/tasneem-abdelrazek/coffee-shop",
    demo: "https://tasneem-abdelrazek.github.io/coffee-shop/",
    icon: FaCoffee,
  },
];