import { Model } from "mongoose";

// Type for Daily Offer
export type IDailyOffer = {
  category?: string;
  description?: string;
  offer: string;
  imageUrl?: string;
  isDailyOffer: boolean;
};

export type IDailyOfferModel = Model<IDailyOffer, Record<string, unknown>>;
