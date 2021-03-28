import { Router } from "express";

const routes = new Router();

import { HomeController } from "./controllers";

import { HomeValidator } from "./middlewares/validators";

routes.get("/hello-world", [HomeValidator.getRules()], HomeController.hello);

export default routes;
