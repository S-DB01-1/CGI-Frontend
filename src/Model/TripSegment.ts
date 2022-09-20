import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export default class TripSegment {
  ID: number;
  TripID: number;
  Distance: number;
  Time: number;
  ExtraPersons: number;
  VehicleID: number;
  Emission: number;

  constructor(id: number, tripID: number, distance: number, time: number, extraPersons: number, emission: number, vehicleID: number) {
    this.ID = id;
    this.TripID = tripID;
    this.Distance = distance;
    this.Time = time;
    this.ExtraPersons = extraPersons;
    this.VehicleID = vehicleID;
    this.Emission = emission;
  }

  ToDTO(): TripSegmentDTO {
    return {
      ID: this.ID,
      TripID: this.TripID,
      Distance: this.Distance,
      Time: this.Time,
      ExtraPersons: this.ExtraPersons,
      VehicleID: this.VehicleID,
      Emission: this.Emission,
    }
  }
}
