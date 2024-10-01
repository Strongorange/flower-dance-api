import exampleRouter from "@/router/exampleRouter";
import { Router } from "express";

const RootRouter = Router();

RootRouter.use("/example", exampleRouter);

export default RootRouter;
