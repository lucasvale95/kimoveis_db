import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    throw new AppError("User is not admin", 403);
  }

  return next();
};

export default ensureIsAdmMiddleware;
