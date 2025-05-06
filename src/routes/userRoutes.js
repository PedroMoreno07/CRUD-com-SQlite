import express from "express";
import {
  getAllusers,
  createUsers,
  deleteUser,
  updateUsers,
  getUserId,
} from "../controllers/userController.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas.js";
const router = express.Router();
router.get("/", getAllusers);
router.get("/:id", getUserId);
router.post("/", validate(createUserSchema), createUsers);
router.delete("/:id", deleteUser);
router.put("/:id", validate(updateUserSchema), updateUsers);
export default router;
