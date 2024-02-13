import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  signup,
  signin,
  likeContent,
  getUsersLikedContents,
} from "../controllers/user";
import { isAuth } from "../utils";

const userRouter: Router = express.Router();

userRouter.post("/signin", expressAsyncHandler(signin));
userRouter.post("/signup", expressAsyncHandler(signup));
userRouter.post("/likeContent", isAuth, expressAsyncHandler(likeContent));
userRouter.get(
  "/getUsersLikedContents",
  isAuth,
  expressAsyncHandler(getUsersLikedContents)
);

export default userRouter;
