import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { ITransfers } from "../interfaces";

const TransfersSchema = new Schema<ITransfers>({
  amount: Number,
  date: String,
  recipient: String,
  sender: String,
  type: String,
});

const TransfersModel = model<ITransfers & mongoose.Document>(
  "Transfer",
  TransfersSchema,
);

export default TransfersModel;
