import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import userRouter from "./routes/userRouter";
import seedRouter from "./routes/seedRouter";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

//routes:

app.use("/api/v1/users", userRouter);
app.use("/api/v1/seed", seedRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING!)
  .then(() => {
    app.listen(PORT, function () {
      console.log("listening on port " + PORT);
    });
  })
  .catch((err: Error) => {
    console.log(err.message);
  });
