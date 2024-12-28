import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
// @ts-ignore
import httpStatus from "http-status";

import router from "./app/routes/app.routes";
import databaseConnect from "./utils/server";
const app: Application = express();

// middle were calling
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Application router or Application middleware
app.use("/api/v1", router);

// global error handling
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not fount.",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "API not found!",
      },
    ],
  });
  next();
});

// database calling
databaseConnect();

export default app;
