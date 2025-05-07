import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { validate } from "../middleware/validate.js";
import { createProductSchema } from "../schemas/productSchemas.js";
const router = express.Router();
router.get("/", getAllProducts);
router.post("/", validate(createProductSchema), createProduct);
export default router;
