import type ITripDAL from "@/Interface/ITripDAL";
import BaseDALAPI from "@/DAL/BaseDALAPI";
import type {TripDTO} from "@/DTO/TripDTO";


export default class TripDALAPI extends BaseDALAPI implements ITripDAL {
  static urlMultiple = "/trip";
  static urlSingle = "/trip/<id>";

  async Create(date: Date, segments: {distance: number, people: number, vehicle_id: number}[]): Promise<TripDTO> {
    return await this.fetch<TripDTO>(this.generateUrl(TripDALAPI.urlMultiple), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date: date, segments: segments})
    });
  }

  async Read(): Promise<TripDTO[]> {
    return await this.fetch<TripDTO[]>(this.generateUrl(TripDALAPI.urlMultiple, {}));
  }

  async Get(id: number): Promise<TripDTO> {
    return await this.fetch<TripDTO>(this.generateUrl(TripDALAPI.urlSingle, {id: id}));
  }

  async Update(id: number, date: Date, segments: {distance: number, people: number, vehicle_id: number}[]) {
    return await this.fetch<TripDTO>(this.generateUrl(TripDALAPI.urlSingle, {id: id}), {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date: date, segments: segments})
    });
  }

  async Delete(id: number) {
    await this.fetch<void>(this.generateUrl(TripDALAPI.urlSingle, {id: id}), {
      method: 'delete',
    });
  }
}
