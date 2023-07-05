import express from "express";
import {
  listResults,
} from "../controllers/search.controllers.mjs";

const router = express.Router();

router.get("/", listResults);

export default router;