import { getRankingController } from "@/controllers/rankingController";
import { Router } from "express";

const rankingRouter = Router();

rankingRouter.use("/", getRankingController)



export default rankingRouter;
