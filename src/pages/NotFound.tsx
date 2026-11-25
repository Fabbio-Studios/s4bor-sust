import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';
import { CarrotIllustration, TomatoIllustration } from '../components/FoodIllustrations';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-[820px] mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
      <div className="neo-box bg-[#FFFFFF] p-6 sm:p-12 space-y-5">
        <div className="flex items-center justify-center gap-3">
          <TomatoIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-float-slow" />
          <CarrotIllustration className="w-14 h-14 sm:w-16 sm:h-16 animate-float-delayed" />
        </div>
        <p className="font-display text-sm font-bold uppercase tracking-wider text-[#20231F]/70">
          Página 404
        </p>
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-[#20231F]">
          Ops! Esta página saiu da cozinha.
        </h1>
        <p className="text-sm sm:text-base text-[#20231F]/80 max-w-md mx-auto">
          O endereço que você acessou não foi encontrado. Volte para o livro de receitas para
          explorar todos os preparos sustentáveis.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link to="/" className="neo-btn bg-[#B8E36A] text-[#20231F] px-5 py-3 min-h-[44px] text-sm">
            <MaterialIcon name="home" size={18} />
            <span>Ir para o início</span>
          </Link>
          <Link to="/receitas" className="neo-btn bg-[#FFD66B] text-[#20231F] px-5 py-3 min-h-[44px] text-sm">
            <MaterialIcon name="menu_book" size={18} />
            <span>Explorar receitas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
