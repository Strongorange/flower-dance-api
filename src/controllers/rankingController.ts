import { getRankingsModel } from "@/models/rankingModel";
import { returnKeyError, returnSuccess } from "@/utils/responseUtil";
import { NextFunction, Request, Response } from "express";

export const getRankingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results = await getRankingsModel();

  return returnSuccess({ res, data: results.rows });
};

// 현재 몇등인지 조회
export const getRankingByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, phone } = req.query;

  if (!name || !phone) {
    return returnKeyError(res);
  }

  const results = await getRankingsModel();
  // ranking.rank 라는 필드는 없어서 인덱스를 사용해서 몇 등인지 찾아야함
  const ranking = results.rows.findIndex(
    (row) => row.name === name && row.phone === phone
  );

  if (ranking === -1) {
    return returnSuccess({ res, data: { rank: null } });
  }

  return returnSuccess({ res, data: { rank: ranking + 1 } });
};
