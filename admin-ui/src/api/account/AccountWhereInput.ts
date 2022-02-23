import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  number?: StringNullableFilter;
  type?: StringNullableFilter;
};
