"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnKeyError = exports.returnSuccess = exports.sendResponse = void 0;
const sendResponse = (res, status, message, data) => {
    const response = {
        status,
        message,
        data,
    };
    if (data === undefined || data === null) {
        delete response.data;
    }
    return res.status(status).json(response);
};
exports.sendResponse = sendResponse;
const returnSuccess = ({ res, code, data }) => {
    return (0, exports.sendResponse)(res, code !== null && code !== void 0 ? code : 200, "success", data);
};
exports.returnSuccess = returnSuccess;
const returnKeyError = (res) => {
    console.error("KEY_ERROR");
    return (0, exports.sendResponse)(res, 400, "KEY_ERROR");
};
exports.returnKeyError = returnKeyError;
