# Adelaide Festas & Buffet

> Workspace de operação da Adelaide Festas & Buffet — buffet completo para
> eventos (casamentos, debutantes, festas infantis e confraternizações) na
> região de Belo Horizonte/MG. Construído sobre o
> [ÓrbitaOS](https://github.com/agenciaorbita-ia/OrbitaOS).

Aqui vivem, em um único repositório, a memória do negócio, a identidade
visual, os materiais de marketing e o site institucional.

---

## Estrutura

```
adelaide-festas-e-buffet/
├── _memoria/       # Quem é a empresa, tom de voz, foco atual
├── identidade/     # Design guide: cores, tipografia, padrão visual
├── marketing/      # Posts e carrosséis de Instagram
├── projetos/       # Planos e especificações (site premium, catálogo)
├── site/           # Site institucional
│   └── nextjs-site/  # App Next.js (é isso que a Vercel builda)
├── saidas/         # Documentos pontuais
├── dados/          # Arquivos para análise
├── templates/      # Modelos do ÓrbitaOS
└── .claude/skills/ # Skills de operação (/abrir, /carrossel, /salvar…)
```

---

## O site

- **No ar:** https://adelaidefestasebuffet.vercel.app
- **Stack:** Next.js (App Router) + Tailwind CSS v4 + Framer Motion
- **Código:** `site/nextjs-site/` — a Vercel usa essa pasta como root
  directory, então **só o site vai para produção**; memória e marketing
  ficam apenas no repositório
- **Deploy:** automático a cada push na `main`. Todo push publica em
  produção — commits no site só com aprovação
- **Conteúdo:** textos centralizados em `site/nextjs-site/lib/content.ts`
  (editar lá, não nos componentes)
- **Direção de arte:** conceito "Noite de Gala", especificado em
  `projetos/site-premium/direcao-de-arte.md`
- **Sem preços no site** — todos os CTAs levam a orçamento via WhatsApp

**Próximo projeto:** catálogo de produtos e serviços — plano em
`projetos/catalogo-site/plano-catalogo.md`.

---

## Identidade da marca

Paleta definida em `identidade/design-guide.md`:

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul | `#161841` | Fundo principal (~60%) |
| Prata | `#F8FCFF` | Textos e fundos claros (~30%) |
| Dourado | `#DEC27D` | Destaques, filetes e CTAs (~10%) |

Tom de voz: caloroso, afetivo e familiar. Detalhamento em
`_memoria/preferencias.md`.

---

## Como trabalhar neste workspace

O dia a dia acontece pelo Claude Code, com as skills em `.claude/skills/`:

- `/abrir` — carrega o contexto do negócio no início da sessão
- `/carrossel` — cria carrosséis de Instagram com a identidade da marca
- `/publicar-tema` — transforma um tema em artigo + carrossel + legendas
- `/salvar` — commit e push para este repositório
- `/atualizar` — varre o projeto e atualiza a memória

As regras de operação completas estão no `CLAUDE.md`.

---

## Contato

- Instagram: [@adelaidefestasebuffet](https://instagram.com/adelaidefestasebuffet)
- WhatsApp: (31) 99540-6622

Operado por [Agência Órbita](https://agenciaorbita.online).
