import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";
import sequelize from "./db/models/sequelize";
import { Hotel } from "./db/models/hotels";

const app = express();

app.use(express.json());

/**
 * Registering all routes and their corresponding routes without app server object.
 */
app.use(attachCorrelationIdMiddleware);
app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

/**
 * Add the error handler middleware
 */
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, async () => {
  logger.info(
    `Server is running on port http://localhost:${serverConfig.PORT}`
  );
  logger.info("Press Ctrl+C to stop the server", { name: "Dev Server" });

  try {
    await sequelize.authenticate();
    logger.info("Database connection has been established successfully.");

    // const hotel = await Hotel.create({
    //   name: "Sample Hotel",
    //   address: "123 Sample Street",
    //   location: "Sample City",
    //   rating: 4.5,
    //   ratingCount: 100,
    // });

    // logger.info("hotel created successfully:", hotel.toJSON());
  } catch (error) {
    logger.error("Something went wrong in db queries");
  }
});
