import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { MaterialIcon } from '../components/MaterialIcon';
import { useTutorial } from '../components/AppTutorial';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { recipes } from '../data/recipes';
import { authorsList, getAuthorById } from '../data/authors';
import { AuthorAvatar } from '../components/AuthorAvatar';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { startTutorial } = useTutorial();
  const { savedIds } = useSavedRecipes();

  const featuredRecipes = [recipes[0], recipes[2], recipes[4]].filter(Boolean);

  return (
    <div className="pb-4 sm:pb-8">
      <Hero onExploreClick={() => navigate('/receitas')} />

      {/* App Shortcuts & Tutorial Banner — keeps full recipe catalog on /receitas */}
      <section
        aria-labelledby="home-explore-heading"
        className="py-7 sm:py-12"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Quick App Destinations */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2
                  id="home-explore-heading"
                  className="font-display font-bold text-xl sm:text-3xl text-[#20231F]"
                >
                  Explore cada área do aplicativo
                </h2>
                <p className="text-sm sm:text-base text-[#20231F]/75">
                  Cada seção tem sua própria tela para facilitar o uso no dia a dia.
                </p>
              </div>

              <button
                type="button"
                onClick={() => startTutorial(0)}
                className="neo-btn bg-[#FFD66B] hover:bg-[#ffce4d] text-[#20231F] px-4 py-2.5 min-h-[44px] text-xs sm:text-sm"
              >
                <MaterialIcon name="help" size={18} />
                <span>Ver tutorial passo a passo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              <Link
                to="/receitas"
                className="neo-card-interactive bg-[#B8E36A] p-5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FFFFFF] border-2 border-[#20231F] rounded-[11px] shadow-[2px_2px_0px_#20231F]">
                    <MaterialIcon name="menu_book" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#20231F]">
                    Livro de Receitas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20231F]/85">
                    Busque por nome, filtre por ingrediente e descubra {recipes.length} receitas.
                  </p>
                </div>
                <MaterialIcon name="arrow_forward" size={20} className="shrink-0 mt-1" />
              </Link>

              <Link
                to="/salvas"
                className="neo-card-interactive bg-[#FFFFFF] p-5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FF8065] border-2 border-[#20231F] rounded-[11px] shadow-[2px_2px_0px_#20231F]">
                    <MaterialIcon name="bookmark" size={22} filled />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#20231F]">
                    Receitas Salvas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20231F]/80 tabular-nums">
                    {savedIds.length > 0
                      ? `${savedIds.length} ${
                          savedIds.length === 1 ? 'receita guardada' : 'receitas guardadas'
                        } neste aparelho.`
                      : 'Guarde suas favoritas para abrir rápido quando for cozinhar.'}
                  </p>
                </div>
                <MaterialIcon name="arrow_forward" size={20} className="shrink-0 mt-1" />
              </Link>

              <Link
                to="/sobre"
                className="neo-card-interactive bg-[#FFD66B] p-5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FFFFFF] border-2 border-[#20231F] rounded-[11px] shadow-[2px_2px_0px_#20231F]">
                    <MaterialIcon name="groups" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#20231F]">
                    Sobre o Projeto
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20231F]/85">
                    Conheça a turma do 7º ano A, as fases de criação e nossa proposta ambiental.
                  </p>
                </div>
                <MaterialIcon name="arrow_forward" size={20} className="shrink-0 mt-1" />
              </Link>
            </div>
          </div>

          {/* Highlighted Dishes Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#20231F]">
                Sugestões em destaque
              </h2>
              <Link
                to="/receitas"
                className="inline-flex items-center gap-1 font-display font-bold text-sm text-[#20231F] hover:underline underline-offset-4 whitespace-nowrap"
              >
                <span>Ver todas ({recipes.length})</span>
                <MaterialIcon name="arrow_forward" size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {featuredRecipes.map((recipe) => {
                const author = getAuthorById(recipe.authorId);
                return (
                  <div
                    key={recipe.id}
                    className="neo-card-interactive bg-[#FFFFFF] overflow-hidden flex flex-col"
                  >
                    <Link to={`/receitas/${recipe.slug}`} className="group block">
                      <div className="aspect-[4/3] w-full overflow-hidden border-b-2 border-[#20231F] bg-[#F7F5ED]">
                        <img
                          src={recipe.image}
                          alt={recipe.imageAlt}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-4 pb-2 space-y-1">
                        <p className="font-display text-[11px] font-bold uppercase tracking-wider text-[#20231F]/70">
                          {recipe.category} · {recipe.prepTimeMinutes} min
                        </p>
                        <h3 className="font-display font-bold text-lg leading-snug text-[#20231F] group-hover:underline underline-offset-4">
                          {recipe.title}
                        </h3>
                      </div>
                    </Link>

                    <div className="px-4 pb-4 pt-1 flex items-center justify-between gap-2 mt-auto">
                      <Link
                        to={`/perfil/${author.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#20231F]/80 hover:text-[#20231F] hover:underline min-h-[36px]"
                      >
                        <AuthorAvatar author={author} size="xs" rounded="full" />
                        <span>Por {author.name}</span>
                      </Link>
                      <Link
                        to={`/receitas/${recipe.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#20231F]"
                      >
                        <span>Abrir</span>
                        <MaterialIcon name="arrow_forward" size={15} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Student Collaborators Strip */}
          <div className="neo-box bg-[#FFFFFF] p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display font-bold text-base sm:text-xl text-[#20231F]">
                Perfis da turma · 7º ano A
              </h2>
              <span className="text-xs font-medium text-[#20231F]/70">
                Toque para abrir o perfil
              </span>
            </div>

            <div className="flex items-stretch gap-3 overflow-x-auto pt-1 pb-2 px-1 -mx-1">
              {authorsList.map((author) => (
                <Link
                  key={author.id}
                  to={`/perfil/${author.id}`}
                  className="shrink-0 flex flex-col items-center gap-1.5 min-w-[78px] p-2 rounded-[14px] hover:bg-[#F7F5ED] transition-colors text-center"
                >
                  <AuthorAvatar author={author} size="md" rounded="full" />
                  <span className="font-display font-bold text-xs text-[#20231F] whitespace-nowrap">
                    {author.name.split(' ')[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
