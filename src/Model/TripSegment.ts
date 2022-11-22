import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";
import type Vehicle from "./Vehicle";

export default class TripSegment {
  ID: number;
  TripID: number;
  Distance: number;
  Time: number;
  ExtraPersons: number;
  Vehicle: Vehicle;
  Emission: number;

  constructor(id: number, tripID: number, distance: number, time: number, extraPersons: number, emission: number, vehicle: Vehicle) {
    this.ID = id;
    this.TripID = tripID;
    this.Distance = distance;
    this.Time = time;
    this.ExtraPersons = extraPersons;
    this.Vehicle = vehicle;
    this.Emission = emission;
  }

  ToDTO(): TripSegmentDTO {
    return {
      ID: this.ID,
      TripID: this.TripID,
      Distance: this.Distance,
      Time: this.Time,
      ExtraPersons: this.ExtraPersons,
      Vehicle: this.Vehicle.ToDTO(),
      Emission: this.Emission,
    }
  }
}
