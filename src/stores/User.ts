// stores/Auth.ts
import {defineStore} from 'pinia'
import User from "@/Model/User";
import type IUserDAL from "@/Interface/IUserDAL";
import UserDALAPI from "@/DAL/UserDALAPI";

type UserStore = {[key: number]: User};

let DAL: IUserDAL = new UserDALAPI();


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
    async ReadAll() {
      await DAL.Read().then(users => {
        users.forEach(user => {
          this.$state[user.id] = User.Load(user);
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async GetOne(ID: number) {
      await DAL.Get(ID).then(user => {
        this.$state[user.id] = User.Load(user);
      }).catch(error => {
        console.error(error)
      })
    },
  }
})
