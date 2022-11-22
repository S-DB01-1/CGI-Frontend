import type { VehicleDTO } from "./VehicleDTO";

export type TripSegmentDTO = {
    ID: number;
    TripID: number;
    Distance: number;
    Time: number;
    ExtraPersons: number;
    Vehicle: VehicleDTO;
    Emission: number;
}
