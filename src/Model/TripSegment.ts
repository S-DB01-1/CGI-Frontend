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
}
