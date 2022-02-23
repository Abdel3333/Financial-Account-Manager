import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="Credited Account"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="Debited Account"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="External Reference" source="externalReference" />
        <div />
        <TextInput label="Reason" multiline source="reason" />
        <TextInput label="Reference" source="reference" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "credit", value: "credit" },
            { label: "debit", value: "debit" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
