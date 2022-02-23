import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Number" source="number" />
        <TextInput label="Type" source="type" />
      </SimpleForm>
    </Edit>
  );
};
