export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "E-Waste Management Platform",
    desc: "A user-friendly website with modules for Login, Reviews, Prediction Models, and Registration.",
    subdesc:
      "Deployed on AWS with Docker, Kubernetes, Jenkins, and Terraform ensuring 99.9% uptime. Integrated Prometheus & Grafana for monitoring, cutting downtime detection by 70%.",
    spotlight: "/assets/projects/ewaste.jpg", // replace with your screenshot
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Docker", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
    href: "https://github.com/venkatbs500/e-waste",
  },
  {
    title: "Travel Planner App",
    desc: "A full-stack travel planning app with an AI-powered recommendation engine.",
    subdesc:
      "Built with React, Node.js, and MongoDB. Integrated APIs for weather, transport, and location insights with <200ms response time.",

    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
    href: "https://github.com/venkatbs500/travel_planner",
  },
  {
    title: "UniHelp",
    desc: "A platform for teachers to manage assignments and detect plagiarism.",
    subdesc:
      "Used by 50+ students in pilot testing. Backend built with Node.js & MongoDB achieving 500+ requests/sec throughput.",
    spotlight: "/assets/projects/unihelp.jpg", // replace with screenshot
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    href: "https://github.com/venkatbs500/unihelp",
  },
];


export const calculateSizes = (isMobile) => {
  return {
    deskScale: isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4.5, 0],
    cubePosition: isMobile ? [4.5, -7.5, -2] : [5, -8.0, -2],
    reactLogoPosition: isMobile ? [5, 4, 0] : [5, 4, 0],
    ringPosition: isMobile ? [-10, 10, 0] : [-12, 10, 0],
    targetPosition: isMobile ? [-9, -10, -10] : [-12, -7, -10],
  };
};
export const workExperiences = [
  {
    id: 1,
    name: "LRDE (DRDO - Electronics & Radar Development Establishment)",
    pos: "Radar Systems Trainee",
    duration: "Jul 2024 – Dec 2024",
    title: [
      "Implemented algorithms for orbit determination and classification from radar measurements, improving target identification accuracy by ~15%.",
      "Coordinated conversion of the spherical coordinate system to ECEF (Earth-Centered Earth-Fixed), reducing coordinate transformation errors by ~10%.",
    ],
    icon: "/assets/drdo.png", // DRDO logo
    animation: "radar",
  },
  {
    id: 2,
    name: "XenVeda Technologies",
    pos: "Backend Development Intern",
    duration: "Jan 2025 – Apr 2025",
    title: [
      "Designed and implemented scalable REST APIs for internal and external use, reducing response times by 30%.",
      "Managed backend logic, server configurations, and database integrations with MongoDB, supporting 5,000+ transactions/day.",
      "Optimized server performance by debugging hybrid workflows, improving system uptime from 92% → 98%.",
    ],
    icon: "/assets/xv.png", // XenVeda LinkedIn logo
    animation: "coding",
  },
];
