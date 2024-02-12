import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UserDocument } from "./models/user";
import { errorsCodes } from "./constants/errorHandlerConsts";
import { RequestWithUser } from "./types/requests-type";
import { IUser } from "./types/user-type";

const generateToken = ({ _id, name, email }: UserDocument): string => {
  return jwt.sign({ _id, name, email }, process.env.JWT_PW as string, {
    expiresIn: "7d",
  });
};

const isAuth = asyncHandler(
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && (authHeader as string).startsWith("Bearer ")) {
      token = (authHeader as string).split(" ")[1];
      jwt.verify(token, process.env.JWT_PW as string, (err, decode) => {
        if (err)
          res.status(errorsCodes.UNAUTHORIZED).send({ message: err.message });
        else {
          const user: IUser = {
            email: (decode as JwtPayload).email,
            password: (decode as JwtPayload).sub,
          };
          req.user = user;
          next();
        }
      });
    } else {
      res.status(401).send({ message: "Not authorized, no token" });
    }
  }
);

export { generateToken, isAuth };
