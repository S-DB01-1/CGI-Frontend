import { defineStore } from "pinia"
import axios from "axios"

export const useVehicleStore = defineStore("vehicles", {
    state: () => ({
        vehicles: [],
    }),
    getters: {
        getVehicles(state) {
            return state.vehicles
        }
    },
    actions: {
        async fetchVehicles() {
            try {
                const data = await axios.get('')
                this.vehicles = data.data
            }
            catch(error) {
                console.log(error)
            }
        }
    }
})
