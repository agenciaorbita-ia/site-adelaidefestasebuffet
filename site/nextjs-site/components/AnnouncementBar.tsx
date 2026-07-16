import { WHATSAPP_DEFAULT, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 bg-azul-profundo px-4 py-2 text-center">
      <p className="text-xs tracking-wide text-prata/85 sm:text-sm">
        <span className="text-dourado">Cortesia especial:</span> bolo de corte
        + 200 doces inclusos<span className="hidden sm:inline"> em todos os pacotes</span> ·{" "}
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dourado underline decoration-dourado/40 underline-offset-4 transition hover:decoration-dourado"
        >
          {WHATSAPP_DISPLAY}
        </a>
      </p>
    </div>
  );
}
