import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    EditButton,
    DateField,
} from 'admin-on-rest';

export const ClientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <EmailField label="E-mail" source="email" />
            <TextField label="CPF" source="cpf" />
            <TextField label="Meio de Pagamento" source="creditCard" />
            <TextField label="CEP" source="cep" />
            <TextField label="Estado" source="state" />
            <TextField label="Cidade" source="city" />
            <TextField label="Bairro" source="neighborhood" />
            <TextField label="Rua" source="street" />
            <TextField label="Número (endereço)" source="number" />
            <TextField label="Complemento" source="complement" />
            <DateField label="Criado em" source="createdAt" />
            <EditButton />
        </Datagrid>
    </List>
);