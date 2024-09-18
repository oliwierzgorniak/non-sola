import { create } from "zustand";

type MyProfile = {
  name: string;
  age: string;
  denomination: string;
  img: string | null;
  description: string;
  location: [number, number];
  leftFormAreaError: string;
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setDenomination: (denomination: string) => void;
  setLeftFormAreaError: (leftFormAreaError: string) => void;
  setImg: (img: string) => void;
  setDescription: (description: string) => void;
  setLocation: (location: [number, number]) => void;
};

export const useMyProfileStore = create<MyProfile>((set) => ({
  name: "",
  age: "",
  denomination: "",
  img: null,
  description: "",
  location: [50.059, 19.937],
  leftFormAreaError: "",
  setName: (name) => set((state) => ({ ...state, name })),
  setAge: (age) => set((state) => ({ ...state, age })),
  setDenomination: (denomination) =>
    set((state) => ({ ...state, denomination })),
  setImg: (img) => set((state) => ({ ...state, img })),
  setLeftFormAreaError: (leftFormAreaError) =>
    set((state) => ({ ...state, leftFormAreaError })),
  setDescription: (description) => set((state) => ({ ...state, description })),
  setLocation: (location) => set((state) => ({ ...state, location })),
}));
