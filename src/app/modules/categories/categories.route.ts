import express from "express";
import { CategoriesController } from "./categories.controller";

const router = express.Router();

router.get("/", CategoriesController.getAllCategoriesController);
// router.post("/create-categories", CategorieController.CreateCategoriesController);

export const CategoriesRoutes = router;
