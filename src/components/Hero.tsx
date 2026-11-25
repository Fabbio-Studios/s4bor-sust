import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVisualComposition } from './FoodIllustrations';
import { MaterialIcon } from './MaterialIcon';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-6 pb-8 sm:pt-10 sm:pb-12 border-b-2 border-[#20231F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <p
              className="font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-[#20231F]/85 animate-fade-up"
              style={{ animationDelay: '0ms' }}
            >
              Alimentação consciente • Criatividade • Sustentabilidade
            </p>

            <h1
              className="font-display font-bold text-[1.75rem] sm:text-5xl lg:text-[3.4rem] leading-[1.14] sm:leading-[1.08] text-[#20231F] text-balance animate-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              Pequenas escolhas.{' '}
              <span className="inline-block max-w-full bg-[#B8E36A] border-2 border-[#20231F] px-2 sm:px-2.5 py-0.5 rounded-[10px] shadow-[3px_3px_0px_#20231F] my-1">
                Grandes transformações
              </span>{' '}
              <span className="inline-block max-w-full bg-[#FFD66B] border-2 border-[#20231F] px-2 sm:px-2.5 py-0.5 rounded-[10px] shadow-[3px_3px_0px_#20231F]">
                à mesa.
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-[#20231F]/85 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Descubra receitas criativas, aproveite melhor os alimentos e transforme ingredientes
              simples em novas possibilidades.
            </p>

            <div
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 animate-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              <button
                type="button"
                onClick={onExploreClick}
                className="neo-btn bg-[#B8E36A] hover:bg-[#a9da55] text-[#20231F] px-6 py-3.5 text-base min-h-[48px]"
              >
                <span>Explorar receitas</span>
                <MaterialIcon name="arrow_forward" size={20} />
              </button>

              <Link
                to="/sobre"
                className="neo-btn bg-[#FFFFFF] hover:bg-[#F7F5ED] text-[#20231F] px-6 py-3.5 text-base min-h-[48px]"
              >
                <MaterialIcon name="groups" size={20} />
                <span>Conheça o projeto</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Asymmetric Food & Harvest Illustrations Composition */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <HeroVisualComposition />
          </div>
        </div>
      </div>
    </section>
  );
};
