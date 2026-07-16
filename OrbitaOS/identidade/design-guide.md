# Identidade visual

> Como a marca aparece em tudo que o ÓrbitaOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

- **Fundo principal:** Azul #161841 — cor predominante, usada em fundos (~60% da composição)

- **Cor de destaque / CTA:** Dourado #DEC27D — detalhes, filetes, ornamentos e botões (~10%)

- **Texto principal:** Prata #F8FCFF — usado em textos e fundos claros (~30%)

- **Fundo alternativo / cards:** Prata #F8FCFF sobre azul #161841, ou variações mais claras do azul para hierarquia entre seções

- **Cor proibida:** cores neon/vibrantes fora da paleta (azul, prata, dourado)

---

## Tipografia

- **Títulos e destaques:** fonte script/caligráfica, no espírito do logo (traços fluidos, elegantes)

- **Corpo, subtítulos e botões:** fonte serifada, limpa e legível, que contraste com a caligrafia do título

- **Peso do título:** fonte exata ainda não definida — ao escolher, priorizar caligrafias elegantes e legíveis (evitar scripts difíceis de ler em telas pequenas)

---

## Estilo geral

Elegante e clássico, com ornamentos florais que remetem ao logo (flor de lírio estilizada). Contraste forte entre o azul-escuro de fundo e o dourado dos detalhes, com o prata garantindo legibilidade. Visual sofisticado, adequado a casamentos e eventos formais — evitar qualquer estética que pareça infantil ou informal demais.

**Princípio de "clean" (definido pelo cliente ao iniciar o site):** a comida do buffet já é naturalmente colorida e visualmente carregada (frutas, docinhos, salgados). Por isso, o layout ao redor das fotos deve ser o mais limpo e organizado possível — bastante espaço em branco/negativo, poucos elementos decorativos competindo com a foto, hierarquia clara. As fotos são o elemento colorido; a interface não deve competir com elas. Vale para site, carrosséis e qualquer peça com fotos de comida.

---

## Elementos-chave

- Bordas: filetes finos em dourado, inspirados nos ornamentos do logo
- Border-radius dos cards: cantos suaves, sem exagero (visual clássico, não moderno-arredondado)
- Botões: fundo dourado ou contorno dourado sobre azul, texto em prata ou azul-escuro conforme contraste
- Sombras: discretas, sem exagero — reforçar elegância, não profundidade

---

## O que NUNCA fazer

- Usar cores fora da paleta (azul #161841, prata #F8FCFF, dourado #DEC27D)
- Visual infantil, "fofo" demais ou que destoe da elegância clássica da marca
- Misturar tipografias que quebrem o contraste script/serifada

---

## Logo

- **Arquivo:** *(a receber — usuário enviou o logo no chat em duas versões: fundo escuro e fundo claro; precisa salvar manualmente em `identidade/logo.png`)*
- **Versão para fundo escuro:** disponível — logo em preto funciona sobre fundos claros; para uso sobre o azul #161841, será necessária uma versão do logo em prata/branco
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs

---

## Observações adicionais

Logo: caligrafia "Adelaide" com ornamento floral (flor de lírio) e a assinatura "Festas & Buffet" em versalete serifado abaixo. Esse mesmo espírito (script + serifada + ornamento) deve orientar a tipografia de todos os materiais gerados.

---

## Design system do site (validado — site/nextjs-site)

Tokens consolidados na construção do site institucional. Usar como referência para qualquer material novo (carrossel, proposta, slide), garantindo consistência entre site e conteúdo.

### Paleta estendida

| Token | Hex | Uso |
|---|---|---|
| `azul` | #161841 | blocos escuros, texto sobre claro |
| `azul-claro` | #262A5E | hover de botões azuis, variação |
| `azul-profundo` | #0E102E | footer, overlays, barra de anúncio |
| `prata` | #F8FCFF | texto sobre azul, cards claros |
| `dourado` | #DEC27D | CTAs, ícones, filetes |
| `dourado-claro` | #EAD9AC | hover do dourado |
| `dourado-escuro` | #C3A55C | script/texto dourado sobre fundo claro (contraste) |
| `creme` | #F7F4EC | fundo claro dominante (base champagne) |
| `creme-escuro` | #EFE9DB | fundo alternativo entre seções |

**Base clara dominante** (decisão do cliente): creme/prata como fundo principal, azul em blocos pontuais, dourado só em detalhes. As fotos de comida são o elemento colorido — a interface nunca compete.

### Tipografia (Google Fonts)

- **Títulos:** Playfair Display (serifada, medium)
- **Corpo/botões:** Jost (sans, leve)
- **Acentos script:** Great Vibes, sempre em dourado-escuro sobre claro ou dourado sobre azul, para frases curtas ("Bem-vindos à Adelaide", "Especial da casa")

### Padrões de componente validados

- **Botões:** pill (rounded-full); primário dourado com texto azul; efeito "brilho" que varre na diagonal no hover (classe `btn-brilho`), leve elevação no hover e `active:scale-[0.98]`
- **Cards:** rounded-xl, ring sutil azul 5-8%, hover com elevação + ring dourado + filete dourado que cresce
- **Cabeçalho de seção:** script dourada → título serifado → divisor ornamental (arabesco SVG) → subtítulo
- **Espaçamento de seção:** `py-16 sm:py-20` (não usar mais que isso — cliente pediu densidade)
- **Fotos:** sempre com cantos arredondados; overlay azul em gradiente quando houver texto por cima
