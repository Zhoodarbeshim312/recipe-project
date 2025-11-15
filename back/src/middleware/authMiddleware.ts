import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../config/token";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      userEmail: string;
    }
  }
}

interface DecodedToken {
  userId: string;
  userEmail: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Токен не предоставлен!",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Токен пустой!",
      });
    }

    const decoded = verifyToken(token) as DecodedToken;

    if (!decoded || !decoded.userId || !decoded.userEmail) {
      return res.status(401).json({
        success: false,
        message: "Неверный токен!",
      });
    }

    req.userId = decoded.userId;
    req.userEmail = decoded.userEmail;

    next();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

    res.status(500).json({
      success: false,
      message: `Ошибка проверки токена: ${message}`,
    });
  }
};

export default authMiddleware;
