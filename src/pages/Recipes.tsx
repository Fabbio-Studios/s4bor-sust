import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { RecipeFilters } from '../components/RecipeFilters';
import { RecipeGrid } from '../components/RecipeGrid';
import { MaterialIcon } from '../components/MaterialIcon';
import {
  BroccoliIllustration,
  CarrotIllustration,
  CitrusIllustration,
  LeafClusterIllustration,
  PotIllustration,
  TomatoIllustration,
} from '../components/FoodIllustrations';
import { RECIPE_CATEGORIES, recipes } from '../data/recipes';
import { Recipe, RecipeCategory } from '../types/recipe';

type IngredientSpotlightId = 'todos' | 'cascas' | 'frutas' | 'paes-graos' | 'salgados';

interface IngredientSpotlight {
  id: IngredientSpotlightId;
  label: string;
  matcher: (recipe: Recipe) => boolean;
}

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function recipeText(recipe: Recipe): string {
  return normalizeText(
    `${recipe.title} ${recipe.description} ${recipe.ingredients.map((i) => i.name).join(' ')}`
  );
}

const INGREDIENT_SPOTLIGHTS: IngredientSpotlight[] = [
  {
    id: 'todos',
    label: 'Tudo',
    matcher: () => true,
  },
  {
    id: 'cascas',
    label: 'Cascas',
    matcher: (r) => recipeText(r).includes('casca'),
  },
  {
    id: 'frutas',
    label: 'Frutas',
    matcher: (r) => {
      const text = recipeText(r);
      return (
        text.includes('banana') ||
        text.includes('manga') ||
        text.includes('melancia') ||
        text.includes('laranja')
      );
    },
  },
  {
    id: 'paes-graos',
    label: 'Pães & grãos',
    matcher: (r) => {
      const text = recipeText(r);
      return text.includes('pao') || text.includes('arroz') || text.includes('aveia');
    },
  },
  {
    id: 'salgados',
    label: 'Salgados',
    matcher: (r) => r.category === 'Almoço e jantar' || r.category === 'Lanches',
  },
];

export const Recipes: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('categoria') as RecipeCategory | null;
  const shouldFocusSearch = searchParams.get('foco') === 'busca';

  const validInitialCategory: RecipeCategory =
    initialCategoryParam && RECIPE_CATEGORIES.includes(initialCategoryParam)
      ? initialCategoryParam
      : 'Todas';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>(validInitialCategory);
  const [selectedSpotlight, setSelectedSpotlight] = useState<IngredientSpotlightId>('todos');

  useEffect(() => {
    if (shouldFocusSearch) {
      const input = document.getElementById('recipe-search');
      if (input) {
        window.setTimeout(() => input.focus(), 120);
      }
    }
  }, [shouldFocusSearch]);

  const countsByCategory = useMemo(() => {
    const counts = {} as Record<RecipeCategory, number>;
    for (const category of RECIPE_CATEGORIES) {
      if (category === 'Todas') {
        counts[category] = recipes.length;
      } else {
        counts[category] = recipes.filter(
          (r) => r.category === category || r.tags.includes(category)
        ).length;
      }
    }
    return counts;
  }, []);

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);
    const activeSpotlight =
      INGREDIENT_SPOTLIGHTS.find((s) => s.id === selectedSpotlight) ?? INGREDIENT_SPOTLIGHTS[0];

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === 'Todas' ||
        recipe.category === selectedCategory ||
        recipe.tags.includes(selectedCategory);

      const matchesSearch =
        normalizedQuery.length === 0 ||
        normalizeText(recipe.title).includes(normalizedQuery);

      const matchesSpotlight = activeSpotlight.matcher(recipe);

      return matchesCategory && matchesSearch && matchesSpotlight;
    });
  }, [searchQuery, selectedCategory, selectedSpotlight]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedCategory !== 'Todas' ||
    selectedSpotlight !== 'todos';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todas');
    setSelectedSpotlight('todos');
  };

  const renderSpotlightIllustration = (id: IngredientSpotlightId) => {
    switch (id) {
      case 'cascas':
        return <CitrusIllustration className="w-11 h-11 sm:w-12 sm:h-12" />;
      case 'frutas':
        return <TomatoIllustration className="w-11 h-11 sm:w-12 sm:h-12" />;
      case 'paes-graos':
        return <BroccoliIllustration className="w-11 h-11 sm:w-12 sm:h-12" />;
      case 'salgados':
        return <CarrotIllustration className="w-11 h-11 sm:w-12 sm:h-12" />;
      case 'todos':
      default:
        return <PotIllustration className="w-11 h-11 sm:w-12 sm:h-12" />;
    }
  };

  return (
    <section
      id="recipe-book"
      aria-labelledby="recipe-book-title"
      className="py-6 sm:py-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
              Livro de receitas digital
            </p>

            <h1
              id="recipe-book-title"
              className="font-display font-bold text-2xl sm:text-4xl leading-tight text-[#20231F] text-balance"
            >
              Todas as receitas da turma
            </h1>

            <p className="text-sm sm:text-lg text-[#20231F]/80">
              Pesquise pelo nome, filtre por categoria ou escolha o ingrediente que você quer
              reaproveitar.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0" aria-hidden="true">
            <TomatoIllustration className="w-14 h-14 animate-float-slow" />
            <LeafClusterIllustration className="w-14 h-14 animate-sway-gentle" />
          </div>
        </header>

        {/* Search, Ingredient Spotlight Cards & Category Filters */}
        <div
          data-tour="recipes-search"
          className="neo-box bg-[#FFFFFF] p-4 sm:p-6 space-y-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
              <p
                aria-live="polite"
                className="font-display text-sm font-bold text-[#20231F] tabular-nums"
              >
                {filteredRecipes.length}{' '}
                {filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-[#20231F] bg-[#FF8065] hover:bg-[#ff7052] border-2 border-[#20231F] rounded-lg px-3 py-1.5 min-h-[44px] shadow-[2px_2px_0px_#20231F] cursor-pointer transition-transform active:translate-x-[1px] active:translate-y-[1px]"
                >
                  <MaterialIcon name="close" size={16} />
                  <span>Limpar filtros</span>
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Ingredient Spotlight Cards */}
          <div className="space-y-2">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
              Explorar por tipo de ingrediente
            </p>
            <div
              className="flex items-stretch gap-3 overflow-x-auto pt-1 pb-2.5 px-1 -mx-1 snap-x"
              role="group"
              aria-label="Filtrar por tipo de ingrediente"
            >
              {INGREDIENT_SPOTLIGHTS.map((item) => {
                const isActive = selectedSpotlight === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedSpotlight(item.id)}
                    aria-pressed={isActive}
                    className={`snap-start shrink-0 min-w-[98px] sm:min-w-[116px] flex flex-col items-center justify-between gap-2 p-2.5 sm:p-3 rounded-[14px] border-2 border-[#20231F] transition-[transform,box-shadow,background-color] duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#FF8065] text-[#20231F] shadow-[2px_2px_0px_#20231F] translate-x-[1px] translate-y-[1px]'
                        : 'bg-[#F7F5ED] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B]'
                    }`}
                  >
                    <div className="bg-[#FFFFFF] border-2 border-[#20231F] rounded-xl p-1.5 flex items-center justify-center">
                      {renderSpotlightIllustration(item.id)}
                    </div>
                    <span className="font-display text-xs font-bold whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t-2 border-[#20231F]/10">
            <RecipeFilters
              categories={RECIPE_CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              countsByCategory={countsByCategory}
            />
          </div>
        </div>

        {/* Recipe Grid */}
        <RecipeGrid recipes={filteredRecipes} onClearFilters={handleClearFilters} />
      </div>
    </section>
  );
};
