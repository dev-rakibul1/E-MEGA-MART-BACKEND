import { Request, Response } from "express";
import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
// @ts-ignore
import httpStatus from "http-status";
import { IDailyOffer } from "./offers.interface";
import { DailyOfferServices } from "./offers.services";

// get all products
const getAllDailyOfferController = CatchAsync(
  async (req: Request, res: Response) => {
    const result = await DailyOfferServices.getAllDailyOfferService();

    SendResponse<IDailyOffer[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Daily offer get successfully!",
      data: result,
    });
  }
);

export const DailyOfferController = {
  getAllDailyOfferController,
};
