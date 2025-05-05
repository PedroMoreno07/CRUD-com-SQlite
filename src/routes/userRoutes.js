import express from "express";
import {
  getAllusers,
  createUsers,
  deleteUser,
  updateUsers,
} from "../controllers/userController.js";
const router = express.Router();
router.get("/", getAllusers);
router.post("/", createUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUsers);
export default router;
