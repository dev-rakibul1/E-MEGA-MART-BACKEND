import { IProduct } from "./products.interface";
import Product from "./products.model";

const getAllProductService = async (): Promise<IProduct[]> => {
  const result = await Product.find();
  return result;
};
const CreateProductService = async (payloads: IProduct): Promise<IProduct> => {
  const result = await Product.create(payloads);
  return result;
};
const SingleProductService = async (id: string): Promise<IProduct> => {
  const result = await Product.findById(id);

  if (!result) {
    throw new Error("Invalid id!");
  }
  return result;
};

export const ProductServices = {
  getAllProductService,
  CreateProductService,
  SingleProductService,
};
