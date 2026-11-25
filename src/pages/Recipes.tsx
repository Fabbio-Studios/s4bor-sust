import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { RecipeFilters } from '../components/RecipeFilters';
import {
  FilterSheet,
  IngredientOption,
  IngredientSpotlightId,
} from '../components/FilterSheet';
import { RecipeGrid } from '../components/RecipeGrid';
import { Pagination } from '../components/Pagination';
import { MaterialIcon } from '../components/MaterialIcon';
import { LeafClusterIllustration, TomatoIllustration } from '../components/FoodIllustrations';
import { RECIPE_CATEGORIES, recipes } from '../data/recipes';
import { Recipe, RecipeCategory } from '../types/recipe';

const PAGE_SIZE = 3;

interface IngredientSpotlight extends IngredientOption {
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

const INGREDIENT_OPTIONS: IngredientSpotlight[] = [
  {
    id: 'todos',
    label: 'Todos',
    icon: 'restaurant',
    matcher: () => true,
  },
  {
    id: 'cascas',
    label: 'Cascas',
    icon: 'eco',
    matcher: (r) => recipeText(r).includes('casca'),
  },
  {
    id: 'frutas',
    label: 'Frutas',
    icon: 'nutrition',
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
    label: 'Pães e grãos',
    icon: 'bakery_dining',
    matcher: (r) => {
      const text = recipeText(r);
      return text.includes('pao') || text.includes('arroz') || text.includes('aveia');
    },
  },
  {
    id: 'salgados',
    label: 'Salgados',
    icon: 'local_dining',
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
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientSpotlightId>('todos');
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
    const activeIngredient =
      INGREDIENT_OPTIONS.find((s) => s.id === selectedIngredient) ?? INGREDIENT_OPTIONS[0];

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === 'Todas' ||
        recipe.category === selectedCategory ||
        recipe.tags.includes(selectedCategory);

      const matchesSearch =
        normalizedQuery.length === 0 ||
        normalizeText(recipe.title).includes(normalizedQuery);

      const matchesIngredient = activeIngredient.matcher(recipe);

      return matchesCategory && matchesSearch && matchesIngredient;
    });
  }, [searchQuery, selectedCategory, selectedIngredient]);

  // Reset to page 1 whenever filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedIngredient]);

  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedRecipes = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredRecipes.slice(start, start + PAGE_SIZE);
  }, [filteredRecipes, safePage]);

  const activeFiltersCount =
    (selectedCategory !== 'Todas' ? 1 : 0) + (selectedIngredient !== 'todos' ? 1 : 0);

  const hasActiveFilters = searchQuery.trim().length > 0 || activeFiltersCount > 0;

  const activeIngredientLabel =
    INGREDIENT_OPTIONS.find((o) => o.id === selectedIngredient)?.label ?? '';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todas');
    setSelectedIngredient('todos');
    setCurrentPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    const section = document.getElementById('recipe-book');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="recipe-book"
      aria-labelledby="recipe-book-title"
      className="py-5 sm:py-10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {/* Compact Page Header */}
        <header className="flex items-end justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
              Livro de receitas digital
            </p>
            <h1
              id="recipe-book-title"
              className="font-display font-bold text-2xl sm:text-4xl leading-tight text-[#20231F] text-balance"
            >
              Todas as receitas da turma
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0" aria-hidden="true">
            <TomatoIllustration className="w-12 h-12 animate-float-slow" />
            <LeafClusterIllustration className="w-12 h-12 animate-sway-gentle" />
          </div>
        </header>

        {/* Streamlined Search + Filter Trigger + Single-Row Category Strip */}
        <div data-tour="recipes-search" className="space-y-3">
          <div className="flex items-center gap-2.5">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <button
              type="button"
              onClick={() => setIsFilterSheetOpen(true)}
              aria-label="Abrir filtros de categoria e ingrediente"
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 min-w-[46px] min-h-[46px] rounded-[13px] border-2 border-[#20231F] font-display text-xs sm:text-sm font-bold shrink-0 cursor-pointer transition-[transform,box-shadow,background-color] duration-150 active:translate-x-[1px] active:translate-y-[1px] ${
                activeFiltersCount > 0
                  ? 'bg-[#FFD66B] text-[#20231F] shadow-[3px_3px_0px_#20231F]'
                  : 'bg-[#FFFFFF] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B]'
              }`}
            >
              <MaterialIcon name="tune" size={20} />
              <span className="hidden sm:inline">Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="min-w-[19px] h-[19px] px-1 rounded-full bg-[#20231F] text-[#FFFFFF] text-[11px] font-bold flex items-center justify-center tabular-nums">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          <RecipeFilters
            categories={RECIPE_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            countsByCategory={countsByCategory}
          />

          {/* Subtle Results & Active Filter Summary */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-xs sm:text-sm">
            <p aria-live="polite" className="font-display font-bold text-[#20231F]/80 tabular-nums">
              {filteredRecipes.length}{' '}
              {filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
              {selectedIngredient !== 'todos' && (
                <span className="font-medium text-[#20231F]/70">
                  {' '}
                  · Ingrediente: {activeIngredientLabel}
                </span>
              )}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 font-display text-xs font-bold text-[#20231F] underline underline-offset-4 hover:text-[#20231F]/75 min-h-[36px] px-1 cursor-pointer"
              >
                <MaterialIcon name="close" size={15} />
                <span>Limpar filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Paginated Recipe Grid */}
        <RecipeGrid recipes={paginatedRecipes} onClearFilters={handleClearFilters} />

        {/* Neo-Brutalist Pagination */}
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          totalItems={filteredRecipes.length}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Mobile Bottom Sheet / Desktop Filter Modal */}
      <FilterSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        categories={RECIPE_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        countsByCategory={countsByCategory}
        ingredientOptions={INGREDIENT_OPTIONS}
        selectedIngredient={selectedIngredient}
        onSelectIngredient={setSelectedIngredient}
        totalMatches={filteredRecipes.length}
        hasActiveFilters={hasActiveFilters}
        onClearAll={handleClearFilters}
      />
    </section>
  );
};
