import { model, Schema } from "mongoose";
import { IDailyOffer, IDailyOfferModel } from "./offers.interface";

const DailyOfferSchema = new Schema<IDailyOffer, IDailyOfferModel>(
  {
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    offer: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    isDailyOffer: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model for Daily Offer
export const DailyOfferModel = model<IDailyOffer>(
  "DailyOffer",
  DailyOfferSchema
);
