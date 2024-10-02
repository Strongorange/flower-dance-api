"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKeyService_1 = __importDefault(require("../../services/apiKeyService/apiKeyService"));
const responseUtil_1 = require("../../utils/responseUtil");
class ApiKeyController {
    constructor() {
        this.createApiKey = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { app_name, contact_email, contact_phone, redirect_url, user_name, } = body;
                if (!app_name ||
                    !contact_email ||
                    !contact_phone ||
                    !redirect_url ||
                    !user_name) {
                    return (0, responseUtil_1.returnKeyError)(res);
                }
                const newApiKey = yield apiKeyService_1.default.createApiKey(body);
                return (0, responseUtil_1.returnSuccess)(res, { newApiKey });
            }
            catch (error) {
                console.error("createApiKey 에러", error);
                next(error);
            }
        });
    }
}
exports.default = new ApiKeyController();
