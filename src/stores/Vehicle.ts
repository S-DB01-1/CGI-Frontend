// stores/Auth.ts
import {defineStore} from 'pinia'
import Vehicle from "@/Model/Vehicle";
import type IVehicleDAL from "@/Interface/IVehicleDAL";
import VehicleDALMemory from "@/DAL/VehicleDALMemory";

type VehicleStore = {[key: number]: Vehicle};

let DAL: IVehicleDAL = new VehicleDALMemory();


export const useVehicleStore = defineStore('vehicle', {
  state: () => {
    return {} as VehicleStore
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
    async Create(name: string, emission: number) {
      await DAL.Create(name, emission).then(vehicle => {
        this.$state[vehicle.id] = Vehicle.Load(vehicle);
      }).catch(error => {
        console.error(error);
      })
    },
    async Read() {
      await DAL.Read().then(vehicles => {
        vehicles.forEach(vehicle => {
          this.$state[vehicle.id] = Vehicle.Load(vehicle);
        })
      }).catch(error => {
        console.error(error)
      })
    },
    async Get(ID: number) {
      await DAL.Get(ID).then(vehicle => {
        this.$state[vehicle.id] = Vehicle.Load(vehicle);
      }).catch(error => {
        console.error(error)
      })
    },
    async Update(id: number, name: string, emission: number) {
      await DAL.Update(id, name, emission).then(vehicle => {
        this.$state[vehicle.id] = Vehicle.Load(vehicle);
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
