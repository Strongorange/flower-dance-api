"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rankingController_1 = require("../controllers/rankingController");
const express_1 = require("express");
const rankingRouter = (0, express_1.Router)();
rankingRouter.use("/", rankingController_1.getRankingController);
exports.default = rankingRouter;
