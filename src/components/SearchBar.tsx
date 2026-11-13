import React from 'react';
import { MaterialIcon } from './MaterialIcon';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="neo-input flex items-center px-4 py-2.5 w-full max-w-xl">
      <MaterialIcon name="search" size={22} className="text-[#20231F] mr-3 shrink-0" />
      <label htmlFor="recipe-search" className="sr-only">
        Pesquisar receitas pelo nome
      </label>
      <input
        id="recipe-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Qual receita você está procurando?"
        className="w-full bg-transparent text-[#20231F] placeholder:text-[#20231F]/55 text-base font-medium focus:outline-none"
      />
      {value.trim().length > 0 && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className="ml-2 p-1 rounded-lg hover:bg-[#F7F5ED] text-[#20231F] transition-colors shrink-0"
        >
          <MaterialIcon name="close" size={20} />
        </button>
      )}
    </div>
  );
};
