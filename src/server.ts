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


