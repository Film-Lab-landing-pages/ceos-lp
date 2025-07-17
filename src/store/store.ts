import { create } from "zustand";

interface InscriptionState {
  isFormVisible: boolean;
  showForm: () => void;
  hideForm: () => void;
  toggleForm: () => void;
}

export const useInscriptionStore = create<InscriptionState>((set) => ({
  // Estado inicial
  isFormVisible: false,

  // Ações
  showForm: () => set({ isFormVisible: true }),
  hideForm: () => set({ isFormVisible: false }),
  toggleForm: () => set((state) => ({ isFormVisible: !state.isFormVisible })),
}));
