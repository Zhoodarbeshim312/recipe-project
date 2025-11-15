import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { UpdateUserBody } from "./user.types";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        avatar: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllUsers: ${error}`,
    });
  }
};

const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const findUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: "Такого пользователя не существует",
      });
    }

    await prisma.user.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: `Пользователь с id:${id} удалён`,
      deletedUser: findUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteUser: ${error}`,
    });
  }
};

const updatedUser = async (
  req: Request<{ id: string }, {}, UpdateUserBody>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { avatar, name } = req.body;

    const findUser = await prisma.user.findUnique({ where: { id } });

    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        avatar: avatar ?? findUser.avatar,
        name: name ?? findUser.name,
      },
    });

    res.status(200).json({
      success: true,
      message: `Пользователь с id:${id} изменён`,
      updatedUser: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in updatedUser: ${error}`,
    });
  }
};

export default {
  getAllUsers,
  deleteUser,
  updatedUser,
};
