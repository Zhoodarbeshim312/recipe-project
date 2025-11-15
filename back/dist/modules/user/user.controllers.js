"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
const getAllUsers = async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.findMany();
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllUsers: ${error}`,
        });
    }
};
exports.default = {
    getAllUsers,
};
//# sourceMappingURL=user.controllers.js.map