import React from 'react';
import { RecipeCategory } from '../types/recipe';

interface RecipeFiltersProps {
  categories: RecipeCategory[];
  selectedCategory: RecipeCategory;
  onSelectCategory: (category: RecipeCategory) => void;
  countsByCategory: Record<RecipeCategory, number>;
}

export const RecipeFilters: React.FC<RecipeFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  countsByCategory,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filtrar receitas por categoria"
      className="flex flex-wrap items-center gap-2.5"
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        const count = countsByCategory[category] ?? 0;

        return (
          <button
            key={category}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-[11px] border-2 border-[#20231F] font-display text-sm font-bold whitespace-nowrap shrink-0 transition-[transform,box-shadow,background-color] duration-150 cursor-pointer ${
              isActive
                ? 'bg-[#B8E36A] text-[#20231F] shadow-[2px_2px_0px_#20231F] translate-x-[1px] translate-y-[1px]'
                : 'bg-[#FFFFFF] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#20231F]'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-xs tabular-nums px-1.5 py-0.5 rounded-md border border-[#20231F] ${
                isActive ? 'bg-[#FFFFFF]' : 'bg-[#F7F5ED]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
