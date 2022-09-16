import type {UserDTO} from "@/DTO/UserDTO";

export default interface IUserDAL {
  Create(user: UserDTO): Promise<UserDTO>
  Read(): Promise<UserDTO[]>
  Get(ID: number): Promise<UserDTO>
  Update(user: UserDTO): Promise<UserDTO>
  Delete(): Promise<void>
}
