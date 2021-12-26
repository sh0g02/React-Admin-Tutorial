import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin'

export const PostList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField reference="users" source="userId">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title"/>
      <EditButton />
    </Datagrid>
  </List>
);
