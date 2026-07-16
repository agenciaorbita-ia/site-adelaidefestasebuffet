interface ScriptAccentProps {
  children: string;
  className?: string;
  tone?: "dourado" | "azul" | "prata";
}

const tones = {
  dourado: "text-dourado-escuro",
  azul: "text-azul",
  prata: "text-prata",
};

export function ScriptAccent({
  children,
  className = "",
  tone = "dourado",
}: ScriptAccentProps) {
  return (
    <span
      className={`font-script text-3xl leading-none sm:text-4xl ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
