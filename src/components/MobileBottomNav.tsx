import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';
import { useSavedRecipes } from '../hooks/useSavedRecipes';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { savedIds } = useSavedRecipes();

  const isHome = location.pathname === '/' && location.hash !== '#recipe-book';
  const isRecipes =
    location.pathname.startsWith('/receitas') ||
    (location.pathname === '/' && location.hash === '#recipe-book');
  const isSaved = location.pathname === '/salvas';
  const isAbout = location.pathname === '/sobre';

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      navigate('/', { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRecipesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const target = document.getElementById('recipe-book');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate('/#recipe-book');
  };

  const navItems = [
    {
      key: 'home',
      label: 'Início',
      icon: 'home',
      to: '/',
      active: isHome,
      onClick: handleHomeClick,
      activeBg: 'bg-[#B8E36A]',
    },
    {
      key: 'recipes',
      label: 'Receitas',
      icon: 'menu_book',
      to: '/#recipe-book',
      active: isRecipes,
      onClick: handleRecipesClick,
      activeBg: 'bg-[#FFD66B]',
    },
    {
      key: 'saved',
      label: 'Salvas',
      icon: 'bookmark',
      to: '/salvas',
      active: isSaved,
      badge: savedIds.length > 0 ? savedIds.length : undefined,
      activeBg: 'bg-[#FF8065]',
    },
    {
      key: 'about',
      label: 'Sobre',
      icon: 'groups',
      to: '/sobre',
      active: isAbout,
      activeBg: 'bg-[#B8E36A]',
    },
  ];

  return (
    <nav
      aria-label="Navegação inferior móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-sm border-t-2 border-[#20231F] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            onClick={item.onClick}
            aria-current={item.active ? 'page' : undefined}
            className="flex flex-col items-center justify-center min-h-[44px] min-w-[44px] gap-0.5 text-[#20231F] group"
          >
            <span
              className={`relative inline-flex items-center justify-center w-11 h-7 rounded-[10px] border-2 transition-[background-color,transform,box-shadow] duration-150 ${
                item.active
                  ? `${item.activeBg} border-[#20231F] shadow-[2px_2px_0px_#20231F] -translate-y-0.5`
                  : 'border-transparent group-active:scale-95'
              }`}
            >
              <MaterialIcon name={item.icon} size={21} filled={item.active} />
              {item.badge !== undefined && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#20231F] text-[#FFFFFF] font-display text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {item.badge}
                </span>
              )}
            </span>
            <span
              className={`font-display text-[11px] leading-none tracking-tight ${
                item.active ? 'font-bold text-[#20231F]' : 'font-medium text-[#20231F]/75'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
