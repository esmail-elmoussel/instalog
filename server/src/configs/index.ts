import "dotenv/config";

if (!process.env.NODE_ENV) {
  throw new Error('missing environment variable "NODE_ENV"');
}

if (!process.env.PORT) {
  throw new Error('missing environment variable "PORT"');
}

if (!Number.isInteger(Number(process.env.PORT))) {
  throw new Error('invalid environment variable "PORT"');
}

if (!process.env.DATABASE_URL) {
  throw new Error('missing environment variable "DATABASE_URL"');
}

interface Configs {
  NODE_ENV: string;
  PORT: number;
  DATABASE_URL: string;
}

export const configs: Configs = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL,
};
