import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/interfaces";
import UserService from "../services/user.service";

class UserController {
  public userService = new UserService();

  public findUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { cpf } = req.body;
      const user: IUser = await this.userService.findUserByCPF(cpf);
      res.status(200).json({ data: user });
    } catch (err) {
      next(err);
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const body = req.body;
      await this.userService.createUser(body);
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
      next(err);
    }
  };
}
