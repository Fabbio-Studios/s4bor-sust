import React, { useEffect, useState } from 'react';
import {
  BrandLogoMark,
  IsometricMarketTruckIllustration,
  RoadSceneryTree,
} from './FoodIllustrations';

interface AppLoaderProps {
  onComplete: () => void;
}

type LoaderStage =
  | 'logo'
  | 'brand'
  | 'truck-in'
  | 'truck-text'
  | 'text-out'
  | 'truck-out'
  | 'fade-out';

export const AppLoader: React.FC<AppLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<LoaderStage>('logo');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setStage('brand');
      const quickTimer = window.setTimeout(() => onComplete(), 650);
      return () => window.clearTimeout(quickTimer);
    }

    const timers = [
      window.setTimeout(() => setStage('brand'), 450),
      window.setTimeout(() => setStage('truck-in'), 1100),
      window.setTimeout(() => setStage('truck-text'), 1550),
      window.setTimeout(() => setStage('text-out'), 3200),
      window.setTimeout(() => setStage('truck-out'), 3450),
      window.setTimeout(() => setStage('fade-out'), 4150),
      window.setTimeout(() => onComplete(), 4500),
    ];

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [onComplete]);

  const showBrandLockup = stage === 'logo' || stage === 'brand';
  const showRoadScene =
    stage === 'truck-in' ||
    stage === 'truck-text' ||
    stage === 'text-out' ||
    stage === 'truck-out' ||
    stage === 'fade-out';
  const showTruckText = stage === 'truck-text';
  const isTruckExiting = stage === 'truck-out' || stage === 'fade-out';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando Sabor Sustentável"
      className={`fixed inset-0 z-[70] bg-[#F7F5ED] flex items-center justify-center overflow-hidden transition-opacity duration-[350ms] ${
        stage === 'fade-out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Quick Skip Button */}
      <button
        type="button"
        onClick={onComplete}
        className="absolute top-4 right-4 z-30 min-h-[40px] px-3.5 py-1.5 rounded-[10px] bg-[#FFFFFF] hover:bg-[#FFD66B] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] font-display text-xs font-bold text-[#20231F] cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
      >
        Pular
      </button>

      {/* Phase 1 & 2: Fast Navbar Logo followed by App Name */}
      <div
        className={`relative z-20 flex flex-col items-center text-center px-6 transition-all duration-[250ms] ${
          showBrandLockup ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'
        }`}
      >
        <div className="animate-loader-logo drop-shadow-[4px_4px_0px_#20231F]">
          <BrandLogoMark className="w-20 h-20 sm:w-24 sm:h-24" />
        </div>

        {(stage === 'brand' || !showBrandLockup) && (
          <h1 className="animate-loader-name mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#20231F]">
            Sabor Sustentável
          </h1>
        )}
      </div>

      {/* Phase 3 & 4: Isometric Diagonal Road, Trees, Market Truck & Neo-brutalist Text */}
      {showRoadScene && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-up">
          {/* Diagonal Isometric Road + Flanking Trees (-20.8deg matches truck perspective) */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 w-[230vmax] -translate-x-1/2 -translate-y-1/2 -rotate-[20.8deg] pointer-events-none"
          >
            {/* Upper Road Scenery Row */}
            <div className="relative h-24 sm:h-28 flex items-end justify-center gap-24 sm:gap-44 pb-3">
              <RoadSceneryTree variant="tall" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg]" />
              <RoadSceneryTree variant="round" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg] translate-y-1" />
              <RoadSceneryTree variant="tall" className="w-14 h-18 sm:w-20 sm:h-24 rotate-[20.8deg]" />
              <RoadSceneryTree variant="round" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg]" />
            </div>

            {/* Cream Road Surface with Crisp Neo-brutalist Ink Borders */}
            <div className="w-full h-24 sm:h-32 bg-[#EFECE0] border-y-[3px] border-[#20231F]" />

            {/* Lower Road Scenery Row */}
            <div className="relative h-24 sm:h-28 flex items-start justify-center gap-28 sm:gap-48 pt-3">
              <RoadSceneryTree variant="round" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg]" />
              <RoadSceneryTree variant="tall" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg]" />
              <RoadSceneryTree variant="round" className="w-16 h-20 sm:w-20 sm:h-24 rotate-[20.8deg]" />
            </div>
          </div>

          {/* Centered Hero-style Text (no text-shadow, compact balanced wrap) */}
          <div className="absolute inset-x-0 top-[14%] sm:top-[15%] z-20 px-5 flex justify-center pointer-events-none">
            <p
              className={`font-display font-bold text-[1.65rem] sm:text-4xl lg:text-[2.6rem] leading-[1.16] tracking-tight text-[#20231F] text-center text-balance max-w-[290px] sm:max-w-[480px] mx-auto transition-all duration-[250ms] ${
                showTruckText
                  ? 'opacity-100 translate-y-0 scale-100'
                  : stage === 'text-out' || isTruckExiting
                    ? 'opacity-0 -translate-y-4 scale-95'
                    : 'opacity-0 translate-y-4 scale-95'
              }`}
            >
              Carregando receitas{' '}
              <span className="inline-block bg-[#B8E36A] border-2 border-[#20231F] px-2.5 py-0.5 rounded-[10px] shadow-[3px_3px_0px_#20231F] mt-1">
                e tudo mais...
              </span>
            </p>
          </div>

          {/* Isometric Food-Market Truck Driving Fluidly Along the Diagonal Road */}
          <div
            className={`relative z-10 pointer-events-none ${
              isTruckExiting ? 'animate-loader-truck-out' : 'animate-loader-truck-in'
            }`}
          >
            <IsometricMarketTruckIllustration
              isMoving
              className="w-56 h-44 sm:w-72 sm:h-56"
            />
          </div>
        </div>
      )}
    </div>
  );
};
