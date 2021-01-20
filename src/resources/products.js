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
    ImageInput,
    NumberInput,
    Filter,
} from 'admin-on-rest';

export const ProductList = (props) => (
    <List filters={<ProductFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Categorias" source="id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <TextInput label="Autor" source="author" />
            <TextInput label="Sinopse" source="synopsis" />
            <TextInput label="Estoque" source="amountStock" />
            <TextInput label="Páginas" source="pages" />
            <TextInput label="Ano" source="year" />
            <TextInput label="Preço" source="price" />
            <TextInput label="Fotos" source="photos" /> 
            {/* FAZER CAMPO REFERENCIA EM FOTOS */}
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
            <TextInput label="Autor" source="author" />
            <NumberInput label="Estoque" source="amountStock" />
            <NumberInput label="Páginas" source="pages" />
            <NumberInput label="Ano" source="year" />
            <NumberInput label="Preço" source="price" />
            <ImageInput label="Fotos" source="photos" /> 
            <LongTextInput label="Sinopse" source="synpsis" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Categorias" source="id" reference="categories" validate={required} allowEmpty>
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