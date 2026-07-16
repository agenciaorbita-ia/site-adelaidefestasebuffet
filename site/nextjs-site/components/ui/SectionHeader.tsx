import { Reveal } from "./Reveal";
import { ScriptAccent } from "./ScriptAccent";
import { OrnamentDivider } from "./OrnamentDivider";

interface SectionHeaderProps {
  script: string;
  titulo: string;
  sub?: string;
  tone?: "claro" | "escuro";
  className?: string;
}

/** Cabeçalho padrão de seção: acento script + título serifado + ornamento. */
export function SectionHeader({
  script,
  titulo,
  sub,
  tone = "claro",
  className = "",
}: SectionHeaderProps) {
  const escuro = tone === "escuro";

  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      <ScriptAccent tone={escuro ? "dourado" : "dourado"}>
        {script}
      </ScriptAccent>
      <h2
        className={`font-display mt-3 text-3xl font-medium leading-snug md:text-4xl ${
          escuro ? "text-prata" : "text-azul"
        }`}
      >
        {titulo}
      </h2>
      <OrnamentDivider
        tone={escuro ? "dourado" : "dourado"}
        className="mt-5"
      />
      {sub && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            escuro ? "text-prata/75" : "text-azul/70"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
