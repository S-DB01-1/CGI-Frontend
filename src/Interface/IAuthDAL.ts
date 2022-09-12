

export default interface IAuthDAL {
  Login(username: string, password: string): Promise<string>;
  Logout(): void;
}
