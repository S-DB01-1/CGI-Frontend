// stores/Auth.ts
import {defineStore} from 'pinia'
import User from "@/Model/User";
import type IUserDAL from "@/Interface/IUserDAL";
import UserDALMemory from "@/DAL/UserDALMemory";

type UserStore = {[key: number]: User};

let DAL: IUserDAL = new UserDALMemory();


export const useUserStore = defineStore('user', {
  state: () => {
    return {} as UserStore
  },
  getters: {
    Read(state) {
      return state;
    },
    Get(state) {
      return (id: number) => state[id];
    },
  },
  actions: {
    async Read() {
      await DAL.Read().then(users => {
        users.forEach(user => {
          this.$state[user.id] = User.Load(user);
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async Get(ID: number) {
      await DAL.Get(ID).then(user => {
        this.$state[user.id] = User.Load(user);
      }).catch(error => {
        console.error(error)
      })
    },
  }
})
