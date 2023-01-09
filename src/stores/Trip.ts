// stores/Auth.ts
import {defineStore} from 'pinia'
import Trip from "@/Model/Trip";
import type ITripDAL from "@/Interface/ITripDAL";
import TripDALAPI from "@/DAL/TripDALAPI";

type TripStore = {[key: number]: Trip};

let DAL: ITripDAL = new TripDALAPI();


export const useTripStore = defineStore('trip', {
  state: () => {
    return {trip: {} as TripStore}
  },
  getters: {
    Read(state) {
      return state.trip;
    },
    // Get(state) {
    //   return (id: number) => state[id];
    // },
  },
  actions: {
    async Create(trip: Trip) {
      await DAL.Create(trip.ToDTO()).then(trip => {
        this.$state.trip[trip.ID] = Trip.Load(trip);
      }).catch(error => {
        console.error(error);
      })
    },
    async ReadAll() {
      await DAL.Read().then(trips => {
        trips.forEach(trip => {
          this.$state.trip[trip.ID] = Trip.Load(trip);
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async GetOne(ID: number) {
      await DAL.Get(ID).then(trip => {
        this.$state.trip[trip.ID] = Trip.Load(trip);
      }).catch(error => {
        console.error(error)
      })
    },
    async Update(trip: Trip) {
      await DAL.Update(trip.ToDTO()).then(trip => {
        this.$state.trip[trip.ID] = Trip.Load(trip);
      }).catch(error => {
        console.error(error)
      })
    },
    async Delete(ID: number) {
      await DAL.Delete(ID).then(() => {
        delete this.$state.trip[ID]
      }).catch(error => {
        console.error(error)
      })
    }
  }
})
