import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Response, NextFunction } from "express";
import { UserDocument } from "./models/user/UserDocument";
import { RequestWithUser } from "./types/requests-type";
import { IUser } from "./types/user-type";

export const generateToken = ({ _id, name, email }: UserDocument): string => {
  return jwt.sign({ _id, name, email }, process.env.JWT_PW as string, {
    expiresIn: "7d",
  });
};

export const isAuth = asyncHandler(
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && (authHeader as string).startsWith("Bearer ")) {
      token = (authHeader as string).split(" ")[1];
      jwt.verify(token, process.env.JWT_PW as string, (err, decode) => {
        if (err)
          res.status(401).send({ message: err.message });
        else {
          const user: IUser = {
            _id: (decode as JwtPayload)._id,
            name: (decode as JwtPayload).name,
            email: (decode as JwtPayload).email,
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
