"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    model: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    brand: {
        type: String,
        default: "",
    },
    discount: {
        type: Number,
        default: 0,
    },
    variants: [
        {
            imei: {
                type: String,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            stock: {
                type: Number,
                required: true,
            },
        },
    ],
    tags: {
        type: [String],
        default: [],
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    weight: {
        type: Number,
        default: 0,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});
const Product = (0, mongoose_1.model)("Product", ProductSchema);
exports.default = Product;
