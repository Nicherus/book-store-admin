import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField,
    EditButton,
    Edit,
    Create,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter,
} from 'admin-on-rest';

export const ProductList = (props) => (
    <List filters={<ProductFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" validate={required} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);