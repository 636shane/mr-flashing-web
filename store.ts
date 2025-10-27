import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Flashing = { id: string; name: string; image: string; qty: number; notes?: string; length_mm?: number; colour?: string; gauge?: string; };
export type Supplier = { id: string; name: string; email: string };
export type Settings = { ratePerM: number };

type State = {
  flashings: Flashing[];
  order: Flashing[];
  suppliers: Supplier[];
  defaultSupplierId?: string;
  settings: Settings;
  addFlashing: (f: Flashing)=>void;
  addToOrder: (f: Flashing)=>void;
  setQty: (id: string, qty: number)=>void;
  setNotes: (id: string, notes: string)=>void;
  setLength: (id: string, length_mm: number)=>void;
  setColour: (id: string, colour: string)=>void;
  setGauge: (id: string, gauge: string)=>void;
  removeFromOrder: (id: string)=>void;
  clearOrder: ()=>void;
  addSupplier: (s: Supplier)=>void;
  removeSupplier: (id: string)=>void;
  setDefaultSupplier: (id: string)=>void;
  setRate: (rate: number)=>void;
};

const useStore = create<State>()(persist((set, get)=> ({
  flashings: [],
  order: [],
  suppliers: [],
  defaultSupplierId: undefined,
  settings: { ratePerM: 25 },
  addFlashing: (f)=> set({ flashings: [f, ...get().flashings] }),
  addToOrder: (f)=> set({ order: [{...f, id: f.id + '-order-' + Date.now()}, ...get().order] }),
  setQty: (id, qty)=> set({ order: get().order.map(o=> o.id===id ? {...o, qty: Math.max(1, qty)} : o)}),
  setNotes: (id, notes)=> set({ order: get().order.map(o=> o.id===id ? {...o, notes} : o)}),
  setLength: (id, length_mm)=> set({ order: get().order.map(o=> o.id===id ? {...o, length_mm} : o)}),
  setColour: (id, colour)=> set({ order: get().order.map(o=> o.id===id ? {...o, colour} : o)}),
  setGauge: (id, gauge)=> set({ order: get().order.map(o=> o.id===id ? {...o, gauge} : o)}),
  removeFromOrder: (id)=> set({ order: get().order.filter(o=> o.id!==id)}),
  clearOrder: ()=> set({ order: [] }),
  addSupplier: (s)=> set({ suppliers: [s, ...get().suppliers], defaultSupplierId: get().defaultSupplierId || s.id }),
  removeSupplier: (id)=> set({ suppliers: get().suppliers.filter(s=>s.id!==id), defaultSupplierId: get().defaultSupplierId===id ? undefined : get().defaultSupplierId }),
  setDefaultSupplier: (id)=> set({ defaultSupplierId: id }),
  setRate: (rate)=> set({ settings: { ...get().settings, ratePerM: rate } }),
}), { name: 'mr-flashing-store-v2' }));

export default useStore;