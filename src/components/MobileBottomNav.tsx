import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';
import { useSavedRecipes } from '../hooks/useSavedRecipes';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { savedIds } = useSavedRecipes();

  const isHome = location.pathname === '/';
  const isRecipes =
    location.pathname.startsWith('/receitas') || location.pathname.startsWith('/perfil');
  const isSaved = location.pathname === '/salvas';
  const isAbout = location.pathname === '/sobre';

  const navItems = [
    {
      key: 'home',
      label: 'Início',
      icon: 'home',
      to: '/',
      active: isHome,
      activeBg: 'bg-[#B8E36A]',
    },
    {
      key: 'recipes',
      label: 'Receitas',
      icon: 'menu_book',
      to: '/receitas',
      active: isRecipes,
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
      aria-label="Navegação inferior do aplicativo"
      data-tour="bottom-nav"
      className="md:hidden shrink-0 z-40 bg-[#FFFFFF] border-t-2 border-[#20231F] pb-[env(safe-area-inset-bottom)] select-none"
    >
      <div className="grid grid-cols-4 h-[60px] max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
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
              <MaterialIcon name={item.icon} size={20} filled={item.active} />
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
