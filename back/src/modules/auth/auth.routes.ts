import { Router } from "express";
import authControllers from "./auth.controllers";

const router = Router();
router.post("/registration", authControllers.register);
router.post("/login", authControllers.login);
router.post("/resetPasssword", authControllers.resetPassword);
export default router;
