import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

type DBConfig = {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_HOST: string;
};

function loadEnv() {
  dotenv.config();
}

loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3001,
};

export const dbConfig: DBConfig = {
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "12345678",
  DB_NAME: process.env.DB_NAME || "airbnb_dev",
  DB_HOST: process.env.DB_HOST || "localhost",
};
