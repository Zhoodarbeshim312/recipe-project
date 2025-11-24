import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const getAllRecipe = async (req: Request, res: Response) => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        user: true,
        comments: true,
        save: true,
      },
    });
    res.json({ success: true, recipes });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
      error,
    });
  }
};

const getOneRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: String(id),
      },
      include: { user: true, comments: true, save: true },
    });
    if (!recipe)
      return res.status(404).json({
        success: false,
        message: "Рецепт не найден",
      });
    res.json({ success: true, recipe });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
      error,
    });
  }
};

const addRecipe = async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const {
      title,
      description,
      images,
      ingredients,
      instructions,
      nutrition,
      fill,
      cookingTime,
      preparationTime,
      category,
    } = req.body;

    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        images,
        ingredients,
        instructions,
        nutrition,
        fill,
        cookingTime,
        preparationTime,
        category,
        userId,
      },
    });

    res.status(201).json({ success: true, recipe });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
      error,
    });
  }
};

const updateRecipe = async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const { id } = req.params;
    const {
      title,
      description,
      images,
      ingredients,
      instructions,
      nutrition,
      fill,
      cookingTime,
      preparationTime,
      category,
    } = req.body;

    const recipe = await prisma.recipe.findUnique({
      where: {
        id: String(id),
      },
    });
    if (!recipe)
      return res
        .status(404)
        .json({ success: false, message: "Рецепт не найден" });
    if (recipe.userId !== userId)
      return res.status(403).json({
        success: false,
        message: "Нет доступа",
      });

    const updatedRecipe = await prisma.recipe.update({
      where: {
        id: String(id),
      },
      data: {
        title,
        description,
        images,
        ingredients,
        instructions,
        nutrition,
        fill,
        cookingTime,
        preparationTime,
        category,
      },
    });

    res.json({ success: true, recipe: updatedRecipe });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
      error,
    });
  }
};

const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const { id } = req.params;

    const recipe = await prisma.recipe.findUnique({
      where: {
        id: String(id),
      },
    });
    if (!recipe)
      return res
        .status(404)
        .json({ success: false, message: "Рецепт не найден" });
    if (recipe.userId !== userId)
      return res.status(403).json({
        success: false,
        message: "Нет доступа",
      });

    await prisma.recipe.delete({
      where: {
        id: String(id),
      },
    });

    res.json({ success: true, message: "Рецепт удалён" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка сервера",
      error,
    });
  }
};

export default {
  getAllRecipe,
  getOneRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
