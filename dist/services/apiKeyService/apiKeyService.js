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
const apiKeyModel_1 = __importDefault(require("../../services/apiKeyService/apiKeyModel"));
const generateApiKey_1 = __importDefault(require("@/utils/generateApiKey"));
class ApiKeyService {
    constructor() {
        this.createApiKey = (body) => __awaiter(this, void 0, void 0, function* () {
            let newApiKey;
            let isDuplicate;
            do {
                newApiKey = (0, generateApiKey_1.default)();
                isDuplicate = yield apiKeyModel_1.default.checkDuplicteApiKey(newApiKey);
            } while (isDuplicate);
            yield apiKeyModel_1.default.saveApiKey(Object.assign({ api_key: newApiKey }, body));
            return newApiKey;
        });
    }
}
exports.default = new ApiKeyService();
