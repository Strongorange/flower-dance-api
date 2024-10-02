"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("tsconfig-paths/register");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandler_1 = require("./middlewares/errorHandler");
const Router_1 = __importDefault(require("./router/Router"));
require("./models/dataSource");
const app = (0, express_1.default)();
const port = 8765;
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!!!!!!!");
});
// 라우터
app.use(Router_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
