"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const categories_controller_1 = require("./categories.controller");
const router = express_1.default.Router();
router.get("/", categories_controller_1.CategoriesController.getAllCategoriesController);
// router.post("/create-categories", CategorieController.CreateCategoriesController);
exports.CategoriesRoutes = router;
