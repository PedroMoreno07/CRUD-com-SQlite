import express from "express";
import {
  getAllusers,
  createUsers,
  deleteUser,
  updateUsers,
  getUserId,
  registerUser,
  login,
} from "../controllers/userController.js";
import { validate } from "../middleware/validate.js";
import {
  createUserSchema,
  loginSchemas,
  updateUserSchema,
} from "../schemas/userSchemas.js";
import { authenticate } from "../middleware/authentication.js";
const router = express.Router();
router.get("/", getAllusers);
router.get("/:id", getUserId);
router.post("/", validate(createUserSchema), createUsers);
router.delete("/:id", authenticate, deleteUser);
router.put("/:id", authenticate, validate(updateUserSchema), updateUsers);
router.post("/register", registerUser);
router.post("/login", validate(loginSchemas), login);
export default router;
