import type {UserDTO} from "@/DTO/UserDTO";

export default interface IUserDAL {
  Read(): Promise<UserDTO[]>
  Get(id: number): Promise<UserDTO>
}
