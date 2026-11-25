import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { getAuthorById } from '../data/authors';
import { MaterialIcon } from './MaterialIcon';
import { AuthorAvatar } from './AuthorAvatar';
import { useSavedRecipes } from '../hooks/useSavedRecipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const { isSaved, toggleSave } = useSavedRecipes();
  const saved = isSaved(recipe.id);
  const author = getAuthorById(recipe.authorId);

  const isIntegral = recipe.tags.includes('Aproveitamento integral');

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(recipe.id);
  };

  return (
    <div className="group neo-card-interactive flex flex-col overflow-hidden h-full text-left relative">
      {/* Bookmark Quick Toggle (44x44px touch target) */}
      <button
        type="button"
        onClick={handleBookmarkClick}
        aria-pressed={saved}
        aria-label={saved ? `Remover ${recipe.title} das salvas` : `Salvar ${recipe.title}`}
        className={`absolute top-3 right-3 z-10 w-11 h-11 rounded-[11px] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] flex items-center justify-center transition-[background-color,transform] duration-150 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] ${
          saved ? 'bg-[#FF8065] text-[#20231F]' : 'bg-[#FFFFFF]/95 text-[#20231F] hover:bg-[#FFD66B]'
        }`}
      >
        <MaterialIcon name="bookmark" size={20} filled={saved} />
      </button>

      {/* Main Dish Photo + Title Link */}
      <Link
        to={`/receitas/${recipe.slug}`}
        className="flex flex-col flex-1"
        aria-label={`Ver receita: ${recipe.title}`}
      >
        {/* Dish Photography */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[#20231F] bg-[#F7F5ED]">
          {!imageFailed ? (
            <img
              src={recipe.image}
              alt={recipe.imageAlt}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FFD66B]/40">
              <MaterialIcon name="local_dining" size={40} className="text-[#20231F] mb-2" />
              <span className="font-display text-sm font-bold text-[#20231F]">
                {recipe.title}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 pb-3 flex flex-col flex-1 justify-between gap-4">
          <div className="space-y-2">
            {/* Clean Unboxed Category Kicker */}
            <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#20231F]/70">
              <span>{recipe.category}</span>
              {isIntegral && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 text-[#20231F]">
                    <MaterialIcon name="eco" size={14} filled />
                    <span>Integral</span>
                  </span>
                </>
              )}
            </div>

            <h3 className="font-display font-bold text-xl leading-snug text-[#20231F] group-hover:underline underline-offset-4 decoration-2">
              {recipe.title}
            </h3>
          </div>

          {/* Metadata Row */}
          <div className="pt-2 border-t-2 border-[#20231F]/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm font-medium text-[#20231F]/85 tabular-nums">
            <span className="inline-flex items-center gap-1.5">
              <MaterialIcon name="schedule" size={18} className="text-[#20231F]" />
              <span>{recipe.prepTimeMinutes} minutos</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center text-[#20231F]" aria-hidden="true">
                <ChefHat size={18} strokeWidth={2.1} />
              </span>
              <span>{recipe.ingredientsCount} ingredientes</span>
            </span>
          </div>
        </div>
      </Link>

      {/* Card Footer: Action CTA + Clickable Collaborator Link */}
      <div className="px-5 pb-5 pt-1 flex items-center justify-between gap-2">
        <Link
          to={`/receitas/${recipe.slug}`}
          className="inline-flex items-center gap-1.5 font-display font-bold text-sm text-[#20231F] bg-[#FFD66B] group-hover:bg-[#B8E36A] border-2 border-[#20231F] rounded-[10px] px-3.5 py-1.5 min-h-[40px] transition-colors whitespace-nowrap shrink-0"
        >
          <span>Ver receita</span>
          <MaterialIcon
            name="arrow_forward"
            size={17}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </Link>

        <Link
          to={`/perfil/${author.id}`}
          aria-label={`Ver perfil de ${author.name}`}
          className="inline-flex items-center gap-1.5 min-h-[40px] px-2 py-1 rounded-lg hover:bg-[#F7F5ED] text-xs font-display font-bold text-[#20231F]/80 hover:text-[#20231F] transition-colors min-w-0"
        >
          <AuthorAvatar author={author} size="xs" rounded="full" />
          <span className="truncate max-w-[110px]">{author.name}</span>
        </Link>
      </div>
    </div>
  );
};
