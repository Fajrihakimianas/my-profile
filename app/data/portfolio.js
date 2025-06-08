export const portfolioData = {
  personal: {
    name: "Fajri Hakimi Anas",
    title: "Full Stack Developer",
    bio: "Developer web dengan lebih dari 3 tahun pengalaman dalam menciptakan aplikasi web yang responsif dan berorientasi pada pengguna.",
    location: "Yogyakarta, Indonesia",
    email: "fajri.hakimianas@gmail.com",
    phone: "+628211724022",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://www.linkedin.com/in/fajrihakimianas/",
      twitter: "https://twitter.com/alexjohnson",
      dribbble: "https://dribbble.com/alexjohnson",
    },
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React/Next.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-700" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git/GitHub", level: 95, color: "bg-gray-700" },
        { name: "Docker", level: 75, color: "bg-blue-400" },
        { name: "AWS", level: 70, color: "bg-orange-500" },
        { name: "Figma", level: 90, color: "bg-purple-500" },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability and performance.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      featured: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team chat, and advanced analytics. Designed for remote teams.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Firebase", "Material-UI", "Chart.js"],
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/alexjohnson/taskmaster",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["Vue.js", "OpenWeather API", "Mapbox", "PWA"],
      liveUrl: "https://weather-beautiful.com",
      githubUrl: "https://github.com/alexjohnson/weather-app",
      featured: false,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description:
        "Content management system for creative professionals to showcase their work with customizable themes and SEO optimization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "Sanity", "Tailwind", "Vercel"],
      liveUrl: "https://portfolio-cms.com",
      githubUrl: "https://github.com/alexjohnson/portfolio-cms",
      featured: false,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Crypto Tracker",
      description:
        "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
      tags: ["React", "CoinGecko API", "Redux", "Chart.js"],
      liveUrl: "https://crypto-tracker-pro.com",
      githubUrl: "https://github.com/alexjohnson/crypto-tracker",
      featured: false,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media managers with multi-platform integration, automated reporting, and team collaboration.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "https://social-dash.com",
      githubUrl: "https://github.com/alexjohnson/social-dashboard",
      featured: false,
      color: "from-indigo-500 to-purple-500",
    },
  ],
};
