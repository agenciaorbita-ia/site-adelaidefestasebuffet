import Image from "next/image";
import adelaideImg from "@/assets/img/historia-adelaide.jpg";
import { HISTORIA } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { ScriptAccent } from "./ui/ScriptAccent";
import { Counter } from "./ui/Counter";

export function Historia() {
  return (
    <section id="historia" className="bg-creme-escuro/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Foto com moldura dourada */}
          <Reveal className="order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-xl border border-dourado/60"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-full border border-dourado/40 sm:block"
              />
              <div className="relative overflow-hidden rounded-xl shadow-suave">
                <Image
                  src={adelaideImg}
                  alt="Adelaide, fundadora do buffet, ao lado de um bolo de casamento"
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 90vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="order-2">
            <Reveal>
              <ScriptAccent>{HISTORIA.script}</ScriptAccent>
              <h2 className="font-display mt-3 text-3xl font-medium text-azul md:text-4xl">
                {HISTORIA.titulo}
              </h2>
            </Reveal>

            {HISTORIA.paragrafos.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="mt-5 text-base leading-relaxed text-azul/75">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <blockquote className="font-display mt-7 border-l-2 border-dourado pl-6 text-lg italic text-azul/70">
                &ldquo;{HISTORIA.citacao}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Números */}
        <Reveal delay={0.15}>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-azul/10 pt-10 sm:gap-8">
            {HISTORIA.numeros.map((n) => (
              <div key={n.label} className="text-center">
                <dt className="sr-only">{n.label}</dt>
                <dd>
                  <Counter
                    to={n.valor}
                    sufixo={n.sufixo}
                    className="font-display text-3xl font-medium text-azul sm:text-5xl"
                  />
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.14em] text-dourado-escuro sm:text-sm sm:tracking-[0.18em]">
                    {n.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
