import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogoMark } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <footer className="border-t-2 border-[#20231F] bg-[#FFFFFF] mt-10 sm:mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <BrandLogoMark className="w-9 h-9" />
              <span className="font-display font-bold text-xl text-[#20231F]">
                Sabor Sustentável
              </span>
            </Link>
            <p className="text-sm sm:text-base text-[#20231F]/80 max-w-md leading-relaxed">
              Um livro digital e colaborativo que valoriza o aproveitamento integral dos
              alimentos e mostra como escolhas simples na cozinha ajudam a reduzir o desperdício.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#20231F]">
              Navegação
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-[#20231F]/80 hover:text-[#20231F] hover:underline underline-offset-4"
                >
                  <MaterialIcon name="home" size={17} />
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <a
                  href="/#recipe-book"
                  onClick={handleRecipesClick}
                  className="inline-flex items-center gap-1.5 text-[#20231F]/80 hover:text-[#20231F] hover:underline underline-offset-4"
                >
                  <MaterialIcon name="menu_book" size={17} />
                  <span>Receitas</span>
                </a>
              </li>
              <li>
                <Link
                  to="/salvas"
                  className="inline-flex items-center gap-1.5 text-[#20231F]/80 hover:text-[#20231F] hover:underline underline-offset-4"
                >
                  <MaterialIcon name="bookmark" size={17} />
                  <span>Receitas salvas</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-1.5 text-[#20231F]/80 hover:text-[#20231F] hover:underline underline-offset-4"
                >
                  <MaterialIcon name="groups" size={17} />
                  <span>Sobre nós</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sustainability Closing Highlight */}
          <div className="md:col-span-3">
            <div className="bg-[#B8E36A] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] rounded-[14px] p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <MaterialIcon name="eco" size={20} filled />
                <span className="font-display text-xs font-bold uppercase tracking-wide">
                  Propósito
                </span>
              </div>
              <p className="font-display font-bold text-base leading-snug text-[#20231F]">
                Transformando ingredientes em possibilidades.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#20231F]/15 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#20231F]/70">
          <p>Sabor Sustentável — Demonstração educacional e colaborativa.</p>
          <p className="font-display font-medium text-[#20231F]/85">
            Alimentação consciente para todos os dias.
          </p>
        </div>
      </div>
    </footer>
  );
};
