import { Request, NextFunction, Response } from "express";
import { User } from "./src/types/types";

export interface UserRequest extends Request {
  user?: User;
}

export const authorize = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const { user } = req.query;

  if (user === "yusep") {
    req.user = { name: "yusep", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
