import { create } from 'zustand';

interface AppState {
  currentSection: string | null;
  setCurrentSection: (section: string) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  selectedIslandPoint: string | null;
  setSelectedIslandPoint: (pointId: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: null,
  setCurrentSection: (section) => set({ currentSection: section }),
  isModalOpen: false,
  setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  selectedIslandPoint: null,
  setSelectedIslandPoint: (pointId) => set({ selectedIslandPoint: pointId }),
}));
