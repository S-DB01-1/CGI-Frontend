import { defineStore } from "pinia"
import axios from "axios"

export const useTripStore = defineStore("trips", {
    state: () => ({
        trips: [],
    }),
    getters: {
        getTrips(state) {
            return state.trips
        }
    },
    actions: {
        async fetchTrips() {
            try {
                const data = await axios.get('')
                this.trips = data.data
            }
            catch(error) {
                console.log(error)
            }
        }
    }
})
