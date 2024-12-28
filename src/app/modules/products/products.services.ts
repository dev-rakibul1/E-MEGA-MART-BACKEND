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

export const ProductServices = {
  getAllProductService,
  CreateProductService,
};
