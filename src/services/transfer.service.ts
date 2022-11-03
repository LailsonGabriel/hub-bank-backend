import { ITransfers } from "../models/interfaces";
import TransfersModel from "../models/transfers.model";

class TransfersService {
  public transfers = TransfersModel;

  public async newTransfer(body: ITransfers): Promise<ITransfers> {
    const date = new Date();

    const transfer = await this.transfers.create({ body, date });

    return transfer;
  }
}
