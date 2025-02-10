import { create } from "zustand";

interface SharedTerm {
  value: string;
  setValue: (newValue: string) => void;
}

const useSharedTerm = create<SharedTerm>((set) => ({
  value: "",
  setValue: (newValue) => set({ value: newValue }),
}));

export default useSharedTerm;
