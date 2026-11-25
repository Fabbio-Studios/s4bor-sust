import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogoMark } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { useTutorial } from './AppTutorial';

export const Header: React.FC = () => {
  const location = useLocation();
  const { savedIds } = useSavedRecipes();
  const { startTutorial } = useTutorial();

  const isHome = location.pathname === '/';
  const isRecipes =
    location.pathname.startsWith('/receitas') || location.pathname.startsWith('/perfil');
  const isSaved = location.pathname === '/salvas';
  const isAbout = location.pathname === '/sobre';

  return (
    <header className="shrink-0 md:sticky md:top-0 z-40 bg-[#F7F5ED]/95 backdrop-blur-xs border-b-2 border-[#20231F]">
      <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 lg:px-8 h-[52px] md:h-[72px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 group min-w-0"
          aria-label="Sabor Sustentável, página inicial"
        >
          <BrandLogoMark className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-150 group-hover:-rotate-6 shrink-0" />
          <span className="font-display font-bold text-base sm:text-lg md:text-xl tracking-tight text-[#20231F] truncate">
            Sabor Sustentável
          </span>
        </Link>

        {/* Zone 2: Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          data-tour="desktop-nav"
          className="hidden md:flex items-center gap-4 lg:gap-7"
        >
          <Link
            to="/"
            className={`font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isHome
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            Início
          </Link>

          <Link
            to="/receitas"
            className={`font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isRecipes
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            Receitas
          </Link>

          <Link
            to="/salvas"
            className={`inline-flex items-center gap-1.5 font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isSaved
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            <span>Salvas</span>
            {savedIds.length > 0 && (
              <span className="text-[11px] bg-[#FFD66B] border border-[#20231F] rounded-md px-1.5 py-0.2 tabular-nums leading-tight">
                {savedIds.length}
              </span>
            )}
          </Link>

          <Link
            to="/sobre"
            className={`font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isAbout
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            Sobre nós
          </Link>
        </nav>

        {/* Zone 3: Tutorial + Explore Recipes Compass Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => startTutorial(0)}
            aria-label="Abrir tutorial passo a passo"
            title="Tutorial do app"
            className="inline-flex items-center justify-center w-10 h-10 lg:w-auto lg:px-3 rounded-[10px] bg-[#FFFFFF] hover:bg-[#FFD66B] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] text-[#20231F] gap-1.5 font-display text-xs font-bold cursor-pointer active:translate-x-[1px] active:translate-y-[1px] shrink-0"
          >
            <MaterialIcon name="help" size={20} />
            <span className="hidden lg:inline">Tutorial</span>
          </button>

          <Link
            to="/receitas"
            aria-label="Explorar receitas"
            title="Explorar receitas"
            className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#B8E36A] hover:bg-[#a9da55] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] text-[#20231F] active:translate-x-[1px] active:translate-y-[1px] shrink-0 transition-colors"
          >
            <MaterialIcon name="explore" size={21} />
          </Link>
        </div>
      </div>
    </header>
  );
};
