import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import seedData from "../controllers/seed";
import { isAuth } from "../utils";


const seedRouter: Router = express.Router();

seedRouter.get("/", isAuth,expressAsyncHandler(seedData));

export default seedRouter;
