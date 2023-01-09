import BaseDALAPI from "@/DAL/BaseDALAPI";
import type {VehicleDTO} from "@/DTO/VehicleDTO";
import type IVehicleDAL from "@/Interface/IVehicleDAL";


export default class VehicleDALAPI extends BaseDALAPI implements IVehicleDAL {
  static urlMultiple = "/vehicle";
  static urlSingle = "/vehicle/<id>";

  async Create(name: string, emission: number): Promise<VehicleDTO> {
    return await this.fetch<VehicleDTO>(this.generateUrl(VehicleDALAPI.urlMultiple), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name, emission: emission})
    });
  }

  async Read(): Promise<VehicleDTO[]> {
    return await this.fetch<VehicleDTO[]>(this.generateUrl(VehicleDALAPI.urlMultiple, {}));
  }

  async Get(id: number): Promise<VehicleDTO> {
    return await this.fetch<VehicleDTO>(this.generateUrl(VehicleDALAPI.urlSingle, {id: id}));
  }

  async Update(id: number, name: string, emission: number) {
    return await this.fetch<VehicleDTO>(this.generateUrl(VehicleDALAPI.urlSingle, {id: id}), {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name, emission: emission})
    });
  }

  async Delete(id: number) {
    await this.fetch<void>(this.generateUrl(VehicleDALAPI.urlSingle, {id: id}), {
      method: 'delete',
    });
  }
}
