import { create } from "zustand";

type RegisterStore = {
  name: string;
  password: string;
  email: string;
  denomination: string;
  passwordError: string;
  currentSection: number;
  img: string | null;
  description: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setDenomination: (denomination: string) => void;
  setPasswordError: (passwordError: string) => void;
  increaseCurrentSection: () => void;
  decreaseCurrentSection: () => void;
  setImg: (img: string) => void;
  setDescription: (description: string) => void;
};

export const useRegisterStore = create<RegisterStore>((set) => ({
  name: "",
  password: "",
  email: "",
  denomination: "",
  passwordError: "",
  currentSection: 0,
  img: null,
  description: "",
  setName: (name) => set((state) => ({ ...state, name })),
  setPassword: (password) => set((state) => ({ ...state, password })),
  setEmail: (email) => set((state) => ({ ...state, email })),
  setDenomination: (denomination) =>
    set((state) => ({ ...state, denomination })),
  setPasswordError: (passwordError) =>
    set((state) => ({ ...state, passwordError })),
  increaseCurrentSection: () =>
    set((state) => ({ ...state, currentSection: state.currentSection + 1 })),
  decreaseCurrentSection: () =>
    set((state) => ({ ...state, currentSection: state.currentSection - 1 })),
  setImg: (img) => set((state) => ({ ...state, img })),
  setDescription: (description) => set((state) => ({ ...state, description })),
}));
