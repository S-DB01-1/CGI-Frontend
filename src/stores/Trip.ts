// stores/Auth.ts
import {defineStore} from 'pinia'
import Trip from "@/Model/Trip";
import type ITripDAL from "@/Interface/ITripDAL";
import TripDALMemory from "@/DAL/TripDALMemory";

type TripStore = {[key: number]: Trip};

let DAL: ITripDAL = new TripDALMemory();


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
    async Create(date: Date, segments: {distance: number, people: number, vehicle_id: number}[]) {
      await DAL.Create(date, segments).then(trip => {
        this.$state.trip[trip.id] = Trip.Load(trip);
      }).catch(error => {
        console.error(error);
      })
    },
    async Read() {
      await DAL.Read().then(trips => {
        trips.forEach(trip => {
          this.$state.trip[trip.id] = Trip.Load(trip);
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async Get(ID: number) {
      await DAL.Get(ID).then(trip => {
        this.$state.trip[trip.id] = Trip.Load(trip);
      }).catch(error => {
        console.error(error)
      })
    },
    async Update(id: number, date: Date, segments: {distance: number, people: number, vehicle_id: number}[]) {
      await DAL.Update(id, date, segments).then(trip => {
        this.$state.trip[trip.id] = Trip.Load(trip);
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
