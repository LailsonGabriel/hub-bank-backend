import cors from "cors";
import express from "express";
import { Route } from "./interfaces";
import errorMiddleware from "./middlewares/error.middleware";
import connectToDB from "./database";

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Route[]) {
    this.port = 3033;
    this.app = express();
    this.connectToDatabase();
    this.initializeRoutes(routes);
    // this.initializeErrorHandling();
    this.initializeMiddlewares();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  // private initializeErrorHandling() {
  //   this.app.use(errorMiddleware);
  // }

  private connectToDatabase() {
    connectToDB();
  }
}

export default App;
