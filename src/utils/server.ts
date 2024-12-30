import dotenv from "dotenv";
import { Server } from "http";
import mongoose from "mongoose";
import app from "../index";
dotenv.config();

const CLOUD_URI =
  "mongodb+srv://megaMart_backend:Akh3GpsTK86d_PL@cluster0.ap1bp.mongodb.net/megaMart_DB?retryWrites=true&w=majority&appName=Cluster0";

let server: Server;
const databaseConnect = async () => {
  try {
    await mongoose.connect(CLOUD_URI as string);
    console.log("Database is connected!");

    server = app.listen(3007, () => {
      console.log(`Example app listening on port ${3007}`);
    });
  } catch (error) {
    console.error("Fail to DB connected!");
  }
};
// mongoose.set('strictPopulate', false);

process.on("unhandledRejection", (error) => {
  // errorLogger.log(error);
  if (server) {
    server.close(() => {
      console.error(error);
      process.exit(1);
    });
  } else {
    process.exit(2);
  }
});

process.on("SIGTERM", () => {
  console.log("SIGTERM is received!");
  if (server) {
    server.close();
  }
});

export default databaseConnect;
