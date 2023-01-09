import type { VehicleDTO } from "./VehicleDTO";

export type TripSegmentDTO = {
    id: number;
    trip_id: number;
    vehicle: VehicleDTO;
    distance: number;
    people: number;
    emission: number;
}
