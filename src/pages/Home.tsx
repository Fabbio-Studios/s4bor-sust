import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { RecipeFilters } from '../components/RecipeFilters';
import { RecipeGrid } from '../components/RecipeGrid';
import { MaterialIcon } from '../components/MaterialIcon';
import { LeafClusterIllustration, TomatoIllustration } from '../components/FoodIllustrations';
import { RECIPE_CATEGORIES, recipes } from '../data/recipes';
import { RecipeCategory } from '../types/recipe';

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>('Todas');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#recipe-book') {
      const el = document.getElementById('recipe-book');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }
    }
  }, [location.hash]);

  const scrollToRecipeBook = () => {
    const target = document.getElementById('recipe-book');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === 'Todas' ||
        recipe.category === selectedCategory ||
        recipe.tags.includes(selectedCategory);

      const matchesSearch =
        normalizedQuery.length === 0 ||
        normalizeText(recipe.title).includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedCategory !== 'Todas';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todas');
  };

  return (
    <div>
      <Hero onExploreClick={scrollToRecipeBook} />

      {/* Main Module: Recipe Book */}
      <section
        id="recipe-book"
        aria-labelledby="recipe-book-title"
        className="py-12 sm:py-16 scroll-mt-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#20231F] bg-[#FFD66B] border-2 border-[#20231F] px-3 py-1 rounded-lg shadow-[2px_2px_0px_#20231F]">
                <MaterialIcon name="menu_book" size={16} />
                <span>Livro de Receitas Digital</span>
              </div>

              <h2
                id="recipe-book-title"
                className="font-display font-bold text-3xl sm:text-4xl leading-tight text-[#20231F] text-balance"
              >
                Um mundo de sabores, sem desperdício.
              </h2>

              <p className="text-base sm:text-lg text-[#20231F]/80">
                Explore receitas que mostram como pequenos ingredientes podem render grandes ideias.
              </p>
            </div>

            {/* Subtle decorative food pair on desktop */}
            <div className="hidden md:flex items-center gap-2 shrink-0" aria-hidden="true">
              <TomatoIllustration className="w-14 h-14 animate-float-slow" />
              <LeafClusterIllustration className="w-14 h-14 animate-sway-gentle" />
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="neo-box bg-[#FFFFFF] p-5 sm:p-6 space-y-5">
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
                    className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-[#20231F] bg-[#FF8065] hover:bg-[#ff7052] border-2 border-[#20231F] rounded-lg px-3 py-1.5 shadow-[2px_2px_0px_#20231F] cursor-pointer transition-transform active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    <MaterialIcon name="close" size={16} />
                    <span>Limpar filtros</span>
                  </button>
                )}
              </div>
            </div>

            <div className="pt-1 border-t-2 border-[#20231F]/10">
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
    </div>
  );
};
