import type IUserDAL from "@/Interface/IUserDAL";
import type {UserDTO} from "@/DTO/UserDTO";


export default class UserDALMemory implements IUserDAL {
  async Create(user: UserDTO): Promise<UserDTO> {
    return {} as UserDTO
  }

  async Read(): Promise<UserDTO[]> {
    return [{} as UserDTO];
  }

  async Get(ID: number): Promise<UserDTO> {
    return {} as UserDTO
  }

  async Update(user: UserDTO): Promise<UserDTO> {
    return {} as UserDTO
  }

  async Delete(): Promise<void> {

  }
}
