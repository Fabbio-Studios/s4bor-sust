import React from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../types/recipe';
import { MaterialIcon } from './MaterialIcon';
import { AuthorAvatar } from './AuthorAvatar';
import {
  CarrotIllustration,
  CitrusIllustration,
  LeafClusterIllustration,
  PotIllustration,
} from './FoodIllustrations';

interface AuthorProfileProps {
  author: Author;
}

const MotifBadge: React.FC<{ motif: Author['motif'] }> = ({ motif }) => {
  switch (motif) {
    case 'carrot':
      return <CarrotIllustration className="w-8 h-8" />;
    case 'citrus':
      return <CitrusIllustration className="w-8 h-8" />;
    case 'pot':
      return <PotIllustration className="w-8 h-8" />;
    case 'leaf':
    case 'sprout':
    default:
      return <LeafClusterIllustration className="w-8 h-8" />;
  }
};

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  return (
    <section aria-labelledby="author-heading" data-tour="recipe-author">
      <Link
        to={`/perfil/${author.id}`}
        className="group block neo-card-interactive bg-[#FFFFFF] p-5 sm:p-8"
        aria-label={`Ver perfil de ${author.name}`}
      >
        <div className="flex items-center justify-between gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#20231F]/70 mb-4">
          <div className="flex items-center gap-2">
            <MaterialIcon name="groups" size={18} />
            <h2 id="author-heading">Quem compartilhou essa receita?</h2>
          </div>
          <span className="inline-flex items-center gap-1 text-[#20231F] group-hover:underline underline-offset-4">
            <span>Ver perfil</span>
            <MaterialIcon
              name="arrow_forward"
              size={15}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Circular Illustrated Profile Photo */}
          <div className="relative shrink-0">
            <AuthorAvatar author={author} size="lg" rounded="full" />
            <div className="absolute -bottom-1.5 -right-1.5 bg-[#FFFFFF] border-2 border-[#20231F] rounded-lg p-0.5 shadow-[2px_2px_0px_#20231F]">
              <MotifBadge motif={author.motif} />
            </div>
          </div>

          {/* Author Details */}
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-bold text-xl text-[#20231F] group-hover:underline underline-offset-4 decoration-2">
                {author.name}
              </h3>
              <span className="text-xs sm:text-sm font-display font-bold text-[#20231F]/70">
                {author.handle}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#20231F]/75">
                · {author.role}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#20231F]/85 leading-relaxed max-w-2xl line-clamp-2">
              {author.bio}
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-display font-bold text-[#20231F] tabular-nums">
                <MaterialIcon name="menu_book" size={18} />
                <span>
                  {author.sharedRecipesCount}{' '}
                  {author.sharedRecipesCount === 1
                    ? 'receita compartilhada'
                    : 'receitas compartilhadas'}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 font-display font-bold text-xs sm:text-sm bg-[#FFD66B] group-hover:bg-[#B8E36A] border-2 border-[#20231F] rounded-[10px] px-3 py-1.5 transition-colors">
                <span>Abrir perfil completo</span>
                <MaterialIcon name="arrow_forward" size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};
