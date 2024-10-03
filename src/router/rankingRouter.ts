import {
  getRankingByUserController,
  getRankingController,
} from "@/controllers/rankingController";
import { Router } from "express";

const rankingRouter = Router();

rankingRouter.use("/rank", getRankingByUserController);
rankingRouter.use("/", getRankingController);

export default rankingRouter;
