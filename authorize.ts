import { NextFunction, Response } from "express";
import { User } from "./src/interfaces/types";

export const authorize = (req: User, res: Response, next: NextFunction) => {
  const user = req.query.user;

  if (user === "yusep") {
    req.user = { name: "john", id: 3 };

    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
