import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../../config/token";
import { RegisterBody, LoginBody, ResetPasswordBody } from "../auth/auth.types";

const register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
  try {
    const { avatar, name, email, password } = req.body;

    const userFind = await prisma.user.findUnique({ where: { email } });

    if (userFind) {
      return res.status(401).json({
        success: false,
        message: "Пользователь с таким email существует создайте другую",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        avatar: avatar ?? null,
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user.id, user.email);

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Error in register: ${error}`,
    });
  }
};

const login = async (req: Request<{}, {}, LoginBody>, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Неверный пароль!",
      });
    }

    const token = generateToken(user.id, user.email);

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Error in login: ${error}`,
    });
  }
};

const resetPassword = async (
  req: Request<{}, {}, ResetPasswordBody>,
  res: Response
) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "email и newPassword обязательны!",
      });
    }

    const dataUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!dataUser) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return res.status(200).json({
      success: true,
      message: "Пароль успешно обновлён!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Error in resetPassword: ${error}`,
    });
  }
};

export default {
  register,
  login,
  resetPassword,
};
