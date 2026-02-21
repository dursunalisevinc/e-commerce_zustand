import type { StateCreator } from "zustand"

export interface FavoriteSlice {
  favArr: number[]
  selectFavorites: (id: number) => void
}

export const createFavoriteSlice: StateCreator<FavoriteSlice> = (set) => ({
  favArr: [1, 2],
  selectFavorites: (id) =>
    set((state) => ({
      favArr:
        state.favArr.includes(id)
          ? state.favArr.filter((favId) => favId !== id)
          : [...state.favArr, id]
    })),
})
