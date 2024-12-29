import { Request, Response } from "express";
import CatchAsync from "../../../shared/CatchAsync";
import { IProduct } from "./products.interface";
// @ts-ignore
import httpStatus from "http-status";
import SendResponse from "../../../shared/SendResponse";
import { ProductServices } from "./products.services";

// get all products
const getAllProductsController = CatchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductServices.getAllProductService();

    SendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product get successfully!",
      data: result,
    });
  }
);

// Create a new products
const CreateProductsController = CatchAsync(
  async (req: Request, res: Response) => {
    const payloads = req.body;

    const result = await ProductServices.CreateProductService(payloads);

    SendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product create successfully!",
      data: result,
    });
  }
);

// Get single products
const SingleProductsController = CatchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ProductServices.SingleProductService(id);

    SendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single product get successfully!",
      data: result,
    });
  }
);

export const ProductController = {
  getAllProductsController,
  CreateProductsController,
  SingleProductsController,
};
