import App from './app';
import validateEnv from './utils/validateEnv';
import * as dotenv from 'dotenv';
import CategoryController from 'controllers/category/category.controller';
import UserController from 'controllers/user/user.controller';
import ProductController from 'controllers/product/product.controller';

dotenv.config();
validateEnv();

const app = new App([
  new CategoryController(),
  new UserController(),
  new ProductController(),
]);

app.listen();
