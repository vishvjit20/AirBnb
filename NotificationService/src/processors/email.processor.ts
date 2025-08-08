import { Job, Worker } from "bullmq";
import { NotificationDto } from "../dto/notification.dto";
import { MAILER_QUEUE } from "../queues/mailer.queue";
import { getRedisConnObject } from "../config/redis.config";
import { MAILER_PAYLOAD } from "../producers/email.producer";

export const setupMailerWorker = () => {
  const emailProcessor = new Worker<NotificationDto>(
    MAILER_QUEUE,
    async (job: Job) => {
      if (job.name !== MAILER_PAYLOAD) {
        throw new Error("Invalid job name");
      }

      const payload = job.data;
      console.log(`Processing email for: ${JSON.stringify(payload)}`);

      // Call the service layer from here
    },
    {
      connection: getRedisConnObject(),
    }
  );

  emailProcessor.on("completed", (job) => {
    console.log("Email processing completed successfully");
  });

  emailProcessor.on("failed", (job, err) => {
    console.error(`Email processing failed`);
  });
};
