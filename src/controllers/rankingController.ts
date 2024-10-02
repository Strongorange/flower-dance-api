import { getRankingsModel } from "@/models/rankingModel";
import { returnSuccess } from "@/utils/responseUtil";
import { NextFunction, Request, Response } from "express";

export const getRankingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results = await getRankingsModel();

  console.log("eeeeee", results.rows);

  return returnSuccess({ res });
};
