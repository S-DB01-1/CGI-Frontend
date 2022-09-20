import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export type TripDTO = {
    ID: number;
    UserID: number;
    Date: string;
    TotalEmission: number;
    Segments?: TripSegmentDTO[];
  }
