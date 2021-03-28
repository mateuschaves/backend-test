import dotenv from "dotenv";

import cors from "cors";
import express from "express";
import "express-async-errors";

import routes from "./app/routes";
import "./database";

dotenv.config();

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
