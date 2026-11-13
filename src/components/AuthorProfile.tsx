import React, { useState } from 'react';
import { Author } from '../types/recipe';
import { MaterialIcon } from './MaterialIcon';
import {
  CarrotIllustration,
  CitrusIllustration,
  LeafClusterIllustration,
  PotIllustration,
} from './FoodIllustrations';

interface AuthorProfileProps {
  author: Author;
}

const bgMap: Record<Author['accentColor'], string> = {
  primary: 'bg-[#B8E36A]',
  secondary: 'bg-[#FFD66B]',
  accent: 'bg-[#FF8065]',
};

const MotifBadge: React.FC<{ motif: Author['motif'] }> = ({ motif }) => {
  switch (motif) {
    case 'carrot':
      return <CarrotIllustration className="w-10 h-10" />;
    case 'citrus':
      return <CitrusIllustration className="w-10 h-10" />;
    case 'pot':
      return <PotIllustration className="w-10 h-10" />;
    case 'leaf':
    case 'sprout':
    default:
      return <LeafClusterIllustration className="w-10 h-10" />;
  }
};

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <section aria-labelledby="author-heading" className="neo-box bg-[#FFFFFF] p-6 sm:p-8">
      <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#20231F]/70 mb-4">
        <MaterialIcon name="groups" size={18} />
        <h2 id="author-heading">Quem compartilhou essa receita?</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Stylized Avatar with Initials Fallback (no photorealistic fake people) */}
        <div className="relative shrink-0">
          {author.avatarUrl && !avatarFailed ? (
            <img
              src={author.avatarUrl}
              alt={`Avatar de ${author.name}`}
              referrerPolicy="no-referrer"
              onError={() => setAvatarFailed(true)}
              className="w-20 h-20 rounded-[14px] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] object-cover"
            />
          ) : (
            <div
              className={`w-20 h-20 rounded-[14px] border-2 border-[#20231F] shadow-[3px_3px_0px_#20231F] ${bgMap[author.accentColor]} flex flex-col items-center justify-center relative overflow-hidden`}
              aria-hidden="true"
            >
              <span className="font-display font-bold text-2xl text-[#20231F] leading-none">
                {author.initials}
              </span>
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 bg-[#FFFFFF] border-2 border-[#20231F] rounded-lg p-0.5 shadow-[2px_2px_0px_#20231F]">
            <MotifBadge motif={author.motif} />
          </div>
        </div>

        {/* Author Details */}
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display font-bold text-xl text-[#20231F]">{author.name}</h3>
            <span className="text-sm font-medium text-[#20231F]/75">{author.role}</span>
          </div>

          <p className="text-sm sm:text-base text-[#20231F]/85 leading-relaxed max-w-2xl">
            {author.bio}
          </p>

          <div className="pt-1 flex items-center gap-2 text-sm font-display font-bold text-[#20231F] tabular-nums">
            <MaterialIcon name="menu_book" size={18} />
            <span>{author.sharedRecipesCount} receitas compartilhadas no livro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
