import type {JWTToken} from "@/Type/JWTToken";

export default class Token {
  public Data: object;
  private Expiration: Date;
  private IssuedAt: Date;

  constructor(token: string) {
    const tokenDecoded = this.Decode(token);

    this.Expiration = new Date(tokenDecoded.exp);
    this.IssuedAt = new Date(tokenDecoded.iat);
    this.Data = tokenDecoded.data;
  }

  private Decode(token: string): JWTToken {
    return JSON.parse(atob(token.split('.')[1])) as JWTToken;
  }

  public IsExpired(): boolean {
    return !(new Date() >= this.Expiration);
  }

  // Returns the number of milliseconds the token will expire.
  public ExpiresIn(): number {
    return this.Expiration.getTime() - new Date().getTime();
  }

  public GetData() {
    return this.Data;
  }
}
