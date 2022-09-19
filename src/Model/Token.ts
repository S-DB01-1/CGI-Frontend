import type {JWTToken} from "@/Type/JWTToken";

export default class Token {
  private readonly _raw: string;
  private readonly _data: object;
  private readonly _expiration: Date;
  private readonly _issuedAt: Date;

  constructor(token: string) {
    const tokenDecoded = this.Decode(token);

    this._raw = token;
    this._expiration = new Date(tokenDecoded.exp);
    this._issuedAt = new Date(tokenDecoded.iat);
    this._data = tokenDecoded.data;
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

  public get Raw() {
    return this._raw
  }

  public get Data() {
    return this._data
  }

  public get Expiration() {
    return this._expiration
  }

  public get IssuedAt() {
    return this._issuedAt
  }
}
