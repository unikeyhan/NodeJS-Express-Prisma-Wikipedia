import express from 'express';
import authRouter from './modules/auth/auth.routes';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.get('/', (req, res, next) => {
  res.locals.layout = false;
  res.render('./pages/landing/index.ejs', { layout: false });
});

export default mainRouter;
