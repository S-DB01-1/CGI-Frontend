import BaseDALAPI from "@/DAL/BaseDALAPI";
import type IUserDAL from "@/Interface/IUserDAL";
import type {UserDTO} from "@/DTO/UserDTO";


export default class UserDALAPI extends BaseDALAPI implements IUserDAL {
  static urlMultiple = "/user";
  static urlSingle = "/user/<id>";

  async Read(): Promise<UserDTO[]> {
    return await this.fetch<UserDTO[]>(this.generateUrl(UserDALAPI.urlMultiple, {}));
  }

  async Get(id: number): Promise<UserDTO> {
    return await this.fetch<UserDTO>(this.generateUrl(UserDALAPI.urlSingle, {id: id}));
  }
}
