import type {VehicleDTO} from "@/DTO/VehicleDTO";

export default interface IVehicleDAL {
  Create(name: string, emission: number): Promise<VehicleDTO>
  Read(): Promise<VehicleDTO[]>
  Get(id: number): Promise<VehicleDTO>
  Update(id: number, name: string, emission: number): Promise<VehicleDTO>
  Delete(id: number): Promise<void>
}
