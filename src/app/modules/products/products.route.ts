import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.get("/", ProductController.getAllProductsController);
router.post("/create-product", ProductController.CreateProductsController);
router.get("/:id", ProductController.SingleProductsController);

export const ProductRoutes = router;
