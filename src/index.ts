import dotenv from "dotenv";
dotenv.config();
import "tsconfig-paths/register";
import express, { Request, Response } from "express";
import morgan from "morgan";
import { errorHandler } from "@/middlewares/errorHandler";
import RootRouter from "@/router/Router";
import dataSource from "@/models/dataSource"

import "@/models/dataSource";

const app = express();
const port = 8765;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!!!!!!!");
});


// 라우터
app.use(RootRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
