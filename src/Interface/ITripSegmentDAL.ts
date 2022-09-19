import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export default interface ITripSegmentDAL {
  Create(tripSegment: TripSegmentDTO): Promise<TripSegmentDTO>
  Read(): Promise<TripSegmentDTO[]>
  Get(ID: number): Promise<TripSegmentDTO>
  Update(tripSegment: TripSegmentDTO): Promise<TripSegmentDTO>
  Delete(ID: number): Promise<void>
}
