import express, { Router } from "express";
import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import { signup, signin } from "../controllers/user";

const usersRouter: Router = express.Router();

usersRouter.post(
  "/signin",
  expressAsyncHandler((req: Request, res: Response, next: NextFunction) => {
    signin(req, res).catch(next);
  })
);

usersRouter.post(
  "/signup",
  expressAsyncHandler((req: Request, res: Response, next: NextFunction) => {
    signup(req, res).catch(next);
  })
);

export default usersRouter;
