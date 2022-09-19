import type {VehicleDTO} from "@/DTO/VehicleDTO";

export default interface IVehicleDAL {
  Create(vehicle: VehicleDTO): Promise<VehicleDTO>
  Read(): Promise<VehicleDTO[]>
  Get(ID: number): Promise<VehicleDTO>
  Update(vehicle: VehicleDTO): Promise<VehicleDTO>
  Delete(ID: number): Promise<void>
}
