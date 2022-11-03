import { NextFunction, Request, Response } from "express";
import { ITransfers } from "../models/interfaces";
import TransfersService from "../services/transfer.service";

class TransfersController {
  public transfersService = new TransfersService();

  public transfer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: ITransfers = req.body;

      await this.transfersService.newTransfer(body);
      res.status(200).json({
        message: `Transferência para ${body.recipient} realizada com sucesso!`,
      });
    } catch (err) {
      next(err);
    }
  };

  public findTransfersByUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { cpf }: { cpf: string } = req.body;

      const allTransfers = await this.transfersService.findAllTransfersByUser(
        cpf,
      );

      res.status(200).json({ data: allTransfers });
    } catch (err) {
      next(err);
    }
  };
}

export default TransfersController;
