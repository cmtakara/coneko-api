import express from "express";
const router = express.Router();

import messageController from "../controller/message.mjs";

// ! seed route to be removed later
router.post("/seed", messageController.seed);

export default router;
