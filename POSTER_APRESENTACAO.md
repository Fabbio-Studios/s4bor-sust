# Sabor Sustentável — Guia de Conteúdo para Pôster de Apresentação

Este documento reúne, de forma organizada e pronta para diagramação, as informações do aplicativo **Sabor Sustentável** para montagem do pôster de apresentação do projeto.

> **Dica de uso:** Os campos entre colchetes (`[Nome do(a) ...]`) podem ser substituídos diretamente pelos nomes reais da sua equipe antes da impressão ou diagramação (Canva, Figma, PowerPoint ou Google Slides).

---

## 1. Cabeçalho Sugerido para o Pôster

- **Título principal:** Sabor Sustentável
- **Subtítulo:** Livro digital e colaborativo de receitas sustentáveis
- **Chamada de destaque:** *Pequenas escolhas. Grandes transformações à mesa.*
- **Instituição / Turma:** `[Nome da Escola / Instituição — Turma / Ano]`
- **Autoria:** `[Seu Nome]` (Desenvolvimento e Programação), `[Nomes dos Alunos]` (Curadoria e Conteúdo) e Prof. `[Nome do(a) Professor(a)]` (Orientação)

---

## 2. Contextualização e Objetivo do Projeto

### O problema
Grande parte de cascas, talos, folhas e sobras seguras do dia a dia acaba sendo descartada por falta de ideias práticas de reaproveitamento na cozinha doméstica e escolar.

### A proposta
O **Sabor Sustentável** é uma demonstração de livro de receitas digital e colaborativo criado com foco educacional e ambiental. O aplicativo mostra como a tecnologia pode aproximar estudantes, professores e famílias da alimentação consciente, incentivando o **aproveitamento integral dos alimentos** e a **redução do desperdício**.

### Público-alvo
- Estudantes e professores em projetos de educação ambiental e tecnologia.
- Famílias e pessoas interessadas em culinária prática, econômica e sustentável.

---

## 3. Papéis no Projeto (Divisão da Equipe)

### Desenvolvimento e Programação — `[Seu Nome]`
Responsável por toda a construção técnica e visual do aplicativo:
- Estruturação da arquitetura front-end em **React**, **TypeScript** e **Vite**.
- Criação da identidade visual **Neo-brutalista** (alto contraste, bordas marcantes, tipografia expressiva e paleta verde, amarela e coral) voltada principalmente para uso no celular.
- Desenvolvimento da navegação por rotas (`/`, `/receitas/:slug`, `/salvas`, `/sobre`) e da barra inferior fixa para uso com uma mão no smartphone.
- Programação do motor de busca em tempo real, filtros combinados por categoria e por tipo de ingrediente, checklist interativo de ingredientes e salvamento local de receitas favoritas.
- Criação das ilustrações vetoriais em SVG, animações suaves em CSS e garantia de acessibilidade e responsividade.

### Curadoria e Alimentação do Sistema — Alunos (`[Nomes dos Alunos]`)
Responsáveis pela pesquisa culinária e pela alimentação do catálogo com conteúdo real e acessível:
- Pesquisa e seleção de receitas com aproveitamento integral (cascas, talos, folhas e sobras).
- Levantamento e padronização das listas de ingredientes, quantidades, porções e tempos de preparo.
- Redação clara do modo de preparo em etapas numeradas para facilitar o acompanhamento durante o cozimento.
- Elaboração das explicações educativas (*"Por que essa receita é sustentável?"*) ligando cada prato à redução do desperdício.
- Criação dos perfis dos colaboradores e revisão dos textos para linguagem acolhedora.
- Testes de navegação e leitura no celular para validar a usabilidade.

### Orientação e Direcionamento — Professor(a) (`[Nome do(a) Professor(a)]`)
Responsável pelo acompanhamento pedagógico e metodológico:
- Definição da proposta educativa e ambiental do projeto.
- Orientação sobre a conexão entre tecnologia, cidadania e hábitos alimentares conscientes.
- Revisão pedagógica do conteúdo das receitas e validação das etapas do protótipo para apresentação.

---

## 4. Fases de Desenvolvimento

| Fase | Nome da Etapa | O que foi realizado | Responsáveis |
| :--- | :--- | :--- | :--- |
| **01** | **Pesquisa e planejamento** | Identificação da importância da alimentação consciente, definição do público-alvo e escolha de como conectar tecnologia e sustentabilidade. | Professor(a), Alunos e Desenvolvedor |
| **02** | **Organização das ideias** | Definição da estrutura do livro digital, categorias das receitas, fluxo de navegação mobile (navbar inferior) e organização dos dados. | Desenvolvedor e Alunos |
| **03** | **Desenvolvimento e alimentação** | Programação da interface responsiva, filtros, checklists e páginas; simultaneamente, coleta, redação e estruturação das 9 receitas e informações sustentáveis no sistema. | Desenvolvedor (código) + Alunos (receitas) |
| **04** | **Testes e apresentação** | Revisão de leitura no celular, ajustes de animações e acessibilidade, registro da turma e preparação do material de demonstração navegável. | Toda a equipe |

---

## 5. Funcionalidades do Aplicativo

### 1. Abertura e Experiência Mobile-First
- **Hero ilustrado e animado:** Apresenta a proposta do app logo na abertura com ilustrações vetoriais de colheita e vegetais (cenoura, brócolis, tomate, berinjela e panela com vapor), animações suaves (`fade-up` e `floatSlow`) e suporte a redução de movimento (`prefers-reduced-motion`).
- **Barra de navegação inferior (Mobile):** Fixada na base da tela do celular com ícones claros do Google Material Symbols para acesso rápido com o polegar:
  - **Início** (`/`)
  - **Receitas** (`/#recipe-book`)
  - **Salvas** (`/salvas`, com contador de receitas favoritadas)
  - **Sobre** (`/sobre`)

### 2. Livro de Receitas Interativo (Página Inicial)
- **Busca em tempo real:** Campo *"Qual receita você está procurando?"* que filtra receitas instantaneamente pelo nome, ignorando diferenças de acentuação e maiúsculas/minúsculas.
- **Exploração por tipo de ingrediente:** Carrossel horizontal de cartões visuais (*Tudo*, *Cascas*, *Talos & folhas*, *Frutas*, *Raízes & grãos*) para descoberta rápida no celular.
- **Filtros por categoria:** Abas interativas para *Todas*, *Café da manhã*, *Almoço e jantar*, *Lanches*, *Sobremesas*, *Bebidas* e *Aproveitamento integral*.
- **Filtragem combinada:** Busca textual, tipo de ingrediente e categoria funcionam juntos sem recarregar a página, com contador dinâmico de resultados, botão *Limpar filtros* e estado vazio ilustrado.

### 3. Página Individual da Receita (`/receitas/:slug`)
- **Navegação contextual:** Breadcrumb (*Início / Receitas / Nome da receita*) e botão de retorno ao catálogo.
- **Ficha técnica rápida:** Tempo de preparo, rendimento em porções e quantidade de ingredientes com fotografia do prato em destaque.
- **Checklist interativo de ingredientes:** Cada ingrediente possui caixa de seleção para o usuário marcar o que já separou na cozinha, com barra/contador de progresso e opção de desmarcar.
- **Modo de preparo em etapas numeradas:** Passos organizados (`01`, `02`, `03`, `04`) com título curto e instrução detalhada.
- **Destaque educativo:** Seção *"Por que essa receita é sustentável?"* explicando o aproveitamento de cada ingrediente.
- **Crédito ao colaborador:** Seção *"Quem compartilhou essa receita?"* com apresentação do autor/colaborador.

### 4. Receitas Salvas (`/salvas`)
- **Favoritos no dispositivo:** Botão de marcador (`bookmark`) disponível tanto nos cards do catálogo quanto na página da receita, armazenado localmente via `localStorage` para consulta rápida sem precisar de login ou cadastro.

### 5. Página Sobre Nós (`/sobre`)
- **História e propósito:** Explica a união entre educação ambiental, criatividade e tecnologia.
- **Espaço da turma:** Área dedicada à fotografia real da turma colaboradora (`/public/images/turma.jpg`) e apresentação das 4 etapas de criação do projeto.

---

## 6. Catálogo Demonstrativo (9 Receitas Alimentadas no Sistema)

| # | Receita | Categoria | Parte Aproveitada | Tempo | Porções |
| :-: | :--- | :--- | :--- | :-: | :-: |
| 1 | **Bolo de casca de banana** | Sobremesas / Aproveitamento integral | Cascas de banana madura | 40 min | 10 |
| 2 | **Farofa de talos de vegetais** | Almoço e jantar / Aproveitamento integral | Talos de couve, brócolis, agrião ou salsa | 20 min | 6 |
| 3 | **Suco de casca de abacaxi** | Bebidas / Aproveitamento integral | Casca inteira do abacaxi | 15 min | 5 |
| 4 | **Bolinho de arroz reaproveitado** | Lanches | Arroz cozido amanhecido | 30 min | 4 |
| 5 | **Pesto de folhas de cenoura** | Almoço e jantar / Aproveitamento integral | Rama/folhas frescas da cenoura | 10 min | 6 |
| 6 | **Doce de casca de melancia** | Sobremesas / Aproveitamento integral | Parte branca da casca da melancia | 55 min | 8 |
| 7 | **Sopa de legumes com aproveitamento integral** | Almoço e jantar / Aproveitamento integral | Abóbora e cenoura com casca + talos | 35 min | 5 |
| 8 | **Panqueca de banana** | Café da manhã | Bananas bem maduras | 15 min | 2 |
| 9 | **Chips de casca de batata** | Lanches / Aproveitamento integral | Cascas de batata assadas | 25 min | 3 |

---

## 7. Tecnologias Utilizadas (Para Bloco Técnico do Pôster)

- **Interface e Componentes:** React 19 + TypeScript
- **Build e Servidor de Desenvolvimento:** Vite
- **Estilização:** Tailwind CSS v4 + Design System Neo-brutalista próprio
- **Navegação:** React Router DOM (rotas sem recarregamento)
- **Tipografia e Ícones:** Google Fonts (*Space Grotesk* e *DM Sans*) + Google Material Symbols Rounded
- **Arquitetura:** Aplicação front-end demonstrativa com dados locais estruturados (`recipes.ts` e `authors.ts`), sem necessidade de banco de dados ou cadastro de usuário

---

## 8. Sugestão de Diagramação para o Pôster (3 Colunas)

```text
+-------------------------------------------------------------------------+
|  [LOGO]  SABOR SUSTENTÁVEL — Livro Digital de Receitas Sustentáveis     |
|  "Pequenas escolhas. Grandes transformações à mesa."                    |
|  Escola / Turma | Desenvolvedor | Alunos Colaboradores | Professor(a)   |
+-----------------------+-----------------------+-------------------------+
| COLUNA 1              | COLUNA 2              | COLUNA 3                |
|                       |                       |                         |
| 1. O PROJETO          | 3. FUNCIONALIDADES    | 5. RECEITAS NO APP      |
| - Problema e objetivo | - Prints das telas    | - Lista das 9 receitas  |
| - Educação ambiental  |   no celular          | - Partes aproveitadas   |
|                       | - Navbar inferior     |                         |
| 2. EQUIPE E PAPÉIS    | - Busca + filtros     | 6. TECNOLOGIAS          |
| - Programação (Você)  | - Checklist na receita| - React, TS, Tailwind   |
| - Receitas (Alunos)   | - Favoritos locais    |                         |
| - Orientação (Prof.)  |                       | 7. CONCLUSÃO / QR CODE  |
|                       | 4. FASES DE CRIAÇÃO   | - "Menos desperdício.   |
|                       | - Etapas 01 a 04      |   Mais consciência.     |
|                       |                       |   Mais sabor."          |
+-----------------------+-----------------------+-------------------------+
```

### Frases Curtas Prontas para Destaque Visual no Pôster
- *"Pequenas escolhas. Grandes transformações à mesa."*
- *"Um mundo de sabores, sem desperdício."*
- *"Menos desperdício. Mais consciência. Mais sabor."*
- *"Transformando ingredientes em possibilidades."*
