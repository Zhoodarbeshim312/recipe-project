import { Router } from "express";
import cors from "cors";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";
import recipeRoutes from "../modules/recipe/recipe.routes";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:3000"],
};
globalRouter.use("/auth", cors(corsConfig), authRoutes);
globalRouter.use("/user", cors(corsConfig), userRoutes);
globalRouter.use("/recipe", cors(corsConfig), recipeRoutes);
export default globalRouter;
