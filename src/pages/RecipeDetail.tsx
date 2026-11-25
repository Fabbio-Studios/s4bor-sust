import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipeBySlug, recipes } from '../data/recipes';
import { getAuthorById } from '../data/authors';
import { AuthorProfile } from '../components/AuthorProfile';
import { RecipeCard } from '../components/RecipeCard';
import { MaterialIcon } from '../components/MaterialIcon';
import { CitrusIllustration } from '../components/FoodIllustrations';

import { useSavedRecipes } from '../hooks/useSavedRecipes';

export const RecipeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [imageFailed, setImageFailed] = useState(false);
  const { isSaved: checkSaved, toggleSave } = useSavedRecipes();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setCheckedIngredients({});
    setImageFailed(false);
  }, [slug]);

  if (!recipe) {
    return (
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="neo-box bg-[#FFFFFF] p-8 sm:p-12 space-y-5">
          <MaterialIcon name="restaurant" size={48} className="text-[#20231F]" />
          <h1 className="font-display font-bold text-3xl text-[#20231F]">
            Receita não encontrada
          </h1>
          <p className="text-base text-[#20231F]/80 max-w-md mx-auto">
            A receita que você procura não está disponível ou mudou de endereço. Volte para o
            catálogo para descobrir outras preparações sustentáveis.
          </p>
          <Link
            to="/receitas"
            className="neo-btn bg-[#B8E36A] text-[#20231F] px-5 py-3 text-sm"
          >
            <MaterialIcon name="arrow_back" size={18} />
            <span>Voltar às receitas</span>
          </Link>
        </div>
      </div>
    );
  }

  const author = getAuthorById(recipe.authorId);
  const isSaved = checkSaved(recipe.id);

  const toggleSaveRecipe = () => {
    toggleSave(recipe.id);
  };

  const toggleIngredient = (id: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = recipe.ingredients.filter((ing) => checkedIngredients[ing.id]).length;

  const relatedRecipes = recipes.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <article className="py-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-10">
        {/* Top Breadcrumb & Back Action */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <nav aria-label="Caminho de navegação" className="text-xs sm:text-sm font-medium text-[#20231F]/80">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <li>
                <Link to="/" className="hover:underline underline-offset-4 text-[#20231F]">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/receitas"
                  className="hover:underline underline-offset-4 text-[#20231F]"
                >
                  Receitas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-display font-bold text-[#20231F]">
                {recipe.title}
              </li>
            </ol>
          </nav>

          <Link
            to="/receitas"
            className="neo-btn bg-[#FFFFFF] hover:bg-[#FFD66B] text-[#20231F] px-4 py-2 min-h-[44px] text-sm"
          >
            <MaterialIcon name="arrow_back" size={18} />
            <span>Voltar às receitas</span>
          </Link>
        </div>

        {/* Recipe Header + Featured Photography */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-display text-xs font-bold uppercase tracking-wider bg-[#FFD66B] border-2 border-[#20231F] px-3 py-1 rounded-lg shadow-[2px_2px_0px_#20231F]">
                  {recipe.category}
                </span>
                {recipe.tags.includes('Aproveitamento integral') && (
                  <span className="inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-wider bg-[#B8E36A] border-2 border-[#20231F] px-3 py-1 rounded-lg shadow-[2px_2px_0px_#20231F]">
                    <MaterialIcon name="spa" size={14} filled />
                    <span>Aproveitamento integral</span>
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#20231F] text-balance">
                {recipe.title}
              </h1>

              <p className="text-base sm:text-lg text-[#20231F]/85 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Quick Info Cards & Bookmark Action */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="neo-box-sm bg-[#FFFFFF] p-2.5 sm:p-3.5 text-center flex flex-col items-center justify-center">
                  <MaterialIcon name="schedule" size={20} className="text-[#20231F] mb-1" />
                  <p className="text-[11px] sm:text-xs font-medium text-[#20231F]/70">Preparo</p>
                  <p className="font-display font-bold text-xs sm:text-base text-[#20231F] tabular-nums">
                    {recipe.prepTimeMinutes} min
                  </p>
                  {recipe.prepTimeNote && (
                    <p className="text-[10px] sm:text-[11px] font-medium text-[#20231F]/70 leading-tight mt-0.5">
                      {recipe.prepTimeNote}
                    </p>
                  )}
                </div>

                <div className="neo-box-sm bg-[#FFFFFF] p-2.5 sm:p-3.5 text-center flex flex-col items-center justify-center">
                  <MaterialIcon name="local_dining" size={20} className="text-[#20231F] mb-1" />
                  <p className="text-[11px] sm:text-xs font-medium text-[#20231F]/70">Rendimento</p>
                  <p className="font-display font-bold text-xs sm:text-base text-[#20231F] tabular-nums leading-tight">
                    {recipe.servingsLabel ?? `${recipe.servings} porções`}
                  </p>
                </div>

                <div className="neo-box-sm bg-[#FFFFFF] p-2.5 sm:p-3.5 text-center flex flex-col items-center justify-center">
                  <MaterialIcon name="restaurant" size={20} className="text-[#20231F] mb-1" />
                  <p className="text-[11px] sm:text-xs font-medium text-[#20231F]/70">Ingredientes</p>
                  <p className="font-display font-bold text-xs sm:text-base text-[#20231F] tabular-nums">
                    {recipe.ingredientsCount} itens
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={toggleSaveRecipe}
                  aria-pressed={isSaved}
                  className={`neo-btn w-full sm:w-auto px-4 py-2.5 min-h-[46px] text-sm ${
                    isSaved
                      ? 'bg-[#B8E36A] text-[#20231F]'
                      : 'bg-[#FFFFFF] hover:bg-[#F7F5ED] text-[#20231F]'
                  }`}
                >
                  <MaterialIcon name="bookmark" size={18} filled={isSaved} />
                  <span>{isSaved ? 'Receita salva nos favoritos' : 'Salvar receita'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Highlighted Dish Photo */}
          <div className="lg:col-span-6">
            <div className="neo-box overflow-hidden bg-[#FFFFFF] h-full min-h-[220px] sm:min-h-[260px]">
              {!imageFailed ? (
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="w-full aspect-[4/3] lg:h-full lg:aspect-auto object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 bg-[#FFD66B]/40 text-center">
                  <MaterialIcon name="local_dining" size={48} className="text-[#20231F] mb-3" />
                  <p className="font-display font-bold text-lg text-[#20231F]">{recipe.title}</p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Grid: Ingredients + Preparation Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Interactive Ingredients Checklist */}
          <section
            aria-labelledby="ingredients-heading"
            data-tour="recipe-ingredients"
            className="lg:col-span-5 neo-box bg-[#FFFFFF] p-5 sm:p-7 space-y-5"
          >
            <div className="flex items-center justify-between gap-3 border-b-2 border-[#20231F] pb-3.5">
              <div className="flex items-center gap-2">
                <MaterialIcon name="restaurant" size={22} />
                <h2 id="ingredients-heading" className="font-display font-bold text-xl sm:text-2xl">
                  Ingredientes
                </h2>
              </div>
              <span className="font-display text-xs font-bold bg-[#F7F5ED] border-2 border-[#20231F] px-2.5 py-1 rounded-lg tabular-nums">
                {checkedCount}/{recipe.ingredients.length}
              </span>
            </div>

            <p className="text-sm text-[#20231F]/75">
              Marque abaixo os ingredientes que você já separou na bancada:
            </p>

            <ul className="space-y-2.5">
              {recipe.ingredients.map((ingredient) => {
                const isChecked = !!checkedIngredients[ingredient.id];
                return (
                  <li key={ingredient.id}>
                    <label
                      className={`flex items-start gap-3 p-3.5 min-h-[48px] rounded-[12px] border-2 transition-colors duration-150 cursor-pointer select-none ${
                        isChecked
                          ? 'bg-[#B8E36A]/35 border-[#20231F]'
                          : 'bg-[#F7F5ED]/65 border-[#20231F]/25 hover:border-[#20231F]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleIngredient(ingredient.id)}
                        className="sr-only"
                      />
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-md border-2 border-[#20231F] flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#B8E36A]' : 'bg-[#FFFFFF]'
                        }`}
                        aria-hidden="true"
                      >
                        {isChecked && <MaterialIcon name="check_circle" size={16} filled />}
                      </span>
                      <span
                        className={`text-sm sm:text-base leading-snug transition-opacity ${
                          isChecked ? 'line-through text-[#20231F]/60' : 'text-[#20231F]'
                        }`}
                      >
                        <strong className="font-display font-bold">
                          {ingredient.amount}
                          {ingredient.unit ? ` ${ingredient.unit}` : ''}
                        </strong>{' '}
                        {ingredient.name}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {checkedCount > 0 && (
              <button
                type="button"
                onClick={() => setCheckedIngredients({})}
                className="min-h-[44px] inline-flex items-center text-xs font-display font-bold underline underline-offset-4 text-[#20231F]/80 hover:text-[#20231F] cursor-pointer"
              >
                Desmarcar ingredientes
              </button>
            )}
          </section>

          {/* Preparation Steps */}
          <section
            aria-labelledby="steps-heading"
            className="lg:col-span-7 neo-box bg-[#FFFFFF] p-5 sm:p-8 space-y-6"
          >
            <div className="flex items-center justify-between gap-3 border-b-2 border-[#20231F] pb-3.5">
              <div className="flex items-center gap-2">
                <MaterialIcon name="menu_book" size={22} />
                <h2 id="steps-heading" className="font-display font-bold text-2xl">
                  Modo de preparo
                </h2>
              </div>
              <CitrusIllustration className="w-8 h-8 animate-sway-gentle" />
            </div>

            <ol className="space-y-6">
              {recipe.steps.map((step) => (
                <li
                  key={step.stepNumber}
                  className="flex items-start gap-4 pb-6 border-b-2 border-[#20231F]/10 last:border-b-0 last:pb-0"
                >
                  <div
                    className="w-10 h-10 rounded-[11px] bg-[#FFD66B] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] flex items-center justify-center font-display font-bold text-base text-[#20231F] shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(step.stepNumber).padStart(2, '0')}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-[#20231F]">
                      {step.title}
                    </h3>
                    <p className="text-base text-[#20231F]/85 leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sustainability Highlight Box */}
        <section
          aria-labelledby="sustainability-heading"
          className="neo-box bg-[#B8E36A] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-[12px] bg-[#FFFFFF] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] flex items-center justify-center shrink-0">
              <MaterialIcon name="eco" size={26} filled />
            </div>
            <div className="space-y-2">
              <h2
                id="sustainability-heading"
                className="font-display font-bold text-xl sm:text-2xl text-[#20231F]"
              >
                Por que essa receita é sustentável?
              </h2>
              <p className="text-base sm:text-lg text-[#20231F] leading-relaxed max-w-3xl">
                {recipe.sustainabilityInfo}
              </p>
            </div>
          </div>
        </section>

        {/* Author Presentation */}
        <AuthorProfile author={author} />

        {/* Related Recipes */}
        <section aria-labelledby="related-heading" className="pt-4 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 id="related-heading" className="font-display font-bold text-2xl sm:text-3xl">
              Outras receitas para experimentar
            </h2>
            <Link
              to="/receitas"
              className="font-display font-bold text-sm inline-flex items-center gap-1 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              <span>Ver todas</span>
              <MaterialIcon name="arrow_forward" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {relatedRecipes.map((rel) => (
              <RecipeCard key={rel.id} recipe={rel} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
