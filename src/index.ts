import { configs } from "./configs";
import { app, db } from "./loaders";
import { logger } from "./utils";

db.connect()
  .then(() => {
    logger.info("Database connected successfully!");

    app.listen(configs.PORT, () => {
      logger.info(`App is listening on port ${configs.PORT}`);
    });
  })
  .catch((err) => {
    logger.error(`App could not start due to ${err}`);
  });
