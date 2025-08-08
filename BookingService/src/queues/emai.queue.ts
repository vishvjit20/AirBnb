import { Queue } from "bullmq";
import { getRedisConnObject } from "../config/redis.config";

const MAILER_QUEUE = "queue-mailer";

const mailerQueue = new Queue(MAILER_QUEUE, {
  connection: getRedisConnObject(),
});

export { mailerQueue, MAILER_QUEUE };
