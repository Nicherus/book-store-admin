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
    Show,
    SelectInput,
    SimpleForm,
    TextInput,
    ImageInput,
    NumberInput,
    Filter,
    ChipField,
    SingleFieldList,
    ReferenceArrayField,
    ReferenceManyField,
    SimpleShowLayout,
    DateField,
    ImageField,
    ArrayField,
} from 'admin-on-rest';

export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            
            <ImageField label="Fotos" source="photos.id" src="photo" />
            
            <ReferenceManyField label="Categorias" reference="categories" target="products.id">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
            
            <TextField label="Nome" source="name" />
            <TextField label="Preço" source="price" />
            <TextField label="Autor" source="author" />
            <TextField label="Ano" source="year" />
            <TextField label="Sinopse" source="synopsis" />
            <TextField label="Páginas" source="pages" />
            <TextField label="Estoque" source="amountStock" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />

            {/* <TextInput label="Preço" source="price" />
            <TextInput label="Fotos" source="photos" />  */}

            {/* <EditButton /> */}
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

export const ProductShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <TextField label="Preço" source="price" />
            <TextField label="Autor" source="author" />
            <TextField label="Ano" source="year" />
            <TextField label="Sinopse" source="synopsis" />
            <TextField label="Páginas" source="pages" />
            <TextField label="Estoque" source="amountStock" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
            
            <ReferenceManyField label="Categorias" reference="categories" target="categories.id">
                <SingleFieldList>
                <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>

            <ImageField label="Fotos" source="photos.id" src="photo" />

            {/* <TextField label="Preço" source="price" />
            <TextInput label="Fotos" source="photos" />  */}

        </SimpleShowLayout>
    </Show>
    );
}