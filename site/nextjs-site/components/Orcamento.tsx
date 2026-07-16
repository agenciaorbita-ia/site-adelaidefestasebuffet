"use client";

import { useState, type FormEvent } from "react";
import { ATENDIMENTO, INSTAGRAM_URL, ORCAMENTO } from "@/lib/content";
import {
  orcamentoMessage,
  whatsappUrl,
  WHATSAPP_DEFAULT,
} from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { ScriptAccent } from "./ui/ScriptAccent";
import { OrnamentDivider } from "./ui/OrnamentDivider";

const inputBase =
  "w-full rounded-lg border border-azul/15 bg-prata px-4 py-3 text-sm text-azul placeholder:text-azul/40 outline-none transition focus:border-dourado focus:ring-2 focus:ring-dourado/30";

export function Orcamento() {
  const [form, setForm] = useState({
    nome: "",
    tipoEvento: "",
    data: "",
    convidados: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);
  const hoje = new Date().toISOString().split("T")[0];

  function atualizar(campo: keyof typeof form, valor: string) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function enviar(e: FormEvent) {
    e.preventDefault();
    const url = whatsappUrl(orcamentoMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <section id="orcamento" className="bg-azul py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-[1.4fr_1fr]">
        {/* Formulário */}
        <Reveal>
          <div className="rounded-xl bg-creme p-8 shadow-suave sm:p-10">
            <ScriptAccent>{ORCAMENTO.script}</ScriptAccent>
            <h2 className="font-display mt-3 text-3xl font-medium text-azul">
              {ORCAMENTO.titulo}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-azul/70">
              {ORCAMENTO.sub}
            </p>

            <form onSubmit={enviar} className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-azul/60">
                  Seu nome
                </span>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => atualizar("nome", e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className={inputBase}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-azul/60">
                  Tipo de evento
                </span>
                <select
                  required
                  value={form.tipoEvento}
                  onChange={(e) => atualizar("tipoEvento", e.target.value)}
                  className={`${inputBase} ${
                    form.tipoEvento ? "" : "text-azul/40"
                  }`}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {ORCAMENTO.tiposEvento.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-azul/60">
                  Data prevista
                </span>
                <input
                  type="date"
                  required
                  min={hoje}
                  value={form.data}
                  onChange={(e) => atualizar("data", e.target.value)}
                  className={inputBase}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-azul/60">
                  Número de convidados
                </span>
                <input
                  type="number"
                  required
                  min={1}
                  value={form.convidados}
                  onChange={(e) => atualizar("convidados", e.target.value)}
                  placeholder="Ex: 120"
                  className={inputBase}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-azul/60">
                  Detalhes (opcional)
                </span>
                <textarea
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => atualizar("mensagem", e.target.value)}
                  placeholder="Conte sobre o salão, horário ou algum pedido especial"
                  className={`${inputBase} resize-none`}
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="btn-brilho group w-full rounded-full bg-azul px-8 py-4 text-sm font-medium tracking-wide text-prata transition-all duration-300 hover:-translate-y-0.5 hover:bg-azul-claro hover:shadow-suave active:scale-[0.98] sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    Enviar pelo WhatsApp
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h11M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {enviado && (
                  <p className="mt-3 text-sm text-azul/70">
                    Mensagem preparada! Se o WhatsApp não abriu,{" "}
                    <a
                      href={whatsappUrl(orcamentoMessage(form))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline decoration-dourado underline-offset-4"
                    >
                      clique aqui
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>

        {/* Card de atendimento */}
        <Reveal delay={0.12}>
          <div className="flex h-full flex-col justify-between rounded-xl border border-dourado/30 bg-azul-profundo/60 p-8 text-prata sm:p-10">
            <div>
              <ScriptAccent>{ATENDIMENTO.script}</ScriptAccent>
              <h2 className="font-display mt-3 text-2xl font-medium">
                {ATENDIMENTO.titulo}
              </h2>
              <OrnamentDivider className="mt-5 justify-start" />

              <dl className="mt-8 space-y-6">
                {ATENDIMENTO.itens.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-[0.18em] text-dourado">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-lg text-prata/90">
                      {item.label === "WhatsApp" ? (
                        <a
                          href={WHATSAPP_DEFAULT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-dourado"
                        >
                          {item.valor}
                        </a>
                      ) : item.label === "Instagram" ? (
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-dourado"
                        >
                          {item.valor}
                        </a>
                      ) : (
                        item.valor
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-10 border-t border-prata/15 pt-5 text-sm leading-relaxed text-prata/65">
              {ATENDIMENTO.nota}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
