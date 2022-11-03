import { ITransfers } from "../models/interfaces";
import TransfersModel from "../models/transfers.model";
import UserService from "./user.service";

class TransfersService {
  public transfers = TransfersModel;
  public userService = new UserService();

  public async newTransfer(body: ITransfers): Promise<ITransfers> {
    const date = new Date();

    const transfer = await this.transfers.create({ body, date });

    return transfer;
  }

  public async findAllTransfersByUser(cpf: string): Promise<ITransfers[]> {
    if (!this.userService.findUserByCPF(cpf)) {
      throw new Error(`user ${cpf} not found`);
    }
    const allTransfers = await this.transfers.find({ sender: cpf });

    return allTransfers;
  }
}

export default TransfersService;
