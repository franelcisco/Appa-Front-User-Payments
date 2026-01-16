import type { StoreStoreType } from "@/types/store";
import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";
import { useStore } from "zustand";

export const StoreStore = createStore<StoreStoreType>()(
  persist(
    (set) => ({
      order: undefined,
      setOrder: (order: string | undefined) => set({ order }),
    }),
    {
      name: "store-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useStoreStore = () => useStore(StoreStore);
