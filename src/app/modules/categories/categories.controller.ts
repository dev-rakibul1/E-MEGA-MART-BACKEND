import { Request, Response } from "express";
import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import { ICategory } from "./categories.interface";
// @ts-ignore
import httpStatus from "http-status";
import { CategoriesServices } from "./categories.service";

// get all products
const getAllCategoriesController = CatchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoriesServices.getAllCategoriesService();

    SendResponse<ICategory[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories get successfully!",
      data: result,
    });
  }
);

export const CategoriesController = {
  getAllCategoriesController,
};
