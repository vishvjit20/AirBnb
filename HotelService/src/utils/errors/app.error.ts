export interface AppError extends Error {
  statusCode: number;
}

export class InternalServerError extends Error implements AppError {
  statusCode: number;
  constructor(message: string) {
    super(message || "An unexpected error occurred");
    this.name = "InternalServerError";
    this.statusCode = 500;
  }
}

export class NotFoundError extends Error implements AppError {
  statusCode: number;
  constructor(message: string) {
    super(message || "Resource not found");
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export class BadRequestError extends Error implements AppError {
  statusCode: number;
  constructor(message: string) {
    super(message || "Bad request");
    this.name = "BadRequestError";
    this.statusCode = 400;
  }
}
