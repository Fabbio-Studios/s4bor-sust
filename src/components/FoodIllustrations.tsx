import React from 'react';

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="4"
      y="4"
      width="40"
      height="40"
      rx="11"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="2.5"
    />
    <circle cx="24" cy="27" r="12" fill="#FFFFFF" stroke="#20231F" strokeWidth="2.5" />
    <path
      d="M15.5 27C15.5 31.6944 19.3056 35.5 24 35.5C28.6944 35.5 32.5 31.6944 32.5 27"
      stroke="#20231F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M24 26V13" stroke="#20231F" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M24 17C24 12.5 28.5 10 33 10.5C32.5 15 29 18.5 24 17Z"
      fill="#FFD66B"
      stroke="#20231F"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M24 19C24 14.5 19.5 12 15 12.5C15.5 17 19 20.5 24 19Z"
      fill="#FF8065"
      stroke="#20231F"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
  </svg>
);

export const TomatoIllustration: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M50 26C30 26 16 39 16 58C16 76 30 88 50 88C70 88 84 76 84 58C84 39 70 26 50 26Z"
      fill="#FF8065"
      stroke="#20231F"
      strokeWidth="3.5"
    />
    <path
      d="M50 28C45 19 36 16 32 22C38 25 43 27 50 28Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M50 28C55 19 64 16 68 22C62 25 57 27 50 28Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M50 28L50 13" stroke="#20231F" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M29 47C31 40 37 36 43 35" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const CarrotIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M72 34C76 20 86 14 94 18C88 26 81 31 72 34Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M68 32C66 18 72 9 80 9C78 18 74 26 68 32Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M75 39C87 34 97 36 99 44C90 46 82 44 75 39Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M63 32C72 28 81 36 77 46C67 66 42 87 22 93C17 94 15 90 17 85C24 66 44 41 63 32Z"
      fill="#FF8065"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path d="M51 47L58 53" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 61L46 66" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
    <path d="M31 74L35 78" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const BroccoliIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M44 54L38 89C37 93 41 96 45 96H65C69 96 73 93 72 89L66 54H44Z"
      fill="#D7F29E"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 58C20 58 14 47 19 37C23 29 31 27 36 28C39 18 49 13 59 16C68 18 73 25 74 30C84 29 93 36 93 46C93 56 84 62 74 60C70 64 62 65 55 62C47 66 37 64 32 58Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path d="M48 64V83" stroke="#20231F" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M60 64L61 78" stroke="#20231F" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export const PotIllustration: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path className="animate-steam-1" d="M43 32C40 25 46 20 43 13" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
    <path className="animate-steam-2" d="M62 28C59 21 65 16 62 9" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
    <path className="animate-steam-1" d="M79 33C76 26 82 21 79 14" stroke="#20231F" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 60H12C9 60 8 68 13 69H22" stroke="#20231F" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M98 60H108C111 60 112 68 107 69H98" stroke="#20231F" strokeWidth="3.5" strokeLinecap="round" />
    <path
      d="M22 52H98V86C98 94 91 100 83 100H37C29 100 22 94 22 86V52Z"
      fill="#FFD66B"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M18 49C18 45 21 43 25 43H95C99 43 102 45 102 49V53H18V49Z"
      fill="#FFFFFF"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <rect x="52" y="35" width="16" height="8" rx="4" fill="#FF8065" stroke="#20231F" strokeWidth="3" />
    <path
      d="M60 82C60 72 68 67 74 68C73 76 67 82 60 82Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M60 82C60 72 52 67 46 68C47 76 53 82 60 82Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const CitrusIllustration: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="50" cy="50" r="36" fill="#FFD66B" stroke="#20231F" strokeWidth="3.5" />
    <circle cx="50" cy="50" r="28" fill="#FFFDF5" stroke="#20231F" strokeWidth="2.5" />
    <path d="M50 22V78" stroke="#20231F" strokeWidth="2.5" />
    <path d="M22 50H78" stroke="#20231F" strokeWidth="2.5" />
    <path d="M30 30L70 70" stroke="#20231F" strokeWidth="2.5" />
    <path d="M70 30L30 70" stroke="#20231F" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="5" fill="#FFD66B" stroke="#20231F" strokeWidth="2.5" />
  </svg>
);

export const LeafClusterIllustration: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M45 78V32" stroke="#20231F" strokeWidth="3.5" strokeLinecap="round" />
    <path
      d="M45 48C45 28 60 14 78 16C76 35 63 49 45 48Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3.2"
      strokeLinejoin="round"
    />
    <path
      d="M45 58C45 40 31 27 14 29C16 46 28 59 45 58Z"
      fill="#FFD66B"
      stroke="#20231F"
      strokeWidth="3.2"
      strokeLinejoin="round"
    />
    <path d="M45 48L64 29" stroke="#20231F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45 58L27 40" stroke="#20231F" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const EggplantIllustration: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M64 26C73 34 78 52 70 70C63 85 45 90 32 82C20 74 22 57 32 45C42 33 52 17 64 26Z"
      fill="#9D8DF1"
      stroke="#20231F"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M48 29C49 20 58 15 68 21C74 24 76 31 73 36C67 31 58 31 48 29Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="3.2"
      strokeLinejoin="round"
    />
    <path d="M62 19L67 11" stroke="#20231F" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M36 66C34 61 36 55 41 50" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const HarvestCharacterIllustration: React.FC<{ className?: string }> = ({
  className = 'w-full max-w-[260px] h-auto',
}) => (
  <svg viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Soft ground oval */}
    <ellipse cx="145" cy="238" rx="95" ry="12" fill="#B8E36A" stroke="#20231F" strokeWidth="2.5" />

    {/* Floating fruit being picked */}
    <g className="animate-float-slow">
      <circle cx="52" cy="72" r="14" fill="#FFD66B" stroke="#20231F" strokeWidth="2.8" />
      <path d="M52 58C54 51 60 49 63 52C60 56 56 58 52 58Z" fill="#B8E36A" stroke="#20231F" strokeWidth="2.2" />
    </g>

    {/* Harvest Pile: Pineapple, Pumpkin & Tomatoes on bottom left */}
    {/* Pineapple */}
    <path d="M98 165L88 142L103 152L112 135L118 154L133 144L123 167Z" fill="#B8E36A" stroke="#20231F" strokeWidth="2.5" strokeLinejoin="round" />
    <ellipse cx="110" cy="196" rx="22" ry="30" fill="#FFD66B" stroke="#20231F" strokeWidth="2.8" />
    <path d="M95 182L125 210M92 200L117 222M124 182L95 210" stroke="#20231F" strokeWidth="2" strokeLinecap="round" />

    {/* Pumpkin */}
    <ellipse cx="76" cy="212" rx="26" ry="21" fill="#FF8065" stroke="#20231F" strokeWidth="2.8" />
    <path d="M76 191C69 198 69 225 76 233M76 191C83 198 83 225 76 233" stroke="#20231F" strokeWidth="2.2" />
    <path d="M74 191V182C74 179 79 179 80 183" stroke="#20231F" strokeWidth="2.8" strokeLinecap="round" />

    {/* Small citrus / tomato beside pile */}
    <circle cx="136" cy="218" r="14" fill="#FF8065" stroke="#20231F" strokeWidth="2.5" />
    <path d="M136 204L136 198" stroke="#20231F" strokeWidth="2.5" strokeLinecap="round" />

    {/* Character reaching playfully for the citrus */}
    {/* Back Leg */}
    <path
      d="M196 142L242 202L230 212L182 152"
      fill="#FF8065"
      stroke="#20231F"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    {/* Back Sneaker */}
    <path d="M232 210L248 222L236 229L225 214Z" fill="#FFFFFF" stroke="#20231F" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Front Leg */}
    <path
      d="M174 142L178 220L160 220L158 142"
      fill="#FF8065"
      stroke="#20231F"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    {/* Front Sneaker */}
    <path d="M160 220H182C184 220 186 229 178 230H154C152 225 156 220 160 220Z" fill="#FFFFFF" stroke="#20231F" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Reaching Arm */}
    <path
      d="M160 95L66 74L64 84L154 112"
      fill="#FFD6B0"
      stroke="#20231F"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />

    {/* Torso / Green Top */}
    <path
      d="M153 94C158 88 176 88 184 96L194 144H158L153 94Z"
      fill="#B8E36A"
      stroke="#20231F"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />

    {/* Head & Hair Bun */}
    <circle cx="174" cy="54" r="10" fill="#20231F" />
    <circle cx="164" cy="70" r="14" fill="#FFD6B0" stroke="#20231F" strokeWidth="2.8" />
    <path
      d="M162 56C172 55 180 63 178 75C172 74 166 69 162 56Z"
      fill="#20231F"
    />
    <circle cx="158" cy="69" r="2" fill="#20231F" />
    <path d="M155 75C157 77 161 77 162 75" stroke="#20231F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HeroVisualComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto py-2 sm:py-4">
      {/* Main framed Neo-brutalist kitchen & harvest board */}
      <div className="neo-box bg-[#FFFFFF] p-4 sm:p-6 relative overflow-visible">
        {/* Top editorial plate header inside artwork */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#20231F] pb-3 mb-4">
          <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-[#20231F]">
            Caderno de Cozinha Integral
          </span>
          <span className="font-display text-[11px] sm:text-xs font-bold bg-[#FFD66B] border-2 border-[#20231F] px-2 py-0.5 rounded-md shrink-0">
            Edição Colaborativa
          </span>
        </div>

        {/* Harvest Character & Animated Vegetable Duo */}
        <div className="grid grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
          {/* Main Harvest Scene (inspired by opening app card) */}
          <div className="col-span-12 sm:col-span-7 bg-[#F7F5ED] border-2 border-[#20231F] rounded-[14px] p-3 flex flex-col items-center justify-center min-h-[170px] sm:min-h-[190px]">
            <HarvestCharacterIllustration className="w-full max-w-[200px] sm:max-w-[220px] h-auto" />
          </div>

          {/* Right column inside artwork: Floating Vegetables */}
          <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-3.5">
            <div className="bg-[#B8E36A] border-2 border-[#20231F] rounded-[14px] p-2.5 sm:p-3 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center -space-x-2 animate-float-slow">
                <CarrotIllustration className="w-13 h-13 sm:w-16 sm:h-16 animate-float-slow transition-transform duration-200 hover:scale-105" />
                <BroccoliIllustration className="w-13 h-13 sm:w-16 sm:h-16 animate-float-delayed transition-transform duration-200 hover:scale-105" />
              </div>
              <span className="font-display text-[11px] sm:text-xs font-bold text-[#20231F] text-center">
                Ramas &amp; Talos
              </span>
            </div>

            <div className="bg-[#FFD66B] border-2 border-[#20231F] rounded-[14px] p-2.5 sm:p-3 flex items-center justify-around gap-1">
              <TomatoIllustration className="w-9 h-9 sm:w-12 sm:h-12 animate-float-delayed transition-transform duration-200 hover:scale-105" />
              <CitrusIllustration className="w-9 h-9 sm:w-12 sm:h-12 animate-sway-gentle transition-transform duration-200 hover:scale-105" />
              <EggplantIllustration className="w-9 h-9 sm:w-12 sm:h-12 animate-float-slow transition-transform duration-200 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Graphic floating sticker tags extending slightly past edges on sm+ */}
        <div
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF8065] text-[#20231F] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] rounded-lg px-3 py-1.5 font-display text-xs font-bold -rotate-3 absolute -top-4 -right-3"
        >
          100% criatividade
        </div>

        <div
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#B8E36A] text-[#20231F] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] rounded-lg px-3 py-1.5 font-display text-xs font-bold rotate-2 absolute -bottom-4 -left-3"
        >
          Menos desperdício
        </div>

        <div
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#FFFFFF] text-[#20231F] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] rounded-lg px-3 py-1.5 font-display text-xs font-bold -rotate-2 absolute -bottom-4 right-6"
        >
          Mais possibilidades
        </div>
      </div>

      {/* Mobile-friendly sticker row inside container */}
      <div className="flex flex-wrap gap-2 mt-4 sm:hidden justify-center">
        <span className="bg-[#FF8065] text-[#20231F] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] rounded-lg px-2.5 py-1 font-display text-xs font-bold">
          100% criatividade
        </span>
        <span className="bg-[#B8E36A] text-[#20231F] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] rounded-lg px-2.5 py-1 font-display text-xs font-bold">
          Menos desperdício
        </span>
        <span className="bg-[#FFFFFF] text-[#20231F] border-2 border-[#20231F] shadow-[2px_2px_0px_#20231F] rounded-lg px-2.5 py-1 font-display text-xs font-bold">
          Mais possibilidades
        </span>
      </div>
    </div>
  );
};
