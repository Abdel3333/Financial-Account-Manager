import { Transaction } from "../transaction/Transaction";

export type Account = {
  createdAt: Date;
  creditedtransactions?: Array<Transaction>;
  debitedTransactions?: Array<Transaction>;
  id: string;
  name: string | null;
  number: string | null;
  type: string | null;
  updatedAt: Date;
};
