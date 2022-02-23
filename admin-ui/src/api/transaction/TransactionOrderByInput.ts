import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  creditedAccountId?: SortOrder;
  debitedAccountId?: SortOrder;
  externalReference?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  reason?: SortOrder;
  reference?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
