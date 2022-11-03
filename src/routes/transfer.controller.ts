import { Router } from "express";
import { Route } from "../interfaces";
import TransferController from "../controller/transfer.controller";

class UsersRoute implements Route {
  public path = "/users";
  public router = Router();
  public transfersController = new TransferController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      this.transfersController.findTransfersByUser,
    );
    this.router.post(`${this.path}/new`, this.transfersController.transfer);
  }
}

export default UsersRoute;
