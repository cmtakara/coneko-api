import express from "express";
const router = express.Router();

import messageController from "../controllers/message.mjs";

// ! seed route to be removed later
router.get("/seed", messageController.seed);

export default router;
