import App from "./app";
import validateEnv from "./utils/validateEnv"
import * as dotenv from "dotenv"

dotenv.config()
validateEnv()

const app = new App(
  [
    new CategoriesRoute()
  ]
);

app.listen()


