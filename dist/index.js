"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const wowUtils_1 = __importDefault(require("./utils/wowUtils"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
const port = 3000;
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    (0, wowUtils_1.default)();
    console.log(`Server is running at http://localhost:${port}`);
});
