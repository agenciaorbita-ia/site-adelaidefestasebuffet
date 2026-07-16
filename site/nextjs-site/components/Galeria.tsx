"use client";

import { useState } from "react";
import Image from "next/image";
import { GALERIA, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";
import { IMAGENS } from "@/lib/images";
import { SectionHeader } from "./ui/SectionHeader";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { Lightbox } from "./ui/Lightbox";

const fotos = GALERIA.imagens.map((key, i) => ({
  src: IMAGENS[key],
  alt: `Mesa de buffet da Adelaide Festas & Buffet — foto ${i + 1}`,
}));

export function Galeria() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-creme py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader script={GALERIA.script} titulo={GALERIA.titulo} />

        <Stagger
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          stagger={0.07}
        >
          {fotos.map((foto, i) => (
            <StaggerItem key={i}>
              <button
                onClick={() => setAberta(i)}
                aria-label={`Ampliar foto ${i + 1} da galeria`}
                className="group relative block aspect-square w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-azul/0 transition-colors duration-400 group-hover:bg-azul/40">
                  <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full border border-prata/70 text-prata opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="5.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M12.5 12.5L16 16M8 5.8v4.4M5.8 8h4.4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-sm text-azul/60">
          Acompanhe mais momentos no Instagram{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-azul underline decoration-dourado underline-offset-4 transition hover:text-dourado-escuro"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </div>

      <Lightbox
        imagens={fotos}
        aberta={aberta}
        onFechar={() => setAberta(null)}
        onNavegar={setAberta}
      />
    </section>
  );
}
