import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  signup,
  signin,
  likeContent,
  getUsersLikedContents,
} from "../controllers/user";
import { isAuth } from "../utils";

const usersRouter: Router = express.Router();

usersRouter.post("/signin", expressAsyncHandler(signin));
usersRouter.post("/signup", expressAsyncHandler(signup));
usersRouter.post("/likeContent", isAuth, expressAsyncHandler(likeContent));
usersRouter.get(
  "/getUsersLikedContents",
  isAuth,
  expressAsyncHandler(getUsersLikedContents)
);

export default usersRouter;
