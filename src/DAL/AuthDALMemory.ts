import type IAuthDAL from "@/Interface/IAuthDAL";
import type {JWTToken} from "@/Type/JWTToken";

export default class AuthDALMemory implements IAuthDAL {
  async Login(username: string, password: string): Promise<string> {
    const tokenHeader = {"alg": "HS256"}
    const tokenSignature = {
      iat: new Date().getTime() / 1000,
      exp: (new Date().getTime() / 1000) + 900,
      data: {
        ID: 1,
        Name: "John Doe",
        Email: "john@doe.com"
      }
    } as JWTToken

    const token = `${btoa(JSON.stringify(tokenHeader))}.${btoa(JSON.stringify(tokenSignature))}`

    if (username === "john@doe.com" && password === "1234") {
      return token;
    }

    throw 'Invalid Credentials'
  }

  Logout() {
    // This literally does nothing...
  }
}
