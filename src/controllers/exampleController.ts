import { getExample } from "@/models/exampleModel";
import { NextFunction, Request, Response } from "express";

export const exampleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getExample();
  console.log("result222", result);
  return res.json("good");
};
