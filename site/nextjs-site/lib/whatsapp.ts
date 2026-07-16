export const WHATSAPP_NUMBER = "5531995406622";
export const WHATSAPP_DISPLAY = "(31) 99540-6622";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappUrl(
  "Olá! Vim pelo site e gostaria de saber mais sobre os pacotes."
);

export interface OrcamentoData {
  nome: string;
  tipoEvento: string;
  data: string;
  convidados: string;
  mensagem?: string;
}

export function orcamentoMessage(d: OrcamentoData): string {
  const linhas = [
    "Olá! Vim pelo site e gostaria de pedir um orçamento.",
    "",
    `*Nome:* ${d.nome}`,
    `*Tipo de evento:* ${d.tipoEvento}`,
    `*Data prevista:* ${d.data}`,
    `*Nº de convidados:* ${d.convidados}`,
  ];
  if (d.mensagem?.trim()) {
    linhas.push(`*Detalhes:* ${d.mensagem.trim()}`);
  }
  return linhas.join("\n");
}
