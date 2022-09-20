import type {VehicleDTO} from "@/DTO/VehicleDTO";

export default class Vehicle {
  ID: number;
  Name: string;
  EmissionPerKM: number;

  constructor(id: number, name: string, emissionPerKM: number) {
    this.ID = id;
    this.Name = name;
    this.EmissionPerKM = emissionPerKM
  }

  ToDTO() {
    return {
      ID: this.ID,
      Name: this.Name,
      EmissionPerKM: this.EmissionPerKM,
    }
  }

  static Load(vehicle: VehicleDTO): Vehicle {
    return new Vehicle(vehicle.ID, vehicle.Name, vehicle.EmissionPerKM)
  }
}
