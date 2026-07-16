interface OrnamentDividerProps {
  tone?: "dourado" | "prata" | "azul";
  className?: string;
}

const strokes = {
  dourado: "#DEC27D",
  prata: "#F8FCFF",
  azul: "#161841",
};

/** Divisor ornamental com arabesco floral no espírito do logo. */
export function OrnamentDivider({
  tone = "dourado",
  className = "",
}: OrnamentDividerProps) {
  const stroke = strokes[tone];

  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(to left, ${stroke}, transparent)`,
        }}
      />
      <svg
        width="72"
        height="20"
        viewBox="0 0 72 20"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M4 10c8-8 16 8 24 0 3-3 5-3 8-3s5 0 8 3c8 8 16-8 24 0"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="7" r="1.6" fill={stroke} />
        <path
          d="M36 12c-2 2-2 4 0 6 2-2 2-4 0-6Z"
          stroke={stroke}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(to right, ${stroke}, transparent)`,
        }}
      />
    </div>
  );
}
