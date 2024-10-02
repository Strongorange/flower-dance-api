"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pg_1 = require("pg");
// PostgreSQL 데이터베이스 연결 설정
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
// 프라미스 기반 풀
const promisePool = {
    query: (text, params) => pool.query(text, params),
    getClient: () => pool.connect(),
};
// 데이터베이스 연결 객체를 기본으로 내보내기
exports.default = promisePool;
