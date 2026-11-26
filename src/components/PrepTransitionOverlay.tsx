import React from 'react';
import {
  BananaIllustration,
  BroccoliIllustration,
  CarrotIllustration,
  CitrusIllustration,
  PotLidIllustration,
  StrawberryIllustration,
  TomatoIllustration,
} from './FoodIllustrations';

interface PrepTransitionOverlayProps {
  phase: 'idle' | 'closing' | 'showing' | 'opening';
  onSkip: () => void;
}

const JUMPING_INGREDIENTS = [
  { id: 'tomato', Component: TomatoIllustration, delay: '0ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
  { id: 'banana', Component: BananaIllustration, delay: '110ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
  { id: 'citrus', Component: CitrusIllustration, delay: '220ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
  { id: 'strawberry', Component: StrawberryIllustration, delay: '80ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
  { id: 'carrot', Component: CarrotIllustration, delay: '190ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
  { id: 'broccoli', Component: BroccoliIllustration, delay: '290ms', size: 'w-12 h-12 sm:w-16 sm:h-16' },
];

export const PrepTransitionOverlay: React.FC<PrepTransitionOverlayProps> = ({ phase, onSkip }) => {
  if (phase === 'idle') return null;

  const isOpening = phase === 'opening';

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={onSkip}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* Top & bottom green curtains closing in to meet seamlessly at center */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[51%] bg-[#B8E36A] border-b-[3px] border-[#20231F] ${
          isOpening ? 'animate-prep-top-out' : 'animate-prep-top-in'
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-[51%] bg-[#B8E36A] border-t-[3px] border-[#20231F] ${
          isOpening ? 'animate-prep-bottom-out' : 'animate-prep-bottom-in'
        }`}
      />

      {/* Center Stage Content */}
      <div
        className={`relative z-10 max-w-[680px] w-full mx-auto px-5 py-6 flex flex-col items-center text-center gap-5 sm:gap-6 transition-opacity duration-150 ${
          isOpening ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Top Row of Jumping Ingredients */}
        <div className="flex items-center justify-center gap-3 sm:gap-5" aria-hidden="true">
          {JUMPING_INGREDIENTS.slice(0, 3).map(({ id, Component, delay, size }) => (
            <div
              key={id}
              className="animate-prep-jump bg-[#FFFFFF] border-2 border-[#20231F] rounded-[14px] p-1.5 sm:p-2 shadow-[3px_3px_0px_#20231F]"
              style={{ animationDelay: delay }}
            >
              <Component className={size} />
            </div>
          ))}
        </div>

        {/* Hero-style Centered Headline (no text-shadow, compact balanced wrap) */}
        <h2 className="animate-prep-title font-display font-bold text-[1.75rem] sm:text-4xl lg:text-[2.75rem] leading-[1.14] tracking-tight text-[#20231F] text-center text-balance max-w-[300px] sm:max-w-[500px] mx-auto px-2">
          Tá na hora do{' '}
          <span className="inline-block bg-[#FFD66B] border-2 border-[#20231F] px-2.5 py-0.5 rounded-[10px] shadow-[3px_3px_0px_#20231F] mt-1">
            modo de preparo!
          </span>
        </h2>

        {/* Floating Pot Lid Underneath */}
        <div className="flex flex-col items-center pt-1" aria-hidden="true">
          <div className="animate-prep-lid">
            <PotLidIllustration className="w-32 sm:w-40 h-auto drop-shadow-[4px_4px_0px_#20231F]" />
          </div>
          <div className="animate-prep-lid-shadow w-24 sm:w-28 h-3 rounded-full bg-[#20231F] -mt-1" />
        </div>

        {/* Bottom Row of Jumping Fruits & Veggies */}
        <div className="flex items-center justify-center gap-3 sm:gap-5" aria-hidden="true">
          {JUMPING_INGREDIENTS.slice(3).map(({ id, Component, delay, size }) => (
            <div
              key={id}
              className="animate-prep-jump bg-[#FFD66B] border-2 border-[#20231F] rounded-[14px] p-1.5 sm:p-2 shadow-[3px_3px_0px_#20231F]"
              style={{ animationDelay: delay }}
            >
              <Component className={size} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
