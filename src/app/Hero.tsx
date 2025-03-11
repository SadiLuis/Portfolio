"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { TextGenerateEffect } from "../components/ui/text-genate-effect";
import { TextHoverEffect } from "../components/ui/text-hover-effect";

export default function Hero() {
  const about =
    "Apasionado Frontend Developer con más de 3 años de experiencia profesional. Me motiva la innovación, el aprendizaje constante y el diseño de soluciones creativas y atractivas para los usuarios. Especializado en React.js, Next.js, TypeScript y TailwindCSS, con un enfoque en la arquitectura limpia y el desarrollo escalable.";

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center px-6">
      {/* Header con el botón de cambio de tema */}
      <header className="sticky top-0 w-full flex justify-end">
        <ModeToggle />
      </header>

      <div className="h-[30rem] w-[40rem] flex items-center justify-center">
        <TextHoverEffect text=" Bienvenido " />
      </div>

      {/* ABOUT */}
      <section className="text-center py-2">
        <TextGenerateEffect words={about} />
      </section>
    </div>
  );
}
