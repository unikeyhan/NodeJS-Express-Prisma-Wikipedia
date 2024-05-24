import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mainRouter from './src/app.routes';
import SwaggerConfig from './src/config/swagger.config';
import expressEjsLayouts from 'express-ejs-layouts';
import 'dotenv/config';
import i18nextConfig from './src/config/i18next.config';
import AllExceptionHandler from './src/common/exception/all-exception.handler';
import NotFoundHandler from './src/common/exception/not-found.handler';

async function main() {
  const app: Express = express();
  const port = process.env.PORT;
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.use(i18nextConfig);
  app.use(expressEjsLayouts);
  app.set('view engine', 'ejs');
  app.set('layout', './layouts/index.ejs');
  // app.set("layout extractScripts", true);
  // app.set("layout extractStyles", true);
  app.use(mainRouter);
  SwaggerConfig(app);
  NotFoundHandler(app);
  AllExceptionHandler(app);
  app.listen(port, () => {
    console.log(`server: http://localhost:${port}`);
  });
}
main();
