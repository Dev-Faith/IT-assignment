// store/sidebarToggle.ts
import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
}));
