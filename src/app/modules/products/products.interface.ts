import { Model } from "mongoose";

export type IProduct = {
  model: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating?: number;
  brand?: string;
  createdAt: string;
  updatedAt?: string;
  discount?: number;
  variants?: Variant[];
  tags?: string[];
  isFeatured?: boolean;
  weight?: number;
  isAvailable: boolean;
};

type Variant = {
  imei?: string;
  name: string;
  price: number;
  stock: number;
};

export type IProductModel = Model<IProduct, Record<string, unknown>>;
