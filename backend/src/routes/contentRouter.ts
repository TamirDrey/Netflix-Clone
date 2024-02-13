import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils";
import {
  getAll,
  getById,
  getMovies,
  getUsersLikedContents,
  getSeries,
} from "../controllers/content";

const contentRouter: Router = express.Router();

contentRouter.get("/getAll", isAuth, expressAsyncHandler(getAll));
contentRouter.get("/getSeries", isAuth, expressAsyncHandler(getSeries));
contentRouter.get("/getMovies", isAuth, expressAsyncHandler(getMovies));
contentRouter.get("/getById/:id", isAuth, expressAsyncHandler(getById));
contentRouter.get(
  "/getUsersLikedContents",
  isAuth,
  expressAsyncHandler(getUsersLikedContents)
);

export default contentRouter;
