import { Request, Response, NextFunction, Express } from 'express';
import { t } from 'i18next';

function NotFoundHandler(app: Express) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      message: t('http.NotFound'),
    });
  });
}
export default NotFoundHandler;
