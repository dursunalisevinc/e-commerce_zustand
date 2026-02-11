import type { StateCreator } from "zustand"

export interface OrderSlice {
  ordeArr: number[]
}

export const createOrdersSlice: StateCreator<OrderSlice> = () => ({
  ordeArr: [0,0,0,0,0,0,0,0,1],
})
