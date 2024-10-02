"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rankingRouter_1 = __importDefault(require("../router/rankingRouter"));
const express_1 = require("express");
const RootRouter = (0, express_1.Router)();
RootRouter.use("/ranking", rankingRouter_1.default);
exports.default = RootRouter;
