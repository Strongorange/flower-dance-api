"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
exports.errorHandler = errorHandler;
class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error instanceof CustomError) {
        res
            .status(error.status)
            .json({ status: error.status, message: error.message });
    }
    else {
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}
