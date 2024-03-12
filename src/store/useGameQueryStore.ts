import { create } from 'zustand';
import { GameQuery } from '../types/gameQuery';

export interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (order: string) => void;
  setSearchQuery: (query: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (id) => set((store) => (
    { gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id) => set((store) => (
    { gameQuery: { ...store.gameQuery, platformId: id } })),
  setSortOrder: (order) => set((store) => (
    { gameQuery: { ...store.gameQuery, sortOrder: order } })),
  setSearchQuery: (searchQuery) => set(() => ({ gameQuery: { searchQuery } })),
}));

export default useGameQueryStore;
