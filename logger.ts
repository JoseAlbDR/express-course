import { NextFunction, Request, Response } from "express";
import { User } from "./src/types/types";

export interface UserRequest extends Request {
  user?: User;
}
export const logger = (
  req: UserRequest,
  _res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const { user } = req;
  console.log(method, url, time, user);

  next();
};
