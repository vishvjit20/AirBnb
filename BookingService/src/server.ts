import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";

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

app.listen(serverConfig.PORT, () => {
  console.log(
    `Server is running on port http://localhost:${serverConfig.PORT}`
  );
  logger.info("Press Ctrl+C to stop the server", { name: "Dev Server" });
});
