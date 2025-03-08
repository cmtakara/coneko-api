import express from "express";
const router = express.Router();

import messageController from "../controllers/message.mjs";

// all routes that start with
//      /api/request-ticket

router.use((req, res, next) => {
  console.log("Matched route:", req.originalUrl); // Logs the current matched route
  next(); // Move to the next handler
});

// ! seed route to be removed later
router.get("/seed", messageController.seed);

// get a single message by Id
router.get("/message/:Id", messageController.getMessageById),
  // get all user messages by Id there can only be one with a matching Id
  router.get("/user/:userId", messageController.getMessageByUserId);

// get all user messages by name there can be many with the same name
router.get("/:username", messageController.getMessageByUserName);

// Index
// get all
router.get("/", messageController.getAll);

// post a new message
router.post("/", messageController.createMessage);

export default router;
