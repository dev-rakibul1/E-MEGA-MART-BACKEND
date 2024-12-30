"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyOfferRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offers_controller_1 = require("./offers.controller");
const router = express_1.default.Router();
router.get("/", offers_controller_1.DailyOfferController.getAllDailyOfferController);
exports.DailyOfferRoutes = router;
