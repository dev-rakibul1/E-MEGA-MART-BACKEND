import { model, Schema } from "mongoose";
import { ICategoriesModel, ICategory } from "./categories.interface";

// categories Schema
const CategoriesSchema = new Schema<ICategory, ICategoriesModel>(
  {
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    productsCount: {
      type: Number,
      required: true,
    },
    isTopCategory: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export const CategoryModel = model<ICategory, ICategoriesModel>(
  "Categories",
  CategoriesSchema
);
