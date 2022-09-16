import type {TripDTO} from "@/DTO/TripDTO";

export default interface ITripDAL {
  Create(): Promise<TripDTO>
}
