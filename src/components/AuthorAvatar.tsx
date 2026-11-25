import React, { useState } from 'react';
import { Author } from '../types/recipe';

interface AuthorAvatarProps {
  author: Author;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'full' | 'square';
  className?: string;
}

const sizeClasses: Record<NonNullable<AuthorAvatarProps['size']>, string> = {
  xs: 'w-6 h-6',
  sm: 'w-9 h-9',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24 sm:w-28 sm:h-28',
};

const bgPalette: Record<Author['accentColor'], string> = {
  primary: '#B8E36A',
  secondary: '#FFD66B',
  accent: '#FF8065',
};

interface AvatarVisualConfig {
  bg: string;
  shirt: string;
  skin: string;
  hair: string;
  hairStyle: 'short' | 'long' | 'curly' | 'bun' | 'wave' | 'bob';
  accessory: 'glasses' | 'hat' | 'leaf' | 'bandana' | 'none';
}

const avatarVisuals: Record<string, AvatarVisualConfig> = {
  paulo: {
    bg: '#FFD66B',
    shirt: '#B8E36A',
    skin: '#D99B72',
    hair: '#20231F',
    hairStyle: 'short',
    accessory: 'hat',
  },
  'anna-livia': {
    bg: '#B8E36A',
    shirt: '#FF8065',
    skin: '#E6AE8C',
    hair: '#2B221E',
    hairStyle: 'long',
    accessory: 'leaf',
  },
  geandro: {
    bg: '#FF8065',
    shirt: '#FFD66B',
    skin: '#A86E4B',
    hair: '#20231F',
    hairStyle: 'curly',
    accessory: 'bandana',
  },
  'leticia-dias': {
    bg: '#FFD66B',
    shirt: '#FF8065',
    skin: '#F0BEA0',
    hair: '#3A2820',
    hairStyle: 'bun',
    accessory: 'glasses',
  },
  'guilherme-dias': {
    bg: '#B8E36A',
    shirt: '#FFD66B',
    skin: '#C88962',
    hair: '#20231F',
    hairStyle: 'wave',
    accessory: 'none',
  },
  girliane: {
    bg: '#FF8065',
    shirt: '#B8E36A',
    skin: '#B97C56',
    hair: '#20231F',
    hairStyle: 'bob',
    accessory: 'glasses',
  },
};

export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
  author,
  size = 'lg',
  rounded = 'full',
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const shapeClass = rounded === 'full' ? 'rounded-full' : 'rounded-[14px]';
  const borderClass =
    size === 'xs'
      ? 'border border-[#20231F]'
      : 'border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F]';

  if (author.avatarUrl && !imgFailed) {
    return (
      <img
        src={author.avatarUrl}
        alt={`Foto de perfil de ${author.name}`}
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
        className={`${sizeClasses[size]} ${shapeClass} ${borderClass} object-cover shrink-0 ${className}`}
      />
    );
  }

  const config = avatarVisuals[author.id] ?? {
    bg: bgPalette[author.accentColor],
    shirt: '#FFFFFF',
    skin: '#E6AE8C',
    hair: '#20231F',
    hairStyle: 'short',
    accessory: 'leaf',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${shapeClass} ${borderClass} overflow-hidden shrink-0 flex items-center justify-center ${className}`}
      style={{ backgroundColor: config.bg }}
      aria-label={`Ilustração de perfil de ${author.name}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
        {/* Subtle decorative background halo */}
        <circle cx="50" cy="50" r="42" fill="#FFFFFF" fillOpacity="0.28" />

        {/* Back hair for long/bob/curly styles */}
        {config.hairStyle === 'long' && (
          <path
            d="M27 42 C25 60 25 78 32 86 L68 86 C75 78 75 60 73 42 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="3"
          />
        )}
        {config.hairStyle === 'bob' && (
          <path
            d="M28 42 C26 56 27 67 34 72 L66 72 C73 67 74 56 72 42 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="3"
          />
        )}
        {config.hairStyle === 'bun' && (
          <circle cx="50" cy="18" r="11" fill={config.hair} stroke="#20231F" strokeWidth="3" />
        )}

        {/* Shoulders / Uniform */}
        <path
          d="M20 96 C22 76 34 69 50 69 C66 69 78 76 80 96 Z"
          fill={config.shirt}
          stroke="#20231F"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Shirt collar */}
        <path
          d="M39 70 L50 81 L61 70"
          fill="#FFFFFF"
          stroke="#20231F"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Neck */}
        <rect
          x="44"
          y="59"
          width="12"
          height="13"
          rx="4"
          fill={config.skin}
          stroke="#20231F"
          strokeWidth="2.8"
        />

        {/* Head */}
        <circle
          cx="50"
          cy="44"
          r="19"
          fill={config.skin}
          stroke="#20231F"
          strokeWidth="3.2"
        />

        {/* Hair crown */}
        {config.hairStyle === 'short' && (
          <path
            d="M31 41 C31 27 41 22 50 22 C60 22 69 27 69 41 C65 34 57 32 50 32 C42 32 35 34 31 41 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
        )}
        {config.hairStyle === 'wave' && (
          <path
            d="M30 42 C30 25 41 20 53 21 C63 22 70 28 70 42 C64 36 58 31 48 33 C39 35 34 37 30 42 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
        )}
        {config.hairStyle === 'curly' && (
          <path
            d="M29 41 C27 32 33 23 41 22 C45 18 55 18 59 22 C67 23 73 32 71 41 C65 36 58 33 50 33 C42 33 35 36 29 41 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
        )}
        {(config.hairStyle === 'long' ||
          config.hairStyle === 'bun' ||
          config.hairStyle === 'bob') && (
          <path
            d="M31 42 C31 27 40 23 50 23 C60 23 69 27 69 42 C64 34 56 32 50 34 C44 32 36 34 31 42 Z"
            fill={config.hair}
            stroke="#20231F"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
        )}

        {/* Chef / Eco Cap accessory */}
        {config.accessory === 'hat' && (
          <g>
            <path
              d="M34 25 C34 15 41 11 50 11 C59 11 66 15 66 25 Z"
              fill="#FFFFFF"
              stroke="#20231F"
              strokeWidth="2.8"
            />
            <rect
              x="33"
              y="23"
              width="34"
              height="6"
              rx="2"
              fill="#FFFFFF"
              stroke="#20231F"
              strokeWidth="2.6"
            />
          </g>
        )}

        {/* Bandana accessory */}
        {config.accessory === 'bandana' && (
          <path
            d="M31 35 Q50 30 69 35 L68 40 Q50 35 32 40 Z"
            fill="#FFFFFF"
            stroke="#20231F"
            strokeWidth="2.4"
          />
        )}

        {/* Eyes & Smile */}
        <circle cx="43" cy="45" r="2.2" fill="#20231F" />
        <circle cx="57" cy="45" r="2.2" fill="#20231F" />
        <path
          d="M44 52 Q50 57 56 52"
          fill="none"
          stroke="#20231F"
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* Glasses */}
        {config.accessory === 'glasses' && (
          <g fill="none" stroke="#20231F" strokeWidth="2.2">
            <circle cx="43" cy="45" r="5.5" />
            <circle cx="57" cy="45" r="5.5" />
            <path d="M48.5 45 L51.5 45" />
          </g>
        )}

        {/* Tiny Eco Leaf Pin */}
        {config.accessory === 'leaf' && (
          <path
            d="M62 24 C67 19 74 20 75 26 C70 29 64 28 62 24 Z"
            fill="#B8E36A"
            stroke="#20231F"
            strokeWidth="2.2"
          />
        )}
      </svg>
    </div>
  );
};
