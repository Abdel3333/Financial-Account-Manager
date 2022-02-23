import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type Transaction = {
  amount: number;
  createdAt: Date;
  creditedAccount?: Account | null;
  debitedAccount?: Account | null;
  externalReference: string | null;
  id: string;
  metadata: JsonValue;
  reason: string | null;
  reference: string | null;
  type?: "credit" | "debit";
  updatedAt: Date;
};
