# ÓrbitaOS — Sistema operacional do negócio

Sua empresa opera com base neste arquivo. Aqui ficam as regras de operação
do ÓrbitaOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria novas skills conforme a operação evolui.

Este arquivo é editável. Quando o `/instalar` for executado, ele complementa o
final desta página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base para qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode se tornar uma skill para a próxima vez. Deseja que eu a crie?"

Não perguntar para tarefas pontuais ou perguntas simples. Apenas quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Deseja que eu registre isso para que não seja necessário repetir a instrução no futuro?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nesta pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso alterou algo no seu contexto. Deseja que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** execute `/atualizar` para uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar ao contexto
2. Perguntar se é específica deste projeto ou útil em qualquer contexto:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` para calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Adelaide Festas & Buffet

## O que é esse workspace

Operação da Adelaide Festas & Buffet: buffet completo para eventos (casamentos, debutantes, festas infantis, confraternizações), com 8 anos de atuação e os bolos como diferencial histórico da marca.

**Estrutura de pastas:**
- `_memoria/` — quem é a empresa, como falamos, foco atual
- `identidade/` — marca aplicada em tudo que o sistema gera
- `marketing/` — posts, carrosséis e conteúdo de Instagram
- `comercial/` — propostas e orçamentos de pacotes
- `operacoes/` — agenda de eventos, processos internos
- `saidas/` — documentos pontuais
- `dados/` — arquivos a analisar
- `tarefas.md` — o que está em jogo no momento

## Sobre a empresa

Adelaide Festas & Buffet é um buffet de eventos. Atua na região de Belo Horizonte/MG atendendo famílias que buscam celebrar sem preocupação, com pacote tudo-incluso (salão, buffet, decoração, bebidas, equipe e cortesias). A operação é liderada pela Adelaide (fundadora), com apoio do marido e de uma equipe capacitada de eventos.

## Setores e responsáveis

- **Marketing:** Adelaide/equipe — posts e carrosséis de Instagram, divulgação de pacotes
- **Comercial:** Adelaide/equipe — atendimento via WhatsApp, propostas de pacote
- **Operações:** equipe de eventos — agenda, execução do buffet, fornecedores

*(Financeiro e RH ainda sem processo formal — baixa prioridade por ora, ver `_memoria/estrategia.md`)*

## O que mais fazemos aqui

- Posts e carrosséis de Instagram (@adelaidefestasebuffet)
- Propostas comerciais de pacotes de evento
- Respostas padronizadas a perguntas recorrentes de clientes (preço, data, o que está incluso)

## Tom de voz

Caloroso, afetivo e familiar — fala em primeira pessoa quando representa a Adelaide, menciona família e fé com naturalidade. Ver `_memoria/preferencias.md` para o detalhamento completo com exemplo real de legenda.

Evitar: gíria e informalidade excessiva, jargão de marketing corporativo, linguagem fria ou impessoal.

## Regras do sistema

- Cada setor tem sua pasta na raiz
- Propostas comerciais salvar em `comercial/propostas/`
- Pacotes divulgados valem de segunda a domingo, exceto sábados — considerar essa regra em qualquer material comercial
- Consultar `identidade/design-guide.md` antes de qualquer peça visual (cores azul #161841, prata #F8FCFF, dourado #DEC27D) — inclui o design system completo do site

## Site institucional

- **Stack:** Next.js (App Router) + Tailwind CSS v4 + Framer Motion, em `../site/nextjs-site/` (irmão da pasta OrbitaOS, dentro de `site/`)
- **Conteúdo do site:** centralizado em `site/nextjs-site/lib/content.ts` — editar textos lá, não nos componentes
- **Fotos do buffet:** originais em `../site/fotos/`; curadas para o site em `site/nextjs-site/assets/img/`
- **Sem preços no site** — todos os CTAs levam a orçamento via WhatsApp (31) 99540-6622
- O site Astro antigo (`../site/astro-site/`) está descontinuado — remover após validação final do cliente
- Blog ainda não existe; quando `/publicar-tema` for usado, confirmar o destino dos posts no projeto Next.js

## Ferramentas conectadas

- [x] Instagram (@adelaidefestasebuffet)
- [x] WhatsApp — (31) 99540-6622
- [ ] Google Calendar
- [ ] Gmail

*(Marque os itens conforme for instalando os MCPs.)*
