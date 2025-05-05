import express from "express";
import {
  getAllusers,
  createUsers,
  deleteUser,
  updateUsers,
  getUserId,
} from "../controllers/userController.js";
const router = express.Router();
router.get("/", getAllusers);
router.get("/:id", getUserId);
router.post("/", createUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUsers);
export default router;
