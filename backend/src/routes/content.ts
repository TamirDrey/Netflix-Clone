import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { isAuth } from "../utils";
import { getAll, getById, getMovies, getSeries } from "../controllers/content";

const contentRouter: Router = express.Router();

contentRouter.get("/getAll", isAuth, asyncHandler(getAll));
contentRouter.get("/getSeries", isAuth, asyncHandler(getSeries));
contentRouter.get("/getMovies", isAuth, asyncHandler(getMovies));
contentRouter.get("/getById/:id", isAuth, asyncHandler(getById));

export default contentRouter;
