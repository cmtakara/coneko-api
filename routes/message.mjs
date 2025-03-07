import express from "express";
const router = express.Router();

import messageController from "../controllers/message.mjs";

// all routes that start with
//      /api/request-ticket

// ! seed route to be removed later
router.get("/seed", messageController.seed);

// Index 
// get all 
router.get('/', messageController.getAll);

router.get("/:user", messageController.getUserMessage)

export default router;
