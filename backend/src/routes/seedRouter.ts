import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import seedData from "../controllers/seed";

const seedRouter: Router = express.Router();

seedRouter.get("/", expressAsyncHandler(seedData));

export default seedRouter;
