import type {UserDTO} from "@/DTO/UserDTO";

export default class User {
  public ID: number;
  public Name: string;
  public Email: string;

  constructor(id: number, name: string, email: string) {
    this.ID = id;
    this.Name = name;
    this.Email = email;
  }

  ToDTO(): UserDTO {
    return {
      ID: this.ID,
      Name: this.Name,
      Email: this.Email,
    }
  }

  static Load(user: UserDTO): User {
    return new User(user.ID, user.Name, user.Email)
  }
}
