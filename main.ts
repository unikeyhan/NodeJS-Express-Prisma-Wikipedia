import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mainRouter from './src/app.routes';
import SwaggerConfig from './src/config/swagger.config';
import expressEjsLayouts from "express-ejs-layouts";
import 'dotenv/config';

async function main () {
  const app: Express = express();
  const port = process.env.PORT;
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static("public"));
  app.use(expressEjsLayouts)
  app.set("view engine", "ejs");
  app.set("layout", "./layouts/panel/main.ejs");
  app.use(mainRouter);
  SwaggerConfig(app);
  app.listen(port, () => {
      console.log(`server: http://localhost:${port}`);
  });
}
main();
