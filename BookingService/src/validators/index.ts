import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("Validating request body");
      await schema.parseAsync(req.body);
      logger.info("Request body is valid");
      next();
    } catch (error) {
      logger.error("Request body validation failed:", error);
      return res.status(400).json({
        message: "Invalid request body",
        success: false,
        error,
      });
    }
  };
};

export const validateQueryParams = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      logger.info("Query parameters are valid");
      next();
    } catch (error) {
      logger.error("Query parameters validation failed:", error);
      return res.status(400).json({
        message: "Invalid query parameters",
        success: false,
        error,
      });
    }
  };
};

export const validateObject = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      logger.info("Object is valid");
      next();
    } catch (error) {
      logger.error("Object validation failed:", error);
      return res.status(400).json({
        message: "Invalid object",
        success: false,
        error,
      });
    }
  };
};
