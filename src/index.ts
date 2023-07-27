import { configs } from "./configs";
import { app } from "./loaders";
import { logger } from "./utils";

app.listen(configs.PORT, () => {
  logger.info(`App is listening on port ${configs.PORT}`);
});
