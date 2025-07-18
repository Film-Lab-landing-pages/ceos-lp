import { create } from "zustand";

interface InscriptionState {
  isFormVisible: boolean;
  isActive: boolean;
  showForm: () => void;
  hideForm: () => void;
  toggleForm: () => void;
}

export const useInscriptionStore = create<InscriptionState>((set) => ({
  // Estado inicial
  isFormVisible: false,
  isActive: false,

  // Ações
  showForm: () => {
    set({ isFormVisible: true });
    // Adiciona a classe active após um pequeno delay para permitir a transição
    setTimeout(() => {
      set({ isActive: true });
    }, 10);
  },
  hideForm: () => {
    set({ isActive: false });
    // Remove o elemento após a transição
    setTimeout(() => {
      set({ isFormVisible: false });
    }, 300); // 300ms para a transição
  },
  toggleForm: () =>
    set((state) => ({
      isFormVisible: !state.isFormVisible,
      isActive: !state.isActive,
    })),
}));
