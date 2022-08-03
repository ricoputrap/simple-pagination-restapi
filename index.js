import express from "express";
import expressApp from "./express-app.js";

const PORT = 8181;

const startServer = async () => {
  const app = express();

  app.use(express.json());
  expressApp(app);

  app.listen(PORT, () => {
    console.log(`LINK START on PORT ${PORT}`);
  })
}

startServer();