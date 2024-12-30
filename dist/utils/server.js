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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../index"));
dotenv_1.default.config();
const CLOUD_URI = "mongodb+srv://megaMart_backend:Akh3GpsTK86d_PL@cluster0.ap1bp.mongodb.net/megaMart_DB?retryWrites=true&w=majority&appName=Cluster0";
let server;
const databaseConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(CLOUD_URI);
        console.log("Database is connected!");
        server = index_1.default.listen(3007, () => {
            console.log(`Example app listening on port ${3007}`);
        });
    }
    catch (error) {
        console.error("Fail to DB connected!");
    }
});
// mongoose.set('strictPopulate', false);
process.on("unhandledRejection", (error) => {
    // errorLogger.log(error);
    if (server) {
        server.close(() => {
            console.error(error);
            process.exit(1);
        });
    }
    else {
        process.exit(2);
    }
});
process.on("SIGTERM", () => {
    console.log("SIGTERM is received!");
    if (server) {
        server.close();
    }
});
exports.default = databaseConnect;
