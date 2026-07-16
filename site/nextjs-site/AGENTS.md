<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# Site Adelaide Festas & Buffet

Landing page institucional premium. Stack: Next.js 16 (App Router, Turbopack) + Tailwind CSS v4 + Framer Motion (`motion/react`). Uma única rota (`/`).

## Comandos

- `npm run dev` — dev server na porta 3000
- `npm run build` — build de produção (roda TypeScript; falha em erro de tipo)
- **Atenção OneDrive:** se uma edição não aparecer no browser, o HMR do Turbopack travou — matar todos os processos node, `rm -rf .next` (via Git Bash; PowerShell falha com paths longos) e subir de novo

## Estrutura

- `app/layout.tsx` — fontes (Playfair Display, Jost, Great Vibes via next/font), metadata, JSON-LD
- `app/globals.css` — tokens da marca em `@theme` (cores `azul/prata/dourado/creme` + variações), keyframes, utilitário `btn-brilho` (brilho de botão), `scroll-margin-top` das seções, `:focus-visible`
- `app/page.tsx` — composição: AnnouncementBar → Header → Hero → Servicos → EspecialDaCasa → Beneficios → Celebracoes → Historia → Galeria → DepoimentosMarquee → Orcamento → Footer → FloatingWhatsApp
- `lib/content.ts` — **todo o copy do site**; editar textos aqui, nunca hardcoded nos componentes
- `lib/whatsapp.ts` — número, URLs `wa.me` e formatação da mensagem de orçamento
- `lib/images.ts` — registro de fotos (chave string → static import)
- `components/ui/` — Reveal/Stagger (scroll-reveal), Counter, Lightbox, SectionHeader, ScriptAccent, OrnamentDivider
- `assets/img/` — fotos curadas (nomes semânticos) + logos recoloridas (dourado/azul/prata)

## Convenções

- Base clara dominante (creme #F7F4EC), blocos azul #161841 pontuais, dourado #DEC27D em detalhes — as fotos são o elemento colorido, a interface não compete
- Seções: `py-16 sm:py-20` — não aumentar (pedido do cliente: sem excesso de espaço)
- Sem preços — CTAs sempre para orçamento no WhatsApp
- Animações respeitam `prefers-reduced-motion` (via `useReducedMotion` + media query global)
- Links de âncora do menu mobile usam `navegarMobile()` no Header (scroll nativo é cancelado quando o link é desmontado com o menu)
- Ícones: SVG inline, stroke 1.4-1.6, nunca bibliotecas de ícones
- OG image e favicon gerados de `assets/img/` com sharp (scripts no scratchpad da sessão; regenerar se o logo mudar)
<!-- END:nextjs-agent-rules -->
