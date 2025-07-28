import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { asyncLocalStorage } from "../utils/helpers/request.helper";

export const attachCorrelationIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuidv4();
  req.headers["x-correlation-id"] = correlationId;

  asyncLocalStorage.run({ correlationId }, () => {
    next();
  });
};
