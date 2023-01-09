import HttpError from "@/DAL/HttpError";

export default class BaseDALAPI {
  static bearerToken?: string;
  static baseUrl = "http://localhost:5000/api";
  static urlMultiple: string;
  static urlSingle: string;

  protected generateUrl(url: string, parameters: {[key: string]: string | number} = {}) {
    url = BaseDALAPI.baseUrl + url

    for (let parametersKey in parameters) {
      url = url.replace(`<${parametersKey}>`, <string>parameters[parametersKey])
    }

    return url;
  }

  static setBearerToken(token: string) {
    BaseDALAPI.bearerToken = token;
  }

  private generateHeader(init?: RequestInit) {
    let output: RequestInit;

    if (!BaseDALAPI.bearerToken) {
      output = {
        ...init,
        headers: {
          ...init?.headers,
          ...{
            Origin: '*',
          }
        }
      } as RequestInit
    } else {
      output = {
        ...init,
        headers: {
          ...init?.headers,
          ...{
            Origin: '*',
            Authorization: "Bearer " + BaseDALAPI.bearerToken
          }
        }
      } as RequestInit
    }

    return output;
  }

  protected async fetch<Type>(url: string, init?: RequestInit): Promise<Type> {
    const response = await fetch(url, this.generateHeader(init));

    if (!response.ok) {
      throw new HttpError(response.statusText, response.status, response)
    }

    const responseJson = await response.json()

    return responseJson as Type
  }
}
