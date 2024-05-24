import { Request, Response, NextFunction, Express } from 'express';
import { t } from 'i18next';
function AllExceptionHandler(app: Express)  {
  app.use((err:any, req: Request, res: Response, next: NextFunction) => {
    let status = err?.status ?? err?.statusCode ?? err?.code;
    if (!status || isNaN(+status) || status > 511 || status < 200) status = 500;
    res.status(status).json({
      message: err?.message ?? err?.stack ?? t('InternalServerError'),
    });
  });
}
export default AllExceptionHandler;
