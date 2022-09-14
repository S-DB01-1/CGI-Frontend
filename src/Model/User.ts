export default class User {
  public ID: number;
  public Name: string;
  public Email: string;

  constructor(id: number, name: string, email: string) {
    this.ID = id;
    this.Name = name;
    this.Email = email;
  }
}
