import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export type TripDTO = {
    ID: number;
    UserID: number;
    Date: Date;
    TotalEmission: number;
    Segments?: TripSegmentDTO[];
  }
