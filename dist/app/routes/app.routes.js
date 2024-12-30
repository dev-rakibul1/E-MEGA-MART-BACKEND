"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_route_1 = require("../modules/categories/categories.route");
const offers_route_1 = require("../modules/offers/offers.route");
const products_route_1 = require("../modules/products/products.route");
const router = express_1.default.Router();
const modulesRouters = [
    {
        path: "/product",
        route: products_route_1.ProductRoutes,
    },
    {
        path: "/categories",
        route: categories_route_1.CategoriesRoutes,
    },
    {
        path: "/daily-offer",
        route: offers_route_1.DailyOfferRoutes,
    },
];
modulesRouters.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
