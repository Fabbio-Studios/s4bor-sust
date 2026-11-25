import React from 'react';
import { MaterialIcon } from './MaterialIcon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Paginação do livro de receitas"
      className="pt-2 flex flex-col items-center gap-3"
    >
      <div className="inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className={`inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 min-w-[44px] min-h-[44px] rounded-[11px] border-2 border-[#20231F] font-display text-xs sm:text-sm font-bold transition-[transform,box-shadow,background-color] duration-150 ${
            currentPage === 1
              ? 'bg-[#FFFFFF]/60 text-[#20231F]/40 border-[#20231F]/35 cursor-not-allowed'
              : 'bg-[#FFFFFF] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B] cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none'
          }`}
        >
          <MaterialIcon name="chevron_left" size={20} />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-1.5">
          {pages.map((page) => {
            const isCurrent = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`Página ${page}`}
                className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-3 rounded-[11px] border-2 border-[#20231F] font-display text-sm font-bold tabular-nums transition-[transform,box-shadow,background-color] duration-150 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#B8E36A] text-[#20231F] shadow-[2px_2px_0px_#20231F] translate-x-[1px] translate-y-[1px]'
                    : 'bg-[#FFFFFF] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B]'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          className={`inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 min-w-[44px] min-h-[44px] rounded-[11px] border-2 border-[#20231F] font-display text-xs sm:text-sm font-bold transition-[transform,box-shadow,background-color] duration-150 ${
            currentPage === totalPages
              ? 'bg-[#FFFFFF]/60 text-[#20231F]/40 border-[#20231F]/35 cursor-not-allowed'
              : 'bg-[#FFFFFF] text-[#20231F] shadow-[3px_3px_0px_#20231F] hover:bg-[#FFD66B] cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none'
          }`}
        >
          <span className="hidden sm:inline">Próxima</span>
          <MaterialIcon name="chevron_right" size={20} />
        </button>
      </div>

      <p className="font-display text-xs font-bold text-[#20231F]/70 tabular-nums">
        Página {currentPage} de {totalPages} · Mostrando {startItem}–{endItem} de {totalItems}
      </p>
    </nav>
  );
};
