import TripSegment from "@/Model/TripSegment";
import type {TripDTO} from "@/DTO/TripDTO";
import TripDALMemory from "@/DAL/TripDALMemory";
import Trip from "@/Model/Trip";
import {VehicleDTO} from "@/DTO/VehicleDTO";
import Vehicle from "@/Model/Vehicle";
import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";
import VehicleDALMemory from "@/DAL/VehicleDALMemory";

export default class UserCollection {
    async Create(UserID: number, Date: Date, TotalEmission: number, Segments: TripSegment[]) {
        const dto: TripDTO = await new TripDALMemory().Create(UserID, Date, TotalEmission, Segments);

        const segments = [];
        for (const segment of dto.Segments as TripSegmentDTO[]) {
            segments.push(new TripSegment(segment.ID, segment.TripID, segment.Distance, segment.Time, segment.ExtraPersons, segment.Vehicle.ID, segment.Emission))
        }

        return new Trip(dto.ID, dto.UserID, dto.Date, dto.TotalEmission, segments)
    }

    async ReadAll() {
        const output = await new TripDALMemory().Read();

        const trips = [];
        for (const dto of output as TripDTO[]) {
            const segments = [];
            for (const segment of dto.Segments as TripSegmentDTO[]) {
                segments.push(new TripSegment(segment.ID, segment.TripID, segment.Distance, segment.Time, segment.ExtraPersons, segment.Vehicle.ID, segment.Emission))
            }

            trips.push(new Trip(dto.ID, dto.UserID, dto.Date, dto.TotalEmission, segments));
        }

        return trips;
    }

    async Get(id: number) {
        const dto: TripDTO = await new TripDALMemory().Get(id);

        const segments = [];
        for (const segment of dto.Segments as TripSegmentDTO[]) {
            segments.push(new TripSegment(segment.ID, segment.TripID, segment.Distance, segment.Time, segment.ExtraPersons, segment.Vehicle.ID, segment.Emission))
        }

        return new Trip(dto.ID, dto.UserID, dto.Date, dto.TotalEmission, segments)
    }

    async Update(UserID: number, Date: Date, TotalEmission: number, Segments: TripSegment[]) {
        const dto: TripDTO = await new TripDALMemory().Update(UserID, Date, TotalEmission, Segments);

        const segments = [];
        for (const segment of dto.Segments as TripSegmentDTO[]) {
            segments.push(new TripSegment(segment.ID, segment.TripID, segment.Distance, segment.Time, segment.ExtraPersons, segment.Vehicle.ID, segment.Emission))
        }

        return new Trip(dto.ID, dto.UserID, dto.Date, dto.TotalEmission, segments)
    }

    async Delete(id: number) {
        await new TripDALMemory().Delete(id);
    }
}