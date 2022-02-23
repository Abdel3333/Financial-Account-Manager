import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Number" source="number" />
        <TextInput label="Type" source="type" />
      </SimpleForm>
    </Create>
  );
};
