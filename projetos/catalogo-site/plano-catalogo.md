# Plano — Catálogo de Produtos e Serviços · Adelaide Festas & Buffet

> Documento de planejamento aprovado (jul/2026). A implementação será feita em etapas separadas, revisadas uma a uma — aguardando ordem do usuário para iniciar a Fase 1. As páginas internas herdam a direção de arte "Noite de Gala" (`../site-premium/direcao-de-arte.md`).

## 1. Contexto

O site atual (`site/nextjs-site`, no ar em adelaidefestasebuffet.vercel.app) é uma landing page única que apresenta o buffet e converte via WhatsApp. Ele cumpre o papel de cartão de visitas, mas não tem profundidade de catálogo: quem quer ver cardápios, comparar pacotes ou entender o que cada tipo de festa inclui não encontra detalhes — e cada visitante chega ao WhatsApp "cru", obrigando a Adelaide a repetir as mesmas explicações (exatamente o gargalo mapeado em `_memoria/estrategia.md`).

**Objetivo do catálogo:** transformar o site em ferramenta de venda que pré-qualifica o lead — o cliente chega ao WhatsApp já sabendo o que quer, com a mensagem pronta dizendo qual pacote/cardápio escolheu.

## 2. O que a pesquisa mostrou

**Padrões dos sites de referência (EUA/exterior):**
- Navegação **por tipo de evento primeiro** converte melhor — cada tipo de festa com landing própria (menu de amostra + galeria + depoimentos + faixa de preço)
- Mostrar **"preço a partir de"** aumenta envio de formulários (reduz incerteza sem revelar a tabela); esconder preço totalmente é "conversion killer" — no mínimo dar uma faixa
- Formulário de orçamento ideal: **5–7 campos**, mobile-first
- **Velocidade de resposta** é decisiva: responder em ~5 min multiplica por 9 a chance de fechar
- Fotos reais (nunca stock) e cardápio com data/estação visível (sinal de site vivo)
- Cardápio em **PDF para download** (cliente compartilha com quem decide junto)
- Calculadoras/simuladores de orçamento **mais que dobram conversão** — o lead chega engajado e informado

**Padrões dos brasileiros analisados:**
- *Sua Festa SP* (perfil similar à Adelaide): pacotes organizados por estilo (churrasco, boteco, massas...) em 2 linhas (Completo vs. Pocket), preços "a partir de R$" visíveis, WhatsApp como CTA universal, 83 avaliações Google embutidas, mapa de cobertura, processo em 10 passos
- *Catarse Buffet*: 16 cardápios com foto + descrição + itens inclusos, **sem preços**, dois CTAs por cardápio ("conhecer cardápio" / "pedir orçamento")
- Orçamento por pessoa é o modelo mental do mercado brasileiro
- Portais (casamentos.com.br, ohub) mostram que concorrentes locais raramente têm site próprio decente — a barra é baixa, oportunidade grande

## 3. Arquitetura de páginas (sitemap)

```
/                           Home (atual, ajustada)
/festas/casamentos          Landing por tipo de evento
/festas/debutantes          Landing por tipo de evento
/festas/infantil            Landing por tipo de evento
/festas/confraternizacoes   Landing por tipo de evento
/cardapios                  Catálogo de cardápios (hub)
/pacotes                    Pacotes comparados
/galeria                    Galeria completa filtrável
/orcamento                  Orçamento/simulador dedicado
```

| Página | Objetivo | Seções |
|---|---|---|
| **Home** (ajustar) | Porta de entrada; distribuir para o catálogo | Mantém tudo; cards de Celebrações passam a linkar para `/festas/*` em vez do WhatsApp; nav ganha "Cardápios" e "Pacotes" |
| **/festas/[tipo]** (4 páginas) | Convencer quem já sabe o tipo de festa; SEO local ("buffet de casamento BH") | Hero com foto do tipo; o que está incluso; cardápio resumido do tipo; galeria do tipo; depoimento relacionado; FAQ do tipo; CTA WhatsApp **pré-preenchido com o tipo** |
| **/cardapios** | Mostrar a comida em detalhe (modelo Catarse: foto + descrição + itens) | Categorias: salgados & finger food, jantar completo, mesa de frios & frutas, bolos & doces, bebidas; cada uma com itens listados e fotos; CTA duplo por categoria; botão "baixar cardápio em PDF" |
| **/pacotes** | Comparação clara (modelo Sua Festa SP) | Cards/tabela comparativa dos pacotes reais da Adelaide; o que cada um inclui; cortesias; nota seg–dom exceto sábados; preço "a partir de" (**decisão pendente — ver §7**); CTA pré-preenchido com o pacote |
| **/galeria** | Prova visual; segurar o visitante | Grid filtrável por tipo de festa (chips: Todas/Casamento/Debutante/Infantil/Confraternização), lightbox atual reaproveitado |
| **/orcamento** | Conversão máxima | Formulário atual expandido (tipo, data, convidados, pacote de interesse, salão próprio ou da Adelaide?) → WhatsApp; fase 2: simulador com estimativa |

SEO por página: metadata própria, OG image própria por tipo, `FAQPage` e `Service` schema (JSON-LD), sitemap.xml.

## 4. Modelagem do conteúdo

**Onde armazenar (MVP): arquivos TypeScript tipados no próprio repositório** — evolução do padrão atual (`lib/content.ts`), quebrado por domínio:

```
lib/content/
  celebracoes.ts   ← 4 tipos de festa (textos, FAQ, fotos, cardápio associado)
  cardapios.ts     ← categorias e itens
  pacotes.ts       ← pacotes, inclusões, cortesias, preço opcional
  depoimentos.ts   ← avaliações (+ tipo de festa relacionado)
  faq.ts           ← perguntas frequentes gerais
```

**Tipos principais:**

```ts
Celebracao  { slug, titulo, descricao, heroFoto, incluso[], cardapioIds[],
              galeriaFotos[], faq[], depoimentoIds[] }
Cardapio    { id, categoria, titulo, descricao, itens[], fotos[], observacoes? }
Pacote      { id, nome, resumo, incluso[], cortesias[], cardapioIds[],
              precoAPartir?, notaCondicoes }
```

**Fotos:** `assets/img/` reorganizada em subpastas por contexto (`festas/casamento/`, `cardapios/salgados/`...) com o registro central `lib/images.ts` mantido. As 22 fotos atuais cobrem o início; será preciso pedir à Adelaide fotos novas por categoria (lista de lacunas na fase 1).

**Por que não CMS agora:** a Adelaide não vai editar site diretamente — ela manda material pelo WhatsApp e a atualização entra pelo fluxo ÓrbitaOS (editar arquivo → commit → deploy automático em ~2 min). Um CMS (Sanity/Contentful/Notion) adiciona custo de manutenção, autenticação e mais um sistema para dar errado, sem usuário real para ele hoje. **Critério de revisão:** se as atualizações passarem de ~2/semana ou outra pessoa da equipe assumir o conteúdo, migrar para Sanity (free tier) — a modelagem tipada acima já nasce compatível com essa migração.

## 5. Diferenciais competitivos (o que os concorrentes locais não têm)

1. **Orçamento WhatsApp pré-preenchido contextual** — cada CTA do catálogo monta a mensagem com o que o cliente estava vendo ("Olá! Quero orçamento para *debutante*, pacote *Completo*, ~100 convidados"). Custo zero, base já existe (`lib/whatsapp.ts`). *Ninguém na região faz.*
2. **Simulador "Monte sua festa"** — passo a passo interativo (tipo → convidados → cardápio → extras) que termina em estimativa ou mensagem detalhada no WhatsApp. Pesquisa mostra conversão >2×. Fase 3 (esforço alto).
3. **Galeria por tipo de festa** — filtros + lightbox (concorrentes têm Instagram bagunçado; aqui a noiva vê só casamentos).
4. **Depoimentos ligados a fotos reais da festa** — avaliação do Google + foto do evento correspondente lado a lado; prova social dupla.
5. **"Como funciona" em 8 passos** — timeline do primeiro contato à festa (inspirado no Sua Festa SP): reduz ansiedade de quem nunca contratou buffet.
6. **FAQ com schema para IAs e Google** — perguntas reais do WhatsApp viram FAQ com `FAQPage` schema; o site passa a ser citado por assistentes de IA ("melhor buffet em BH que inclui bebidas?").
7. **Cardápio em PDF com a marca** — gerado a partir dos dados do site (sempre atualizado), baixável para compartilhar com a família.
8. **Selo de tempo de resposta** — "Respondemos em até X min em horário comercial" ao lado dos CTAs (velocidade de resposta é o maior fator de fechamento; combina com o atendimento real da Adelaide).

## 6. Integrações e recursos plugáveis

| Integração | Como | Prós | Contras | Custo | Veredito |
|---|---|---|---|---|---|
| **WhatsApp contextual** | `wa.me` + mensagens por página/pacote | Zero fricção, já validado | — | R$ 0 | ✅ MVP |
| **Vercel Analytics + GA4** | script nativo / gtag | Medir cliques por CTA, funil real | GA4 exige aviso de cookies | R$ 0 | ✅ MVP |
| **Google Reviews** | Curadoria manual (atual) + link "ver todas no Google" | Zero dependência; já temos 15 reais | Não atualiza sozinho | R$ 0 | ✅ MVP (widget EmbedSocial free/5 reviews como opção fase 4) |
| **Instagram feed** | Curadoria manual de fotos + link | Sem API/token para manter | Não é "ao vivo" | R$ 0 | ✅ MVP manual; widget (Behold/SociableKIT ~US$0–8/mês) só se a Adelaide postar com frequência |
| **Agendamento de visita/degustação** | Cal.com (open source) ou link Google Calendar | Lead quente marca sozinho | Adelaide precisa manter agenda | R$ 0 | 🔶 Fase 3 — validar com ela antes |
| **Meta Pixel** | script | Habilita anúncios com público do site (skills de ads do ÓrbitaOS) | Só vale quando houver tráfego pago | R$ 0 | 🔶 Fase 4 |
| **CMS (Sanity)** | migrar `lib/content/` | Edição sem código | Custo de manutenção; sem usuário hoje | R$ 0 (free tier) | ❌ Adiar (critério no §4) |

## 7. Roadmap priorizado

**Fase 1 — MVP do catálogo** (impacto alto, esforço médio · ~1 sessão longa)
1. Refatorar `lib/content.ts` → `lib/content/` tipado
2. 4 landings `/festas/[tipo]` (template único, conteúdo por dado)
3. `/cardapios` com as 5 categorias atuais detalhadas
4. Home ajustada (nav + cards linkando pro catálogo) + CTAs pré-preenchidos contextuais
5. FAQ + JSON-LD (`FAQPage`, `Service`) + sitemap.xml + metadata por página
6. Vercel Analytics
- **Insumos da Adelaide (bloqueia conteúdo, não estrutura):** lista real de itens por cardápio, descrição real dos pacotes, fotos por tipo de festa

**Fase 2 — Pacotes e prova social** (impacto alto, esforço baixo/médio)
7. `/pacotes` comparativo — **decisão com a Adelaide: mostrar "a partir de R$"?** (pesquisa recomenda mostrar; validar com ela)
8. `/galeria` filtrável por tipo
9. Depoimentos + fotos reais pareadas; seção "Como funciona" em 8 passos
10. PDF do cardápio para download

**Fase 3 — Interativo** (impacto alto, esforço alto)
11. Simulador "Monte sua festa" com estimativa → WhatsApp
12. Agendamento de degustação (se a Adelaide topar manter agenda)

**Fase 4 — Crescimento** (depois do tráfego existir)
13. Blog (`/publicar-tema` do ÓrbitaOS já espera esse caminho) · Meta Pixel · widget de reviews automático · reavaliar CMS

## 8. Verificação

A implementação começa só com ordem do usuário, fase a fase, com verificação visual (Playwright) e build a cada fase — mesmo processo das etapas anteriores do site.

**Fontes principais da pesquisa:** [Skyfield — how caterers build sites that book events](https://skyfielddigital.com/how-caterers-build-sites-that-actually-book-events/) · [Foodie Coaches — catering page that converts](https://www.foodiecoaches.com/catering-web-page/) · [Marketivist — 10 key features](https://www.marketivist.com/blog/improve-your-catering-business-website) · [Wedding Venue Marketing — website checklist](https://www.weddingvenuemarketing.com/blog/the-ultimate-wedding-venue-website-checklist-for-maximum-conversions/) · [iDo Design — venue conversion](https://idodesign.studio/10-ways-to-boost-lead-conversion-on-your-wedding-venue-website/) · [Stylemix — pricing calculator ROI](https://stylemixthemes.com/wp/boost-your-catering-business-profits-with-an-online-pricing-calculator/) · [Sua Festa SP](https://suafestasp.com.br/) · [Catarse Buffet](https://catarsebuffet.com.br/cardapios/) · [EmbedSocial — Google reviews widget](https://embedsocial.com/blog/embed-google-reviews/) · [SociableKIT](https://www.sociablekit.com/tutorials/embed-google-reviews-website/)
