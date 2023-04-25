<<<<<<< HEAD
import { CategoryController } from "./controllers/category/category.controller";
import App from "./app";
import validateEnv from "./utils/validateEnv"
import * as dotenv from "dotenv"

dotenv.config()
validateEnv()

const app = new App(
  [
    new CategoryController()
  ]
);

app.listen()
=======
import App from './app';
import validateEnv from './utils/validateEnv';
import * as dotenv from 'dotenv';
import CategoryController from 'controllers/category/category.controller';
import UserController from 'controllers/user/user.controller';
import ProductController from 'controllers/product/product.controller';

dotenv.config();
validateEnv();
>>>>>>> 4576618 (Update: Finish)

const app = new App([
  new CategoryController(),
  new UserController(),
  new ProductController(),
]);

app.listen();
