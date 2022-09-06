export class UserDTO {
    ID: number;
    Name: string;
    Email: string;

    constructor(id: number, name: string, email: string) {
        this.ID = id;
        this.Name = name;
        this.Email = email;
    }
  }