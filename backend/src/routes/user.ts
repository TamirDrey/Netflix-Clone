import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  signup,
  signin,
  likeContent,
  getUsersLikedContents,
  //getUser
} from "../controllers/user";
import { isAuth } from "../utils";

const userRouter: Router = express.Router();

userRouter.post("/signin", asyncHandler(signin));
userRouter.post("/signup", asyncHandler(signup));
userRouter.post("/likeContent", isAuth, asyncHandler(likeContent));
userRouter.get(
  "/getUsersLikedContents",
  isAuth,
  asyncHandler(getUsersLikedContents)
);
//userRouter.get("/auth-me", isAuth, getUser);

export default userRouter;
