import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    DateField,
    EditButton,
} from 'admin-on-rest';

export const AddressList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="CEP" source="cep" />
            <TextField label="Estado" source="state" />
            <TextField label="Cidade" source="city" />
            <TextField label="Bairro" source="neighborhood" />
            <TextField label="Rua" source="street" />
            <TextField label="Número" source="number" />
            <TextField label="Complemento" source="complement" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
            <EditButton />
        </Datagrid>
    </List>
);