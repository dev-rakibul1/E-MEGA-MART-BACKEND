import { Model } from "mongoose";

export type ICategory = {
  category: string;
  description?: string;
  imageUrl?: string;
  productsCount: number;
  isTopCategory?: boolean;
};

export type ICategoriesModel = Model<ICategory, Record<string, unknown>>;
