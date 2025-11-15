"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const token_1 = require("../../config/token");
const register = async (req, res) => {
    try {
        const { avatar, name, email, password } = req.body;
        const userFind = await prisma_1.prisma.user.findMany({
            where: {
                email,
            },
        });
        if (userFind) {
            res.status(401).json({
                success: false,
                message: "Пользователь с таким email существует создайте другую",
            });
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                avatar,
                name,
                email,
                password,
            },
        });
        const token = (0, token_1.generateToken)(user.id, user.email);
        res.status(200).json({
            success: true,
            token,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in register: ${error}`,
        });
    }
};
exports.default = {
    register,
};
//# sourceMappingURL=auth.controllers.js.map