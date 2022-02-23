import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
