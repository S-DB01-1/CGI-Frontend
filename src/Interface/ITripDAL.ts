import type {TripDTO} from "@/DTO/TripDTO";

export default interface ITripDAL {
  Create(trip: TripDTO): Promise<TripDTO>
  Read(): Promise<TripDTO[]>
  Get(ID: number): Promise<TripDTO>
  Update(trip: TripDTO): Promise<TripDTO>
  Delete(ID: number): Promise<void>
}
