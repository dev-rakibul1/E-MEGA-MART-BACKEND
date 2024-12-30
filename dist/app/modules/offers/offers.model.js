"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyOfferModel = void 0;
const mongoose_1 = require("mongoose");
const DailyOfferSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
// Model for Daily Offer
exports.DailyOfferModel = (0, mongoose_1.model)("DailyOffer", DailyOfferSchema);
