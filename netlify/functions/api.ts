import express from "express";
import cors from "cors";

import searchRoutes from "./routes/search.routes.js";

const app = express();
const port = 3000;
const API_BASE = "search/"

/* Global middlewares */
api.use(cors());
api.use(express.json());

/* Routes */
api.use(`/${API_BASE}`, searchRoutes);

/* Server setup */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${port}/${API_BASE}`)
  );
}

export const handler = serverless(api);
