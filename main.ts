import 'dotenv/config';
import express, { Express } from 'express';
import mainRouter from './src/app.routes';
import bodyParser from 'body-parser';

async function main () {
  const app: Express = express();
  const port = process.env.PORT;
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static("public"));
  app.use(mainRouter);
  app.listen(port, () => {
      console.log(`server: http://localhost:${port}`);
  });
}
main();
