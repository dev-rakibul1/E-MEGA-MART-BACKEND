import express from "express";
import { CategoriesRoutes } from "../modules/categories/categories.route";
import { DailyOfferRoutes } from "../modules/offers/offers.route";
import { ProductRoutes } from "../modules/products/products.route";

const router = express.Router();

const modulesRouters = [
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/categories",
    route: CategoriesRoutes,
  },
  {
    path: "/daily-offer",
    route: DailyOfferRoutes,
  },
];

modulesRouters.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
