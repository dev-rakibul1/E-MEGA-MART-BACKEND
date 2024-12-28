import { IDailyOffer } from "./offers.interface";
import { DailyOfferModel } from "./offers.model";

const getAllDailyOfferService = async (): Promise<IDailyOffer[]> => {
  const result = await DailyOfferModel.find({}).sort({ createdAt: -1 });
  return result;
};

export const DailyOfferServices = {
  getAllDailyOfferService,
};
