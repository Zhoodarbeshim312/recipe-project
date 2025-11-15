import { Router } from "express";
import userControllers from "./user.controllers";

const router = Router();
router.get("/getAllUsers", userControllers.getAllUsers);
router.delete("/deleteUser/:id", userControllers.deleteUser);
router.patch("/updateUser/:id", userControllers.updatedUser);
export default router;
