import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  number?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
