import { create } from 'zustand'

export const useLoginStore = create((set) => ({
  typeUser: "",
  setTypeUser: (user) => set(_state => ({typeUser: user}))
}))