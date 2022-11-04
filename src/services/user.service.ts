import UserModel from "../models/user.model";
import { IUser } from "../interfaces";

class UserService {
  public users = UserModel;

  public async findUserByCPF(cpf: string): Promise<IUser> {
    const user = await this.users.findOne({ cpf });
    if (!user) throw new Error(`user ${cpf} not found`);

    return user;
  }

  public async createUser(body: IUser): Promise<IUser> {
    if (await this.findUserByCPF(body.cpf)) {
      throw new Error(`User ${body.cpf} already exists`);
    }

    const user = await this.users.create(body);

    return user;
  }
}

export default UserService;
