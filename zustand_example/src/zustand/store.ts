import { create } from "zustand"
import { createFavoriteSlice } from "./favorites.slice"
import type { FavoriteSlice } from "./favorites.slice"
import { createOrdersSlice } from "./order.slice"
import type { OrderSlice } from "./order.slice"

type Store = FavoriteSlice & OrderSlice

export const useStore = create<Store>()((...args) => ({
  ...createFavoriteSlice(...args),
  ...createOrdersSlice(...args),
}))
