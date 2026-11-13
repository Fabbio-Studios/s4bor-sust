import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogoMark } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';
import { useSavedRecipes } from '../hooks/useSavedRecipes';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { savedIds } = useSavedRecipes();

  const handleExploreRecipes = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (location.pathname === '/') {
      const target = document.getElementById('recipe-book');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate('/#recipe-book');
  };

  const handleQuickSearch = () => {
    if (location.pathname === '/') {
      const input = document.getElementById('recipe-search');
      const section = document.getElementById('recipe-book');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (input) {
        setTimeout(() => input.focus(), 250);
      }
      return;
    }
    navigate('/#recipe-book');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      navigate('/', { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHome = location.pathname === '/' && location.hash !== '#recipe-book';
  const isRecipes =
    location.pathname.startsWith('/receitas') ||
    (location.pathname === '/' && location.hash === '#recipe-book');
  const isSaved = location.pathname === '/salvas';
  const isAbout = location.pathname === '/sobre';

  return (
    <header className="md:sticky md:top-0 z-40 bg-[#F7F5ED]/95 backdrop-blur-xs border-b-2 border-[#20231F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-[72px] flex items-center justify-between gap-4">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          aria-label="Sabor Sustentável — Página inicial"
        >
          <BrandLogoMark className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-150 group-hover:-rotate-6" />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#20231F]">
            Sabor Sustentável
          </span>
        </Link>

        {/* Zone 2: Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7"
        >
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isHome
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            Início
          </Link>

          <a
            href="/#recipe-book"
            onClick={handleExploreRecipes}
            className={`font-display text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              isRecipes
                ? 'border-[#20231F] text-[#20231F]'
                : 'border-transparent text-[#20231F]/75 hover:text-[#20231F] hover:border-[#20231F]'
            }`}
          >
            Receitas
          </a>

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

        {/* Zone 3: Desktop Primary Action + Mobile Quick Search Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleExploreRecipes}
            className="hidden md:inline-flex neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-4 py-2 text-sm whitespace-nowrap shrink-0"
          >
            <span>Explorar receitas</span>
            <MaterialIcon name="arrow_forward" size={18} />
          </button>

          <button
            type="button"
            onClick={handleQuickSearch}
            aria-label="Buscar receitas"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-[11px] bg-[#FFFFFF] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] text-[#20231F] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <MaterialIcon name="search" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};
