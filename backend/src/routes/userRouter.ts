import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { signup, signin, likeContent } from "../controllers/user";

const usersRouter: Router = express.Router();

usersRouter.post("/signin", expressAsyncHandler(signin));
usersRouter.post("/signup", expressAsyncHandler(signup));
usersRouter.post("/likeContent", expressAsyncHandler(likeContent));

export default usersRouter;
