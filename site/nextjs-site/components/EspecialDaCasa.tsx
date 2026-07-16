"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import especialImg from "@/assets/img/especial-bolo.jpg";
import { DEPOIMENTOS, ESPECIAL } from "@/lib/content";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { ScriptAccent } from "./ui/ScriptAccent";

const DESTAQUES = DEPOIMENTOS.slice(0, 4);

function Estrelas() {
  return (
    <div className="flex gap-1 text-dourado" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.73.99-5.8-4.2-4.1 5.81-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function EspecialDaCasa() {
  const [atual, setAtual] = useState(0);
  const reduce = useReducedMotion();

  const proxima = useCallback(
    () => setAtual((a) => (a + 1) % DESTAQUES.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(proxima, 6500);
    return () => clearInterval(timer);
  }, [proxima]);

  return (
    <section className="bg-creme pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-2">
        {/* Bloco azul — os bolos */}
        <Reveal>
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-azul text-prata shadow-suave sm:flex-row">
            <div className="relative min-h-56 sm:min-h-full sm:w-[45%]">
              <Image
                src={especialImg}
                alt="Bolo de chocolate com calda, especialidade da Adelaide"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-azul/25" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-9">
              <ScriptAccent>{ESPECIAL.script}</ScriptAccent>
              <h2 className="font-display mt-3 text-2xl font-medium leading-snug">
                {ESPECIAL.titulo}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-prata/80">
                {ESPECIAL.texto}
              </p>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brilho mt-6 inline-block w-fit rounded-full border border-dourado px-6 py-2.5 text-sm text-dourado transition-colors duration-300 hover:bg-dourado hover:text-azul active:scale-[0.98]"
              >
                {ESPECIAL.cta}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bloco claro — depoimento em destaque */}
        <Reveal delay={0.12}>
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-xl bg-prata p-8 shadow-card ring-1 ring-azul/5 sm:p-10">
            <span
              aria-hidden="true"
              className="font-display absolute -top-3 right-6 text-[7rem] leading-none text-dourado/25 select-none"
            >
              &rdquo;
            </span>

            <h2 className="font-display relative text-xl font-medium text-azul">
              Quem já celebrou com a gente
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-azul/50">
              Avaliações reais do Google
            </p>

            <div className="relative mt-6">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={atual}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="line-clamp-5 min-h-[8.2rem] text-base leading-relaxed text-azul/85">
                    &ldquo;{DESTAQUES[atual].texto}&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-3 border-t border-azul/8 pt-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul font-display text-sm text-dourado">
                      {DESTAQUES[atual].nome.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm text-azul">
                        {DESTAQUES[atual].nome}
                      </p>
                      <Estrelas />
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {DESTAQUES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAtual(i)}
                    aria-label={`Ver depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === atual ? "w-6 bg-dourado" : "w-2 bg-azul/20"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setAtual(
                      (a) => (a - 1 + DESTAQUES.length) % DESTAQUES.length
                    )
                  }
                  aria-label="Depoimento anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-azul/20 text-azul transition hover:border-dourado hover:text-dourado-escuro"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 3L5 8l5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={proxima}
                  aria-label="Próximo depoimento"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-azul/20 text-azul transition hover:border-dourado hover:text-dourado-escuro"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
