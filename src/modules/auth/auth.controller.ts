import { Request, Response, NextFunction } from 'express';
import authService from './auth.service';
import { boundMethod } from 'autobind-decorator';
import CookieNames from '../../common/constant/cookie.enum';
import NodeEnv from '../../common/constant/env.enum';
import { t } from 'i18next';
class AuthController {
  #service;
  constructor() {
    this.#service = authService;
  }
  @boundMethod
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, email } = req.body;
      const token = await this.#service.signup(username, password, email);
      return res
        .cookie(CookieNames.AccessToken, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.Production,
        })
        .status(200)
        .json({
          message: t('module.auth.SignupSuccessfully'),
        });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  @boundMethod
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const token = await this.#service.login(username, password);
      return res
        .cookie(CookieNames.AccessToken, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.Production,
        })
        .status(200)
        .json({
          message: t('module.auth.LoginSuccessfully'),
        });
    } catch (error) {
      next(error);
    }
  }

  @boundMethod
  async signupPage(req: Request, res: Response, next: NextFunction) {
    try{
      res.locals.layout = "./layouts/index.ejs";
      res.render("./pages/signup/index.ejs", {});
    }catch(err) {
      next(err)
    }
  }

  @boundMethod
  async loginPage(req: Request, res: Response, next: NextFunction) {
    try{
      res.locals.layout = "./layouts/index.ejs";
      res.render("./pages/login/index.ejs", {});
    }catch(err) {
      next(err)
    }
  }
}

export default new AuthController();
