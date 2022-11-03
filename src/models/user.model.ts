import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { IUser } from "./interfaces";

const UserSchema = new Schema<IUser>({
  name: String,
  cpf: String,
  email: String,
  balance: Number,
});

const UserModel = model<IUser & mongoose.Document>("User", UserSchema);

export default UserModel;
