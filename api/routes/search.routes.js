import express from "express";
import {
  listResults,
} from "../controllers/search.controllers.js";

const router = express.Router();

router.get("/", listResults);

export default router;