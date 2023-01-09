import type {TripDTO} from "@/DTO/TripDTO";

export default interface ITripDAL {
  Create(date: Date, segments: {distance: number, people: number, vehicle_id: number}[]): Promise<TripDTO>
  Read(): Promise<TripDTO[]>
  Get(id: number): Promise<TripDTO>
  Update(id: number, date: Date, segments: {distance: number, people: number, vehicle_id: number}[]): Promise<TripDTO>
  Delete(id: number): Promise<void>
}
