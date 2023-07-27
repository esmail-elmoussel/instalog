import winston from "winston";

const timestampFormat = () => {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
};

const levelFormat = (info: winston.Logform.TransformableInfo) => {
  info.level = info.level.toUpperCase();
  return info;
};

const logFormat = (info: winston.Logform.TransformableInfo) => {
  return `[${info.timestamp}] ${info.level}: ${info.message}`;
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format(levelFormat)(),
        winston.format.colorize(),
        winston.format.timestamp({ format: timestampFormat }),
        winston.format.printf(logFormat),
      ),
    }),
  ],
});

export { logger };
