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
    ArrayInput,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    SimpleFormIterator,
    SelectArrayInput,
    ShowButton,
} from 'admin-on-rest';

export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            
            <ReferenceArrayField label="Imagens" source="photosIds" reference="photos">
                <SingleFieldList>
                    <ImageField source="link" />
                </SingleFieldList>
            </ReferenceArrayField>
            
            <ReferenceArrayField label="Categorias" source="categories" reference="categories">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            
            <TextField label="Nome" source="name" />
            <TextField label="Preço" source="price" />
            <TextField label="Autor" source="author" />
            <TextField label="Ano" source="year" />
            <TextField label="Sinopse" source="synopsis" />
            <TextField label="Páginas" source="pages" />
            <TextField label="Estoque" source="amountStock" />

            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.name}"` : ''}</span>;
};

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            {/* <ArrayInput source="photosIds">
                <SimpleFormIterator>
                    <TextInput label="link" />
                </SimpleFormIterator>
            </ArrayInput> */}
            
            <ReferenceInput label="Categorias" source="categories" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            
            <TextInput label="Nome" source="name" />
            <NumberInput label="Preço" source="price" />
            <TextInput label="Autor" source="author" />
            <NumberInput label="Ano" source="year" />
            <LongTextInput label="Sinopse" source="synopsis" />
            <NumberInput label="Páginas" source="pages" />
            <NumberInput label="Estoque" source="amountStock" />

        </SimpleForm>
    </Create>
);

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
{/*             
            <ArrayInput source="photos">
                <SimpleFormIterator>
                    <TextInput label="Link da foto" />
                </SimpleFormIterator>
            </ArrayInput> */}
            
            <ReferenceInput label="Categorias" source="categories" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            
            <TextInput label="Nome" source="name" />
            <NumberInput label="Preço" source="price" />
            <TextInput label="Autor" source="author" />
            <NumberInput label="Ano" source="year" />
            <LongTextInput label="Sinopse" source="synopsis" />
            <NumberInput label="Páginas" source="pages" />
            <NumberInput label="Estoque" source="amountStock" />

        </SimpleForm>
    </Edit>
);


export const ProductShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            
            <ReferenceArrayField label="Imagens" source="photos" reference="photos">
                <SingleFieldList>
                    <ImageField source="link" />
                </SingleFieldList>
            </ReferenceArrayField>
            
            <ReferenceArrayField label="Categorias" source="categories" reference="categories">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            
            <TextField label="Nome" source="name" />
            <TextField label="Preço" source="price" />
            <TextField label="Autor" source="author" />
            <TextField label="Ano" source="year" />
            <TextField label="Sinopse" source="synopsis" />
            <TextField label="Páginas" source="pages" />
            <TextField label="Estoque" source="amountStock" />

        </SimpleShowLayout>
    </Show>
    );
}