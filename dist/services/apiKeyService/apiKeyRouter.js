"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKeyController_1 = __importDefault(require("../../services/apiKeyService/apiKeyController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/ping", (req, res, next) => res.json("pong"));
router.post("/create", apiKeyController_1.default.createApiKey);
exports.default = router;
