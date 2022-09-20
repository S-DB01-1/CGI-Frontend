// stores/Auth.ts
import {defineStore} from 'pinia'
import type User from "@/Model/User";
import type IUserDAL from "@/Interface/IUserDAL";
import UserDALMemory from "@/DAL/UserDALMemory";
import type {UserDTO} from "@/DTO/UserDTO";

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
    async Create(user: User) {
      await DAL.Create(user as UserDTO).then(user => {
        this.$state[user.ID] = <User>user;
      }).catch(error => {
        console.error(error);
      })
    },
    async Read() {
      await DAL.Read().then(users => {
        users.forEach(user => {
          this.$state[user.ID] = <User>user;
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async Get(ID: number) {
      await DAL.Get(ID).then(user => {
        this.$state[user.ID] = <User>user;
      }).catch(error => {
        console.error(error)
      })
    },
    async Update(user: User) {
      await DAL.Update(user).then(user => {
        this.$state[user.ID] = <User>user;
      }).catch(error => {
        console.error(error)
      })
    },
    async Delete(ID: number) {
      await DAL.Delete(ID).then(() => {
        delete this.$state[ID]
      }).catch(error => {
        console.error(error)
      })
    }
  }
})
