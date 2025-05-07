import express from "express";
import {
  getAllusers,
  createUsers,
  deleteUser,
  updateUsers,
  getUserId,
  registerUser,
} from "../controllers/userController.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas.js";
const router = express.Router();
router.get("/", getAllusers);
router.get("/:id", getUserId);
router.post("/", validate(createUserSchema), createUsers);
router.delete("/:id", deleteUser);
router.put("/:id", validate(updateUserSchema), updateUsers);
router.post("/register", registerUser);
export default router;
