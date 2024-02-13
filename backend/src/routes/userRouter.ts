import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  signup,
  signin,
  likeContent,
  getUserLikedContents,
} from "../controllers/user";

const usersRouter: Router = express.Router();

usersRouter.post("/signin", expressAsyncHandler(signin));
usersRouter.post("/signup", expressAsyncHandler(signup));
usersRouter.post("/likeContent", expressAsyncHandler(likeContent));
usersRouter.get(
  "/getUserLikedContents",
  expressAsyncHandler(getUserLikedContents)
);

export default usersRouter;
