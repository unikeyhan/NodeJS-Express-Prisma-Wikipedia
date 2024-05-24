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
    const existUser = await this.#prismaModel.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });
    if (existUser) {
      throw new createHttpError.BadRequest(t('module.auth.UserExist'));
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const newUser = await this.#prismaModel.user.create({ data: { username: username, password: password, email: email } });
    if (newUser) {
      const accessToken = this.signToken({ username, userId: newUser.id });
      return accessToken;
    }
  }
  @boundMethod
  async login(username: string, password: string) {
    const user = await this.#prismaModel.user.findFirst({
      where: {
        OR: [{ username: username }],
      },
    });
    if (!user) {
      throw new createHttpError.BadRequest(t('module.auth.UserNotExist'));
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new createHttpError.BadRequest(t('module.auth.WrongPassword'));
    }

    const accessToken = this.signToken({ username: user.username, userId: user.id });
    return accessToken;
  }

  @boundMethod
  signToken({ username, userId }: any) {
    return jwt.sign({ username, userId }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1y' });
  }
}
export default new AuthService();
