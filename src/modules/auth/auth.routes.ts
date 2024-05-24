import { Router } from "express";
import authController from "./auth.controller";

const authRouter = Router()

authRouter.post('/signup', authController.signup)
authRouter.post('/login', authController.login)
authRouter.get('/signup', authController.signupPage)
authRouter.get('/login', authController.loginPage)

export default authRouter