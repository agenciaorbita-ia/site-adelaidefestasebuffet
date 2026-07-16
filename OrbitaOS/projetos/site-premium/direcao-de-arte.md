# Direção de Arte Definitiva — Adelaide Festas & Buffet

> **Status (jul/2026): implementada e em produção.** Passos 1–6 da ordem de implementação concluídos — tokens, Hero v3, galeria imersiva, micro-polish, passada mobile completa (auditoria com verificação programática: zero overflow em 390/360px, espaçamentos padronizados, áreas de toque ≥32px, interações testadas). Pendentes: nº real de festas para o contador da História (colher com a Adelaide), páginas do catálogo (passo 7 — plano próprio em `../catalogo-site/plano-catalogo.md`) e QA final de apresentação (passo 8).

> Especificação final para a versão de apresentação ao cliente. Todas as decisões estão fechadas — este documento será implementado exatamente como escrito. Base: o site atual em `site/nextjs-site` (Next.js 16 + Tailwind v4 + Framer Motion), que já carrega a fundação correta e será **elevado**, não jogado fora — retrabalho zero é decisão de negócio: cada hora vai em impacto visível, não em reescrever o que já funciona.

## Conceito: "Noite de Gala"

O site é a noite da festa vista pelos olhos do convidado: o salão azul-noite, a luz dourada das velas, a mesa impecável. Todo elemento visual deriva dessa cena — é isso que separa uma identidade de um template: o template escolhe cores bonitas; a identidade escolhe uma história e obedece a ela.

---

## 1. Direção de arte final

### Paleta (exata, papel de cada cor fechado — proporção 60/30/10)

| Cor | Hex | Papel único |
|---|---|---|
| Creme-champagne | `#F7F4EC` | Base clara dominante (60%) — o "respiro" que valoriza as fotos |
| Areia | `#EFE9DB` | Alternância de seção e cards sobre creme — profundidade sem sombra |
| Azul-noite | `#161841` | Blocos de impacto (hero, celebrações, orçamento) e todo texto sobre claro |
| Azul-abismo | `#0E102E` | Footer, overlays de foto e barra de anúncio — o "mais escuro que o escuro" |
| Dourado | `#DEC27D` | Exclusivo de ação e destaque: CTAs, filetes, ícones — se tudo é dourado, nada é |
| Dourado-luz | `#EAD9AC` | Estado hover do dourado — a vela se aproxima |
| Dourado-bronze | `#C3A55C` | Texto dourado sobre fundo claro — único tom que passa contraste AA |
| Prata | `#F8FCFF` | Texto sobre azul — branco puro é frio demais para festa |

Justificativa da paleta: é a paleta oficial da marca (logo, Instagram) já validada pela cliente — trocá-la venderia design, mas quebraria a marca; o refinamento está no rigor dos papéis, não em cores novas.

### Par tipográfico (Google Fonts, exato)

- **Playfair Display** (500/600, itálico em ênfases) — todos os títulos: serifada editorial que conversa com o versalete "FESTAS & BUFFET" do logo.
- **Jost** (300/400/500) — corpo, UI, botões: geométrica leve que dá o contraponto moderno sem roubar cena.
- **Great Vibes** (400) — *assinatura*, nunca texto: uma única palavra script dourada por seção ("Bem-vindos", "Momentos"), ecoando a caligrafia "Adelaide" do logo.

Justificativa: o trio já está no site e espelha a anatomia do próprio logo (script + serifada + versalete) — identidade tipográfica derivada da marca é o que estúdio faz e template não.

### Estilo de fotografia

Fotos 100% reais do buffet (nunca stock — a comida da Adelaide é o produto); tratamento unificado: sobre fotos de fundo, véu azul-noite em gradiente (40→90% de opacidade, sempre mais escuro embaixo, onde entra texto); em cards, foto limpa com zoom lento no hover; cantos arredondados 12px em tudo (rounded-xl) — uma única geometria em todo o site.

### Hierarquia visual (escala fechada)

`assinatura script 36–48px dourada` → `headline Playfair 40–64px` → `divisor ornamental (arabesco SVG do logo)` → `apoio Jost 16–18px, 65ch máx` → `CTA pill dourado`. Essa sequência se repete em toda seção — ritmo repetido é o que faz o site parecer "desenhado por uma mão só".

---

## 2. Home definitiva, seção por seção

**S0 · Barra de anúncio** (azul-abismo, 1 linha) — cortesia "bolo + 200 doces" + WhatsApp. *Ação: plantar a cortesia antes de qualquer coisa — âncora de valor.*

**S1 · Header inteligente** — transparente sobre o hero (logo dourada), sólido creme com blur ao rolar (logo azul); underline dourado animado na nav; CTA pill "Pedir orçamento" com brilho. *Ação: orçamento a um clique em 100% do scroll.*

**S2 · Hero "Cortina de Gala"** (tela cheia) — foto real com ken burns lento + véu azul; assinatura "Bem-vindos à Adelaide"; headline **"Onde o amor é celebrado, cuidamos de cada detalhe"** revelada palavra a palavra; sob ela, um filete dourado que se desenha da esquerda à direita; sub de 2 linhas; CTA duplo (dourado brilho + ghost prata); 3 selos de confiança; **badge flutuante 5,0★ "avaliações no Google"** em card de vidro; indicador de scroll pulsante. *Ação: em 3 segundos o visitante entende — premium, confiável, um clique.*

**S3 · Cardápio "Feito para a sua festa"** — 4 cards editoriais (salgados, jantar, frios & frutas, bolos & doces): foto 4:3 com zoom no hover, filete dourado que cresce, gradiente azul revelado. *Ação: "eles têm tudo o que preciso comer na minha festa".*

**S4 · Especial da casa + depoimento cinematográfico** — bloco azul com o bolo (a história que só a Adelaide tem) ao lado do carrossel de depoimento: aspas Playfair gigantes em dourado 25%, crossfade suave, autoplay 6,5s, dots + setas. *Ação: diferencial emocional + prova social no mesmo olhar.*

**S5 · Benefícios "Por que celebrar com a Adelaide"** — 6 cards com ícones de traço fino: no hover o card sobe, filete dourado cresce no topo e o ícone inverte azul→dourado. *Ação: derrubar as 6 objeções de quem compara buffets.*

**S6 · Celebrações** (bloco azul) — 4 retratos 3:4 (casamento, debutante, infantil, confraternização) com véu azul; hover revela descrição + "Pedir orçamento" **pré-preenchido com o tipo de festa**. *Ação: autosseleção — o visitante clica na festa dele e chega ao WhatsApp qualificado.*

**S7 · Nossa história** — foto da Adelaide com moldura dourada dupla, a trajetória real (rua → buffet próprio), citação de fé em itálico; régua de **contadores animados**: 8+ anos · 200 doces de cortesia · nº de festas realizadas (*número real a colher com a cliente — proibido inventar*). *Ação: transformar fornecedor em pessoa — festa se contrata por confiança.*

**S8 · Galeria imersiva "Momentos"** — desktop: faixa horizontal de fotos em duas alturas alternadas que **desliza vinculada ao scroll** (a página rola, a galeria atravessa); clique abre lightbox com navegação por teclado; mobile: grid 2 colunas quadrado. *Ação: imersão — o visitante "entra" na festa.*

**S9 · Depoimentos em marquee** — dois sentidos? Não: uma faixa única contínua (pausa no hover), cards de altura fixa com estrelas, texto 4 linhas, autor + selo Google. *Ação: volume de prova social sem pedir cliques.*

**S10 · Orçamento** (bloco azul) — formulário creme (nome, tipo, data mín. hoje, convidados, detalhes) que abre WhatsApp com mensagem formatada + card "Atendimento" com selo **"Respondemos em horário comercial em poucos minutos"**. *Ação: converter com o mínimo de fricção e o máximo de contexto.*

**S11 · Footer** (azul-abismo) — logo dourada, navegação, contato, ornamento, copyright. **S12 · WhatsApp flutuante** com pulso dourado suave. *Ação: saída sempre à mão.*

---

## 3. Motion design

**Biblioteca única: Framer Motion (`motion/react`)** — já instalada, anima só `transform/opacity` (GPU), springs nativos e `useReducedMotion`; uma biblioteca só é decisão de performance e de manutenção.

| Animação | Especificação | Função |
|---|---|---|
| Reveal de seção | fade + rise 24px, 0.7s, easing `cubic-bezier(0.22,1,0.36,1)`, `once: true` | Guia o olhar para o que entra |
| Stagger de grids | 80–120ms entre cards | Ritmo de "mesa sendo posta" |
| Hero: headline | palavra a palavra, 90ms de stagger | Dá peso à frase-assinatura da marca |
| Hero: filete | `scaleX` 0→1, 0.9s após a headline | Sublinha dourado = assinatura visual |
| Hero: parallax | foto -18%, texto +40% no scroll, só transform | Profundidade de cinema sem custo |
| Ken burns | scale 1→1.08 em 18s, alternado | Foto viva, nunca estática |
| Galeria imersiva | `translateX` vinculado a `useScroll` (scroll-linked, sem JS por frame) | O efeito "uau" central da navegação |
| Contadores | 0→N em 1.8s ao entrar na viewport, `once` | Números que se provam na hora |
| Botões | brilho diagonal CSS 0.65s + elevação 2px + `active:scale(0.98)` | Toque de luxo em toda ação |
| Cards | lift -8px + sombra suave + zoom da foto 1.08 em 0.7s | Convite tátil ao clique |
| Menu mobile | drawer com stagger de 60ms nos links | Cuidado até no menor caminho |

Regras de performance do movimento: nunca animar `width/height/top` (só transform/opacity); tudo `once: true` exceto marquee/ken burns; `prefers-reduced-motion` desliga todo movimento decorativo via hook + media query global; zero listeners de scroll manuais (só `useScroll` do Motion, que usa rAF).

---

## 4. Os 5 efeitos "uau" (na ordem em que aparecem)

1. **Hero cinematográfico** — ken burns + véu azul + headline palavra a palavra + filete que se desenha: o primeiro segundo do site é o que fecha a venda.
2. **Badge de avaliação flutuante** — card de vidro com 5,0★ Google flutuando sobre o hero: prova social antes do primeiro scroll.
3. **CTAs contextuais de celebração** — clicar em "Debutantes" abre o WhatsApp já escrito "quero orçamento para debutante": nenhum concorrente local tem, e é o que mais encanta dono de negócio em demo.
4. **Contadores da história** — os números da Adelaide subindo na tela (com o nº real de festas): credibilidade que se move.
5. **Galeria imersiva scroll-linked** — a faixa de fotos que atravessa a tela conforme a página rola, fechando em lightbox: o momento "isso não é template".

---

## 5. Fundamentos

**Mobile (por seção):** hero em `100svh` com headline 40px e selos empilhados; cardápio e benefícios em 1–2 colunas com stagger reduzido; celebrações **2 colunas** (densidade, sem rolagem infinita); galeria vira grid 2×4 (scroll-linked é desktop-only — touch tem gesto próprio); contadores em linha única de 3; formulário empilhado com inputs de 44px+ de altura de toque.

**Performance:** `next/image` em tudo (AVIF/WebP automáticos), `priority` apenas na foto do hero, `quality 80`, `sizes` corretos por breakpoint; fontes via `next/font` (self-hosted, `display: swap`, zero CLS); LCP alvo < 2,5s (hero é a LCP — foto ~180KB no breakpoint servido); zero scripts de terceiros no MVP (analytics da Vercel é 1st-party); marquee e brilhos em CSS puro (funcionam com JS ainda carregando).

**Acessibilidade:** contraste AA garantido (dourado-bronze para texto dourado sobre claro; prata sobre azul = 13:1); `:focus-visible` dourado global; `aria-label` em carrossel, lightbox, marquee e menu; navegação por teclado no lightbox (setas/Esc já implementadas); `alt` descritivo em toda foto; `prefers-reduced-motion` respeitado (já global).

**SEO local:** title "Buffet completo em Belo Horizonte — Adelaide Festas & Buffet"; H1 único com "buffet" + tipo de festa; JSON-LD `FoodEstablishment` com `areaServed: Belo Horizonte e região` (já existe, ajustar `areaServed`); OG image de marca (já existe); `sitemap.xml` + `robots.txt`; palavras locais distribuídas nos H2/alt ("buffet de casamento em BH" na seção celebrações); Google Business Profile linkado nos depoimentos.

---

## 6. Ordem de implementação (sequência única, demo-first)

1. **Tokens e higiene** — formalizar papéis de cor/contraste (dourado-bronze em textos sobre claro), `areaServed` no schema, title SEO local. *Invisível, mas destrava tudo.*
2. **Hero v3** — headline palavra a palavra + filete desenhado + badge 5,0★ flutuante. *É o que o cliente vê primeiro na demo.*
3. **Galeria imersiva scroll-linked** (desktop) com fallback grid (mobile). *O segundo momento da demo.*
4. **Contador de festas realizadas** na História (colher número real com a cliente; até lá a régua atual permanece). 
5. **Micro-polish global** — estados de hover revisados 1 a 1, divisores, espaçamentos, selo de resposta rápida no Orçamento.
6. **Passada mobile completa** + auditoria de performance (Lighthouse ≥ 90 em Performance/SEO/A11y) + verificação visual Playwright seção a seção.
7. **Páginas internas do catálogo** (plano próprio já aprovado — `/festas/[tipo]`, `/cardapios`, `/pacotes`) herdando esta direção de arte.
8. **Polish final de apresentação** — passada de QA como cliente: 3 dispositivos, compartilhamento no WhatsApp, velocidade em 4G.

---

## Critério de qualidade (auto-revisão aplicada)

Revisado contra a pergunta "R$ 15 mil ou template de R$ 500?": foram cortados desta especificação um segundo marquee em sentido oposto (movimento gratuito), partículas douradas no hero (clichê de template) e vídeo de fundo (custo de LCP sem foto boa o bastante); foram mantidos apenas efeitos que guiam o olhar ou reforçam a marca. O que faz este site parecer estúdio: **uma história visual só ("Noite de Gala"), tipografia derivada do logo, movimento com propósito e WhatsApp contextual que nenhum concorrente local tem.**
