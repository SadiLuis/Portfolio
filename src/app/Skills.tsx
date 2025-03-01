"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "React_dark.svg" },
  { name: "Next.js", icon: "Next.js_dark.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "TailwindCSS", icon: "TailwindCSS_dark.svg" },
  { name: "Firebase", icon: "firebase.svg" },
  { name: "Flutter", icon: "flutter.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Express.js", icon: "Express.js_dark.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "Dart", icon: "dart.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "React Native", icon: "react-native.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "Expo", icon: "expo.svg" },
];

const softSkills = [
  "Gestión de equipo",
  "Trabajo en equipo",
  "Empatía",
  "Colaboración",
  "Resolución de problemas",
  "Adaptabilidad",
];

export default function Skills() {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center px-6">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tecnologías
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Sección de Habilidades Blandas */}
      <motion.h2
        className="text-4xl font-bold mt-16 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Habilidades Blandas
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-lg font-medium">{skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
