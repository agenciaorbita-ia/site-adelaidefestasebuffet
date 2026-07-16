import { WHATSAPP_DEFAULT, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 bg-azul-profundo px-4 py-2 text-center">
      {/* Mobile: cortesia curta, uma linha (contato fica no botão flutuante) */}
      <p className="text-xs tracking-wide text-prata/85 sm:hidden">
        <span className="text-dourado">Cortesia:</span> bolo de corte + 200
        doces inclusos
      </p>

      {/* Desktop: mensagem completa com WhatsApp */}
      <p className="hidden text-sm tracking-wide text-prata/85 sm:block">
        <span className="text-dourado">Cortesia especial:</span> bolo de corte
        + 200 doces inclusos em todos os pacotes ·{" "}
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
