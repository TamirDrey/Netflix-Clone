import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import seedData from "../controllers/seed";

const seedRouter: Router = express.Router();

seedRouter.get("/", asyncHandler(seedData));

export default seedRouter;
