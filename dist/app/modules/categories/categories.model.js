"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
// categories Schema
const CategoriesSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
// Export the model
exports.CategoryModel = (0, mongoose_1.model)("Categories", CategoriesSchema);
