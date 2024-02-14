import { mapCodeToTitle } from "../constants/errorHandlerConsts";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;

  if (mapCodeToTitle.has(statusCode))
    res.json({
      title: mapCodeToTitle.get(statusCode),
      message: err.message,
      //stackTrace: err.stack,
    });
  else {
    console.log(err.message);//TODO
    next();
  }
};
