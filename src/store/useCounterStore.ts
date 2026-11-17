import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterState {
  counts: Record<string, number>;
  setCount: (dhikrId: string, count: number) => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      counts: {},
      setCount: (dhikrId, count) =>
        set((state) => ({ counts: { ...state.counts, [dhikrId]: count } })),
    }),
    {
      name: "kun-min-aldhaakirin-counts",
    },
  ),
);
