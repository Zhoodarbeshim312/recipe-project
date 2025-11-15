import { Router } from "express";
import recipeControllers from "./recipe.controllers";
import authMiddleware from "../../middleware/authMiddleware";

const router = Router();
router.get("/getAllRecipes", authMiddleware, recipeControllers.getAllRecipe);
export default router;
