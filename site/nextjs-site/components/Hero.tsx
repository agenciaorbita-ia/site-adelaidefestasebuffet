"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import heroImg from "@/assets/img/hero-principal.jpg";
import { HERO } from "@/lib/content";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";

const entrada: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yFoto = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yTexto = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacidade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-azul"
    >
      {/* Foto de fundo com parallax + ken burns */}
      <motion.div
        style={reduce ? undefined : { y: yFoto }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src={heroImg}
            alt="Mesa de buffet da Adelaide Festas & Buffet"
            fill
            className="object-cover"
            sizes="100vw"
            quality={82}
            priority
            placeholder="blur"
          />
        </div>
      </motion.div>

      {/* Véus de cor da marca */}
      <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/92 via-azul/72 to-azul/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/85 via-transparent to-azul-profundo/40" />

      {/* Ornamento de canto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-28 hidden h-40 w-40 rounded-full border border-dourado/20 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-36 hidden h-40 w-40 rounded-full border border-dourado/10 lg:block"
      />

      <motion.div
        style={reduce ? undefined : { y: yTexto, opacity: opacidade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-40"
      >
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={entrada}
          className="font-script text-4xl text-dourado sm:text-5xl"
        >
          {HERO.script}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={entrada}
          className="font-display mt-5 max-w-3xl text-4xl font-medium leading-[1.12] text-prata sm:text-5xl lg:text-6xl"
        >
          {HERO.titulo}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={entrada}
          className="mt-6 max-w-xl text-base leading-relaxed text-prata/85 md:text-lg"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={entrada}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brilho rounded-full bg-dourado px-8 py-3.5 text-sm font-medium tracking-wide text-azul transition-all duration-300 hover:-translate-y-0.5 hover:bg-dourado-claro hover:shadow-suave active:scale-[0.98]"
          >
            Pedir orçamento
          </a>
          <a
            href="#servicos"
            className="btn-brilho rounded-full border border-prata/35 px-8 py-3.5 text-sm tracking-wide text-prata transition-all duration-300 hover:-translate-y-0.5 hover:border-dourado hover:text-dourado active:scale-[0.98]"
          >
            Conhecer o buffet
          </a>
        </motion.div>

        {/* Selos de confiança */}
        <motion.ul
          custom={4}
          initial="hidden"
          animate="visible"
          variants={entrada}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
        >
          {HERO.selos.map((selo) => (
            <li key={selo.titulo} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-dourado/50"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7.5L5.5 11L12 3.5"
                    stroke="#DEC27D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-prata">
                  {selo.titulo}
                </span>
                <span className="block text-xs text-prata/65">
                  {selo.texto}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#servicos"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="block h-10 w-6 rounded-full border border-prata/30 p-1">
          <motion.span
            animate={reduce ? undefined : { y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-2 w-2 rounded-full bg-dourado"
          />
        </span>
      </motion.a>
    </section>
  );
}
