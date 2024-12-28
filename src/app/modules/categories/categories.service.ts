import { ICategory } from "./categories.interface";
import { CategoryModel } from "./categories.model";

const getAllCategoriesService = async (): Promise<ICategory[]> => {
  const result = await CategoryModel.find({}).sort({ createdAt: -1 });
  return result;
};

export const CategoriesServices = {
  getAllCategoriesService,
};
