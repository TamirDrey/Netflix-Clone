import express, { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { signup, signin } from "../controllers/user";

const usersRouter: Router = express.Router();

usersRouter.post("/signin", expressAsyncHandler(signin));
usersRouter.post("/signup", expressAsyncHandler(signup));

export default usersRouter;
