import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../../config/token";

interface IUser {
  id: string;
  email: string;
  avatar: string | null;
  name: string;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const register = async (req: Request, res: Response) => {
  try {
    const { avatar, name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({ where: { email } });
    if (findUser) {
      return res.status(401).json({
        success: false,
        message: "Такой пользователь уже существует!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = await prisma.user.create({
      data: {
        avatar,
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user.id, user.email);

    res.status(201).json({
      success: true,
      token,
      userId: user.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in register: ${error}`,
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    if (!user.password) {
      return res.status(400).json({
        success: false,
        message: "У пользователя нет пароля!",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Неверный пароль!",
      });
    }

    const token = generateToken(user.id, user.email);

    res.status(200).json({
      success: true,
      token,
      userId: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in login: ${error}`,
    });
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email и новый пароль обязательны!",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });

    res.status(200).json({
      success: true,
      message: "Пароль успешно обновлён!",
    });
  } catch (error) {
    res.status(500).json({
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
