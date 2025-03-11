"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con autenticación y pasarela de pago.",
    image: "/images/ecommerce.png",
    technologies: ["React.js", "Next.js", "TailwindCSS", "Firebase"],
    type: "Web App",
    link: "https://ecommerce-demo.com",
    github: "https://github.com/user/ecommerce",
  },
  {
    name: "Fintech Dashboard",
    description: "Dashboard interactivo para visualizar métricas financieras en tiempo real.",
    image: "/images/fintech.png",
    technologies: ["React.js", "TypeScript", "Recharts", "Firebase"],
    type: "Dashboard",
    link: "https://fintech-demo.com",
    github: "https://github.com/user/fintech-dashboard",
  },
  {
    name: "Mobile Wallet App",
    description: "Aplicación de billetera digital con integración de pagos.",
    image: "/images/wallet.png",
    technologies: ["React Native", "Expo", "Zustand", "Firebase"],
    type: "Mobile App",
    link: "https://wallet-app-demo.com",
    github: "https://github.com/user/wallet-app",
  },
];

const filters = ["All", "Web App", "Dashboard", "Mobile App"];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Proyectos
      </motion.h2>

      {/* Filtros */}
      <div className="mb-6 flex gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
              selectedFilter === filter
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                Código
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
