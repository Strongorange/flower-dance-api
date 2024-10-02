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
const dataSource_1 = __importDefault(require("../../models/dataSource"));
class ApiKeyModel {
    constructor() {
        // API 키 저장
        this.saveApiKey = (body) => __awaiter(this, void 0, void 0, function* () {
            const { api_key, user_name, contact_email, contact_phone, app_name, redirect_url, } = body;
            const params = [
                api_key,
                user_name,
                contact_email,
                contact_phone,
                app_name,
                redirect_url,
            ];
            const query = `
    INSERT INTO customers_api_keys 
    (
        api_key,
        user_name,
        contact_email,
        contact_phone,
        app_name,
        redirect_url
    )
    VALUES 
    (?, ?, ?, ? ,?, ?)
    `;
            const result = yield dataSource_1.default.query(query, params);
            return result;
        });
        // API 중복 확인
        this.checkDuplicteApiKey = (api_key) => __awaiter(this, void 0, void 0, function* () {
            const query = `
    SELECT COUNT(*) as count FROM customers_api_keys
    WHERE api_key = ?
    `;
            const params = [api_key];
            const [result] = yield dataSource_1.default.query(query, params);
            const count = result[0].count;
            return count > 0;
        });
    }
}
exports.default = new ApiKeyModel();
