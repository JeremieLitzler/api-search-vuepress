import express from "express";
import cors from "cors";
import serverless from 'serverless-http';

import searchRoutes from "../../api/routes/search.routes.js";

const api = express();
const port = 3000;
const API_BASE = "api/"

/* Global middlewares */
api.use(cors());
api.use(express.json());

/* Routes */
api.use(`/${API_BASE}`, searchRoutes);

export const handler = serverless(api);
