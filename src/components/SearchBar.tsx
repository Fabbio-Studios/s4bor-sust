import React from 'react';
import { MaterialIcon } from './MaterialIcon';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="neo-input flex items-center px-3 sm:px-4 py-1.5 w-full min-w-0 flex-1 min-h-[46px]">
      <MaterialIcon name="search" size={20} className="text-[#20231F]/80 mr-2 sm:mr-2.5 shrink-0" />
      <label htmlFor="recipe-search" className="sr-only">
        Pesquisar receitas pelo nome
      </label>
      <input
        id="recipe-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar receita..."
        className="w-full min-w-0 bg-transparent text-[#20231F] placeholder:text-[#20231F]/55 text-sm sm:text-base font-medium focus:outline-none"
      />
      {value.trim().length > 0 && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className="ml-1 w-9 h-9 inline-flex items-center justify-center rounded-lg hover:bg-[#F7F5ED] text-[#20231F] transition-colors shrink-0 cursor-pointer"
        >
          <MaterialIcon name="close" size={18} />
        </button>
      )}
    </div>
  );
};
