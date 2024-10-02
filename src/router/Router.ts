import rankingRouter from "@/router/rankingRouter";
import { Router } from "express";

const RootRouter = Router();


RootRouter.use("/ranking", rankingRouter);

export default RootRouter;
