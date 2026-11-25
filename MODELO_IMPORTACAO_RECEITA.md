# Modelo de Texto para Importação de Receitas — Sabor Sustentável

Este arquivo serve como **formulário padrão** para que os alunos e colaboradores enviem novas receitas de forma organizada, facilitando a importação para o catálogo do aplicativo (`src/data/recipes.ts` e `src/data/authors.ts`).

---

## Como usar este modelo

1. Copie o bloco **"Modelo em Branco"** abaixo.
2. Preencha todos os campos com atenção às quantidades, unidades de medida e instruções.
3. Envie o texto preenchido junto com a **foto do prato** (preferencialmente na horizontal, proporção `4:3`, com boa iluminação natural).

---

## 1. Modelo em Branco (copiar e preencher)

```text
=== NOVA RECEITA — SABOR SUSTENTÁVEL ===

1. TÍTULO DA RECEITA:
(Ex.: Torta salgada de talos de espinafre)

2. DESCRIÇÃO CURTA (1 a 2 frases convidativas):
(Ex.: Massa leve e recheio cremoso que aproveita os talos frescos do espinafre no almoço ou lanche.)

3. CATEGORIA PRINCIPAL (escolha APENAS UMA das opções abaixo):
[ ] Café da manhã
[ ] Almoço e jantar
[ ] Lanches
[ ] Sobremesas
[ ] Bebidas
[ ] Aproveitamento integral

4. É UMA RECEITA DE APROVEITAMENTO INTEGRAL? (usa cascas, talos, folhas, sementes ou sobras?)
[ ] Sim (adicionar tag "Aproveitamento integral")
[ ] Não

5. INFORMAÇÕES RÁPIDAS:
- Tempo de preparo (em minutos): 
- Rendimento (número de porções): 

6. INGREDIENTES (informe: Quantidade | Unidade de medida | Nome do ingrediente):
- 
- 
- 
- 
- 

7. MODO DE PREPARO (em etapas numeradas, com título curto + instrução):
Etapa 01 — [Título curto]:
[Explicação clara do que fazer nesta etapa]

Etapa 02 — [Título curto]:
[Explicação clara do que fazer nesta etapa]

Etapa 03 — [Título curto]:
[Explicação clara do que fazer nesta etapa]

Etapa 04 — [Título curto]:
[Explicação clara do que fazer nesta etapa]

8. POR QUE ESSA RECEITA É SUSTENTÁVEL?
(Explique qual parte do alimento foi aproveitada e como essa receita ajuda a evitar desperdício na cozinha, sem inventar dados numéricos sem fonte.)

9. DADOS DO(A) COLABORADOR(A) (quem pesquisou/enviou a receita):
- Nome completo: 
- Turma / Papel (ex.: Estudante do 9º ano): 
- Minibio curta (1 a 2 frases sobre seu interesse em culinária/sustentabilidade): 

10. FOTOGRAFIA DO PRATO:
- Nome do arquivo enviado: (ex.: torta-talos-espinafre.jpg)
- Descrição da foto (para acessibilidade): (ex.: Fatia de torta salgada dourada com recheio verde servida em prato branco)
```

---

## 2. Exemplo Preenchido

```text
=== NOVA RECEITA — SABOR SUSTENTÁVEL ===

1. TÍTULO DA RECEITA:
Geleia caseira de casca de manga

2. DESCRIÇÃO CURTA (1 a 2 frases convidativas):
Doce cremoso, perfumado com limão e perfeito para acompanhar pães e torradas no café da manhã.

3. CATEGORIA PRINCIPAL:
[x] Café da manhã

4. É UMA RECEITA DE APROVEITAMENTO INTEGRAL?
[x] Sim (adicionar tag "Aproveitamento integral")

5. INFORMAÇÕES RÁPIDAS:
- Tempo de preparo (em minutos): 35
- Rendimento (número de porções): 8

6. INGREDIENTES:
- 3 | unidades | cascas de manga bem lavadas e picadas
- 1 | xícara (chá) | água filtrada
- 1/2 | xícara (chá) | açúcar demerara
- 1 | unidade | suco de limão
- 1 | pau | canela em rama (opcional)

7. MODO DE PREPARO:
Etapa 01 — Higienizar e picar as cascas:
Lave bem as mangas inteiras com escovinha limpa antes de descascar. Pique as cascas em tiras finas.

Etapa 02 — Cozinhar e bater:
Cozinhe as cascas com a água por 10 minutos até amaciarem. Espere amornar e bata no liquidificador até formar um creme liso.

Etapa 03 — Apurar a geleia:
Volte o creme para a panela com o açúcar, o suco de limão e a canela. Cozinhe em fogo baixo mexendo sempre por cerca de 15 minutos até encorpar.

Etapa 04 — Armazenar:
Retire a canela, transfira para um pote de vidro limpo e deixe esfriar antes de levar à geladeira.

8. POR QUE ESSA RECEITA É SUSTENTÁVEL?
As cascas de manga geralmente vão direto para o lixo após o consumo da polpa, mas concentram fibras e aroma frutado, rendendo uma geleia caseira saborosa e sem conservantes.

9. DADOS DO(A) COLABORADOR(A):
- Nome completo: Ana Clara Souza
- Turma / Papel: Estudante colaboradora
- Minibio curta: Gosta de testar receitas práticas de café da manhã para aproveitar frutas maduras da estação.

10. FOTOGRAFIA DO PRATO:
- Nome do arquivo enviado: geleia-casca-manga.jpg
- Descrição da foto (para acessibilidade): Pote de vidro com geleia dourada de casca de manga ao lado de fatias de pão
```

---

## 3. Checklist Rápido Antes de Enviar

- [ ] Escolheu exatamente uma categoria válida (`Café da manhã`, `Almoço e jantar`, `Lanches`, `Sobremesas`, `Bebidas` ou `Aproveitamento integral`).
- [ ] Todos os ingredientes possuem **quantidade**, **unidade de medida** e **nome**.
- [ ] O modo de preparo inclui orientação de **higienização** quando utiliza cascas, talos ou folhas.
- [ ] O tempo de preparo e as porções estão em números inteiros coerentes.
- [ ] O texto sustentável explica de forma clara e verdadeira o reaproveitamento do alimento.
- [ ] A descrição da foto (`alt`) descreve o prato com clareza.

---

## 4. Referência Técnica para Importação no Código (`src/data/recipes.ts`)

Para o responsável pela programação inserir a receita recebida diretamente no array `recipes`:

```ts
{
  id: '10',
  slug: 'geleia-caseira-de-casca-de-manga',
  title: 'Geleia caseira de casca de manga',
  description:
    'Doce cremoso, perfumado com limão e perfeito para acompanhar pães e torradas no café da manhã.',
  category: 'Café da manhã',
  tags: ['Café da manhã', 'Aproveitamento integral'],
  image: geleiaCascaMangaImg,
  imageAlt: 'Pote de vidro com geleia dourada de casca de manga ao lado de fatias de pão',
  prepTimeMinutes: 35,
  servings: 8,
  ingredientsCount: 5, // Deve ser igual a ingredients.length
  authorId: 'ana-clara', // ID correspondente em src/data/authors.ts
  sustainabilityInfo:
    'As cascas de manga geralmente vão direto para o lixo após o consumo da polpa, mas concentram fibras e aroma frutado, rendendo uma geleia caseira saborosa e sem conservantes.',
  ingredients: [
    { id: '10-1', amount: '3', unit: 'unidades', name: 'cascas de manga bem lavadas e picadas' },
    { id: '10-2', amount: '1', unit: 'xícara (chá)', name: 'água filtrada' },
    { id: '10-3', amount: '1/2', unit: 'xícara (chá)', name: 'açúcar demerara' },
    { id: '10-4', amount: '1', unit: 'unidade', name: 'suco de limão' },
    { id: '10-5', amount: '1', unit: 'pau', name: 'canela em rama (opcional)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Higienizar e picar as cascas',
      instruction:
        'Lave bem as mangas inteiras com escovinha limpa antes de descascar. Pique as cascas em tiras finas.',
    },
    // ... demais etapas
  ],
}
```
