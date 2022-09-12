// stores/Auth.ts
import { defineStore } from 'pinia'
import type User from "@/Model/User";

type UserStore = {
  CurrentUser?: User
}

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
    } as UserStore
  },
  getters: {
    GetCurrentUser(state): User {
      return state.CurrentUser as User;
    },
    IsAuthenticated(state): boolean {
      return !!state.CurrentUser
    }
  },
  actions: {
    async Login(username: string, password: string) {
      // Not implemented yet
    },
  },
})
