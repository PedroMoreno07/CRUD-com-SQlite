import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import { validate } from "../middleware/validate.js";
import { createProductSchema } from "../schemas/productSchemas.js";
const router = express.Router();
router.get("/", getAllProducts);
router.post("/", validate(createProductSchema), createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
