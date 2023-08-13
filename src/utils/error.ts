import { Response } from "express";
import { CustomError } from "../interfaces/types";

export const errorHandler = (error: unknown, res: Response) => {
  if (
    error &&
    typeof error === "object" &&
    "status" in error &&
    "message" in error
  ) {
    // Check if the error has the properties of a CustomError
    const customError = error as CustomError;
    res.status(customError?.status || 500).send({
      status: "FAILED",
      data: { error: customError?.message || error },
    });
  }
};
