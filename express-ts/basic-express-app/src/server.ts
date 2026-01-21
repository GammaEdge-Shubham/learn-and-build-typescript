import app from "./app.js";
import { PORT } from "./config/server-config.js";

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

export default setupAndStartServer;
