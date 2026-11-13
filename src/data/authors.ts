import { Author } from '../types/recipe';

export const authors: Record<string, Author> = {
  marina: {
    id: 'marina',
    name: 'Marina Oliveira',
    role: 'Estudante de Nutrição',
    bio: 'Apaixonada por confeitaria caseira e experimentos com cascas e sementes. Acredita que a cozinha escolar e familiar é o melhor laboratório de sustentabilidade.',
    sharedRecipesCount: 6,
    initials: 'MO',
    accentColor: 'secondary',
    motif: 'citrus',
  },
  lucas: {
    id: 'lucas',
    name: 'Lucas Ferreira',
    role: 'Professor de Ciências e Horta Escolar',
    bio: 'Coordena oficinas de educação ambiental e compostagem com estudantes. Transforma talos, folhas e sobras do dia a dia em preparos nutritivos.',
    sharedRecipesCount: 8,
    initials: 'LF',
    accentColor: 'primary',
    motif: 'sprout',
  },
  beatriz: {
    id: 'beatriz',
    name: 'Beatriz Santos',
    role: 'Estudante de Gastronomia',
    bio: 'Pesquisa técnicas tradicionais da cozinha brasileira para evitar o desperdício sem abrir mão de textura, cor e sabor marcante no prato.',
    sharedRecipesCount: 5,
    initials: 'BS',
    accentColor: 'accent',
    motif: 'pot',
  },
  rafael: {
    id: 'rafael',
    name: 'Rafael Mendes',
    role: 'Educador Ambiental',
    bio: 'Organiza feiras de troca de receitas no bairro e adora mostrar para as famílias como ingredientes simples rendem muito mais quando olhamos para o alimento por inteiro.',
    sharedRecipesCount: 4,
    initials: 'RM',
    accentColor: 'primary',
    motif: 'carrot',
  },
  camila: {
    id: 'camila',
    name: 'Camila Costa',
    role: 'Monitora de Culinária Criativa',
    bio: 'Entusiasta de lanches práticos e cafés da manhã rápidos. Adora testar versões crocantes com partes de frutas e legumes que normalmente iriam para o lixo.',
    sharedRecipesCount: 7,
    initials: 'CC',
    accentColor: 'secondary',
    motif: 'leaf',
  },
};

export function getAuthorById(authorId: string): Author {
  return authors[authorId] || authors.marina;
}
