import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogoMark } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleExploreRecipes = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const target = document.getElementById('recipe-book');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate('/#recipe-book');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHome = location.pathname === '/' && location.hash !== '#recipe-book';
  const isRecipes = location.pathname.startsWith('/receitas') || (location.pathname === '/' && location.hash === '#recipe-book');
  const isAbout = location.pathname === '/sobre';

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5ED]/95 backdrop-blur-xs border-b-2 border-[#20231F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          aria-label="Sabor Sustentável — Página inicial"
        >
          <BrandLogoMark className="w-9 h-9 transition-transform duration-150 group-hover:-rotate-6" />
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#20231F]">
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

        {/* Zone 3: Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleExploreRecipes}
            className="hidden sm:inline-flex neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-4 py-2 text-sm whitespace-nowrap shrink-0"
          >
            <span>Explorar receitas</span>
            <MaterialIcon name="arrow_forward" size={18} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden neo-btn bg-[#FFFFFF] text-[#20231F] w-11 h-11 p-0"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Compact Accessible Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out border-[#20231F] bg-[#FFFFFF] ${
          mobileMenuOpen ? 'max-h-80 opacity-100 border-t-2' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Menu móvel" className="px-4 py-4 flex flex-col gap-2">
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-display font-bold text-base border-2 transition-colors ${
              isHome
                ? 'bg-[#FFD66B] border-[#20231F]'
                : 'border-transparent hover:bg-[#F7F5ED]'
            }`}
          >
            <MaterialIcon name="home" size={20} />
            <span>Início</span>
          </Link>

          <a
            href="/#recipe-book"
            onClick={handleExploreRecipes}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-display font-bold text-base border-2 transition-colors ${
              isRecipes
                ? 'bg-[#FFD66B] border-[#20231F]'
                : 'border-transparent hover:bg-[#F7F5ED]'
            }`}
          >
            <MaterialIcon name="menu_book" size={20} />
            <span>Receitas</span>
          </a>

          <Link
            to="/sobre"
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-display font-bold text-base border-2 transition-colors ${
              isAbout
                ? 'bg-[#FFD66B] border-[#20231F]'
                : 'border-transparent hover:bg-[#F7F5ED]'
            }`}
          >
            <MaterialIcon name="groups" size={20} />
            <span>Sobre nós</span>
          </Link>

          <button
            type="button"
            onClick={handleExploreRecipes}
            className="mt-2 neo-btn bg-[#B8E36A] text-[#20231F] px-4 py-3 text-sm w-full justify-center"
          >
            <span>Explorar receitas</span>
            <MaterialIcon name="arrow_forward" size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
};
