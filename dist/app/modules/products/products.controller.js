"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const CatchAsync_1 = __importDefault(require("../../../shared/CatchAsync"));
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const SendResponse_1 = __importDefault(require("../../../shared/SendResponse"));
const products_services_1 = require("./products.services");
// get all products
const getAllProductsController = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_services_1.ProductServices.getAllProductService();
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product get successfully!",
        data: result,
    });
}));
// Create a new products
const CreateProductsController = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payloads = req.body;
    const result = yield products_services_1.ProductServices.CreateProductService(payloads);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product create successfully!",
        data: result,
    });
}));
// Get single products
const SingleProductsController = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield products_services_1.ProductServices.SingleProductService(id);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single product get successfully!",
        data: result,
    });
}));
exports.ProductController = {
    getAllProductsController,
    CreateProductsController,
    SingleProductsController,
};
