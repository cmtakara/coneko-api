import express from "express";
const router = express.Router();

import messageController from "../controllers/message.mjs";

// all routes that start with
//      /api/request-ticket

// ! seed route to be removed later
router.get("/seed", messageController.seed);

// get all user messages by Id there can only be one with a matching Id
router.get("/:userId", messageController.getUserById);

// get all user messages by name there can be many with the same name
router.get("/:user", messageController.getUserByName);

// Index
// get all
router.get("/", messageController.getAll);

// post a new message
router.post("/", messageController.createMessage);

export default router;
