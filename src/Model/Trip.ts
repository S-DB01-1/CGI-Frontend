import type {TripDTO} from "@/DTO/TripDTO";
import TripSegment from "@/Model/TripSegment";
import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";
import Vehicle from "./Vehicle";

export default class Trip {
  ID: number;
  UserID: number;
  Date: Date;
  TotalEmission: number;
  Segments: TripSegment[];

  constructor(id: number, userID: number, date: Date, totalEmission: number, tripSegments: TripSegment[]) {
    this.ID = id;
    this.UserID = userID;
    this.Date = date;
    this.TotalEmission = totalEmission;
    this.Segments = tripSegments;
  }

  ToDTO(): TripDTO {
    const segments = [] as TripSegmentDTO[]

    this.Segments.forEach(segment => {
      segments.push(segment.ToDTO())
    })

    return {
      ID: this.ID,
      UserID: this.UserID,
      Date: this.Date.toDateString(),
      TotalEmission: this.TotalEmission,
      Segments: segments
    }
  }

  static Load(trip: TripDTO): Trip {
    const outputSegments = [] as TripSegment[]

    trip.Segments?.forEach(tripSegment => {
      outputSegments.push(new TripSegment(tripSegment.ID, tripSegment.TripID, tripSegment.Distance, tripSegment.Time, tripSegment.ExtraPersons, tripSegment.Emission, new Vehicle(tripSegment.Vehicle.ID, tripSegment.Vehicle.Name, tripSegment.Vehicle.EmissionPerKM)))
    })

    return new Trip(trip.ID, trip.UserID, new Date(trip.Date), trip.TotalEmission, outputSegments)
  }
}
