"use client";

import { useCallback, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface LightboxProps {
  imagens: { src: StaticImageData; alt: string }[];
  aberta: number | null;
  onFechar: () => void;
  onNavegar: (index: number) => void;
}

export function Lightbox({
  imagens,
  aberta,
  onFechar,
  onNavegar,
}: LightboxProps) {
  const total = imagens.length;

  const anterior = useCallback(() => {
    if (aberta === null) return;
    onNavegar((aberta - 1 + total) % total);
  }, [aberta, total, onNavegar]);

  const proxima = useCallback(() => {
    if (aberta === null) return;
    onNavegar((aberta + 1) % total);
  }, [aberta, total, onNavegar]);

  useEffect(() => {
    if (aberta === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proxima();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [aberta, onFechar, anterior, proxima]);

  return (
    <AnimatePresence>
      {aberta !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-azul-profundo/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onFechar}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos ampliada"
        >
          <motion.div
            key={aberta}
            className="relative max-h-[85vh] w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagens[aberta].src}
              alt={imagens[aberta].alt}
              className="mx-auto max-h-[85vh] w-auto rounded-lg object-contain shadow-suave"
              sizes="(min-width: 1024px) 56rem, 100vw"
              priority
            />
            <p className="mt-3 text-center text-sm text-prata/70">
              {aberta + 1} / {total}
            </p>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onFechar();
            }}
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-prata/30 text-prata transition hover:border-dourado hover:text-dourado"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-prata/30 text-prata transition hover:border-dourado hover:text-dourado sm:left-6"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M11.5 2.5L5 9l6.5 6.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              proxima();
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-prata/30 text-prata transition hover:border-dourado hover:text-dourado sm:right-6"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M6.5 2.5L13 9l-6.5 6.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
