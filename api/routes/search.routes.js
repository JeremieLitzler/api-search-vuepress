import express from 'express';

import { listResults } from '../controllers/search.controllers.js';

const router = express.Router();

router.get('/search', listResults);

export default router;
