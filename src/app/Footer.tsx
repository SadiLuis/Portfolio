"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 flex flex-col items-center">
      {/* Sección de Contacto */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contáctame
      </motion.h2>
      <p className="text-gray-400 mb-4">
        ¿Tienes un proyecto en mente? ¡Hablemos!
      </p>
      <a
        href="mailto:sadiluisrueda.94@gmail.com"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        Enviar un Correo
      </a>

      {/* Redes Sociales */}
      <div className="flex gap-6 mt-6">
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="text-gray-400 hover:text-white transition-all"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          className="text-gray-400 hover:text-white transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/tuusuario"
          target="_blank"
          className="text-gray-400 hover:text-white transition-all"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Sadi Luis Rueda. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
