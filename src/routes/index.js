import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controller/index.js";

const router = express.Router();

router.get("/productos", getProducts);
router.get("/producto/:id", getProductById);
router.post("/productos", addProduct);
router.put("/producto/:id", updateProduct);
router.delete("/productos/:id", deleteProduct);

export default router;
