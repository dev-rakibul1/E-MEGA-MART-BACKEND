import express from "express";
import { DailyOfferController } from "./offers.controller";

const router = express.Router();

router.get("/", DailyOfferController.getAllDailyOfferController);

export const DailyOfferRoutes = router;
