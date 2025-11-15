"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = __importDefault(require("./auth.controllers"));
const router = (0, express_1.Router)();
router.post("/registration", auth_controllers_1.default.register);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map