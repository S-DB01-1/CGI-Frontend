import { defineStore } from "pinia"
import axios from "axios"

export const useTripSegmentStore = defineStore("tripSegments", {
    state: () => ({
        tripSegments: [],
    }),
    getters: {
        getTripSegments(state) {
            return state.tripSegments
        }
    },
    actions: {
        async fetchTripSegments() {
            try {
                const data = await axios.get('')
                this.tripSegments = data.data
            }
            catch(error) {
                console.log(error)
            }
        }
    }
})
