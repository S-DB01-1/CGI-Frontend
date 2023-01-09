
export default class HttpError extends Error {
  constructor(public message: string, public statusCode: number, public response?: Response) {
    super();
  }
}
