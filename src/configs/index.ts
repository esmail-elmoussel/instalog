import "dotenv/config";

if (!process.env.NODE_ENV) {
  throw new Error('missing environment variable "PORT"');
}

if (!process.env.PORT) {
  throw new Error('missing environment variable "PORT"');
}

if (!Number.isInteger(Number(process.env.PORT))) {
  throw new Error('invalid environment variable "PORT"');
}

interface Configs {
  NODE_ENV: string;
  PORT: number;
}

export const configs: Configs = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT),
};
