import randomInt from 'crypto';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { boundMethod } from 'autobind-decorator';
import createHttpError from 'http-errors';
import { t } from 'i18next';
import bcrypt from 'bcrypt';
import 'dotenv/config';

class AuthService {
  #prismaModel;
  constructor() {
    this.#prismaModel = new PrismaClient();
  }
  @boundMethod
  async signup(username: string, password: string, email: string) {
    const existUser = await this.#prismaModel.user.findMany({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });
    if (existUser.length) {
      throw new createHttpError.BadRequest(t('module.auth.UserExist'));
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const newUser = await this.#prismaModel.user.create({ data: { username: username, password: password, email: email } });
    if (newUser) {
      const accessToken = this.signToken({ username, userId: newUser.id });
      return accessToken;
    }

    // const user = await this.#prismaModel.user.create({ username, password, email });
  }

  @boundMethod
  signToken({ username, userId }:any) {
    return jwt.sign({ username, userId }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1y' });
  }
}
export default new AuthService();
