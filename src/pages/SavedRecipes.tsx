import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { RecipeCard } from '../components/RecipeCard';
import { MaterialIcon } from '../components/MaterialIcon';
import { CarrotIllustration, CitrusIllustration } from '../components/FoodIllustrations';

export const SavedRecipes: React.FC = () => {
  const { savedIds } = useSavedRecipes();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const savedList = recipes.filter((r) => savedIds.includes(r.id));

  return (
    <div className="py-6 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <header data-tour="saved-page-header" className="space-y-2.5 max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
            Favoritas no seu aparelho
          </p>

          <h1 className="font-display font-bold text-2xl sm:text-4xl text-[#20231F] text-balance">
            Receitas salvas para preparar depois.
          </h1>

          <p className="text-sm sm:text-base text-[#20231F]/80">
            {savedList.length > 0
              ? `Você tem ${savedList.length} ${
                  savedList.length === 1 ? 'receita salva' : 'receitas salvas'
                } neste dispositivo.`
              : 'Toque no ícone de marcador em qualquer receita para guardar aqui e acessar rapidinho pelo celular.'}
          </p>
        </header>

        {savedList.length === 0 ? (
          <div className="neo-box bg-[#FFFFFF] p-6 sm:p-12 text-center max-w-xl mx-auto space-y-5 animate-fade-up">
            <div className="flex items-center justify-center gap-3">
              <CitrusIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-sway-gentle" />
              <CarrotIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-float-slow" />
            </div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#20231F]">
              Nenhuma receita salva ainda
            </h2>
            <p className="text-sm sm:text-base text-[#20231F]/80">
              Explore o livro colaborativo e marque suas receitas favoritas para tê-las sempre à mão
              na cozinha.
            </p>
            <div className="pt-1">
              <Link
                to="/receitas"
                className="neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-6 py-3 min-h-[46px] text-sm"
              >
                <MaterialIcon name="menu_book" size={18} />
                <span>Explorar receitas</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-fade-up">
            {savedList.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
