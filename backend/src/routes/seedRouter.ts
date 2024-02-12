import express, { Router } from "express";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import seedData from "../controllers/seed";

const seedRouter: Router = express.Router();

seedRouter.get(
  "/",
  expressAsyncHandler(async (req: Request, res: Response): Promise<void> => {
    await seedData(req, res);
  })
);

export default seedRouter;
