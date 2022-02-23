import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TransactionUpdateInput = {
  amount?: number;
  creditedAccount?: AccountWhereUniqueInput | null;
  debitedAccount?: AccountWhereUniqueInput | null;
  externalReference?: string | null;
  metadata?: InputJsonValue;
  reason?: string | null;
  reference?: string | null;
  type?: "credit" | "debit";
};
