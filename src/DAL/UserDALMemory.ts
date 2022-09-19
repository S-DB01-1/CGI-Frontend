import type IUserDAL from "@/Interface/IUserDAL";
import type {UserDTO} from "@/DTO/UserDTO";

export default class UserDALMemory implements IUserDAL {
  private store = {} as { [key: number]: UserDTO };
  private index = 0;

  public async Create(user: UserDTO): Promise<UserDTO> {
    user.ID = this.index;

    this.store[user.ID] = user;
    this.incrementIndex();

    return this.store[user.ID];
  }

  public async Read(): Promise<UserDTO[]> {
    const output = [];

    for (let storeKey in this.store) {
      output.push(this.store[storeKey])
    }

    return output;
  }

  public async Get(ID: number): Promise<UserDTO> {
    return this.store[ID];
  }

  public async Update(user: UserDTO): Promise<UserDTO> {
    this.store[user.ID] = user;

    return this.store[user.ID];
  }

  public async Delete(ID: number): Promise<void> {
    delete this.store[ID]
  }

  private incrementIndex(): void {
    this.index++;
  }
}
