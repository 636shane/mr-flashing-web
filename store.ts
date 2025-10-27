import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist((set, get) => ({
  templates: [],
  orders: [],
  suppliers: [],
  settings: { ratePerM: 25 },
  addTemplate: (t) => set({ templates: [t, ...get().templates] }),
  addOrder: (t) => set({ orders: [t, ...get().orders] }),
  clearOrders: () => set({ orders: [] }),
}), { name: 'mr-flashing-store' }));

export default useStore;