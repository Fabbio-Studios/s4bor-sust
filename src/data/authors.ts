import { Author } from '../types/recipe';

export const authors: Record<string, Author> = {
  paulo: {
    id: 'paulo',
    name: 'Paulo',
    role: 'Estudante · 7º ano A',
    bio: 'Colaborador do Sabor Sustentável pelo 7º ano A. Trouxe uma receita criativa de doce que transforma cascas de banana em brigadeiro.',
    sharedRecipesCount: 1,
    initials: 'PA',
    accentColor: 'secondary',
    motif: 'citrus',
  },
  'anna-livia': {
    id: 'anna-livia',
    name: 'Anna Lívia',
    role: 'Estudante · 7º ano A',
    bio: 'Colaboradora do Sabor Sustentável pelo 7º ano A. Selecionou preparos variados — de bolinhos rápidos e carne de casca de banana a pudim de pão e doces sem desperdício.',
    sharedRecipesCount: 5,
    initials: 'AL',
    accentColor: 'primary',
    motif: 'sprout',
  },
  geandro: {
    id: 'geandro',
    name: 'Geandro',
    role: 'Estudante · 7º ano A',
    bio: 'Colaborador do Sabor Sustentável pelo 7º ano A. Compartilhou uma receita refrescante que aproveita frutas maduras e forminhas reutilizáveis.',
    sharedRecipesCount: 1,
    initials: 'GE',
    accentColor: 'accent',
    motif: 'citrus',
  },
  'leticia-dias': {
    id: 'leticia-dias',
    name: 'Letícia Dias',
    role: 'Estudante · 7º ano A',
    bio: 'Colaboradora do Sabor Sustentável pelo 7º ano A. Contribuiu com uma receita prática para reaproveitar sobras de arroz cozido no lanche.',
    sharedRecipesCount: 1,
    initials: 'LD',
    accentColor: 'secondary',
    motif: 'pot',
  },
  'guilherme-dias': {
    id: 'guilherme-dias',
    name: 'Guilherme Dias',
    role: 'Estudante · 7º ano A',
    bio: 'Colaborador do Sabor Sustentável pelo 7º ano A. Compartilhou um petisco crocante feito com cascas de batata assadas no forno.',
    sharedRecipesCount: 1,
    initials: 'GD',
    accentColor: 'primary',
    motif: 'carrot',
  },
  girliane: {
    id: 'girliane',
    name: 'Girliane',
    role: 'Estudante · 7º ano A',
    bio: 'Colaboradora do Sabor Sustentável pelo 7º ano A. Trouxe receitas simples e econômicas para o café da manhã usando cascas de banana e pão amanhecido.',
    sharedRecipesCount: 2,
    initials: 'GI',
    accentColor: 'accent',
    motif: 'leaf',
  },
};

export function getAuthorById(authorId: string): Author {
  return authors[authorId] || authors['anna-livia'];
}
