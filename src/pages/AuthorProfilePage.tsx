import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { authors, authorsList } from '../data/authors';
import { recipes } from '../data/recipes';
import { AuthorAvatar } from '../components/AuthorAvatar';
import { RecipeCard } from '../components/RecipeCard';
import { MaterialIcon } from '../components/MaterialIcon';

export const AuthorProfilePage: React.FC = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');

  const author = authorId ? authors[authorId] : undefined;

  if (!author) {
    return (
      <div className="max-w-[820px] mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
        <div className="neo-box bg-[#FFFFFF] p-6 sm:p-12 space-y-5">
          <MaterialIcon name="person" size={48} className="text-[#20231F]" />
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#20231F]">
            Perfil não encontrado
          </h1>
          <p className="text-sm sm:text-base text-[#20231F]/80 max-w-md mx-auto">
            Não encontramos este colaborador. Explore todas as receitas para conhecer os estudantes
            do 7º ano A.
          </p>
          <Link
            to="/receitas"
            className="neo-btn bg-[#B8E36A] text-[#20231F] px-5 py-3 min-h-[44px] text-sm"
          >
            <MaterialIcon name="arrow_back" size={18} />
            <span>Ir para receitas</span>
          </Link>
        </div>
      </div>
    );
  }

  const authorRecipes = recipes.filter((r) => r.authorId === author.id);
  const otherAuthors = authorsList.filter((a) => a.id !== author.id);

  return (
    <div className="py-5 sm:py-10">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Top Profile Navigation Bar (Instagram-style handle bar) */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="neo-btn bg-[#FFFFFF] hover:bg-[#FFD66B] text-[#20231F] px-3.5 py-2 min-h-[44px] text-sm"
          >
            <MaterialIcon name="arrow_back" size={18} />
            <span>Voltar</span>
          </button>

          <span className="font-display font-bold text-sm sm:text-base text-[#20231F] truncate">
            {author.handle}
          </span>

          <Link
            to="/receitas"
            aria-label="Explorar todas as receitas"
            className="w-11 h-11 rounded-[11px] bg-[#FFFFFF] hover:bg-[#B8E36A] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] flex items-center justify-center text-[#20231F] shrink-0"
          >
            <MaterialIcon name="menu_book" size={20} />
          </Link>
        </div>

        {/* Instagram-bio style Profile Header Card */}
        <section
          aria-labelledby="profile-name"
          data-tour="author-profile-card"
          className="neo-box bg-[#FFFFFF] p-5 sm:p-8 space-y-5 animate-fade-up"
        >
          {/* Row 1: Circular Photo + Stats Columns */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <AuthorAvatar author={author} size="xl" rounded="full" />

            <div className="grid grid-cols-2 gap-3 sm:gap-5 w-full flex-1 min-w-0 text-center">
              <div className="bg-[#F7F5ED] border-2 border-[#20231F] rounded-[12px] px-2 py-2.5 sm:p-3 min-w-0 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-display font-bold text-lg sm:text-2xl text-[#20231F] tabular-nums leading-tight">
                  {authorRecipes.length}
                </p>
                <p className="w-full truncate text-[11px] sm:text-xs font-medium text-[#20231F]/75 leading-tight mt-0.5">
                  {authorRecipes.length === 1 ? 'Receita' : 'Receitas'}
                </p>
              </div>

              <div className="bg-[#B8E36A] border-2 border-[#20231F] rounded-[12px] px-2 py-2.5 sm:p-3 min-w-0 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-display font-bold text-lg sm:text-2xl text-[#20231F] leading-tight">
                  7º A
                </p>
                <p className="w-full truncate text-[11px] sm:text-xs font-medium text-[#20231F]/85 leading-tight mt-0.5">
                  Turma
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Name, Handle & Instagram-style "Sobre" Bio */}
          <div className="space-y-2.5">
            <div>
              <h1
                id="profile-name"
                className="font-display font-bold text-2xl sm:text-3xl text-[#20231F]"
              >
                {author.name}
              </h1>
              <p className="text-xs sm:text-sm font-display font-bold text-[#20231F]/70">
                {author.role}
              </p>
            </div>

            <div className="bg-[#F7F5ED] border-2 border-[#20231F] rounded-[14px] p-4 space-y-2">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-[#20231F]/70">
                Sobre
              </p>
              <p className="text-sm sm:text-base text-[#20231F] leading-relaxed">{author.bio}</p>

              <div className="pt-2 border-t border-[#20231F]/15 flex flex-wrap gap-x-5 gap-y-1.5 text-xs sm:text-sm text-[#20231F]/85">
                <span className="inline-flex items-center gap-1.5">
                  <MaterialIcon name="star" size={16} filled />
                  <span>
                    <strong className="font-display">Especialidade:</strong> {author.specialty}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MaterialIcon name="eco" size={16} filled />
                  <span>
                    <strong className="font-display">Ingrediente favorito:</strong>{' '}
                    {author.favoriteIngredient}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Shared Recipes Section with Instagram Grid / Card Toggle */}
        <section aria-labelledby="shared-recipes-heading" className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b-2 border-[#20231F] pb-3">
            <div className="flex items-center gap-2">
              <MaterialIcon name="menu_book" size={20} />
              <h2
                id="shared-recipes-heading"
                className="font-display font-bold text-lg sm:text-2xl text-[#20231F]"
              >
                Receitas compartilhadas ({authorRecipes.length})
              </h2>
            </div>

            <div
              role="group"
              aria-label="Modo de visualização das receitas"
              className="inline-flex items-center bg-[#FFFFFF] border-2 border-[#20231F] rounded-[11px] p-0.5 shadow-[2px_2px_0px_#20231F]"
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
                aria-label="Visualização em grade"
                className={`inline-flex items-center justify-center min-w-[40px] min-h-[38px] px-2.5 rounded-[8px] transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#FFD66B] text-[#20231F]' : 'text-[#20231F]/70'
                }`}
              >
                <MaterialIcon name="grid_view" size={19} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                aria-pressed={viewMode === 'cards'}
                aria-label="Visualização em cartões completos"
                className={`inline-flex items-center justify-center min-w-[40px] min-h-[38px] px-2.5 rounded-[8px] transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-[#FFD66B] text-[#20231F]' : 'text-[#20231F]/70'
                }`}
              >
                <MaterialIcon name="view_agenda" size={19} />
              </button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 animate-fade-up">
              {authorRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/receitas/${recipe.slug}`}
                  className="group neo-card-interactive overflow-hidden flex flex-col bg-[#FFFFFF]"
                >
                  <div className="relative aspect-square w-full overflow-hidden border-b-2 border-[#20231F] bg-[#F7F5ED]">
                    <img
                      src={recipe.image}
                      alt={recipe.imageAlt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#FFFFFF]/95 border border-[#20231F] rounded-md px-2 py-0.5 font-display text-[10px] sm:text-xs font-bold text-[#20231F] tabular-nums">
                      {recipe.prepTimeMinutes} min
                    </span>
                  </div>
                  <div className="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between gap-1">
                    <p className="font-display font-bold text-xs sm:text-sm leading-snug text-[#20231F] group-hover:underline underline-offset-2 line-clamp-2">
                      {recipe.title}
                    </p>
                    <p className="text-[11px] font-medium text-[#20231F]/70">{recipe.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
              {authorRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </section>

        {/* Other Class Collaborators Strip */}
        <section aria-labelledby="other-authors-heading" className="pt-2 space-y-3">
          <h2
            id="other-authors-heading"
            className="font-display font-bold text-base sm:text-lg text-[#20231F]"
          >
            Outros colaboradores do 7º ano A
          </h2>
          <div className="flex items-stretch gap-3 overflow-x-auto pt-1 pb-2.5 px-1 -mx-1">
            {otherAuthors.map((person) => (
              <Link
                key={person.id}
                to={`/perfil/${person.id}`}
                className="neo-card-interactive shrink-0 w-[136px] sm:w-[150px] p-3 flex flex-col items-center text-center gap-2 bg-[#FFFFFF] hover:bg-[#F7F5ED]"
              >
                <AuthorAvatar author={person} size="md" rounded="full" />
                <div className="min-w-0 w-full">
                  <p className="font-display font-bold text-xs sm:text-sm text-[#20231F] truncate">
                    {person.name}
                  </p>
                  <p className="text-[11px] text-[#20231F]/70 tabular-nums">
                    {person.sharedRecipesCount}{' '}
                    {person.sharedRecipesCount === 1 ? 'receita' : 'receitas'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
