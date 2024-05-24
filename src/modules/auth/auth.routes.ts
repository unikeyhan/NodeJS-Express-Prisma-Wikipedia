import { Router } from "express";
import authController from "./auth.controller";

const authRouter = Router()

authRouter.post('/signup', authController.signup)

export default authRouter