import type IVehicleDAL from "@/Interface/IVehicleDAL";
import type {VehicleDTO} from "@/DTO/VehicleDTO";

export default class TripDALMemory implements IVehicleDAL {
  private store = {} as { [key: number]: VehicleDTO };
  private index = 0;

  public async Create(vehicle: VehicleDTO): Promise<VehicleDTO> {
    vehicle.ID = this.index;

    this.store[vehicle.ID] = vehicle;
    this.incrementIndex();

    return this.store[vehicle.ID];
  }

  public async Read(): Promise<VehicleDTO[]> {
    const output = [];

    for (let storeKey in this.store) {
      output.push(this.store[storeKey])
    }

    return output;
  }

  public async Get(ID: number): Promise<VehicleDTO> {
    return this.store[ID];
  }

  public async Update(vehicle: VehicleDTO): Promise<VehicleDTO> {
    this.store[vehicle.ID] = vehicle;

    return this.store[vehicle.ID];
  }

  public async Delete(ID: number): Promise<void> {
    delete this.store[ID]
  }

  private incrementIndex(): void {
    this.index++;
  }
}
