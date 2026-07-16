import { BENEFICIOS } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Stagger, StaggerItem } from "./ui/Reveal";

const icones: Record<string, React.ReactNode> = {
  check: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 11.5L9 16.5L18 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  taca: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 3h14l-6 8v6m0 0H8m4 0h4M6.5 6.5h9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  equipe: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 18c.8-3 2.9-4.5 5.5-4.5S12.7 15 13.5 18M14 4.5a3 3 0 1 1 1.5 5.6M15.5 13c2 .4 3.4 1.7 4 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  presente: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4.5 10.5V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7.5M3.5 7h15v3.5h-15V7ZM11 7v12M11 7s-1-3.8-3.4-3.8A1.9 1.9 0 0 0 5.7 5.1C5.7 6.5 7.4 7 8.6 7H11Zm0 0s1-3.8 3.4-3.8a1.9 1.9 0 0 1 1.9 1.9C16.3 6.5 14.6 7 13.4 7H11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  estrela: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2.5l2.7 5.46 6.03.88-4.36 4.25 1.03 6.01L11 16.27 5.6 19.1l1.03-6.01-4.36-4.25 6.03-.88L11 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  coracao: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 19s-7.5-4.6-9-9.3C1 6.5 3 4 5.8 4 7.9 4 9.6 5.3 11 7c1.4-1.7 3.1-3 5.2-3C19 4 21 6.5 20 9.7 18.5 14.4 11 19 11 19Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-prata py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          script={BENEFICIOS.script}
          titulo={BENEFICIOS.titulo}
          sub={BENEFICIOS.sub}
        />

        <Stagger
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {BENEFICIOS.itens.map((item) => (
            <StaggerItem key={item.titulo}>
              <article className="group relative h-full overflow-hidden rounded-xl bg-creme/70 p-7 ring-1 ring-azul/8 transition-all duration-400 hover:-translate-y-1.5 hover:bg-creme hover:shadow-suave hover:ring-dourado/50">
                {/* Filete superior que cresce no hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gradient-to-r from-dourado to-dourado-claro transition-all duration-500 group-hover:w-full" />

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-azul text-dourado shadow-card transition-all duration-400 group-hover:scale-110 group-hover:bg-dourado group-hover:text-azul">
                  {icones[item.icone]}
                </span>

                <h3 className="font-display mt-5 text-lg font-medium text-azul">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-azul/70">
                  {item.texto}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-xs text-azul/55">
          {BENEFICIOS.nota}
        </p>
      </div>
    </section>
  );
}
