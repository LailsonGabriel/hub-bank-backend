import { Router } from "express";
import { Route } from "../interfaces";
import UsersController from "../controller/user.controller";

class UsersRoute implements Route {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:cpf`, this.usersController.findUser);
    this.router.post(`${this.path}/create`, this.usersController.createUser);
  }
}

export default UsersRoute;
