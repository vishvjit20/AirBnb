import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { NotFoundError } from "../utils/errors/app.error";
import logger from "../config/logger";

export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Ping request received");
    await fs.promises.readFile("sample");
    res.status(200).send({
      message: "Pong!",
      success: true,
    });
  } catch (error) {
    throw new NotFoundError("File not found");
  }
};
