export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/tasneem-abdelrazek",
  linkedin: "https://www.linkedin.com/in/tasneem-abdelrazek",
  facebook: "https://www.facebook.com/share/16UCBD2riV/",
  instagram: "https://www.instagram.com/tasneem.abdelrazek?igsh=ZzBvYjB1N3FtNWVx",
  tiktok: "https://www.tiktok.com/@tasneem_abdelrazek?_r=1&_t=ZS-91E8r4r5Vm3",
  whatsapp: "https://wa.me/201030354268",
  email: "mailto:tasneem.ar.work@gmail.com",
};

export const contactInfo = {
  phone: "+201030354268",
  email: "tasneem.ar.work@gmail.com",
  whatsappNumber: "201030354268",
};