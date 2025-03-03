import express from "express";
const router = express.Router();
import userController from "../controller/user.mjs";

// ! seed route to be removed later
router.post("/seed", userController.seed);

export default router;
