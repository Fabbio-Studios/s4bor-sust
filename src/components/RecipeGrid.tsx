import React from 'react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import { MaterialIcon } from './MaterialIcon';
import { BroccoliIllustration, CarrotIllustration } from './FoodIllustrations';

interface RecipeGridProps {
  recipes: Recipe[];
  onClearFilters: () => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onClearFilters }) => {
  if (recipes.length === 0) {
    return (
      <div className="neo-box bg-[#FFFFFF] p-6 sm:p-12 text-center max-w-2xl mx-auto my-6 animate-fade-up">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CarrotIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-float-slow" />
          <BroccoliIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-float-delayed" />
        </div>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#20231F] mb-2">
          Nenhuma receita encontrada
        </h3>
        <p className="text-sm sm:text-base text-[#20231F]/80 max-w-md mx-auto mb-6">
          Não encontramos preparos com essa combinação de busca e categoria. Que tal limpar os
          filtros para explorar todo o livro?
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="neo-btn bg-[#FFD66B] hover:bg-[#ffce4d] text-[#20231F] px-5 py-2.5 min-h-[44px] text-sm"
        >
          <MaterialIcon name="close" size={18} />
          <span>Limpar filtros</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-fade-up">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
