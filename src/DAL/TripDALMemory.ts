import type ITripDAL from "@/Interface/ITripDAL";
import type {TripDTO} from "@/DTO/TripDTO";

export default class TripDALMemory implements ITripDAL {
  private store = {} as { [key: number]: TripDTO };
  private index = 0;

  public async Create(trip: TripDTO): Promise<TripDTO> {
    trip.ID = this.index;

    this.store[trip.ID] = trip;
    this.incrementIndex();

    return this.store[trip.ID];
  }

  public async Read(): Promise<TripDTO[]> {
    const output = [];

    for (let storeKey in this.store) {
      output.push(this.store[storeKey])
    }

    return output;
  }

  public async Get(ID: number): Promise<TripDTO> {
    return this.store[ID];
  }

  public async Update(trip: TripDTO): Promise<TripDTO> {
    this.store[trip.ID] = trip;

    return this.store[trip.ID];
  }

  public async Delete(ID: number): Promise<void> {
    delete this.store[ID]
  }

  private incrementIndex(): void {
    this.index++;
  }
}
