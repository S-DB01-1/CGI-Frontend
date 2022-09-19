// stores/Auth.ts
import {defineStore} from 'pinia'
import type User from "@/Model/User";
import type IAuthDAL from "@/Interface/IAuthDAL";
import Token from "@/Model/Token";
import AuthDALMemory from "@/DAL/AuthDALMemory";

type UserStore = {
  Token?: Token,
  CurrentUser?: User
}

let DAL: IAuthDAL = new AuthDALMemory();

function IsLocalStorageUsed(): boolean {
  return localStorage.getItem('auth_remember_session') === '1';
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    let tokenSession;
    if (IsLocalStorageUsed()) {
      tokenSession = localStorage.getItem('auth_token');
    } else {
      tokenSession = sessionStorage.getItem('auth_token');
    }

    if (tokenSession) {
      const token = new Token(tokenSession)

      return {
        Token: token,
        CurrentUser: token.Data as User
      } as UserStore
    }

    return {
      Token: undefined,
      CurrentUser: undefined
    } as UserStore
  },
  getters: {
    IsAuthenticated(state): boolean {
      const output = state.Token?.IsExpired()

      if (output === undefined) {
        return false
      }

      return !output
    },
    // ExpiresIn(state) {
    //   //return state.Token?.IsExpired()
    // }
  },
  actions: {
    async Login(username: string, password: string, useLocalStorage = false) {
      try {
        const response = await DAL.Login(username, password)

        if (useLocalStorage) {
          localStorage.setItem('auth_remember_session', '1')
          localStorage.setItem('auth_token', response)
        } else {
          localStorage.removeItem('auth_remember_session')
          sessionStorage.setItem('auth_token', response)
        }

        this.Token = new Token(response);
        this.CurrentUser = <User>this.Token.Data
      } catch (error) {
        console.error(error)
      }
    },
    async Logout() {
      await DAL.Logout();

      this.Token = undefined;
      this.CurrentUser = undefined;

      if (IsLocalStorageUsed()) {
        localStorage.removeItem('auth_token')
      } else {
        sessionStorage.removeItem('auth_token')
      }
    }
  },
})
