import Image from "next/image";
import { CELEBRACOES } from "@/lib/content";
import { IMAGENS } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";
import { SectionHeader } from "./ui/SectionHeader";
import { Stagger, StaggerItem } from "./ui/Reveal";

export function Celebracoes() {
  return (
    <section id="celebracoes" className="bg-azul py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          script={CELEBRACOES.script}
          titulo={CELEBRACOES.titulo}
          tone="escuro"
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {CELEBRACOES.itens.map((item) => (
            <StaggerItem key={item.titulo}>
              <a
                href={whatsappUrl(
                  `Olá! Vim pelo site e gostaria de um orçamento para ${item.titulo.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={IMAGENS[item.img]}
                  alt={`Buffet para ${item.titulo.toLowerCase()}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 via-azul/25 to-transparent transition-colors duration-500 group-hover:via-azul/45" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="mb-3 block h-px w-8 bg-dourado transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-display text-lg font-medium text-prata sm:text-xl">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-prata/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {item.texto}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-dourado opacity-0 transition-all delay-100 duration-500 group-hover:opacity-100">
                    Pedir orçamento
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
