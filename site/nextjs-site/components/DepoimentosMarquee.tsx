import { DEPOIMENTOS } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";

function Estrelas() {
  return (
    <div className="flex gap-0.5 text-dourado" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.73.99-5.8-4.2-4.1 5.81-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ nome, texto }: { nome: string; texto: string }) {
  return (
    <figure className="flex h-52 w-80 shrink-0 flex-col rounded-xl bg-prata p-6 shadow-card ring-1 ring-azul/5">
      <Estrelas />
      <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-azul/80">
        &ldquo;{texto}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-2.5 border-t border-azul/8 pt-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-azul font-display text-xs text-dourado">
          {nome.charAt(0)}
        </span>
        <span className="font-display text-sm text-azul">{nome}</span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.14em] text-azul/40">
          Google
        </span>
      </figcaption>
    </figure>
  );
}

export function DepoimentosMarquee() {
  return (
    <section id="depoimentos" className="overflow-hidden bg-creme py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          script="Palavra de quem viveu"
          titulo="Depoimentos de clientes"
          sub="Avaliações reais deixadas no Google por quem já celebrou com a Adelaide."
        />
      </div>

      <div
        className="group relative mt-10"
        aria-label="Depoimentos de clientes em rolagem automática"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-creme to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-creme to-transparent" />

        <div className="flex w-max animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {[...DEPOIMENTOS, ...DEPOIMENTOS].map((dep, i) => (
            <Card key={`${dep.nome}-${i}`} nome={dep.nome} texto={dep.texto} />
          ))}
        </div>
      </div>
    </section>
  );
}
