import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export type TripDTO = {
    id: number;
    user_id: number;
    date: Date;
    segments: TripSegmentDTO[];
  }
