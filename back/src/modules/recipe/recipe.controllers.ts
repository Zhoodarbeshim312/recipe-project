import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const getAllRecipe = async (req: Request, res: Response) => {
  try {
    const recipes = await prisma.recipe.findMany();
    res.status(200).json({
      success: true,
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllRecipe: ${error}`,
    });
  }
};
export default {
  getAllRecipe,
};
