import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    EditButton,
    DateField,
    ReferenceField,
} from 'admin-on-rest';

export const ClientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <EmailField label="E-mail" source="email" />
            <TextField label="Meio de Pagamento" source="creditCard" />
            <TextField  label="CPF" source="cpf" />
            
            <ReferenceField linkType="hide" label="CEP" source="addressId" reference="addresses">
                <TextField  source="cep" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Estado" source="addressId" reference="addresses">
                <TextField source="state" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Cidade" source="addressId" reference="addresses">
                <TextField source="city" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Bairro" source="addressId" reference="addresses">
                <TextField source="neighborhood" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Rua" source="addressId" reference="addresses">
                <TextField source="street" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Número" source="addressId" reference="addresses">
                <TextField source="number" />
            </ReferenceField>

            <ReferenceField linkType="hide" label="Complemento" source="addressId" reference="addresses">
                <TextField source="complement" />
            </ReferenceField>

            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
        </Datagrid>
    </List>
);