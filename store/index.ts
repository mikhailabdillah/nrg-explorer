import { create } from 'zustand'
import type { GithubUser } from '@/types/api'

interface StoreState {
  pageSize: number
  searching: string | null
  users: GithubUser[] | []
}

interface StoreAction {
  setSearching: (val: string) => void
  setUsers: (data: GithubUser[]) => void
  reset: () => void
}

const initialState: StoreState = {
  pageSize: 10,
  searching: null,
  users: [],
}

const useStore = create<StoreState & StoreAction>((set) => ({
  ...initialState,
  setSearching: (value) => set({ searching: value }),
  setUsers: (data) => set({ users: data }),
  reset: () => set(initialState),
}))

export { useStore }
