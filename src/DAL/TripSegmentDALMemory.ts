import type ITripSegmentDAL from "@/Interface/ITripSegmentDAL";
import type {TripSegmentDTO} from "@/DTO/TripSegmentDTO";

export default class TripDALMemory implements ITripSegmentDAL {
  private store = {} as { [key: number]: TripSegmentDTO };
  private index = 0;

  public async Create(tripSegment: TripSegmentDTO): Promise<TripSegmentDTO> {
    tripSegment.ID = this.index;

    this.store[tripSegment.ID] = tripSegment;
    this.incrementIndex();

    return this.store[tripSegment.ID];
  }

  public async Read(): Promise<TripSegmentDTO[]> {
    const output = [];

    for (let storeKey in this.store) {
      output.push(this.store[storeKey])
    }

    return output;
  }

  public async Get(ID: number): Promise<TripSegmentDTO> {
    return this.store[ID];
  }

  public async Update(tripSegment: TripSegmentDTO): Promise<TripSegmentDTO> {
    this.store[tripSegment.ID] = tripSegment;

    return this.store[tripSegment.ID];
  }

  public async Delete(ID: number): Promise<void> {
    delete this.store[ID]
  }

  private incrementIndex(): void {
    this.index++;
  }
}
