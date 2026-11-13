export type RecipeCategory =
  | 'Todas'
  | 'Café da manhã'
  | 'Almoço e jantar'
  | 'Lanches'
  | 'Sobremesas'
  | 'Bebidas'
  | 'Aproveitamento integral';

export interface Ingredient {
  id: string;
  amount: string;
  unit: string;
  name: string;
}

export interface PreparationStep {
  stepNumber: number;
  title: string;
  instruction: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  sharedRecipesCount: number;
  avatarUrl?: string;
  initials: string;
  accentColor: 'primary' | 'secondary' | 'accent';
  motif: 'leaf' | 'carrot' | 'pot' | 'citrus' | 'sprout';
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Exclude<RecipeCategory, 'Todas'>;
  tags: Exclude<RecipeCategory, 'Todas'>[];
  image: string;
  imageAlt: string;
  prepTimeMinutes: number;
  servings: number;
  ingredientsCount: number;
  ingredients: Ingredient[];
  steps: PreparationStep[];
  sustainabilityInfo: string;
  authorId: string;
}
