import express from "express";
import {
  getProducts,
  getProductById,
  CreateProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProduct
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, CreateProduct);
router.get("/top", getTopProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route("/:id/reviews").post(protect, createProductReview);
export default router;
