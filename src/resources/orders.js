import React from 'react';
import { 
    List, 
    Datagrid, 
    ReferenceManyField, 
    ChipField, 
    SingleFieldList, 
    ReferenceField,
    TextField,
    ArrayField,
    NumberField,
} from 'admin-on-rest';

export const OrderList = (props) => (
    <List title="Pedidos" {...props}>
        <Datagrid>
        <TextField source="id" />
        
        <TextField label="Id Cliente" source="clientId" />
        
        {/* <ArrayField label="Produtos" source="products">
            <Datagrid>
                <TextField label="Nome" source="name" />
                <TextField label="Quantidade" source="productOrders.amount" />
                <TextField label="Subtotal" source="productOrders.subTotal" />
            </Datagrid>
        </ArrayField> */}
        
        <NumberField label="Valor total" source="totalPrice" />
        </Datagrid>
    </List>
);
