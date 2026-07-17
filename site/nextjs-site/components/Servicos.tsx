import Image from "next/image";
import { CATALOGO_URL, SERVICOS } from "@/lib/content";
import { IMAGENS } from "@/lib/images";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

export function Servicos() {
  return (
    <section id="servicos" className="bg-creme py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          script={SERVICOS.script}
          titulo={SERVICOS.titulo}
          sub={SERVICOS.sub}
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.itens.map((item) => (
            <StaggerItem key={item.titulo}>
              <article className="group h-full overflow-hidden rounded-xl bg-prata shadow-card ring-1 ring-azul/5 transition-all duration-400 hover:-translate-y-2 hover:shadow-suave hover:ring-dourado/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMAGENS[item.img]}
                    alt={item.titulo}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-108 group-hover:brightness-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-azul/35 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-azul">
                    {item.titulo}
                  </h3>
                  <span className="mt-2 block h-px w-8 bg-dourado transition-all duration-400 group-hover:w-16" />
                  <p className="mt-3 text-sm leading-relaxed text-azul/70">
                    {item.texto}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-sm leading-relaxed text-azul/70">
              {SERVICOS.catalogo.texto}
            </p>
            <a
              href={CATALOGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brilho inline-flex items-center gap-2.5 rounded-full border border-dourado bg-transparent px-7 py-3 text-sm font-medium tracking-wide text-azul transition-all duration-300 hover:bg-dourado hover:shadow-card active:scale-[0.98]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2.5H6a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 6 17.5h8a1.5 1.5 0 0 0 1.5-1.5V6L12 2.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2.5V6h3.5M7.5 10.5h5M7.5 13.5h5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {SERVICOS.catalogo.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
