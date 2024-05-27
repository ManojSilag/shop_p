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
import checkObjectId from "../middleware/checkObjectId.js"
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, CreateProduct);
router.route("/:id/reviews").post(protect,checkObjectId, createProductReview);
router.get("/top", getTopProduct);
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);

export default router;
