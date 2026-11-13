import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'sabor-sustentavel-saved';
const SYNC_EVENT = 'sabor-sustentavel-saved-updated';

function readSavedIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useSavedRecipes() {
  const [savedIds, setSavedIds] = useState<string[]>(() => readSavedIds());

  useEffect(() => {
    const handleSync = () => {
      setSavedIds(readSavedIds());
    };
    window.addEventListener(SYNC_EVENT, handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener(SYNC_EVENT, handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const toggleSave = useCallback((recipeId: string) => {
    const current = readSavedIds();
    const next = current.includes(recipeId)
      ? current.filter((id) => id !== recipeId)
      : [...current, recipeId];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors
    }
    setSavedIds(next);
    window.dispatchEvent(new Event(SYNC_EVENT));
  }, []);

  const isSaved = useCallback(
    (recipeId: string) => savedIds.includes(recipeId),
    [savedIds]
  );

  return { savedIds, toggleSave, isSaved };
}
