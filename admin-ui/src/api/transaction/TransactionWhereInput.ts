import { FloatFilter } from "../../util/FloatFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TransactionWhereInput = {
  amount?: FloatFilter;
  creditedAccount?: AccountWhereUniqueInput;
  debitedAccount?: AccountWhereUniqueInput;
  externalReference?: StringNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  reference?: StringNullableFilter;
  type?: "credit" | "debit";
};
