import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogoMark } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { useTutorial } from './AppTutorial';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { savedIds } = useSavedRecipes();
  const { startTutorial } = useTutorial();

  const isHome = location.pathname === '/';
  const isRecipes =
    location.pathname.startsWith('/receitas') || location.pathname.startsWith('/perfil');
  const isSaved = location.pathname === '/salvas';
  const isAbout = location.pathname === '/sobre';

  const handleQuickSearch = () => {
    if (location.pathname === '/receitas') {
      const input = document.getElementById('recipe-search');
      if (input) {
        input.focus();
      }
      return;
    }
    navigate('/receitas?foco=busca');
  };

  return (
    <header className="shrink-0 md:sticky md:top-0 z-40 bg-[#F7F5ED]/95 backdrop-blur-xs border-b-2 border-[#20231F]">
      <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 lg:px-8 h-[52px] md:h-[72px] flex items-center justify-between gap-3 md:gap-8">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 group min-w-0"
          aria-label="Sabor Sustentável — Página inicial"
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
          className="hidden md:flex items-center gap-7"
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

        {/* Zone 3: Desktop Primary Actions + Mobile Quick Triggers */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => startTutorial(0)}
            aria-label="Abrir tutorial passo a passo"
            title="Tutorial do app"
            className="inline-flex items-center justify-center w-10 h-10 md:w-auto md:h-10 md:px-3 rounded-[10px] bg-[#FFFFFF] hover:bg-[#FFD66B] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] text-[#20231F] gap-1.5 font-display text-xs font-bold cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
          >
            <MaterialIcon name="help" size={19} />
            <span className="hidden md:inline">Tutorial</span>
          </button>

          <Link
            to="/receitas"
            className="hidden md:inline-flex neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-4 py-2 text-sm whitespace-nowrap shrink-0"
          >
            <span>Explorar receitas</span>
            <MaterialIcon name="arrow_forward" size={18} />
          </Link>

          <button
            type="button"
            onClick={handleQuickSearch}
            aria-label="Buscar receitas"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#FFD66B] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] text-[#20231F] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            <MaterialIcon name="search" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
