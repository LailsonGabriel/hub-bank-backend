export interface IUser {
  name: string;
  cpf: string;
  email: string;
  balance: number;
}

export interface ITransfers {
  amount: number;
  date: string;
  recipient: string;
  sender: string;
  type: string;
}
