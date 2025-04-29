import express from "express";
import { getAllusers, createUsers } from "../controllers/userController.js";
const router = express.Router();
router.get("/", getAllusers);
router.post("/", createUsers);
export default router;
