import React, { useEffect } from 'react';
import { RecipeCategory } from '../types/recipe';
import { MaterialIcon } from './MaterialIcon';

export type IngredientSpotlightId = 'todos' | 'cascas' | 'frutas' | 'paes-graos' | 'salgados';

export interface IngredientOption {
  id: IngredientSpotlightId;
  label: string;
  icon: string;
}

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  categories: RecipeCategory[];
  selectedCategory: RecipeCategory;
  onSelectCategory: (category: RecipeCategory) => void;
  countsByCategory: Record<RecipeCategory, number>;
  ingredientOptions: IngredientOption[];
  selectedIngredient: IngredientSpotlightId;
  onSelectIngredient: (id: IngredientSpotlightId) => void;
  totalMatches: number;
  hasActiveFilters: boolean;
  onClearAll: () => void;
}

export const FilterSheet: React.FC<FilterSheetProps> = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onSelectCategory,
  countsByCategory,
  ingredientOptions,
  selectedIngredient,
  onSelectIngredient,
  totalMatches,
  hasActiveFilters,
  onClearAll,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#20231F]/60 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-sheet-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg bg-[#FFFFFF] border-t-2 sm:border-2 border-[#20231F] rounded-t-[24px] sm:rounded-[18px] sm:shadow-[6px_6px_0px_#20231F] max-h-[86dvh] flex flex-col overflow-hidden animate-fade-up"
      >
        {/* Mobile grab handle */}
        <div className="sm:hidden pt-2.5 pb-1 flex justify-center shrink-0" aria-hidden="true">
          <div className="w-11 h-1.5 rounded-full bg-[#20231F]/25" />
        </div>

        {/* Sheet Header */}
        <div className="px-5 py-3.5 border-b-2 border-[#20231F] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <MaterialIcon name="tune" size={20} />
            <h2 id="filter-sheet-title" className="font-display font-bold text-lg text-[#20231F]">
              Filtrar receitas
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onClearAll}
                className="font-display text-xs font-bold underline underline-offset-4 text-[#20231F]/80 hover:text-[#20231F] px-2 py-2 min-h-[40px] cursor-pointer"
              >
                Limpar tudo
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar filtros"
              className="w-10 h-10 rounded-[10px] border-2 border-[#20231F] bg-[#F7F5ED] hover:bg-[#FFD66B] flex items-center justify-center text-[#20231F] cursor-pointer"
            >
              <MaterialIcon name="close" size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Sections */}
        <div className="p-5 space-y-6 overflow-y-auto flex-1">
          {/* Category Section */}
          <div className="space-y-2.5">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
              Categoria
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                const count = countsByCategory[cat] ?? 0;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onSelectCategory(cat)}
                    className={`flex items-center justify-between gap-2 px-3 py-2.5 min-h-[44px] rounded-[12px] border-2 border-[#20231F] font-display text-xs sm:text-sm font-bold text-left transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#B8E36A] text-[#20231F] shadow-[2px_2px_0px_#20231F]'
                        : 'bg-[#F7F5ED] text-[#20231F] hover:bg-[#FFD66B]'
                    }`}
                  >
                    <span className="truncate">{cat}</span>
                    <span className="text-[11px] tabular-nums text-[#20231F]/75 shrink-0">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ingredient Focus Section */}
          <div className="space-y-2.5">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
              Ingrediente principal
            </p>
            <div className="flex flex-wrap gap-2.5">
              {ingredientOptions.map((item) => {
                const active = selectedIngredient === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onSelectIngredient(item.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-[12px] border-2 border-[#20231F] font-display text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#FF8065] text-[#20231F] shadow-[2px_2px_0px_#20231F]'
                        : 'bg-[#FFFFFF] text-[#20231F] shadow-[2px_2px_0px_#20231F] hover:bg-[#FFD66B]'
                    }`}
                  >
                    <MaterialIcon name={item.icon} size={17} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sticky Sheet Footer CTA */}
        <div className="p-4 bg-[#F7F5ED] border-t-2 border-[#20231F] shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={onClose}
            className="neo-btn w-full bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] py-3 min-h-[48px] text-sm sm:text-base tabular-nums"
          >
            <span>
              Mostrar {totalMatches}{' '}
              {totalMatches === 1 ? 'receita' : 'receitas'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
