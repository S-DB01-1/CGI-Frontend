import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore("users", {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get('')
                this.users = data.data
            }
            catch(error) {
                console.log(error)
            }
        }
    }
})
