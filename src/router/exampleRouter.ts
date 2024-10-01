import { exampleController } from "@/controllers/exampleController";
import { Router } from "express";

const exampleRouter = Router();

exampleRouter.get("/ping", exampleController);

export default exampleRouter;
