import { create } from 'zustand'

export const useLoginStore = create((set) => ({
  typeUser: "Barbearia",
  setTypeUser: (user) => set(_state => ({typeUser: user}))
}))
