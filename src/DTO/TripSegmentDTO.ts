export class TripSegmentDTO {
    ID: number;
    TripId: number;
    Distance: number;
    Time: number;
    ExtraPersons: number;
    VechicleID: number;
    Emmision: number;

    constructor(id: number, tripId: number, distance: number, time: number, extraPersons: number, vechicleID: number, emmision: number) {
        this.ID = id;
        this.TripId = tripId;
        this.Distance = distance;
        this.Time = time;
        this.ExtraPersons = extraPersons;
        this.VechicleID = vechicleID;
        this.Emmision = emmision;
    }
  }